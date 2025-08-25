'use client'

import { useState } from 'react'
import CompactJourneyView from './components/journey/CompactJourneyView'
import MatrixContainer from './components/matrix/MatrixContainer'
import { cn } from '@/lib/utils'

type ViewMode = 'journey' | 'matrix'

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
          <CompactJourneyView />
        ) : (
          <MatrixContainer />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Research Summary</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 6 customers interviewed</li>
                <li>• 8 journey stages identified</li>
                <li>• 5 universal pain patterns</li>
                <li>• 4 team structure variations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Key Findings</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Status sync failures (6/6 customers)</li>
                <li>• Manual progress reporting (6/6 customers)</li>
                <li>• Tool fragmentation (3-5 tools each)</li>
                <li>• Enterprise performance issues</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">TestOps Opportunities</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Automated status synchronization</li>
                <li>• Unified progress dashboard</li>
                <li>• Seamless handoff workflows</li>
                <li>• Enterprise-grade performance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
            TestOps UXR Demo • Built with Next.js 15, Tailwind CSS, and React Flow
          </div>
        </div>
      </footer>
    </div>
  )
}
