'use client'

import { JourneyStage } from '@/app/data/types'
import { cn } from '@/lib/utils'
import { Clock } from 'lucide-react'

interface StageMarkerProps {
  stage: JourneyStage
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export default function StageMarker({ 
  stage, 
  isActive = false, 
  onClick,
  className 
}: StageMarkerProps) {
  return (
    <div 
      className={cn(
        'flex flex-col items-center cursor-pointer transition-all duration-200',
        'hover:scale-105',
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        'w-16 h-16 rounded-full border-4 flex items-center justify-center mb-2 transition-colors relative',
        isActive 
          ? 'bg-blue-500 border-blue-600 text-white' 
          : 'bg-white border-gray-300 text-gray-600 hover:border-blue-300'
      )}>
        <Clock className="w-6 h-6" />
        
        {/* Pattern Type Indicator */}
        <div className={cn(
          'absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white',
          stage.patternType === 'universal' && 'bg-green-500',
          stage.patternType === 'hybrid' && 'bg-yellow-500',
          stage.patternType === 'divergent' && 'bg-red-500'
        )} />
      </div>
      
      <div className="text-center max-w-32">
        <h3 className={cn(
          'text-xs font-semibold mb-1',
          isActive ? 'text-blue-700' : 'text-gray-700'
        )}>
          {stage.title}
        </h3>
        <p className="text-xs text-gray-500">
          {stage.timeframe}
        </p>
        
        {stage.painPoints.length > 0 && (
          <div className="mt-2">
            <span className={cn(
              'text-xs px-2 py-1 rounded-full',
              stage.painPoints.some(p => p.severity === 'CRITICAL') 
                ? 'bg-red-100 text-red-700'
                : 'bg-orange-100 text-orange-700'
            )}>
              {stage.painPoints.length} pain point{stage.painPoints.length !== 1 ? 's' : ''}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}