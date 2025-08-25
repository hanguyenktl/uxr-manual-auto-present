'use client'

import { useState } from 'react'
import { PersonaType, TeamStructure } from '@/app/data/types'
import { journeyStages } from '@/app/data/journey-data'
import StageMarker from './StageMarker'
import PersonaLane from './PersonaLane'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SwimLaneContainerProps {
  className?: string
}

const personas: PersonaType[] = [
  'product-owner',
  'manual-qa', 
  'automation-qa',
  'qa-manager',
  'business-analyst',
  'developer'
]

const teamStructureLabels: Record<TeamStructure, string> = {
  early: 'Early Stage',
  individual: 'Individual',
  hybrid: 'Hybrid Team',
  enterprise: 'Enterprise'
}

export default function SwimLaneContainer({ className }: SwimLaneContainerProps) {
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const [selectedTeamStructure, setSelectedTeamStructure] = useState<TeamStructure>('hybrid')
  
  const activeStage = journeyStages[activeStageIndex]
  
  const nextStage = () => {
    setActiveStageIndex(Math.min(activeStageIndex + 1, journeyStages.length - 1))
  }
  
  const prevStage = () => {
    setActiveStageIndex(Math.max(activeStageIndex - 1, 0))
  }
  
  return (
    <div className={cn('w-full max-w-7xl mx-auto', className)}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Manual-to-Automation User Journey
            </h1>
            <p className="text-gray-600">
              Interactive swimlane showing persona interactions and pain points across 8 stages
            </p>
          </div>
          
          {/* Team Structure Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Team Structure:</span>
            <select 
              value={selectedTeamStructure}
              onChange={(e) => setSelectedTeamStructure(e.target.value as TeamStructure)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(teamStructureLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Pattern Legend */}
        <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Pattern Types:</h4>
          <div className="flex gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-gray-600">Universal (All teams same)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-gray-600">Hybrid (Same flow, different methods)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-gray-600">Divergent (Significant differences)</span>
            </div>
          </div>
        </div>
        
        {/* Stage Timeline */}
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <button 
            onClick={prevStage}
            disabled={activeStageIndex === 0}
            className={cn(
              'p-2 rounded-full transition-colors flex-shrink-0',
              activeStageIndex === 0 
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-200'
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 md:gap-4 flex-1 justify-center overflow-x-auto px-2">
            {journeyStages.map((stage, index) => (
              <div key={stage.id} className="flex items-center flex-shrink-0">
                <StageMarker 
                  stage={stage}
                  isActive={index === activeStageIndex}
                  onClick={() => setActiveStageIndex(index)}
                />
                {index < journeyStages.length - 1 && (
                  <div className="w-4 md:w-8 h-0.5 bg-gray-300 mx-1 md:mx-2" />
                )}
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextStage}
            disabled={activeStageIndex === journeyStages.length - 1}
            className={cn(
              'p-2 rounded-full transition-colors flex-shrink-0',
              activeStageIndex === journeyStages.length - 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-200'
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Active Stage Details */}
      <div className="mb-6 p-6 bg-white border border-gray-200 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {activeStage.title}
            </h2>
            <p className="text-gray-600 mb-2">{activeStage.description}</p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {activeStage.timeframe}
              </span>
              <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                {teamStructureLabels[selectedTeamStructure]} Team View
              </span>
            </div>
          </div>
          
          {/* Stage Statistics */}
          <div className="text-right">
            <div className="text-sm text-gray-500">
              Stage {activeStageIndex + 1} of {journeyStages.length}
            </div>
            <div className="text-sm font-medium text-gray-700">
              {activeStage.personas.length} personas involved
            </div>
            <div className="text-sm font-medium text-red-600">
              {activeStage.painPoints.length} pain points
            </div>
          </div>
        </div>
        
        {/* Universal Pattern Display */}
        <div className={cn(
          'p-4 rounded-lg mb-4 border-2',
          activeStage.patternType === 'universal' && 'bg-green-50 border-green-300',
          activeStage.patternType === 'hybrid' && 'bg-yellow-50 border-yellow-300', 
          activeStage.patternType === 'divergent' && 'bg-red-50 border-red-300'
        )}>
          <div className="flex items-center gap-2 mb-2">
            <div className={cn(
              'w-3 h-3 rounded-full',
              activeStage.patternType === 'universal' && 'bg-green-500',
              activeStage.patternType === 'hybrid' && 'bg-yellow-500',
              activeStage.patternType === 'divergent' && 'bg-red-500'
            )} />
            <h3 className={cn(
              'font-medium text-sm',
              activeStage.patternType === 'universal' && 'text-green-900',
              activeStage.patternType === 'hybrid' && 'text-yellow-900',
              activeStage.patternType === 'divergent' && 'text-red-900'
            )}>
              {activeStage.patternType === 'universal' && 'Universal Pattern - Consistent Across All Teams'}
              {activeStage.patternType === 'hybrid' && 'Hybrid Pattern - Common Flow, Variable Methods'}
              {activeStage.patternType === 'divergent' && 'Divergent Pattern - Significant Team Differences'}
            </h3>
          </div>
          <p className={cn(
            'text-sm mb-2',
            activeStage.patternType === 'universal' && 'text-green-800',
            activeStage.patternType === 'hybrid' && 'text-yellow-800',
            activeStage.patternType === 'divergent' && 'text-red-800'
          )}>
            {activeStage.universalPattern}
          </p>
          
          {/* Divergence Points */}
          {activeStage.divergencePoints && activeStage.divergencePoints.length > 0 && (
            <div className="mt-3">
              <h4 className={cn(
                'font-medium text-xs mb-1',
                activeStage.patternType === 'hybrid' && 'text-yellow-800',
                activeStage.patternType === 'divergent' && 'text-red-800'
              )}>
                Key Divergences:
              </h4>
              <ul className="space-y-1">
                {activeStage.divergencePoints.map((point, index) => (
                  <li key={index} className={cn(
                    'text-xs flex items-start',
                    activeStage.patternType === 'hybrid' && 'text-yellow-700',
                    activeStage.patternType === 'divergent' && 'text-red-700'
                  )}>
                    <span className="w-1 h-1 bg-current rounded-full mt-2 mr-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Team Structure Specific View */}
        {activeStage.teamVariations.find(v => v.teamType === selectedTeamStructure) && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">
              {teamStructureLabels[selectedTeamStructure]} Team Implementation
            </h3>
            {(() => {
              const variation = activeStage.teamVariations.find(v => v.teamType === selectedTeamStructure)
              return variation ? (
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Approach:</span> {variation.approach}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Tools:</span> {variation.tools.join(', ')}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Coordination:</span> {variation.coordination}
                  </p>
                </div>
              ) : null
            })()}
          </div>
        )}
        
        {/* TestOps Mapping */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">TestOps Integration Opportunity</h3>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-medium">Current State:</span> {activeStage.testOpsMapping.currentState}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-medium">Gap:</span> {activeStage.testOpsMapping.gapAnalysis}  
          </p>
          <p className="text-sm text-blue-700">
            <span className="font-medium">Opportunity:</span> {activeStage.testOpsMapping.opportunity}
          </p>
        </div>
      </div>
      
      {/* Persona Swimlanes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Persona Activities & Pain Points
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map(persona => {
            const activity = activeStage.personas.find(p => p.persona === persona)
            if (!activity) return null
            
            return (
              <PersonaLane
                key={persona}
                persona={persona}
                activities={[activity]}
              />
            )
          })}
        </div>
      </div>
      
      {/* Major Pain Points for this Stage */}
      {activeStage.painPoints.length > 0 && (
        <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-4">
            🔥 Critical Pain Points in This Stage
          </h3>
          <div className="space-y-3">
            {activeStage.painPoints.map(painPoint => (
              <div key={painPoint.id} className="bg-white p-4 rounded-lg border border-red-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-red-900">{painPoint.title}</h4>
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                    {painPoint.priority}
                  </span>
                </div>
                <p className="text-sm text-red-700 mb-2">{painPoint.description}</p>
                {painPoint.customerEvidence.length > 0 && (
                  <div className="text-xs text-red-600">
                    <span className="font-medium">Customer Evidence:</span> &quot;{painPoint.customerEvidence[0].quote}&quot;
                    <span className="text-red-500"> - {painPoint.customerEvidence[0].customer}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}