'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { User, Bot, Upload } from 'lucide-react'

export function ConversationPageComponent() {
  const [conversationStatus, setConversationStatus] = useState<'ready' | 'in-progress' | 'completed'>('ready')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [showWidget, setShowWidget] = useState(false)

  const toggleConversation = () => {
    if (conversationStatus === 'ready') {
      setConversationStatus('in-progress')
      setShowWidget(true)
    } else {
      setConversationStatus('ready')
      setShowWidget(false)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
          setUploadProgress(0)
        }
      }, 500)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <h1 className="text-lg font-semibold">AI Sales Trainer</h1>
      </header>
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between mb-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            <span className="text-sm font-medium">You</span>
            <span className={`text-xs ${conversationStatus === 'in-progress' ? 'text-green-500' : 'text-gray-500'}`}>
              {conversationStatus === 'in-progress' ? 'Speaking' : 'Ready to Start'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
            <span className="text-sm font-medium">AI Assistant</span>
            <span className={`text-xs ${conversationStatus === 'in-progress' ? 'text-green-500' : 'text-gray-500'}`}>
              {conversationStatus === 'in-progress' ? 'Listening' : 'Ready'}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <Button
              onClick={toggleConversation}
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              {conversationStatus === 'in-progress' ? 'Stop Conversation' : 'Start Conversation'}
            </Button>
            <p className="mt-2 text-sm text-gray-600">Click the button to start practicing. Time limit: 1 min.</p>
          </div>

          <div className="text-center">
            <Button
              onClick={() => document.getElementById('file-upload')?.click()}
              className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
            >
              Upload Conversation
            </Button>
            <input
              id="file-upload"
              type="file"
              accept=".mp3,.wav"
              className="hidden"
              onChange={handleFileUpload}
            />
            <p className="mt-2 text-sm text-gray-600">Upload MP3 or WAV file for analysis. Time limit: 1 min, file limit: 10MB.</p>
            {uploadProgress > 0 && (
              <Progress value={uploadProgress} className="w-full mt-2" />
            )}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Progress value={conversationStatus === 'in-progress' ? 100 : 0} className="w-full" />
          {conversationStatus === 'in-progress' && (
            <div className="flex justify-center space-x-2">
              <span className="animate-pulse">•</span>
              <span className="animate-pulse animation-delay-200">•</span>
              <span className="animate-pulse animation-delay-400">•</span>
            </div>
          )}
        </div>
      </main>

      {showWidget && (
        <div className="fixed bottom-4 right-4 z-50">
          <iframe
            id="audio_iframe"
            src="https://widget.synthflow.ai/widget/v2/1732035369433x639979748453412900/1732035369319x468761323859220300"
            allow="microphone"
            width="200"
            height="300"
            className="bg-transparent border-none rounded-lg shadow-lg"
          />
        </div>
      )}

      <footer className="py-4 px-4 border-t">
        <p className="text-xs text-center text-gray-500">
          Time limit: 1 minute per conversation. Maximum file size for uploads: 10MB.
        </p>
      </footer>
    </div>
  )
}