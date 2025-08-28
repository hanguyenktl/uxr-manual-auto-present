'use client'

import { useState } from 'react'
import CompactJourneyView from './components/journey/CompactJourneyView'
import MatrixContainer from './components/matrix/MatrixContainer'
import ResearchOverview from './components/overview/ResearchOverview'
import KeyInsights from './components/overview/KeyInsights'
import CompellingHook from './components/overview/CompellingHook'
import { cn } from '@/lib/utils'

type ViewMode = 'journey' | 'matrix' | 'overview'

export default function Home() {
  const [activeView, setActiveView] = useState<ViewMode>('journey')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                TestOps UXR Findings & Opportunities
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Research insights from 6 customers analyzing manual-to-automation workflows
              </p>
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveView('overview')}
                className={cn(
                  'px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors',
                  activeView === 'overview'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                Research Overview
              </button>
              <button
                onClick={() => setActiveView('journey')}
                className={cn(
                  'px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors',
                  activeView === 'journey'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                User Journey Map
              </button>
              <button
                onClick={() => setActiveView('matrix')}
                className={cn(
                  'px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors',
                  activeView === 'matrix'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                Priority Matrix
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        {activeView === 'journey' ? (
          <div className="max-w-7xl mx-auto">
            <CompactJourneyView />
          </div>
        ) : activeView === 'matrix' ? (
          <div className="max-w-7xl mx-auto">
            <MatrixContainer />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <CompellingHook />
            <KeyInsights />
            <ResearchOverview />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-xs text-gray-500">
            TestOps UXR Demo • Built with Next.js 15, Tailwind CSS, and React Flow
          </div>
        </div>
      </footer>
    </div>
  )
}
