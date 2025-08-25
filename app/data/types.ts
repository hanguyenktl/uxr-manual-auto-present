export type PersonaType = 
  | 'product-owner'
  | 'manual-qa' 
  | 'automation-qa'
  | 'qa-manager'
  | 'business-analyst'
  | 'developer'

export type TeamStructure = 'early' | 'individual' | 'hybrid' | 'enterprise'

export type PainPointSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
export type PainPointFrequency = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'RARELY'
export type Priority = 'P1' | 'P2' | 'P3' | 'P4'

export interface CustomerEvidence {
  customer: string
  quote: string
  impact: string
  context: string
}

export interface TestOpsFeature {
  id: string
  title: string
  description: string
  implementationArea: string
}

export interface PainPoint {
  id: string
  title: string
  description: string
  severity: PainPointSeverity
  frequency: PainPointFrequency
  customerEvidence: CustomerEvidence[]
  testOpsFeatures: TestOpsFeature[]
  priority: Priority
  developmentSprint: number
  affectedCustomers: number
}

export interface PersonaActivity {
  persona: PersonaType
  activities: string[]
  tools: string[]
  painPoints: string[]
}

export interface Handoff {
  from: PersonaType
  to: PersonaType
  information: string
  method: string
  painPoint?: string
}

export interface TestOpsOpportunity {
  currentState: string
  gapAnalysis: string
  opportunity: string
  features: string[]
}

export interface TeamStructureVariation {
  teamType: TeamStructure
  approach: string
  tools: string[]
  coordination: string
}

export interface JourneyStage {
  id: string
  title: string
  timeframe: string
  description: string
  universalPattern: string
  personas: PersonaActivity[]
  painPoints: PainPoint[]
  handoffs: Handoff[]
  testOpsMapping: TestOpsOpportunity
  teamVariations: TeamStructureVariation[]
  patternType: 'universal' | 'divergent' | 'hybrid'
  divergencePoints?: string[]
}