'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from 'lucide-react'
import { DEBUG } from '@/lib/constants'

export default function ResultsPage() {
  const router = useRouter();

  const handleBack = () => {
    if (DEBUG) console.log('Navigating back to conversation');
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

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Overall Score Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Overall Score</h2>
          <div className="text-4xl sm:text-5xl font-bold text-gray-900">N/A</div>
        </div>

        {/* Conversation Analysis Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Conversation Analysis</CardTitle>
          </CardHeader>
          <CardContent className="bg-gray-50 rounded-md p-4 text-sm sm:text-base">
            <p>
              This snippet of conversation is insufficient to conduct a detailed sales evaluation. 
              This appears to be the opening exchanges in a sales conversation where a potential customer 
              is trying to learn more about the company they've called, but without hearing the salesperson's 
              response, there's no basis for evaluating customer needs identification, value proposition 
              delivery, objection handling, or next steps definition. Please provide a more comprehensive 
              interaction to give a proper analysis and recommendation.
            </p>
          </CardContent>
        </Card>

        {/* Performance Metrics Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Customer Needs Identified */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Customer Needs Identified</span>
                <span className="text-sm text-gray-500">N/A</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>

            {/* Value Proposition Delivered */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Value Proposition Delivered</span>
                <span className="text-sm text-gray-500">N/A</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>

            {/* Objections Handled */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Objections Handled</span>
                <span className="text-sm text-gray-500">N/A</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>

            {/* Next Steps Defined */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Next Steps Defined</span>
                <span className="text-sm text-gray-500">N/A</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Conversation Transcript Section */}
        <Card>
          <CardHeader>
            <CardTitle>Conversation Transcript</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto font-mono whitespace-pre-wrap">
              <code>
                – Hello! Which company did I call? What and to whom do you sell? What can you offer me?
              </code>
            </pre>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
