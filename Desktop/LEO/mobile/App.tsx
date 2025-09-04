import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { Audio } from 'expo-av'

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'http://localhost:8000'

type Message = { id: string; role: 'user'|'assistant'; text: string; images?: string[] }

export default function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [pendingImages, setPendingImages] = useState<string[]>([])
  const [recording, setRecording] = useState<Audio.Recording | null>(null)
  const [isRecording, setIsRecording] = useState(false)

  const send = async () => {
    if (!input && pendingImages.length === 0) return
    const id = Date.now().toString()
    const userMsg: Message = { id, role: 'user', text: input, images: pendingImages }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setPendingImages([])

    const resp = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMsg.text, images: userMsg.images })
    })
    const data = await resp.json()
    setMessages(prev => [...prev, { id: id+':a', role: 'assistant', text: data.text || '(no response)' }])
  }

  const pickImage = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!perm.granted) return
    const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images })
    if (res.canceled || !res.assets?.length) return
    const asset = res.assets[0]
    const uri = asset.uri
    const form = new FormData()
    form.append('file', {
      uri,
      name: 'upload.jpg',
      type: 'image/jpeg',
    } as any)
    const up = await fetch(`${API_BASE_URL}/upload/image`, { method: 'POST', body: form as any })
    const data = await up.json()
    setPendingImages(prev => [...prev, `${API_BASE_URL}${data.url}`])
  }

  const startRecording = async () => {
    const perm = await Audio.requestPermissionsAsync()
    if (!perm.granted) return
    await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true })
    const rec = new Audio.Recording()
    await rec.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY)
    await rec.startAsync()
    setRecording(rec)
    setIsRecording(true)
  }

  const stopRecording = async () => {
    if (!recording) return
    await recording.stopAndUnloadAsync()
    const uri = recording.getURI()
    setIsRecording(false)
    setRecording(null)
    if (!uri) return
    const form = new FormData()
    form.append('file', { uri, name: 'audio.m4a', type: 'audio/m4a' } as any)
    const tr = await fetch(`${API_BASE_URL}/audio/transcribe`, { method: 'POST', body: form as any })
    const data = await tr.json()
    setInput(prev => (prev ? prev + '\n' : '') + (data.text || ''))
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0b1220' }}>
      <View style={{ flex: 1, padding: 12 }}>
        <FlatList
          data={messages}
          keyExtractor={(m) => m.id}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 6, alignSelf: item.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
              <View style={{ backgroundColor: item.role === 'user' ? '#1b2a4b' : '#0f1a33', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>{item.text}</Text>
                {item.images?.map((u, idx) => (
                  <Image key={idx} source={{ uri: u }} style={{ width: 200, height: 200, marginTop: 8, borderRadius: 8 }} />
                ))}
              </View>
            </View>
          )}
        />
        {pendingImages.length > 0 && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
            {pendingImages.map((u, i) => (
              <Image key={i} source={{ uri: u }} style={{ width: 60, height: 60, borderRadius: 6 }} />
            ))}
          </View>
        )}
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TouchableOpacity onPress={pickImage} style={{ backgroundColor: '#1b2a4b', padding: 12, borderRadius: 8 }}>
            <Text style={{ color: 'white' }}>Image</Text>
          </TouchableOpacity>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Message"
            placeholderTextColor="#b0b8c3"
            style={{ flex: 1, backgroundColor: '#0f1a33', color: 'white', padding: 12, borderRadius: 8 }}
          />
          <TouchableOpacity onPress={isRecording ? stopRecording : startRecording} style={{ backgroundColor: '#10b981', paddingVertical: 12, paddingHorizontal: 12, borderRadius: 8 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>{isRecording ? 'Stop' : 'Voice'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={send} style={{ backgroundColor: '#2563eb', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, marginLeft: 8 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}


