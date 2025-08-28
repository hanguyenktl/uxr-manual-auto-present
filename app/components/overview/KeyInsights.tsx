import { AlertTriangle, Target } from 'lucide-react'

export default function KeyInsights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Universal Workflow Blockers */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Universal Workflow Blockers</h3>
        </div>
        <ul className="text-sm text-gray-600 space-y-4">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="font-medium text-gray-900">Status synchronization failures</div>
              <div className="text-gray-600">Manual updates after every automation run (6/6 customers)</div>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="font-medium text-gray-900">Manual progress reporting overhead</div>
              <div className="text-gray-600">Hours spent weekly calculating coverage metrics (6/6 customers)</div>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="font-medium text-gray-900">Tool fragmentation tax</div>
              <div className="text-gray-600">Context switching across 3-5 tools daily</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Strategic Growth Opportunities */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Target className="h-5 w-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Strategic Growth Opportunities</h3>
        </div>
        <ul className="text-sm text-gray-600 space-y-4">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="font-medium text-gray-900">Enterprise performance optimization</div>
              <div className="text-gray-600">Scale to 1000+ tests without instability issues</div>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="font-medium text-gray-900">Seamless automation adoption</div>
              <div className="text-gray-600">Remove Excel dependency and learning curve barriers</div>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <div className="font-medium text-gray-900">Unified workflow platform</div>
              <div className="text-gray-600">Consolidate manual + automation coordination</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}