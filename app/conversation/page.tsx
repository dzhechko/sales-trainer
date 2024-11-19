'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, Mic, User, Bot, ArrowLeft } from 'lucide-react'
import { DEBUG } from '@/lib/constants'

export default function ConversationPage() {
  const router = useRouter();
  const [isConversationStarted, setIsConversationStarted] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  if (DEBUG) {
    console.log('ConversationPage rendered');
    console.log('Conversation started:', isConversationStarted);
  }

  const handleStartConversation = () => {
    if (DEBUG) console.log('Starting conversation');
    setIsConversationStarted(true);
  };

  const handleStopConversation = () => {
    if (DEBUG) console.log('Stopping conversation');
    setIsConversationStarted(false);
    
    setTimeout(() => {
      if (DEBUG) console.log('Redirecting to results page');
      router.push('/results');
    }, 100);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (DEBUG) console.log('File selected:', file);

    // File validation
    if (!['audio/mp3', 'audio/wav'].includes(file.type)) {
      alert('Please upload an MP3 or WAV file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB
      alert('File size must be less than 10MB');
      return;
    }

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
        setTimeout(() => setUploadProgress(0), 1000);
      }
    }, 200);
  };

  const handleBack = () => {
    if (DEBUG) console.log('Navigating back');
    router.back();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-4 sm:py-8">
        {/* Header Section with Status Indicators */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12 mb-8">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <User className="h-10 w-10 sm:h-12 sm:w-12 mb-2 text-gray-700" />
              <div className="text-sm font-medium">You</div>
              <div className="text-xs text-gray-500 mt-1">
                {isConversationStarted ? 'Speaking...' : 'Ready to Start'}
              </div>
              {isConversationStarted && (
                <div className="w-24 sm:w-32 mt-2">
                  <Progress value={60} className="h-1" />
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col items-center">
              <Bot className="h-10 w-10 sm:h-12 sm:w-12 mb-2 text-gray-700" />
              <div className="text-sm font-medium">AI Assistant</div>
              <div className="text-xs text-gray-500 mt-1">
                {isConversationStarted ? 'Listening...' : 'Ready'}
              </div>
              {isConversationStarted && (
                <div className="w-24 sm:w-32 mt-2">
                  <Progress value={40} className="h-1" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Conversation Controls */}
        <div className="space-y-6">
          <div className="text-center">
            <Button
              onClick={isConversationStarted ? handleStopConversation : handleStartConversation}
              className="w-full sm:w-auto bg-gray-900 text-white hover:bg-gray-800 px-8"
            >
              <Mic className="mr-2 h-4 w-4" />
              {isConversationStarted ? 'Stop Conversation' : 'Start Conversation'}
            </Button>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">Click the button to start practicing. Time limit: 1 min.</p>
          </div>

          <div className="text-center">
            <Button
              onClick={() => document.getElementById('file-upload')?.click()}
              className="w-full sm:w-auto bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 px-8"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Conversation
            </Button>
            <input
              id="file-upload"
              type="file"
              accept=".mp3,.wav"
              className="hidden"
              onChange={handleFileUpload}
            />
            <p className="mt-2 text-xs sm:text-sm text-gray-600">Upload MP3 or WAV file for analysis. Time limit: 3 min, file size limit: 10MB.</p>
            {uploadProgress > 0 && (
              <Progress value={uploadProgress} className="w-full mt-2" />
            )}
          </div>
        </div>

        {/* AI Voice Widget Container */}
        {isConversationStarted && (
          <div className="fixed bottom-4 right-4 w-[280px] sm:w-[300px] h-[350px] sm:h-[400px] bg-transparent rounded-lg shadow-lg overflow-hidden">
            <iframe 
              id="audio_iframe" 
              src="https://widget.synthflow.ai/widget/v2/1732035369433x639979748453412900/1732035369319x468761323859220300" 
              allow="microphone"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px',
                background: 'transparent',
              }}
            />
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-8 sm:mt-12">
          Time limit: 3 minutes, file size limit: 10MB for uploads
        </div>
      </main>
    </div>
  )
} 