# UXR Implementation Instructions for Claude

## Project Setup Command

When starting a new UXR visualization project, add this section to your CLAUDE.md file:

```markdown
## UXR Visualization Project

You are implementing research outcome visualizations following the UXR Core Principles framework. Reference `/claude/tasks/UXR_CORE_PRINCIPLES.md` for foundational concepts.

### Implementation Requirements
- Follow established priority distribution framework (≤30% P1, 40-60% P2, 10-30% P3)
- Apply three-layer UXR framework (Pattern Recognition → Prioritization → Evidence)
- Use Tier 1 technology stack unless justified escalation
- Implement progressive disclosure with business-aligned visual positioning

### Deliverables Expected
- Interactive Journey Map showing universal patterns vs divergences
- Business Priority Matrix with evidence-backed prioritization
- Progressive disclosure from overview to detailed customer evidence
- Mobile-responsive, presentation-ready output

### Reference Documents
- Core principles: `/claude/tasks/UXR_CORE_PRINCIPLES.md`
- Presentation approach: `/claude/tasks/UXR_PRESENTATION_GUIDE.md`
```

## Detailed Implementation Protocol

### Phase 1: Research Analysis & Data Modeling
**Your First Actions:**
1. **Analyze research documents** to identify:
   - Universal patterns (consistent across all customers)
   - Divergence points (team/context-specific differences)  
   - Pain points with customer evidence and impact quantification
   - Workflow stages and persona interactions

2. **Create type-safe data structures** with:
   ```typescript
   interface PainPoint {
     id: string
     title: string
     description: string
     severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
     frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'RARELY'
     priority: 'P1' | 'P2' | 'P3'
     affectedCustomers: number
     customerEvidence: CustomerEvidence[]
     testOpsFeatures: Feature[] // or relevant feature mapping
   }
   ```

3. **Apply Priority Distribution Logic** (see UXR_CORE_PRINCIPLES.md for detailed criteria):
   - Follow established P1/P2/P3 distribution framework
   - **Critical Rule**: Adoption barriers are P2, not P4

### Phase 2: Journey Map Implementation
**Build Compact Accordion-Style View:**
- Pattern indicators (Universal/Hybrid/Divergent) prominently featured
- Attention level calculation based on pain point severity + frequency
- Customer coverage metrics for validation
- Collapsible persona sections for progressive disclosure
- **Anti-Pattern**: Avoid complex timelines requiring scrolling

**Technical Stack:**
- React functional components with TypeScript
- Tailwind CSS for styling
- Radix UI Accordion for progressive disclosure
- Lucide React for icons

### Phase 3: Priority Matrix Implementation
**Business Priority Zones (NOT pure Kano matrix):**
- **Top-Right**: P1 Core Workflow Blockers
- **Top-Left**: P2 Adoption & Growth Barriers
- **Bottom-Left**: P3 Strategic Improvements
- **Bottom-Right**: Future/Low Priority (usually empty)

**Key Features:**
- Large, clickable dots (20-32px) with persistent labels
- Smart circular arrangement for overlapping items
- Ring colors indicate priority (P1=red, P2=orange, P3=blue)
- Dot colors indicate severity level
- Click → detailed panel with customer evidence

### Phase 4: Integration & Polish
**Single Page Architecture:**
- Toggle between Journey Map and Priority Matrix views
- Consistent visual language and color coding
- Responsive design for presentation displays
- Export-ready styling

## Technical Implementation Guidelines

### Technology Selection
**Reference UXR_CORE_PRINCIPLES.md for complete technology decision framework**
- Default to Tier 1 stack (React + TypeScript + Tailwind + Shadcn/ui)
- Escalate only when clearly justified by user needs
- Document any departures from simple stack

### Priority Assignment
**Apply priority assignment logic from UXR_CORE_PRINCIPLES.md**
- Use established P1/P2/P3 criteria
- Be strict about P1 threshold (≤30%)
- Remember: Adoption barriers are P2 growth blockers

### Visual Implementation
**Follow visual design principles from UXR_CORE_PRINCIPLES.md**
- Business priority zones over mathematical positioning
- Progressive disclosure implementation
- Immediate comprehension over impressive animations

## Implementation Quality Assurance

### Avoid Common Pitfalls
**Reference UXR_CORE_PRINCIPLES.md for complete pitfall guide**
- Watch for "Everything is P1" problem
- Avoid academic matrix confusion
- Don't undervalue adoption barriers
- Resist tool complexity trap

## Quality Gates

### Before Presenting
- [ ] Priority distribution follows ≤30%/40-60%/10-30% guideline
- [ ] Every insight backed by specific customer evidence
- [ ] Visual hierarchy matches business importance
- [ ] No explanation needed for main patterns
- [ ] Mobile responsive and presentation-ready

### Success Metrics
**Reference UXR_CORE_PRINCIPLES.md for complete success criteria**
- 2-minute stakeholder comprehension
- Clear decision support
- Evidence-based insights
- Action-oriented outcomes

## Example Invocation

When you receive research documents and this instruction set, respond with:

"I'll implement your UXR findings following the established framework:

1. **Research Analysis**: Identifying universal patterns, divergences, and evidence-backed pain points
2. **Priority Distribution**: Applying ≤30% P1, 40-60% P2, 10-30% P3 framework with business logic
3. **Journey Map**: Compact accordion view with pattern indicators and attention levels  
4. **Priority Matrix**: Business priority zones with interactive evidence panels
5. **Technology**: Starting with React + Tailwind + Shadcn/ui stack

I'll focus on business impact over research theater, ensuring immediate stakeholder comprehension and clear resource allocation guidance. Let me begin with analyzing your research documents..."

## Maintenance & Updates

### Data Updates
- Customer evidence should be directly editable in TypeScript files
- Priority assignments should have clear business rationale comments
- Pattern classifications should reference specific customer examples

### Technical Debt Prevention
- Avoid complex state management unless justified by user needs
- Document any departures from simple technology stack
- Maintain clear component boundaries for future updates

---

*This instruction set is based on TestOps UXR implementation learnings and should be refined based on future project outcomes.*