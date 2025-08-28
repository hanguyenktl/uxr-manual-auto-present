'use client'

import { useState } from 'react'
import { journeyStages } from '@/app/data/journey-data'
import { cn } from '@/lib/utils'
import { AlertTriangle, Users, ArrowRight, ChevronDown, ChevronRight, Building } from 'lucide-react'

interface CompactJourneyViewProps {
  className?: string
}

const teamTags = {
  early: 'E',
  individual: 'I', 
  hybrid: 'H',
  enterprise: 'En'
}

// Function to calculate stage criticality based on pain points
const getStageAttentionLevel = (stage: { painPoints: Array<{ severity: string; priority: string; frequency: string }> }) => {
  if (stage.painPoints.length === 0) return 'low'
  
  const criticalCount = stage.painPoints.filter(p => p.severity === 'CRITICAL').length
  const highCount = stage.painPoints.filter(p => p.severity === 'HIGH').length
  const p1Count = stage.painPoints.filter(p => p.priority === 'P1').length
  const dailyCount = stage.painPoints.filter(p => p.frequency === 'DAILY').length
  
  // Critical attention: Multiple critical issues, P1 priority, daily frequency
  if (criticalCount >= 1 && p1Count >= 1 && dailyCount >= 1) return 'critical'
  
  // High attention: High severity + P1/P2, or multiple high severity
  if ((highCount >= 1 && (p1Count >= 1 || stage.painPoints.some(p => p.priority === 'P2'))) || 
      highCount >= 2) return 'high'
  
  // Medium attention: Some high severity or multiple medium issues
  if (highCount >= 1 || stage.painPoints.length >= 2) return 'medium'
  
  return 'low'
}

