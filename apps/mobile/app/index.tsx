import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native'
import { Link } from 'expo-router'
import { useCallDetection } from '@/services/callDetection'

export default function HomeScreen() {
  const { isListening, startListening, stopListening, lastCall } = useCallDetection()
  const [status, setStatus] = useState<'idle' | 'active'>('idle')

  useEffect(() => {
    if (Platform.OS === 'android') {
      startListening()
      setStatus('active')
    }
  }, [])

  const toggleListening = () => {
    if (isListening) {
      stopListening()
      setStatus('idle')
    } else {
      startListening()
      setStatus('active')
    }
  }

  return (
    <View style={styles.container}>
      {/* Status Card */}
      <View style={styles.statusCard}>
        <View style={[styles.statusIndicator, status === 'active' ? styles.active : styles.idle]} />
        <Text style={styles.statusText}>
          {status === 'active' ? '전화 감지 중...' : '대기 중'}
        </Text>
      </View>

      {/* Last Call Info */}
      {lastCall && (
        <View style={styles.callCard}>
          <Text style={styles.callLabel}>마지막 수신 전화</Text>
          <Text style={styles.callNumber}>{lastCall.phoneNumber}</Text>
          <Text style={styles.callTime}>{lastCall.timestamp}</Text>
        </View>
      )}

      {/* Toggle Button */}
      <TouchableOpacity
        style={[styles.button, isListening ? styles.buttonStop : styles.buttonStart]}
        onPress={toggleListening}
      >
        <Text style={styles.buttonText}>
          {isListening ? '감지 중지' : '감지 시작'}
        </Text>
      </TouchableOpacity>

      {/* Settings Link */}
      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>설정</Text>
        </TouchableOpacity>
      </Link>

      {/* Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          전화가 오면 자동으로 서버에 발신자 정보를 전송합니다.
        </Text>
        <Text style={styles.infoText}>
          웹 관리 화면에서 고객 정보를 확인하세요.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 20,
  },
  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  active: {
    backgroundColor: '#22c55e',
  },
  idle: {
    backgroundColor: '#9ca3af',
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  callCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  callLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  callNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  callTime: {
    fontSize: 14,
    color: '#9ca3af',
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonStart: {
    backgroundColor: '#22c55e',
  },
  buttonStop: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  settingsButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 20,
  },
  settingsText: {
    color: '#4b5563',
    fontSize: 16,
    fontWeight: '500',
  },
  infoBox: {
    backgroundColor: '#ecfdf5',
    borderRadius: 12,
    padding: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#065f46',
    marginBottom: 8,
    lineHeight: 20,
  },
})
