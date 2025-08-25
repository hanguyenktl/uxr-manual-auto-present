import { JourneyStage } from './types'

export const journeyStages: JourneyStage[] = [
  {
    id: 'requirement-analysis',
    title: 'Requirement Analysis & Manual Test Design',
    timeframe: 'Sprint Planning & Development Phase',
    description: 'Requirements definition and initial manual test case creation',
    universalPattern: 'All teams follow: Product Owner defines requirements → Manual QA designs test cases → Automation QA assesses feasibility',
    patternType: 'divergent',
    divergencePoints: [
      'Tool choice varies significantly (Qase, Confluence, Excel, Zephyr)',
      'Manual QA involvement timing differs by team structure',
      'Automation QA early involvement only in mature teams'
    ],
    personas: [
      {
        persona: 'product-owner',
        activities: [
          'Define user stories',
          'Clarify acceptance criteria', 
          'Prioritize features'
        ],
        tools: ['Jira', 'Azure DevOps'],
        painPoints: [
          'Requirements change frequently',
          'Impact on testing unclear'
        ]
      },
      {
        persona: 'manual-qa',
        activities: [
          'Analyze requirements',
          'Design test cases',
          'Prepare test data'
        ],
        tools: ['Qase', 'Confluence', 'Excel', 'Zephyr'],
        painPoints: [
          'Tool fragmentation across customers',
          'No standardized approach',
          'Multiple tools for same job'
        ]
      },
      {
        persona: 'automation-qa',
        activities: [
          'Review upcoming features',
          'Assess automation feasibility'
        ],
        tools: ['Katalon Studio', 'frameworks'],
        painPoints: [
          'No early involvement',
          'Reactive planning'
        ]
      }
    ],
    painPoints: [
      {
        id: 'tool-fragmentation-design',
        title: 'Tool Fragmentation in Test Design',
        description: 'Different customers use different tools creating inconsistent handoff formats',
        severity: 'HIGH',
        frequency: 'DAILY',
        priority: 'P1',
        developmentSprint: 1,
        affectedCustomers: 6,
        customerEvidence: [
          {
            customer: 'Multiple Teams',
            quote: 'Qase (Temple & Webster), Confluence (Skedulo), Excel (Siddharth), Zephyr (ClarisHealth, Security Bank)',
            impact: 'Inconsistent handoff formats',
            context: 'Tool diversity across customers'
          }
        ],
        testOpsFeatures: [
          {
            id: 'unified-test-management',
            title: 'Manual Test Management',
            description: 'Unified test case creation with requirement traceability',
            implementationArea: 'Test Management'
          }
        ]
      },
      {
        id: 'no-early-automation-involvement',
        title: 'No Early Automation Involvement',
        description: 'Automation QAs are not involved in early requirement analysis, leading to reactive planning',
        severity: 'MEDIUM',
        frequency: 'WEEKLY',
        priority: 'P3',
        developmentSprint: 3,
        affectedCustomers: 4,
        customerEvidence: [
          {
            customer: 'Icon PLC',
            quote: 'Automation team only gets involved after BA has documented everything and manual tests are ready',
            impact: 'Missed early automation opportunities',
            context: 'BA-facilitated handoff process'
          },
          {
            customer: 'Skedulo',
            quote: 'I design all the manual tests first, then later decide which ones could be automated',
            impact: 'Sequential rather than parallel planning',
            context: 'Single QA managing both roles'
          }
        ],
        testOpsFeatures: [
          {
            id: 'early-collaboration',
            title: 'Early Automation Collaboration',
            description: 'Automation feasibility assessment during planning phase',
            implementationArea: 'Workflow Management'
          }
        ]
      }
    ],
    handoffs: [
      {
        from: 'product-owner',
        to: 'manual-qa',
        information: 'Requirements and acceptance criteria',
        method: 'Jira tickets, documentation',
        painPoint: 'Requirements change during development'
      }
    ],
    testOpsMapping: {
      currentState: 'Limited manual test management capabilities',
      gapAnalysis: 'Manual testers use external tools for test design',
      opportunity: 'Integrated requirement-to-test workflow',
      features: ['Jira Integration', 'Manual Test Management', 'Early Collaboration']
    },
    teamVariations: [
      {
        teamType: 'early',
        approach: 'Single QA handles all aspects',
        tools: ['Confluence', 'Basic tools'],
        coordination: 'Self-coordination'
      },
      {
        teamType: 'enterprise',
        approach: 'Formal process with specialized roles',
        tools: ['Jira', 'Zephyr', 'Enterprise tools'],
        coordination: 'Structured handoffs'
      }
    ]
  },
  {
    id: 'manual-execution',
    title: 'Manual Test Execution & Stabilization',
    timeframe: 'Testing Phase',
    description: 'Manual test execution with parallel automation sanity checks',
    universalPattern: 'UNIVERSAL: Manual QA executes tests → Manually triggers automation sanity checks → Results tracked in separate systems',
    patternType: 'universal',
    personas: [
      {
        persona: 'manual-qa',
        activities: [
          'Execute test cases',
          'Document results',
          'Trigger automation sanity tests'
        ],
        tools: ['Test management tool', 'Katalon Studio'],
        painPoints: [
          'Manual triggering of automation',
          'Results in different systems'
        ]
      },
      {
        persona: 'automation-qa',
        activities: [
          'Support automation failures',
          'Investigate flaky tests'
        ],
        tools: ['Katalon Studio', 'TestOps'],
        painPoints: [
          'TestOps unstable for enterprise',
          'Poor failure analysis tools'
        ]
      },
      {
        persona: 'developer',
        activities: [
          'Fix bugs found in testing',
          'Access regression results'
        ],
        tools: ['CI/CD tools', 'Jenkins'],
        painPoints: [
          'Limited access to test status',
          'Delayed feedback'
        ]
      }
    ],
    painPoints: [
      {
        id: 'manual-automation-coordination',
        title: 'Manual-Automation Coordination Overhead',
        description: 'Manual QAs must manually trigger automation tests',
        severity: 'HIGH',
        frequency: 'DAILY',
        priority: 'P1',
        developmentSprint: 2,
        affectedCustomers: 6,
        customerEvidence: [
          {
            customer: 'Temple & Webster',
            quote: 'Manual QAs have to manually trigger automation tests during their testing phase',
            impact: 'Daily coordination overhead',
            context: 'Hybrid team with 13 QAs'
          },
          {
            customer: 'ClarisHealth', 
            quote: 'After manual testing, we manually run automation sanity checks before marking complete',
            impact: 'Additional manual steps',
            context: 'Enterprise team coordination'
          },
          {
            customer: 'Skedulo',
            quote: 'I run the automation tests manually after completing manual testing to make sure nothing breaks',
            impact: 'Single QA doing double work',
            context: 'Early stage team'
          }
        ],
        testOpsFeatures: [
          {
            id: 'integrated-execution',
            title: 'Integrated Execution Platform',
            description: 'Manual + automation results in unified interface',
            implementationArea: 'Execution Management'
          }
        ]
      },
      {
        id: 'results-in-different-systems',
        title: 'Manual and Automation Results Scattered',
        description: 'Manual test results and automation results exist in different systems making analysis difficult',
        severity: 'MEDIUM',
        frequency: 'DAILY',
        priority: 'P1',
        developmentSprint: 2,
        affectedCustomers: 5,
        customerEvidence: [
          {
            customer: 'ClarisHealth',
            quote: 'Manual results are in Zephyr, automation results come from Katalon, then we manually upload to TestOps',
            impact: 'Manual result consolidation effort',
            context: 'Enterprise multi-tool workflow'
          },
          {
            customer: 'Temple & Webster',
            quote: 'We track manual testing in Qase but automation results are separate in TestOps, hard to get unified view',
            impact: 'Fragmented test visibility',
            context: 'Hybrid team coordination'
          }
        ],
        testOpsFeatures: [
          {
            id: 'unified-results',
            title: 'Unified Results Dashboard',
            description: 'Single view combining manual and automation test results',
            implementationArea: 'Reporting & Analytics'
          }
        ]
      }
    ],
    handoffs: [
      {
        from: 'manual-qa',
        to: 'automation-qa',
        information: 'Failure analysis requests',
        method: 'Direct communication, tool notifications'
      },
      {
        from: 'automation-qa',
        to: 'developer',
        information: 'Bug reports and test results',
        method: 'CI/CD integration, direct communication'
      }
    ],
    testOpsMapping: {
      currentState: 'Basic execution with reliability issues',
      gapAnalysis: 'Enterprise customers report TestOps instability',
      opportunity: 'Reliable integrated execution platform',
      features: ['Enhanced TestOps Performance', 'Developer Dashboard', 'Integrated Execution']
    },
    teamVariations: [
      {
        teamType: 'enterprise',
        approach: 'Large-scale parallel execution',
        tools: ['TestCloud', 'TestOps', 'Enterprise CI/CD'],
        coordination: 'Formal CI/CD integration'
      },
      {
        teamType: 'hybrid',
        approach: '7 manual + 4 automation QAs coordination',
        tools: ['Multiple tools', 'Role-specific interfaces'],
        coordination: 'Cross-role communication'
      }
    ]
  },
  {
    id: 'candidate-selection',
    title: 'Automation Candidate Selection',
    timeframe: 'Post-Stabilization Phase',
    description: 'Prioritizing and marking test cases for automation development',
    universalPattern: 'UNIVERSAL: QA Manager prioritizes → Manual QA marks candidates → Automation QA estimates effort',
    patternType: 'hybrid',
    divergencePoints: [
      'Prioritization criteria: Data-driven (mature teams) vs Experience-based (early teams)',
      'Marking methods vary: Excel, tool tags, Jira labels, or verbal communication'
    ],
    personas: [
      {
        persona: 'qa-manager',
        activities: [
          'Prioritize automation candidates',
          'Make data-driven decisions',
          'Allocate automation resources'
        ],
        tools: ['DataDog analytics', 'Experience/judgment'],
        painPoints: [
          'Lacks data for prioritization',
          'Intuition-based decisions'
        ]
      },
      {
        persona: 'manual-qa',
        activities: [
          'Mark test cases for automation',
          'Document automation requirements'
        ],
        tools: ['Excel columns', 'Tool tags', 'Jira labels'],
        painPoints: [
          'Manual status tracking',
          'Forgotten updates',
          'Inconsistent marking'
        ]
      },
      {
        persona: 'automation-qa',
        activities: [
          'Review automation candidates',
          'Estimate effort'
        ],
        tools: ['Katalon Studio'],
        painPoints: [
          'No structured handoff process',
          'Requirements interpretation'
        ]
      }
    ],
    painPoints: [
      {
        id: 'manual-status-tracking',
        title: 'Manual Status Tracking',
        description: 'Every customer uses different manual methods for marking automation candidates',
        severity: 'CRITICAL',
        frequency: 'WEEKLY',
        priority: 'P1',
        developmentSprint: 1,
        affectedCustomers: 6,
        customerEvidence: [
          {
            customer: 'Siddharth',
            quote: 'Manual Excel column updates for automation completion tracking',
            impact: 'Administrative overhead',
            context: 'Individual contributor'
          },
          {
            customer: 'Temple & Webster',
            quote: 'Manual Qase tagging for collecting the regression coverage',
            impact: 'Manual data entry',
            context: 'Large hybrid team'
          }
        ],
        testOpsFeatures: [
          {
            id: 'automated-status-workflow',
            title: 'Automated Status Workflow',
            description: 'Eliminate manual status updates with automated tracking',
            implementationArea: 'Workflow Automation'
          }
        ]
      }
    ],
    handoffs: [
      {
        from: 'qa-manager',
        to: 'manual-qa',
        information: 'Prioritization decisions and criteria',
        method: 'Team meetings, documentation'
      },
      {
        from: 'manual-qa',
        to: 'automation-qa',
        information: 'Automation candidate list with basic requirements',
        method: 'Tool tags, Excel exports, labels'
      }
    ],
    testOpsMapping: {
      currentState: 'No systematic automation candidate workflow',
      gapAnalysis: 'Manual processes outside TestOps platform',
      opportunity: 'Data-driven automation prioritization',
      features: ['Analytics Integration', 'Automated Workflow', 'Priority Framework']
    },
    teamVariations: [
      {
        teamType: 'hybrid',
        approach: 'Data-driven with DataDog analytics',
        tools: ['DataDog', 'Qase tagging'],
        coordination: 'Analytics-informed decisions'
      },
      {
        teamType: 'individual',
        approach: 'Intuition and experience based',
        tools: ['Excel', 'Personal judgment'],
        coordination: 'Self-managed decisions'
      }
    ]
  },
  {
    id: 'handoff-documentation',
    title: 'Handoff & Documentation',
    timeframe: 'Transition Phase',
    description: 'Information transfer from manual to automation teams',
    universalPattern: 'UNIVERSAL: Manual QA documents requirements → Information transferred via export/meetings → Automation QA interprets requirements',
    patternType: 'divergent',
    divergencePoints: [
      'Handoff methods vary dramatically: Excel exports, Confluence docs, BA meetings, tool linking',
      'Information depth ranges from minimal exports to comprehensive documentation',
      'Formality varies from informal discussions to structured meetings'
    ],
    personas: [
      {
        persona: 'manual-qa',
        activities: [
          'Export test cases',
          'Create handoff documentation'
        ],
        tools: ['Excel export', 'Confluence pages', 'Tool linking'],
        painPoints: [
          'Export to Excel major pain point',
          'Manual effort',
          'Information loss'
        ]
      },
      {
        persona: 'business-analyst',
        activities: [
          'Facilitate handoff meetings',
          'Document requirements'
        ],
        tools: ['Confluence', 'documentation tools'],
        painPoints: [
          'Manual meeting coordination',
          'Information silos'
        ]
      },
      {
        persona: 'automation-qa',
        activities: [
          'Receive automation requests',
          'Clarify requirements'
        ],
        tools: ['Multiple tools for context gathering'],
        painPoints: [
          'Context switching overhead',
          'Incomplete information'
        ]
      }
    ],
    painPoints: [
      {
        id: 'information-silos',
        title: 'Information Lives in Multiple Systems',
        description: 'Information scattered across systems requiring manual aggregation',
        severity: 'HIGH',
        frequency: 'WEEKLY',
        priority: 'P1',
        developmentSprint: 2,
        affectedCustomers: 5,
        customerEvidence: [
          {
            customer: 'ClarisHealth',
            quote: 'Export to Excel (major pain point, acts as backlog)',
            impact: 'Manual export effort and context loss',
            context: 'Enterprise formal handoff'
          },
          {
            customer: 'Icon PLC',
            quote: 'BA-facilitated meetings, Confluence documentation',
            impact: 'Manual coordination overhead',
            context: 'Business analyst facilitated process'
          }
        ],
        testOpsFeatures: [
          {
            id: 'seamless-handoff',
            title: 'Seamless Handoff Workflow',
            description: 'Direct test case transfer with context preservation',
            implementationArea: 'Workflow Management'
          }
        ]
      }
    ],
    handoffs: [
      {
        from: 'manual-qa',
        to: 'business-analyst',
        information: 'Test case details and context',
        method: 'Documentation, meeting preparation'
      },
      {
        from: 'business-analyst',
        to: 'automation-qa',
        information: 'Structured requirements and context',
        method: 'Facilitated meetings, documentation'
      }
    ],
    testOpsMapping: {
      currentState: 'No handoff support in TestOps',
      gapAnalysis: 'Customers build export/import workarounds',
      opportunity: 'Native handoff workflow support',
      features: ['Seamless Handoff Workflows', 'Collaboration Hub', 'Unified Context']
    },
    teamVariations: [
      {
        teamType: 'enterprise',
        approach: 'BA-facilitated formal handoffs',
        tools: ['Confluence', 'Excel exports', 'Formal meetings'],
        coordination: 'Structured process with documentation'
      },
      {
        teamType: 'early',
        approach: 'Single person handles both sides',
        tools: ['Confluence', 'Personal notes'],
        coordination: 'Self-handoff with documentation'
      }
    ]
  },
  {
    id: 'automation-development',
    title: 'Automation Development',
    timeframe: 'Script Creation Phase',
    description: 'Development of automation scripts with progress tracking',
    universalPattern: 'UNIVERSAL: Automation QA develops scripts → Manual QA continues testing → QA Manager tracks progress manually via Excel',
    patternType: 'universal',
    personas: [
      {
        persona: 'automation-qa',
        activities: [
          'Develop automation scripts',
          'Create test data',
          'Link to manual tests'
        ],
        tools: ['Katalon Studio'],
        painPoints: [
          'Manual linking to original test cases',
          'Script organization challenges'
        ]
      },
      {
        persona: 'manual-qa',
        activities: [
          'Continue manual testing',
          'Provide clarifications'
        ],
        tools: ['Original test management tools'],
        painPoints: [
          'No visibility into automation progress',
          'Duplicate effort risk'
        ]
      },
      {
        persona: 'qa-manager',
        activities: [
          'Track automation progress',
          'Report to stakeholders'
        ],
        tools: ['Excel calculations', 'Custom dashboards'],
        painPoints: [
          'Manual progress calculation',
          'Time-consuming reporting'
        ]
      }
    ],
    painPoints: [
      {
        id: 'manual-progress-calculation',
        title: 'Manual Progress Calculation',
        description: 'All customers manually calculate automation progress for stakeholder reporting',
        severity: 'HIGH',
        frequency: 'WEEKLY',
        priority: 'P1',
        developmentSprint: 1,
        affectedCustomers: 6,
        customerEvidence: [
          {
            customer: 'ClarisHealth',
            quote: 'Automation progress and coverage calculated manually via Excel. Time-consuming',
            impact: 'Hours per stakeholder report',
            context: 'Enterprise stakeholder management'
          }
        ],
        testOpsFeatures: [
          {
            id: 'automated-reporting',
            title: 'Automated Reporting Dashboard',
            description: 'Real-time progress dashboards with stakeholder views',
            implementationArea: 'Reporting & Analytics'
          }
        ]
      }
    ],
    handoffs: [
      {
        from: 'automation-qa',
        to: 'manual-qa',
        information: 'Clarification requests and progress updates',
        method: 'Direct communication, progress notifications'
      },
      {
        from: 'qa-manager',
        to: 'automation-qa',
        information: 'Progress tracking requests and stakeholder needs',
        method: 'Regular check-ins, reporting requirements'
      }
    ],
    testOpsMapping: {
      currentState: 'Basic script development with manual tracking',
      gapAnalysis: 'No progress visibility or automated reporting',
      opportunity: 'Integrated development with real-time tracking',
      features: ['Auto-linking', 'Progress Visibility', 'Automated Reporting']
    },
    teamVariations: [
      {
        teamType: 'hybrid',
        approach: 'Specialized automation team with progress tracking',
        tools: ['Katalon Studio', 'Excel reporting'],
        coordination: 'Regular progress meetings'
      },
      {
        teamType: 'individual',
        approach: 'Single person development with self-tracking',
        tools: ['Development tools', 'Personal tracking'],
        coordination: 'Self-managed progress'
      }
    ]
  },
  {
    id: 'status-synchronization',
    title: 'Status Synchronization',
    timeframe: 'Completion Phase',
    description: 'Critical phase where automation completion must be synchronized with manual test status',
    universalPattern: 'UNIVERSAL: All teams manually update status when automation completes → Manual QAs risk duplicate work → QA Managers track coverage manually',
    patternType: 'universal',
    personas: [
      {
        persona: 'automation-qa',
        activities: [
          'Complete automation scripts',
          'Update manual test status'
        ],
        tools: ['Manual status updates across tools'],
        painPoints: [
          'Forgotten status updates cause wasted effort',
          'Manual synchronization required'
        ]
      },
      {
        persona: 'manual-qa',
        activities: [
          'Avoid duplicate testing',
          'Focus on non-automated areas'
        ],
        tools: ['Multiple tools to check status'],
        painPoints: [
          'Risk of testing already-automated cases',
          'Tool context switching'
        ]
      },
      {
        persona: 'qa-manager',
        activities: [
          'Validate completion',
          'Update metrics'
        ],
        tools: ['Manual tracking systems'],
        painPoints: [
          'Inaccurate coverage metrics',
          'Delayed reporting'
        ]
      }
    ],
    painPoints: [
      {
        id: 'status-sync-productivity-loss',
        title: 'Status Synchronization Productivity Loss',
        description: 'Forgotten status updates cause direct productivity loss across all team types',
        severity: 'CRITICAL',
        frequency: 'DAILY',
        priority: 'P1',
        developmentSprint: 1,
        affectedCustomers: 6,
        customerEvidence: [
          {
            customer: 'Temple & Webster',
            quote: 'If automation QA forgets to update the tagging... their effort is wasted because automated test should have been executed instead',
            impact: 'Direct productivity loss and wasted effort',
            context: 'Large hybrid team with role specialization'
          }
        ],
        testOpsFeatures: [
          {
            id: 'auto-synchronization',
            title: 'Automated Status Synchronization',
            description: 'Eliminate manual status updates with automated sync',
            implementationArea: 'Core Platform'
          }
        ]
      }
    ],
    handoffs: [
      {
        from: 'automation-qa',
        to: 'manual-qa',
        information: 'Automation completion status',
        method: 'Manual tool updates, notifications',
        painPoint: 'Forgotten updates cause duplicate work'
      }
    ],
    testOpsMapping: {
      currentState: 'No automated synchronization capabilities',
      gapAnalysis: 'Critical gap causing universal productivity loss',
      opportunity: 'Bi-directional automated status synchronization',
      features: ['Auto-synchronization', 'Unified Status View', 'Real-time Metrics']
    },
    teamVariations: [
      {
        teamType: 'hybrid',
        approach: 'Cross-role status updates with high coordination needs',
        tools: ['Multiple status tracking systems'],
        coordination: 'Complex multi-person synchronization'
      },
      {
        teamType: 'individual',
        approach: 'Self-synchronization but still manual',
        tools: ['Personal tracking systems'],
        coordination: 'Self-managed but error-prone'
      }
    ]
  },
  {
    id: 'regression-integration',
    title: 'Regression Suite Integration',
    timeframe: 'Maintenance Phase',
    description: 'Integration into regression suites and ongoing maintenance',
    universalPattern: 'UNIVERSAL: Automation QA adds to regression suites → Executes at critical points → QA Manager analyzes failures manually',
    patternType: 'hybrid',
    divergencePoints: [
      'Execution scale varies dramatically: Single QA manual runs vs 1000+ automated parallel execution',
      'TestOps usage: Early teams avoid it, Enterprise teams struggle with instability',
      'Failure analysis: Simple manual review vs complex enterprise triage processes'
    ],
    personas: [
      {
        persona: 'automation-qa',
        activities: [
          'Add to regression suites',
          'Schedule execution',
          'Maintain scripts'
        ],
        tools: ['Katalon Studio', 'TestCloud', 'TestOps'],
        painPoints: [
          'TestOps unstable for enterprise scale',
          'Poor performance at scale'
        ]
      },
      {
        persona: 'qa-manager',
        activities: [
          'Monitor execution results',
          'Analyze failures'
        ],
        tools: ['TestOps', 'Custom reporting'],
        painPoints: [
          'Poor filtering capabilities',
          'Manual failure analysis'
        ]
      },
      {
        persona: 'developer',
        activities: [
          'Access regression results',
          'Fix automation breaks'
        ],
        tools: ['CI/CD integration'],
        painPoints: [
          'Limited automation visibility',
          'Delayed feedback'
        ]
      }
    ],
    painPoints: [
      {
        id: 'enterprise-scale-reliability',
        title: 'TestOps Enterprise Performance Issues',
        description: 'Enterprise customers experience daily instability with TestOps for large-scale automation execution',
        severity: 'CRITICAL',
        frequency: 'DAILY',
        priority: 'P2',
        developmentSprint: 3,
        affectedCustomers: 2,
        customerEvidence: [
          {
            customer: 'Security Bank',
            quote: 'TestOps every day is unstable enough for the enterprise',
            impact: 'Platform abandonment risk',
            context: '1000+ test cases running weekly, 40-60 coalition run in parallel'
          },
          {
            customer: 'Security Bank',
            quote: 'Cannot find HTML report by suite name... need to find one by one',
            impact: 'Manual search through large result sets',
            context: 'Enterprise-scale result management challenges'
          }
        ],
        testOpsFeatures: [
          {
            id: 'enterprise-performance',
            title: 'Enterprise Performance Platform',
            description: 'High-performance parallel execution for 1000+ tests with reliable infrastructure',
            implementationArea: 'Infrastructure'
          },
          {
            id: 'advanced-search',
            title: 'Advanced Search & Filtering',
            description: 'Efficient result management and search capabilities for large test suites',
            implementationArea: 'User Experience'
          }
        ]
      },
      {
        id: 'poor-failure-analysis',
        title: 'Poor Automation Failure Analysis Tools',
        description: 'QA managers struggle with manual failure investigation in large regression suites',
        severity: 'HIGH',
        frequency: 'WEEKLY',
        priority: 'P2',
        developmentSprint: 4,
        affectedCustomers: 4,
        customerEvidence: [
          {
            customer: 'Security Bank',
            quote: 'We spend significant time investigating automation failures manually',
            impact: 'Time-consuming failure triage',
            context: 'Large-scale regression suite management'
          },
          {
            customer: 'Temple & Webster',
            quote: 'When tests fail in our regression suite, it takes time to figure out if it is real failure or test issue',
            impact: 'Delayed feedback to development',
            context: 'Scheduled regression execution pressure'
          }
        ],
        testOpsFeatures: [
          {
            id: 'intelligent-failure-analysis',
            title: 'Intelligent Failure Analysis',
            description: 'Automated failure categorization and root cause analysis',
            implementationArea: 'Analytics'
          }
        ]
      }
    ],
    handoffs: [
      {
        from: 'automation-qa',
        to: 'qa-manager',
        information: 'Execution results and failure analysis',
        method: 'Automated reports, failure notifications'
      },
      {
        from: 'qa-manager',
        to: 'developer',
        information: 'Critical failure alerts and impact assessment',
        method: 'CI/CD integration, direct communication'
      }
    ],
    testOpsMapping: {
      currentState: 'Limited enterprise performance, basic failure analysis',
      gapAnalysis: 'Cannot support enterprise scale reliably',
      opportunity: 'High-performance enterprise-grade platform',
      features: ['Enterprise Performance', 'Advanced Filtering', 'Developer Integration']
    },
    teamVariations: [
      {
        teamType: 'enterprise',
        approach: 'Large-scale continuous execution',
        tools: ['TestCloud', 'TestOps', 'Enterprise CI/CD'],
        coordination: 'Production-grade automation management'
      },
      {
        teamType: 'early',
        approach: 'Basic regression tracking',
        tools: ['Confluence', 'Basic execution'],
        coordination: 'Simple manual management'
      }
    ]
  },
  {
    id: 'change-management',
    title: 'Change Management',
    timeframe: 'Evolution Phase',
    description: 'Handling requirement changes and their impact on automation',
    universalPattern: 'UNIVERSAL: Product Owner introduces changes → Manual QA updates tests → Automation QA reacts in crisis mode',
    patternType: 'universal',
    personas: [
      {
        persona: 'product-owner',
        activities: [
          'Introduce requirement changes',
          'Communicate impact'
        ],
        tools: ['Jira', 'Communication tools'],
        painPoints: [
          'Automation impact unclear',
          'No proactive communication'
        ]
      },
      {
        persona: 'manual-qa',
        activities: [
          'Update manual test cases',
          'Communicate changes'
        ],
        tools: ['Manual coordination'],
        painPoints: [
          'Informal change communication',
          'Reactive updates'
        ]
      },
      {
        persona: 'automation-qa',
        activities: [
          'Update automation scripts',
          'Maintain regression suites'
        ],
        tools: ['Crisis mode response'],
        painPoints: [
          'Unexpected changes force sprint goal abandonment',
          'Reactive crisis management'
        ]
      }
    ],
    painPoints: [
      {
        id: 'reactive-change-management',
        title: 'Reactive Change Management',
        description: 'Change management is reactive, causing automation team crisis situations',
        severity: 'CRITICAL',
        frequency: 'MONTHLY',
        priority: 'P2',
        developmentSprint: 4,
        affectedCustomers: 3,
        customerEvidence: [
          {
            customer: 'Temple & Webster',
            quote: 'We needed to switch focus... not prepared for changes like that',
            impact: 'Sprint goals abandoned, emergency response',
            context: 'Major unexpected requirement changes'
          }
        ],
        testOpsFeatures: [
          {
            id: 'proactive-change-management',
            title: 'Proactive Change Management',
            description: 'Early change detection and impact planning',
            implementationArea: 'Change Management'
          }
        ]
      }
    ],
    handoffs: [
      {
        from: 'product-owner',
        to: 'manual-qa',
        information: 'Change requirements and rationale',
        method: 'Informal communication, late notification'
      },
      {
        from: 'manual-qa',
        to: 'automation-qa',
        information: 'Change impact on test cases',
        method: 'Crisis communication, urgent coordination'
      }
    ],
    testOpsMapping: {
      currentState: 'No change management support',
      gapAnalysis: 'Reactive crisis mode is universal pattern',
      opportunity: 'Proactive change impact analysis and coordination',
      features: ['Change Impact Analysis', 'Proactive Change Management', 'Change Coordination']
    },
    teamVariations: [
      {
        teamType: 'hybrid',
        approach: 'Complex coordination across 13-person team',
        tools: ['Multiple communication channels'],
        coordination: 'Complex multi-role change management'
      },
      {
        teamType: 'enterprise',
        approach: 'Formal change processes with automation impact',
        tools: ['Enterprise change management'],
        coordination: 'Structured but often reactive'
      }
    ]
  }
]