export default function CompactJourneyView({ className }: CompactJourneyViewProps) {
  const [expandedStage, setExpandedStage] = useState<string | null>(null)
  const [expandedPersonas, setExpandedPersonas] = useState<string | null>(null)
  
  return (
    <div className={cn('w-full max-w-7xl mx-auto', className)}>
      {/* Compact Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Manual-to-Automation User Journey
        </h1>
        <p className="text-gray-600 text-sm mb-3">
          Universal patterns vs team-specific divergences across 8 workflow stages
        </p>
        
        {/* Legend */}
        <div className="bg-gray-50 p-3 rounded space-y-2">
          <div className="flex items-center gap-6 text-xs text-gray-600 flex-wrap">
            <div className="flex items-center gap-4">
              <span className="font-medium">Patterns:</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Universal</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span>Hybrid</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Divergent</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">Teams:</span>
              <span>E=Early, I=Individual, H=Hybrid, En=Enterprise</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-gray-600 flex-wrap">
            <div className="flex items-center gap-4">
              <span className="font-medium">Stage Indicators:</span>
              <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                <Building className="w-3 h-3 text-blue-600" />
                <span className="text-blue-700">X/6 customers affected</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>X roles involved</span>
              </div>
              <div className="flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-red-500" />
                <span>X pain points</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-600 flex-wrap">
            <span className="font-medium">Personas:</span>
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 text-blue-700 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold">PO</div>
              <span>Product Owner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 text-green-700 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold">MQ</div>
              <span>Manual QA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 text-purple-700 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold">AQ</div>
              <span>Automation QA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 text-orange-700 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold">QM</div>
              <span>QA Manager</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-indigo-100 text-indigo-700 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold">BA</div>
              <span>Business Analyst</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 text-gray-700 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold">D</div>
              <span>Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Journey Flow */}
      <div className="space-y-3">
        {journeyStages.map((stage, index) => {
          const attentionLevel = getStageAttentionLevel(stage)
          
          return (
          <div key={stage.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Stage Header - Always Visible */}
            <div 
              className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Stage Number & Pattern Indicator */}
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div className={cn(
                      'w-3 h-3 rounded-full',
                      stage.patternType === 'universal' && 'bg-green-500',
                      stage.patternType === 'hybrid' && 'bg-yellow-500',
                      stage.patternType === 'divergent' && 'bg-red-500'
                    )} />
                  </div>
                  
                  {/* Stage Info */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{stage.title}</h3>
                      {attentionLevel === 'critical' && (
                        <span className="text-red-600 text-xs font-medium">Critical</span>
                      )}
                      {attentionLevel === 'high' && (
                        <span className="text-orange-600 text-xs font-medium">High</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600">{stage.timeframe}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Quick Stats */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    {/* Customer Coverage */}
                    <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                      <Building className="w-3 h-3 text-blue-600" />
                      <span className="text-blue-700 font-medium">
                        {stage.painPoints.length > 0 
                          ? Math.max(...stage.painPoints.map(p => p.affectedCustomers))
                          : 6}/6 customers
                      </span>
                    </div>
                    
                    {/* Personas Involved */}
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{stage.personas.length} roles</span>
                    </div>
                    
                    {/* Pain Points */}
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-red-500" />
                      <span>{stage.painPoints.length} issues</span>
                    </div>
                    
                    {/* Persona Icons */}
                    <div className="flex gap-1">
                      {stage.personas.slice(0, 4).map((persona, idx) => (
                        <div
                          key={idx}
                          title={persona.persona.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          className={`w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold ${
                            persona.persona === 'product-owner' ? 'bg-blue-100 text-blue-700' :
                            persona.persona === 'manual-qa' ? 'bg-green-100 text-green-700' :
                            persona.persona === 'automation-qa' ? 'bg-purple-100 text-purple-700' :
                            persona.persona === 'qa-manager' ? 'bg-orange-100 text-orange-700' :
                            persona.persona === 'business-analyst' ? 'bg-indigo-100 text-indigo-700' :
                            'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {persona.persona === 'product-owner' ? 'PO' :
                           persona.persona === 'manual-qa' ? 'MQ' :
                           persona.persona === 'automation-qa' ? 'AQ' :
                           persona.persona === 'qa-manager' ? 'QM' :
                           persona.persona === 'business-analyst' ? 'BA' :
                           'D'}
                        </div>
                      ))}
                      {stage.personas.length > 4 && (
                        <span className="text-xs text-gray-400">+{stage.personas.length - 4}</span>
                      )}
                    </div>
                  </div>
                  
                  {expandedStage === stage.id ? 
                    <ChevronDown className="w-4 h-4 text-gray-400" /> : 
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  }
                </div>
              </div>

              {/* Universal Pattern - Always Visible */}
              <div className="mt-2">
                <p className={cn(
                  'text-xs px-2 py-1 rounded text-left',
                  stage.patternType === 'universal' && 'bg-green-50 text-green-800',
                  stage.patternType === 'hybrid' && 'bg-yellow-50 text-yellow-800',
                  stage.patternType === 'divergent' && 'bg-red-50 text-red-800'
                )}>
                  {stage.universalPattern}
                </p>
              </div>
            </div>

            {/* Expanded Details */}
            {expandedStage === stage.id && (
              <div className="px-4 pb-4 border-t border-gray-100 bg-gray-50">
                <div className="pt-3 space-y-3">
                  {/* Divergence Points */}
                  {stage.divergencePoints && stage.divergencePoints.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-gray-700 mb-1">Team Divergences:</h4>
                      <div className="space-y-1">
                        {stage.divergencePoints.map((point, idx) => (
                          <div key={idx} className="text-xs text-gray-600 flex items-start">
                            <span className="w-1 h-1 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Team Variations with Tags */}
                  {stage.teamVariations && stage.teamVariations.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-gray-700 mb-2">Team-Specific Approaches:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {stage.teamVariations.map((variation, idx) => (
                          <div key={idx} className="bg-white p-2 rounded border border-gray-200">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded font-mono">
                                {teamTags[variation.teamType]}
                              </span>
                              <span className="text-xs font-medium text-gray-700">
                                {variation.teamType.charAt(0).toUpperCase() + variation.teamType.slice(1)}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 mb-1">{variation.approach}</p>
                            <p className="text-xs text-gray-500">
                              Tools: {variation.tools.join(', ')}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pain Points */}
                  {stage.painPoints.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-red-700 mb-2">Critical Pain Points:</h4>
                      <div className="space-y-2">
                        {stage.painPoints.map((painPoint, idx) => (
                          <div key={idx} className="bg-red-50 p-2 rounded border border-red-200">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={cn(
                                'text-xs px-2 py-0.5 rounded font-medium',
                                painPoint.priority === 'P1' && 'bg-red-100 text-red-700',
                                painPoint.priority === 'P2' && 'bg-orange-100 text-orange-700',
                                painPoint.priority === 'P3' && 'bg-blue-100 text-blue-700',
                                painPoint.priority === 'P4' && 'bg-gray-100 text-gray-700'
                              )}>
                                {painPoint.priority}
                              </span>
                              <span className="text-xs font-medium text-red-800">{painPoint.title}</span>
                              <span className="text-xs text-red-600">({painPoint.affectedCustomers}/6 customers)</span>
                            </div>
                            <p className="text-xs text-red-700 mb-2">{painPoint.description}</p>
                            
                            {/* Customer Evidence */}
                            <div className="space-y-1">
                              <p className="text-xs font-medium text-red-700">Customer Evidence:</p>
                              {painPoint.customerEvidence.slice(0, 2).map((evidence, evidenceIdx) => (
                                <div key={evidenceIdx} className="bg-red-100 p-1.5 rounded border border-red-200">
                                  <p className="text-xs text-red-600 italic mb-0.5">
                                    &quot;{evidence.quote}&quot;
                                  </p>
                                  <p className="text-xs text-red-700 font-medium">
                                    - {evidence.customer} <span className="font-normal">({evidence.context})</span>
                                  </p>
                                </div>
                              ))}
                              {painPoint.customerEvidence.length > 2 && (
                                <p className="text-xs text-red-600">
                                  + {painPoint.customerEvidence.length - 2} more customer{painPoint.customerEvidence.length - 2 !== 1 ? 's' : ''}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TestOps Opportunity */}
                  <div className="bg-blue-50 p-2 rounded border border-blue-200">
                    <h4 className="text-xs font-medium text-blue-800 mb-1">TestOps Opportunity</h4>
                    <p className="text-xs text-blue-700">{stage.testOpsMapping.opportunity}</p>
                  </div>

                  {/* Collapsible Persona Activities */}
                  <div>
                    <button
                      onClick={() => setExpandedPersonas(expandedPersonas === stage.id ? null : stage.id)}
                      className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <span>Persona Involvement Details</span>
                      {expandedPersonas === stage.id ? 
                        <ChevronDown className="w-3 h-3" /> : 
                        <ChevronRight className="w-3 h-3" />
                      }
                    </button>
                    
                    {expandedPersonas === stage.id && (
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {stage.personas.map((personaActivity, idx) => (
                          <div key={idx} className="bg-white p-2 rounded border border-gray-200">
                            <div className="flex items-center gap-2 mb-1">
                              <div className={`w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold ${
                                personaActivity.persona === 'product-owner' ? 'bg-blue-100 text-blue-700' :
                                personaActivity.persona === 'manual-qa' ? 'bg-green-100 text-green-700' :
                                personaActivity.persona === 'automation-qa' ? 'bg-purple-100 text-purple-700' :
                                personaActivity.persona === 'qa-manager' ? 'bg-orange-100 text-orange-700' :
                                personaActivity.persona === 'business-analyst' ? 'bg-indigo-100 text-indigo-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {personaActivity.persona === 'product-owner' ? 'PO' :
                                 personaActivity.persona === 'manual-qa' ? 'MQ' :
                                 personaActivity.persona === 'automation-qa' ? 'AQ' :
                                 personaActivity.persona === 'qa-manager' ? 'QM' :
                                 personaActivity.persona === 'business-analyst' ? 'BA' :
                                 'D'}
                              </div>
                              <span className="text-xs font-medium text-gray-700 capitalize">
                                {personaActivity.persona.replace('-', ' ')}
                              </span>
                            </div>
                            
                            <div className="space-y-1">
                              <div>
                                <p className="text-xs text-gray-600 font-medium">Activities:</p>
                                <ul className="text-xs text-gray-600">
                                  {personaActivity.activities.map((activity, actIdx) => (
                                    <li key={actIdx} className="flex items-start">
                                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-1.5 flex-shrink-0" />
                                      {activity}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              {personaActivity.tools.length > 0 && (
                                <div>
                                  <p className="text-xs text-gray-600 font-medium">Tools:</p>
                                  <p className="text-xs text-gray-500">
                                    {personaActivity.tools.join(', ')}
                                  </p>
                                </div>
                              )}
                              
                              {personaActivity.painPoints.length > 0 && (
                                <div>
                                  <p className="text-xs text-red-600 font-medium">Pain Points:</p>
                                  <ul className="text-xs text-red-600">
                                    {personaActivity.painPoints.map((painPoint, ppIdx) => (
                                      <li key={ppIdx} className="flex items-start">
                                        <span className="w-1 h-1 bg-red-400 rounded-full mt-1.5 mr-1.5 flex-shrink-0" />
                                        {painPoint}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          )
        })}
      </div>

      {/* Flow Arrows - Subtle */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <ArrowRight className="w-3 h-3" />
          <span>Flow continues through all 8 stages</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  )
}