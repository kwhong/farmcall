import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SettingsScreen() {
  const [serverUrl, setServerUrl] = useState('')
  const [farmId, setFarmId] = useState('')

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const url = await AsyncStorage.getItem('serverUrl')
      const id = await AsyncStorage.getItem('farmId')
      if (url) setServerUrl(url)
      if (id) setFarmId(id)
    } catch (error) {
      console.error('설정 불러오기 실패:', error)
    }
  }

  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('serverUrl', serverUrl)
      await AsyncStorage.setItem('farmId', farmId)
      Alert.alert('저장 완료', '설정이 저장되었습니다.')
    } catch (error) {
      Alert.alert('오류', '설정 저장에 실패했습니다.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>서버 URL</Text>
        <TextInput
          style={styles.input}
          value={serverUrl}
          onChangeText={setServerUrl}
          placeholder="https://your-farmcall.vercel.app"
          autoCapitalize="none"
          keyboardType="url"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>농장 ID</Text>
        <TextInput
          style={styles.input}
          value={farmId}
          onChangeText={setFarmId}
          placeholder="farm-001"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={saveSettings}>
        <Text style={styles.saveButtonText}>저장</Text>
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>설정 안내</Text>
        <Text style={styles.infoText}>
          • 서버 URL: FarmCall 웹 서비스 주소{"\n"}
          • 농장 ID: 관리자에게 발급받은 농장 고유 ID
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
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#22c55e',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 16,
    marginTop: 30,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 22,
  },
})
