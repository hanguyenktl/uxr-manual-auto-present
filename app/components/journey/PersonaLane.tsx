'use client'

import { PersonaType, PersonaActivity } from '@/app/data/types'
import { cn } from '@/lib/utils'
import PainPointIndicator from '../shared/PainPointIndicator'

interface PersonaLaneProps {
  persona: PersonaType
  activities: PersonaActivity[]
  className?: string
}

const personaConfig = {
  'product-owner': {
    name: 'Product Owner',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-900'
  },
  'manual-qa': {
    name: 'Manual QA',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-900'
  },
  'automation-qa': {
    name: 'Automation QA', 
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-900'
  },
  'qa-manager': {
    name: 'QA Manager',
    color: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-900'
  },
  'business-analyst': {
    name: 'Business Analyst',
    color: 'bg-indigo-50 border-indigo-200',
    textColor: 'text-indigo-900'
  },
  'developer': {
    name: 'Developer',
    color: 'bg-gray-50 border-gray-200',
    textColor: 'text-gray-900'
  }
}

export default function PersonaLane({ 
  persona, 
  activities, 
  className 
}: PersonaLaneProps) {
  const config = personaConfig[persona]
  const personaActivity = activities.find(a => a.persona === persona)
  
  if (!personaActivity) return null
  
  return (
    <div className={cn(
      'border rounded-lg p-4 min-h-32',
      config.color,
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={cn('font-semibold text-sm', config.textColor)}>
          {config.name}
        </h3>
        {personaActivity.painPoints.length > 0 && (
          <div className="flex gap-1">
            {personaActivity.painPoints.slice(0, 2).map((_, index) => (
              <PainPointIndicator 
                key={index}
                severity="HIGH" 
                size="sm" 
              />
            ))}
            {personaActivity.painPoints.length > 2 && (
              <span className="text-xs text-gray-500 ml-1">
                +{personaActivity.painPoints.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div>
          <h4 className="text-xs font-medium text-gray-700 mb-1">Activities</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {personaActivity.activities.slice(0, 3).map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                {activity}
              </li>
            ))}
          </ul>
        </div>
        
        {personaActivity.tools.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-1">Tools</h4>
            <div className="flex flex-wrap gap-1">
              {personaActivity.tools.slice(0, 3).map((tool, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded border text-gray-700"
                >
                  {tool}
                </span>
              ))}
              {personaActivity.tools.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{personaActivity.tools.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}