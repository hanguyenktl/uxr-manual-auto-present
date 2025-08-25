import { PainPoint } from './types'

export const painPoints: PainPoint[] = [
  {
    id: 'status-sync-failures',
    title: 'Status Synchronization Failures',
    description: 'Manual status updates between automation completion and test management tools cause productivity loss',
    severity: 'CRITICAL',
    frequency: 'DAILY',
    priority: 'P1',
    developmentSprint: 1,
    affectedCustomers: 6,
    customerEvidence: [
      {
        customer: 'Temple & Webster',
        quote: 'If automation QA forgets to update the tagging... their effort is wasted because automated test should have been executed instead',
        impact: 'Direct QA time waste',
        context: '13-person team with role specialization'
      },
      {
        customer: 'ClarisHealth', 
        quote: 'MANUAL After successful validation, status in Zephyr is MANUALLY updated',
        impact: '15-minute manual overhead per update',
        context: 'Enterprise with formal processes'
      },
      {
        customer: 'Security Bank',
        quote: 'Custom library built to sync TestCloud → Zephyr',
        impact: 'Engineering effort diverted',
        context: '1000+ test cases, 40-60 parallel coalitions'
      },
      {
        customer: 'Siddharth',
        quote: 'Manual Excel column updates for completion tracking',
        impact: 'Administrative overhead',
        context: 'Individual contributor workflow'
      }
    ],
    testOpsFeatures: [
      {
        id: 'auto-status-sync',
        title: 'Automated Status Workflow',
        description: 'Bi-directional synchronization between manual test management and automation execution',
        implementationArea: 'Platform Integration'
      },
      {
        id: 'real-time-visibility',
        title: 'Real-time Status Visibility',
        description: 'Live status updates across all connected tools',
        implementationArea: 'Dashboard'
      }
    ]
  },
  {
    id: 'manual-progress-reporting',
    title: 'Manual Progress Reporting Overhead',
    description: 'All teams manually calculate automation coverage metrics for stakeholder reports',
    severity: 'HIGH',
    frequency: 'WEEKLY',
    priority: 'P1', 
    developmentSprint: 1,
    affectedCustomers: 6,
    customerEvidence: [
      {
        customer: 'ClarisHealth',
        quote: 'Automation progress and coverage calculated manually via Excel. Time-consuming',
        impact: 'Hours per report',
        context: 'Enterprise stakeholder reporting'
      },
      {
        customer: 'Security Bank',
        quote: 'Custom Zephyr integration due to TestOps... so many fail... batch rate not good',
        impact: 'Engineering overhead',
        context: 'Enterprise scale reliability issues'
      },
      {
        customer: 'Skedulo',
        quote: 'No formal KPIs, relies on QA judgment and manager trust',
        impact: 'No systematic tracking',
        context: 'Early stage single QA'
      }
    ],
    testOpsFeatures: [
      {
        id: 'automated-dashboard',
        title: 'Automated Progress Dashboard',
        description: 'Real-time coverage calculation with stakeholder views',
        implementationArea: 'Reporting'
      },
      {
        id: 'role-based-reports',
        title: 'Role-based Reporting',
        description: 'Automated report generation for different stakeholder needs',
        implementationArea: 'Dashboard'
      }
    ]
  },
  {
    id: 'handoff-information-loss',
    title: 'Handoff Information Loss',
    description: 'Requirements degradation during manual-to-automation handoff process',
    severity: 'HIGH',
    frequency: 'WEEKLY',
    priority: 'P1',
    developmentSprint: 2,
    affectedCustomers: 5,
    customerEvidence: [
      {
        customer: 'ClarisHealth',
        quote: 'Export to Excel (major pain point, acts as backlog)',
        impact: 'Context loss in export',
        context: 'Formal enterprise handoff process'
      },
      {
        customer: 'Icon PLC',
        quote: 'BA-facilitated meetings, Confluence documentation',
        impact: 'Manual interpretation required',
        context: 'Business analyst coordination'
      },
      {
        customer: 'Temple & Webster',
        quote: 'Plain peer to peer discussion for changes',
        impact: 'Informal communication risk',
        context: 'Large hybrid team coordination'
      }
    ],
    testOpsFeatures: [
      {
        id: 'structured-handoff',
        title: 'Structured Handoff Workflow',
        description: 'Template-based handoff with requirement preservation',
        implementationArea: 'Workflow Management'
      },
      {
        id: 'context-preservation',
        title: 'Context Preservation',
        description: 'Maintain full context and history across tool boundaries',
        implementationArea: 'Data Management'
      }
    ]
  },
  {
    id: 'tool-fragmentation-tax',
    title: 'Tool Fragmentation Tax',
    description: 'Daily coordination overhead from using 3-5 different tools per workflow',
    severity: 'HIGH',
    frequency: 'DAILY',
    priority: 'P1',
    developmentSprint: 2,
    affectedCustomers: 6,
    customerEvidence: [
      {
        customer: 'ClarisHealth',
        quote: 'Daily context switching between Zephyr + JIRA + Excel + Katalon + Postman',
        impact: 'Coordination overhead',
        context: '5 tools for single workflow'
      },
      {
        customer: 'Temple & Webster',
        quote: 'Qase + Jira + Confluence + Katalon + BrowserStack coordination',
        impact: 'Complex tool management',
        context: '13-person team tool coordination'
      }
    ],
    testOpsFeatures: [
      {
        id: 'unified-platform',
        title: 'Unified Platform Interface',
        description: 'Single interface for manual + automation workflow',
        implementationArea: 'Platform Core'
      },
      {
        id: 'deep-integrations',
        title: 'Deep Tool Integrations',
        description: 'Native integrations without workflow disruption',
        implementationArea: 'Integration Layer'
      }
    ]
  },
  {
    id: 'enterprise-performance',
    title: 'TestOps Enterprise Performance Issues',
    description: 'Platform abandonment due to reliability issues at enterprise scale - major adoption blocker',
    severity: 'CRITICAL',
    frequency: 'WEEKLY',
    priority: 'P2',
    developmentSprint: 3,
    affectedCustomers: 2,
    customerEvidence: [
      {
        customer: 'Security Bank',
        quote: 'TestOps every day is unstable enough for the enterprise',
        impact: 'Platform abandonment risk',
        context: '1000+ test cases, 40-60 parallel execution'
      },
      {
        customer: 'Security Bank',
        quote: 'Cannot find HTML report by suite name... need to find one by one',
        impact: 'Manual search inefficiency',
        context: 'Large result set management'
      }
    ],
    testOpsFeatures: [
      {
        id: 'enterprise-performance',
        title: 'Enterprise Performance Platform',
        description: 'High-performance parallel execution for 1000+ tests',
        implementationArea: 'Infrastructure'
      },
      {
        id: 'advanced-filtering',
        title: 'Advanced Search & Filtering',
        description: 'Efficient result management and search capabilities',
        implementationArea: 'User Experience'
      }
    ]
  },
  {
    id: 'change-management-crisis',
    title: 'Change Management Crisis',
    description: 'Reactive change handling forces sprint goal abandonment',
    severity: 'CRITICAL',
    frequency: 'MONTHLY',
    priority: 'P2',
    developmentSprint: 4,
    affectedCustomers: 3,
    customerEvidence: [
      {
        customer: 'Temple & Webster',
        quote: 'We needed to switch focus... not prepared for changes like that',
        impact: 'Sprint goals dropped',
        context: 'Major requirement changes'
      },
      {
        customer: 'Temple & Webster',
        quote: 'During production, all our tests start failing',
        impact: 'Emergency response mode',
        context: 'Production deployment failures'
      }
    ],
    testOpsFeatures: [
      {
        id: 'change-impact-analysis',
        title: 'Proactive Change Management',
        description: 'Change impact detection and automation team notification',
        implementationArea: 'Change Management'
      },
      {
        id: 'impact-assessment',
        title: 'Impact Assessment Automation',
        description: 'Automated analysis of requirement changes on automation',
        implementationArea: 'Analytics'
      }
    ]
  },
  {
    id: 'testops-learning-curve',
    title: 'TestOps Learning Curve & Adoption Resistance',
    description: 'Teams hesitate to adopt TestOps due to tool complexity and change resistance',
    severity: 'HIGH',
    frequency: 'DAILY',
    priority: 'P2',
    developmentSprint: 2,
    affectedCustomers: 4,
    customerEvidence: [
      {
        customer: 'Skedulo',
        quote: 'Single QA person managing everything manually, reluctant to learn new tools',
        impact: 'Tool adoption barrier',
        context: 'Early stage with limited resources'
      },
      {
        customer: 'Icon PLC',
        quote: 'Established Postman + Newman workflow, concerns about TestOps integration',
        impact: 'Workflow disruption fear',
        context: 'Existing tool investment'
      },
      {
        customer: 'Template Customer',
        quote: 'Team prefers Excel because everyone knows it',
        impact: 'Change resistance',
        context: 'Tool familiarity preference'
      }
    ],
    testOpsFeatures: [
      {
        id: 'onboarding-wizard',
        title: 'Progressive Onboarding Experience',
        description: 'Step-by-step guided introduction with gradual feature adoption',
        implementationArea: 'User Experience'
      },
      {
        id: 'migration-assistant',
        title: 'Migration Assistant Tools',
        description: 'Automated migration from existing tools with safety nets',
        implementationArea: 'Integration'
      }
    ]
  },
  {
    id: 'integration-workflow-fit',
    title: 'Integration & Workflow Fit Challenges',
    description: 'TestOps struggles to integrate seamlessly into established team workflows',
    severity: 'HIGH', 
    frequency: 'WEEKLY',
    priority: 'P2',
    developmentSprint: 3,
    affectedCustomers: 3,
    customerEvidence: [
      {
        customer: 'Security Bank',
        quote: 'Had to build custom Zephyr integration because TestOps workflow did not fit',
        impact: 'Engineering overhead for integration',
        context: 'Enterprise formal process requirements'
      },
      {
        customer: 'ClarisHealth',
        quote: 'TestOps does not align with our Zephyr + JIRA governance model',
        impact: 'Governance compliance issues',
        context: 'Enterprise compliance requirements'
      }
    ],
    testOpsFeatures: [
      {
        id: 'workflow-templates',
        title: 'Industry Workflow Templates',
        description: 'Pre-configured workflows for different team structures and industries',
        implementationArea: 'Platform Configuration'
      },
      {
        id: 'governance-compliance',
        title: 'Governance & Compliance Support',
        description: 'Built-in compliance frameworks and audit trails',
        implementationArea: 'Enterprise Features'
      }
    ]
  },
  {
    id: 'data-driven-prioritization',
    title: 'Data-Driven Prioritization Gap',
    description: 'Limited analytics for evidence-based automation decisions',
    severity: 'MEDIUM',
    frequency: 'MONTHLY',
    priority: 'P3',
    developmentSprint: 5,
    affectedCustomers: 2,
    customerEvidence: [
      {
        customer: 'Temple & Webster',
        quote: 'Based on datadog, majority of traffic is on favorites',
        impact: 'Analytics-driven decisions',
        context: 'Data-driven prioritization approach'
      }
    ],
    testOpsFeatures: [
      {
        id: 'analytics-integration',
        title: 'Analytics Integration Platform',
        description: 'Usage analytics integration for prioritization data',
        implementationArea: 'Analytics'
      },
      {
        id: 'roi-calculation',
        title: 'ROI Calculation Engine',
        description: 'Evidence-based automation value tracking',
        implementationArea: 'Business Intelligence'
      }
    ]
  },
  {
    id: 'excel-dependency',
    title: 'Excel Dependency & Tool Resistance',
    description: 'Teams default to Excel despite having other tools - major adoption blocker',
    severity: 'HIGH',
    frequency: 'DAILY',
    priority: 'P2',
    developmentSprint: 2,
    affectedCustomers: 4,
    customerEvidence: [
      {
        customer: 'Siddharth',
        quote: 'Coverage we used to maintain... in excel sheet',
        impact: 'Spreadsheet maintenance overhead',
        context: 'Individual contributor workflow'
      },
      {
        customer: 'ClarisHealth',
        quote: 'Automation progress calculated manually via Excel',
        impact: 'Manual calculation overhead',
        context: 'Enterprise despite having formal tools'
      }
    ],
    testOpsFeatures: [
      {
        id: 'excel-integration',
        title: 'Excel Integration Bridge',
        description: 'Seamless Excel import/export with workflow preservation',
        implementationArea: 'Integration'
      },
      {
        id: 'gradual-migration',
        title: 'Gradual Migration Support',
        description: 'Transition from Excel to TestOps without workflow disruption',
        implementationArea: 'User Experience'
      }
    ]
  },
  {
    id: 'jira-alm-sync-failures',
    title: 'JIRA/ALM Side Display & Sync Issues',
    description: 'Test results not properly displayed in JIRA/ALM tools, breaking stakeholder visibility',
    severity: 'HIGH',
    frequency: 'WEEKLY',
    priority: 'P2',
    developmentSprint: 1,
    affectedCustomers: 5,
    customerEvidence: [
      {
        customer: 'ClarisHealth',
        quote: 'Test results do not show properly in JIRA side, stakeholders cannot see automation progress',
        impact: 'Stakeholder visibility loss',
        context: 'Enterprise governance requirements'
      },
      {
        customer: 'Security Bank',
        quote: 'Custom integration built because TestOps-Zephyr sync was not reliable',
        impact: 'Engineering overhead for basic sync',
        context: 'Enterprise ALM integration'
      },
      {
        customer: 'Temple & Webster',
        quote: 'Product managers cannot see test status in JIRA, have to ask QA directly',
        impact: 'Communication overhead',
        context: 'Cross-team coordination breakdown'
      }
    ],
    testOpsFeatures: [
      {
        id: 'jira-native-integration',
        title: 'Native JIRA Test Display',
        description: 'Real-time test status and results directly in JIRA tickets',
        implementationArea: 'ALM Integration'
      },
      {
        id: 'stakeholder-dashboards',
        title: 'Stakeholder Dashboard Views',
        description: 'Role-based views for product managers and business stakeholders',
        implementationArea: 'Dashboard'
      }
    ]
  }
]