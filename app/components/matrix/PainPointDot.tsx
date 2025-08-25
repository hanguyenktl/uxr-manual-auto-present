'use client'

import { useState } from 'react'
import { PainPoint } from '@/app/data/types'
import { cn } from '@/lib/utils'

interface PainPointDotProps {
  painPoint: PainPoint
  x: number
  y: number
  onHover?: (painPoint: PainPoint | null) => void
  onClick?: (painPoint: PainPoint) => void
  isSelected?: boolean
  className?: string
}

const severityColors = {
  CRITICAL: 'bg-red-500 hover:bg-red-600',
  HIGH: 'bg-orange-500 hover:bg-orange-600', 
  MEDIUM: 'bg-yellow-500 hover:bg-yellow-600',
  LOW: 'bg-gray-500 hover:bg-gray-600'
}

const priorityColors = {
  P1: 'ring-red-500',
  P2: 'ring-orange-500', 
  P3: 'ring-blue-500',
  P4: 'ring-gray-500'
}

export default function PainPointDot({
  painPoint,
  x,
  y,
  onHover,
  onClick,
  isSelected = false,
  className
}: PainPointDotProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const size = Math.max(20, Math.min(32, painPoint.affectedCustomers * 4))
  
  return (
    <div
      className={cn(
        'absolute rounded-full cursor-pointer transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2',
        'ring-2 ring-offset-1',
        severityColors[painPoint.severity],
        priorityColors[painPoint.priority],
        isSelected && 'ring-4 scale-125',
        isHovered && 'scale-110 z-10',
        className
      )}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`
      }}
      onMouseEnter={() => {
        setIsHovered(true)
        onHover?.(painPoint)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        onHover?.(null)
      }}
      onClick={() => onClick?.(painPoint)}
    >
      {/* Priority label inside dot */}
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-white font-bold text-xs">
          {painPoint.priority}
        </span>
      </div>
      
      {/* Small persistent label */}
      <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 pointer-events-none z-10">
        <div className="bg-white bg-opacity-95 border border-gray-300 rounded px-1.5 py-0.5 shadow-sm">
          <div className="text-xs font-medium text-gray-900 leading-tight whitespace-nowrap max-w-32 overflow-hidden text-ellipsis">
            {painPoint.title.length > 20 
              ? painPoint.title.substring(0, 17) + '...' 
              : painPoint.title
            }
          </div>
        </div>
      </div>

      {/* Enhanced label on hover/select */}
      {(isHovered || isSelected) && (
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 pointer-events-none z-20">
          <div className="bg-white border-2 border-gray-900 rounded-lg px-3 py-2 shadow-lg min-w-max">
            <div className="text-sm font-semibold text-gray-900 leading-tight max-w-48">
              {painPoint.title}
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {painPoint.affectedCustomers}/6 customers • {painPoint.severity.toLowerCase()} • {painPoint.frequency.toLowerCase()}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}