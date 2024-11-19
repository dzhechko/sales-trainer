'use client'

import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X } from 'lucide-react'

declare global {
  interface Window {
    Calendly: any;
  }
}

export function GetDemoModal() {
  useEffect(() => {
    // Load Calendly widget script
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    head?.appendChild(script)

    return () => {
      head?.removeChild(script)
    }
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Get a Demo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 h-[80vh]">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">Schedule a Call with Dmitry</DialogTitle>
          <p className="text-muted-foreground mt-2">Choose a convenient time for a 30-minute Zoom call.</p>
        </DialogHeader>
        <div 
          className="calendly-inline-widget w-full h-full"
          data-url="https://calendly.com/jechkov-dmitriy/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=0000ff"
        />
        <div className="p-6 pt-0">
          <p className="text-xs text-center text-muted-foreground mt-4">Powered by Calendly</p>
        </div>
        <Button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={() => document.querySelector('button[aria-label="Close"]')?.click()}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </DialogContent>
    </Dialog>
  )
}