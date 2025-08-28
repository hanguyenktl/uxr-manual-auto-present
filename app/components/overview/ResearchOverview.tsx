import { FileText, Users, Calendar, Target, TrendingUp, Lightbulb } from 'lucide-react'

export default function ResearchOverview() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Research Overview & Key Deliverables</h2>
        <p className="text-gray-600">
          Comprehensive UX research analyzing manual-to-automation workflows across diverse customer segments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Research Methodology */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Research Methodology</h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 6 customer interviews conducted + 2 SE internal interviews</li>
            <li>• 8 workflow stages mapped</li>
            <li>• Cross-customer pattern validation</li>
          </ul>
        </div>

        {/* Key Deliverables */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Key Deliverables</h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Universal pain pattern analysis</li>
            <li>• Priority matrix (11 validated points)</li>
            <li>• User journey workflow map</li>
            <li>• Team structure variation study</li>
          </ul>
        </div>

        {/* Strategic Outcomes */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Strategic Outcomes</h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Roadmap prioritization recommendations</li>
            <li>• Enterprise adoption strategy</li>
            <li>• Market segment insights</li>
          </ul>
        </div>

        {/* Research Impact */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            <h3 className="font-semibold text-gray-900">Research Impact</h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Universal patterns: 6/6 affecting all customers</li>
            <li>• Critical workflow blockers identified</li>
            <li>• Enterprise performance risks validated</li>
            <li>• Adoption barrier root causes found</li>
          </ul>
        </div>

        {/* Timeline & Context */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-indigo-600" />
            <h3 className="font-semibold text-gray-900">Timeline & Context</h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Research conducted: Aug 2025</li>
            <li>• Focus: Manual-to-automation workflows</li>
            <li>• Goal: Q1-Q2 roadmap prioritization</li>
          </ul>
        </div>

        {/* Key Insights Preview */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            <h3 className="font-semibold text-gray-900">Critical Insights</h3>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Status sync failures: 6/6 customers</li>
            <li>• Tool fragmentation: 3-5 tools each</li>
            <li>• Enterprise abandonment risks</li>
            <li>• Excel dependency as growth blocker</li>
          </ul>
        </div>
      </div>
    </div>
  )
}