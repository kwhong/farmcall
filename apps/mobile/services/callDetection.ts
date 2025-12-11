import { useState, useCallback, useRef, useEffect } from 'react'
import { Platform, PermissionsAndroid, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

type CallState = 'Incoming' | 'Disconnected' | 'Offhook' | 'Missed'

interface LastCall {
  phoneNumber: string
  timestamp: string
}

export function useCallDetection() {
  const [isListening, setIsListening] = useState(false)
  const [lastCall, setLastCall] = useState<LastCall | null>(null)
  const callDetectorRef = useRef<any>(null)

  // 권한 요청 (Android)
  const requestPermissions = async (): Promise<boolean> => {
    if (Platform.OS !== 'android') return false

    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      ])

      return (
        granted['android.permission.READ_PHONE_STATE'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.READ_CALL_LOG'] === PermissionsAndroid.RESULTS.GRANTED
      )
    } catch (err) {
      console.error('권한 요청 오류:', err)
      return false
    }
  }

  // 서버로 전화 정보 전송
  const sendCallToServer = async (phoneNumber: string) => {
    try {
      const serverUrl = await AsyncStorage.getItem('serverUrl')
      const farmId = await AsyncStorage.getItem('farmId')

      if (!serverUrl || !farmId) {
        console.log('서버 설정이 없습니다. 설정을 확인해주세요.')
        return
      }

      const response = await fetch(`${serverUrl}/api/calls/incoming`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          farmId,
          phoneNumber,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('서버 전송 실패')
      }

      console.log('전화 정보 전송 완료:', phoneNumber)
    } catch (error) {
      console.error('서버 전송 오류:', error)
    }
  }

  // 전화 감지 시작
  const startListening = useCallback(async () => {
    if (Platform.OS !== 'android') {
      Alert.alert('알림', '현재 Android에서만 전화 감지가 지원됩니다.')
      return
    }

    const hasPermission = await requestPermissions()
    if (!hasPermission) {
      Alert.alert('권한 필요', '전화 감지를 위해 전화 권한이 필요합니다.')
      return
    }

    try {
      // react-native-call-detection 사용
      const CallDetectorManager = require('react-native-call-detection').default
      
      callDetectorRef.current = new CallDetectorManager(
        (event: CallState, phoneNumber: string) => {
          console.log('전화 이벤트:', event, phoneNumber)

          if (event === 'Incoming') {
            const timestamp = new Date().toLocaleString('ko-KR')
            setLastCall({ phoneNumber, timestamp })
            sendCallToServer(phoneNumber)
          }
        },
        true, // 수신 전화 감지
        () => {}, // 권한 거부 시 콜백
        {
          title: '전화 권한',
          message: '전화 감지를 위해 권한이 필요합니다.',
        }
      )

      setIsListening(true)
      console.log('전화 감지 시작')
    } catch (error) {
      console.error('전화 감지 시작 오류:', error)
      Alert.alert('오류', '전화 감지를 시작할 수 없습니다.')
    }
  }, [])

  // 전화 감지 중지
  const stopListening = useCallback(() => {
    if (callDetectorRef.current) {
      callDetectorRef.current.dispose()
      callDetectorRef.current = null
    }
    setIsListening(false)
    console.log('전화 감지 중지')
  }, [])

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    return () => {
      if (callDetectorRef.current) {
        callDetectorRef.current.dispose()
      }
    }
  }, [])

  return {
    isListening,
    lastCall,
    startListening,
    stopListening,
  }
}
