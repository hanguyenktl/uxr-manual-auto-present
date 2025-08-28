'use client'

import { useState } from 'react'
import { PainPoint } from '@/app/data/types'
import { painPoints } from '@/app/data/pain-points'
import PainPointDot from './PainPointDot'
import { cn } from '@/lib/utils'

interface MatrixContainerProps {
  className?: string
}

// Position items based on business priority zones for clearer planning
const getPositionByPriority = (painPoints: Array<{ id: string; priority: string }>) => {
  const positions = new Map<string, { x: number; y: number }>()
  
  // Group by priority
  const p1Items = painPoints.filter(p => p.priority === 'P1')
  const p2Items = painPoints.filter(p => p.priority === 'P2')  
  const p3Items = painPoints.filter(p => p.priority === 'P3')
  
  // P1: Top-right quadrant (Core workflow blockers)
  p1Items.forEach((item) => {
    const baseX = 75
    const baseY = 25
    const angle = (i / Math.max(p1Items.length, 1)) * Math.PI * 0.5 // Quarter circle
    const radius = p1Items.length > 1 ? 15 : 0
    positions.set(item.id, {
      x: baseX + Math.cos(angle) * radius,
      y: baseY + Math.sin(angle) * radius
    })
  })
  
  // P2: Top-left quadrant (Adoption & growth barriers) 
  p2Items.forEach((item, i) => {
    const baseX = 25
    const baseY = 25
    const angle = (i / Math.max(p2Items.length, 1)) * Math.PI * 0.5
    const radius = p2Items.length > 1 ? 15 : 0
    positions.set(item.id, {
      x: baseX + Math.cos(angle) * radius,
      y: baseY + Math.sin(angle) * radius
    })
  })
  
  // P3: Bottom-left quadrant (Strategic)
  p3Items.forEach((item) => {
    const baseX = 25
    const baseY = 75
    positions.set(item.id, { x: baseX, y: baseY })
  })
  
  return positions
}

