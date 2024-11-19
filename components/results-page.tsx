'use client'

import React from 'react'
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResultsPageComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-2">Overall Score</h1>
          <p className="text-6xl font-bold text-gray-700">N/A</p>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Conversation Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              This snippet of conversation is insufficient to conduct a detailed sales evaluation. This appears to be the opening exchanges in a sales conversation where a potential customer is trying to learn more about the company they've called, but without hearing the salesperson's response, there's no basis for evaluating customer needs identification, value proposition delivery, objection handling, or next steps definition. Please provide a more comprehensive interaction to give a proper analysis and recommendation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {['Customer Needs Identified', 'Value Proposition Delivered', 'Objections Handled', 'Next Steps Defined'].map((metric) => (
              <div key={metric} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{metric}</span>
                  <span className="text-sm font-medium text-gray-500">N/A</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversation Transcript</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
              <code>
                – Hello! Which company did I call? What and to whom do you sell? What can you offer me?
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}