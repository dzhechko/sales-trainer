'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart, Users, Upload, MessageSquare } from 'lucide-react'
import { GetDemoModal } from './get-demo-modal'
import { RegisterModal } from './register-modal'
import { DEBUG } from '@/lib/constants'

export function LandingPageComponent() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  if (DEBUG) {
    console.log('LandingPageComponent rendered');
    console.log('RegisterModal state:', showRegisterModal);
  }

  const handleStartPractice = () => {
    if (DEBUG) console.log('Start Practice button clicked');
    setShowRegisterModal(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="sr-only">AI Sales Trainer</span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-4">
          <GetDemoModal />
          <Button 
            variant="default" 
            onClick={handleStartPractice}
            className="bg-gray-900 text-white hover:bg-gray-800 text-sm sm:text-base px-3 sm:px-4"
          >
            Start Practice
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Practice Sales with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
                  Get instant feedback on your sales conversations and improve your skills with our AI-powered training platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-6 sm:mb-8">
              How It Works: Perfect Your Sales in 3 Steps
            </h2>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="p-4 sm:p-6">
                <CardHeader className="p-0 sm:p-0">
                  <Upload className="h-8 w-8 sm:h-10 sm:w-10 mb-2" />
                  <CardTitle className="text-lg sm:text-xl">Practice or Upload</CardTitle>
                </CardHeader>
                <CardContent className="p-0 sm:p-0 mt-2 text-sm sm:text-base">
                  Engage with AI customer simulators and upload CRM sales calls for comprehensive practice and analysis.
                </CardContent>
              </Card>
              <Card className="p-4 sm:p-6">
                <CardHeader className="p-0 sm:p-0">
                  <BarChart className="h-8 w-8 sm:h-10 sm:w-10 mb-2" />
                  <CardTitle className="text-lg sm:text-xl">Get Instant Analysis</CardTitle>
                </CardHeader>
                <CardContent className="p-0 sm:p-0 mt-2 text-sm sm:text-base">
                  Receive detailed performance metrics and track your progress with our advanced AI-powered analytics.
                </CardContent>
              </Card>
              <Card className="p-4 sm:p-6">
                <CardHeader className="p-0 sm:p-0">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 mb-2" />
                  <CardTitle className="text-lg sm:text-xl">Scale Across Your Team</CardTitle>
                </CardHeader>
                <CardContent className="p-0 sm:p-0 mt-2 text-sm sm:text-base">
                  Implement team-wide training and seamlessly integrate with your CRM for maximum efficiency.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Benefits
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div>
                <h3 className="text-xl font-bold mb-2">Risk-Free Sales Practice</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Perfect your pitch without real-world consequences.</p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                  <li>Unlimited scenario practice</li>
                  <li>Instant feedback</li>
                  <li>Pitch perfection</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Gain deep insights into your performance.</p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                  <li>Key metrics analysis</li>
                  <li>Personalized recommendations</li>
                  <li>Benchmark against top performers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accelerated Team Growth</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Boost your entire sales team's performance.</p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                  <li>Reduced onboarding time</li>
                  <li>Consistent messaging</li>
                  <li>Scalable team training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to elevate your sales skills?
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row gap-2 py-4 sm:py-6 w-full items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 
          2024 AI Sales Trainer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-3 sm:gap-4">
          <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
        </nav>
      </footer>
      <RegisterModal open={showRegisterModal} onOpenChange={setShowRegisterModal} />
    </div>
  )
}