export default function MatrixContainer({ className }: MatrixContainerProps) {
  const [selectedPainPoint, setSelectedPainPoint] = useState<PainPoint | null>(null)
  
  // Calculate positions by business priority for clearer planning
  const positions = getPositionByPriority(painPoints)
  
  return (
    <div className={cn('w-full max-w-6xl mx-auto', className)}>
      {/* Header */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Pain Point Prioritization Matrix
          </h1>
          <p className="text-gray-600">
            Impact vs Frequency analysis from 6 customer interviews with TestOps feature mapping
          </p>
        </div>
        
        {/* Key Insights */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Key Insights from Journey Mapping</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
            <div>
              <span className="font-medium">P1 Core Workflow Blockers:</span> 4 critical items blocking daily productivity - status sync, progress reporting, handoffs, tool fragmentation
            </div>
            <div>
              <span className="font-medium">P2 Adoption & Integration:</span> 6 items preventing growth - learning curve, Excel dependency, enterprise performance, JIRA sync, workflow fit, change management
            </div>
            <div>
              <span className="font-medium">P3 Strategic:</span> 1 competitive advantage - data-driven prioritization
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-8">
        {/* Matrix */}
        <div className="flex-1">
          <div className="relative bg-white border-2 border-gray-300 rounded-lg overflow-visible" style={{ height: '600px', marginRight: '120px' }}>
            {/* Quadrant backgrounds */}
            <div className="absolute inset-0">
              {/* High Impact + Low Freq: Top-left */}
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-50 border-b border-r border-orange-200" />
              {/* High Impact + High Freq: Top-right */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-50 border-b border-l border-red-200" />
              {/* Low Impact + Low Freq: Bottom-left */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 border-t border-r border-blue-200" />
              {/* Low Impact + High Freq: Bottom-right */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-50 border-t border-l border-gray-200" />
            </div>
            
            {/* Quadrant labels - based on business priority zones */}
            <div className="absolute top-2 right-2 text-xs font-semibold text-red-700 bg-red-100 px-2 py-1 rounded">
              P1: Core Workflow Blockers
            </div>
            <div className="absolute top-2 left-2 text-xs font-semibold text-orange-700 bg-orange-100 px-2 py-1 rounded">
              P2: Adoption & Growth Barriers
            </div>
            <div className="absolute bottom-2 left-2 text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded">
              P3: Strategic Improvements
            </div>
            <div className="absolute bottom-2 right-2 text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">
              Low Priority / Future
            </div>
            
            {/* Axis labels */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">
              Business Priority Zones (P1 → P2 → P3)
            </div>
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-700">
              Implementation Readiness
            </div>
            
            {/* Grid lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-300" />
              <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-gray-300" />
            </div>
            
            {/* Pain Point Dots */}
            {painPoints.map((painPoint) => {
              const position = positions.get(painPoint.id) || { x: 50, y: 50 }
              return (
                <PainPointDot
                  key={painPoint.id}
                  painPoint={painPoint}
                  x={position.x}
                  y={position.y}
                  onHover={() => {}}
                  onClick={setSelectedPainPoint}
                  isSelected={selectedPainPoint?.id === painPoint.id}
                />
              )
            })}
          </div>
          
          {/* Legend */}
          <div className="mt-6 flex justify-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Legend</h3>
              <div className="flex gap-6 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-400 rounded-full ring-2 ring-red-500" />
                  <span>P1 Critical</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-400 rounded-full ring-2 ring-orange-500" />
                  <span>P2 Adoption</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-400 rounded-full ring-2 ring-blue-500" />
                  <span>P3 Strategic</span>
                </div>
                <div className="text-gray-600">
                  Dot Color = Severity • Ring Color = Priority • Size = Customers
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detail Panel */}
        <div className="w-96">
          {selectedPainPoint ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {selectedPainPoint.title}
                  </h2>
                  <span className={cn(
                    'text-xs px-2 py-1 rounded-full font-medium',
                    selectedPainPoint.priority === 'P1' && 'bg-red-100 text-red-700',
                    selectedPainPoint.priority === 'P2' && 'bg-orange-100 text-orange-700',
                    selectedPainPoint.priority === 'P3' && 'bg-blue-100 text-blue-700',
                    selectedPainPoint.priority === 'P4' && 'bg-gray-100 text-gray-700'
                  )}>
                    {selectedPainPoint.priority} Priority
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedPainPoint(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">
                {selectedPainPoint.description}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Impact</div>
                  <div className="text-sm font-semibold text-gray-900">{selectedPainPoint.severity}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Frequency</div>
                  <div className="text-sm font-semibold text-gray-900">{selectedPainPoint.frequency}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Affected Customers</div>
                  <div className="text-sm font-semibold text-gray-900">{selectedPainPoint.affectedCustomers}/6</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-1">Category</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {selectedPainPoint.priority === 'P1' ? 'Critical Blocker' :
                     selectedPainPoint.priority === 'P2' ? 'Adoption & Scale' :
                     selectedPainPoint.priority === 'P3' ? 'Strategic' : 'Other'}
                  </div>
                </div>
              </div>
              
              {/* Customer Evidence */}
              {selectedPainPoint.customerEvidence.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Customer Evidence</h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {selectedPainPoint.customerEvidence.slice(0, 2).map((evidence, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs font-medium text-gray-700 mb-1">
                          {evidence.customer}
                        </div>
                        <div className="text-xs text-gray-600 italic mb-1">
                          &ldquo;{evidence.quote}&rdquo;
                        </div>
                        <div className="text-xs text-red-600">
                          Impact: {evidence.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* TestOps Features */}
              {selectedPainPoint.testOpsFeatures.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">TestOps Feature Mapping</h3>
                  <div className="space-y-2">
                    {selectedPainPoint.testOpsFeatures.map(feature => (
                      <div key={feature.id} className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="text-sm font-medium text-blue-900 mb-1">
                          {feature.title}
                        </div>
                        <div className="text-xs text-blue-700 mb-1">
                          {feature.description}
                        </div>
                        <div className="text-xs text-blue-600">
                          Area: {feature.implementationArea}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-2">
                <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mb-1">Click on a pain point dot</p>
              <p className="text-xs text-gray-500">to see detailed customer evidence and TestOps feature mapping</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Initiative Categories & Recommendations */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Initiative Categories & Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full text-sm font-bold flex items-center justify-center">P1</div>
              <h4 className="font-medium text-red-900">Core Workflow Blockers</h4>
            </div>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• Status sync automation</li>
              <li>• Progress dashboard automation</li>  
              <li>• Handoff workflow preservation</li>
              <li>• Tool integration unification</li>
            </ul>
            <div className="mt-2 text-xs text-red-600">4 pain points - Block daily productivity for all teams</div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full text-sm font-bold flex items-center justify-center">P2</div>
              <h4 className="font-medium text-orange-900">Adoption & Integration Barriers</h4>
            </div>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>• TestOps learning curve & onboarding</li>
              <li>• Excel dependency breaking</li>
              <li>• Enterprise performance scaling</li>
              <li>• JIRA/ALM integration reliability</li>
              <li>• Workflow integration challenges</li>
              <li>• Change management crisis</li>
            </ul>
            <div className="mt-2 text-xs text-orange-600">6 pain points - Prevent growth & adoption</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold flex items-center justify-center">P3</div>
              <h4 className="font-medium text-blue-900">Lower Impact Strategic</h4>
            </div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Data-driven prioritization</li>
              <li>• Advanced analytics integration</li>
            </ul>
            <div className="mt-2 text-xs text-blue-600">1 pain point - Competitive advantage</div>
          </div>
          
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-400 text-white rounded-full text-sm font-bold flex items-center justify-center">—</div>
              <h4 className="font-medium text-gray-700">No P4 Items</h4>
            </div>
            <p className="text-sm text-gray-600 italic">
              All identified pain points are critical for either workflow functionality or adoption success.
            </p>
            <div className="mt-2 text-xs text-gray-500">Research shows no &ldquo;nice-to-have&rdquo; items</div>
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          <span className="font-medium">Total Impact:</span> Address 11 validated pain points using proper Kano Impact×Frequency analysis
        </div>
      </div>
    </div>
  )
}