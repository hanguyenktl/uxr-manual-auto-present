'use client'

import { AlertTriangle, AlertCircle, Info, Minus } from 'lucide-react'
import { PainPointSeverity } from '@/app/data/types'
import { cn } from '@/lib/utils'

interface PainPointIndicatorProps {
  severity: PainPointSeverity
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const severityConfig = {
  CRITICAL: {
    icon: AlertTriangle,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-300'
  },
  HIGH: {
    icon: AlertCircle,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100', 
    borderColor: 'border-orange-300'
  },
  MEDIUM: {
    icon: Info,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300'
  },
  LOW: {
    icon: Minus,
    color: 'text-gray-500',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300'
  }
}

const sizeConfig = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
}

export default function PainPointIndicator({ 
  severity, 
  size = 'md', 
  className 
}: PainPointIndicatorProps) {
  const config = severityConfig[severity]
  const Icon = config.icon
  
  return (
    <div 
      className={cn(
        'rounded-full p-1 border',
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      <Icon className={cn(config.color, sizeConfig[size])} />
    </div>
  )
}