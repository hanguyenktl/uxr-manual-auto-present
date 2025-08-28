import { TrendingUp, Users, Building2, Briefcase, Zap, AlertCircle, BarChart3, FileSpreadsheet } from 'lucide-react'

export default function CompellingHook() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-8 mb-8">
      {/* Three Key Pain Points */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
          Three Universal Patterns Blocking TestOps Growth
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Manual Status Updates</h3>
              <p className="text-sm text-gray-600">Every single customer manually updates automation status after test runs</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
              <BarChart3 className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Missing KPI Tracking</h3>
              <p className="text-sm text-gray-600">Teams lack structured ways to track automation KPIs despite them being universally used for performance metrics</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
              <FileSpreadsheet className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Excel Dependency</h3>
              <p className="text-sm text-gray-600">Excel remains essential for coordination across all customer segments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Credibility */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Validated Across 6 Customer Segments</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">ClarisHealth</div>
              <div className="text-sm text-gray-600">Enterprise healthcare</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Building2 className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Security Bank</div>
              <div className="text-sm text-gray-600">1000+ test cases</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
            <div className="p-2 bg-green-100 rounded-lg">
              <Briefcase className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Temple & Webster</div>
              <div className="text-sm text-gray-600">13-person e-commerce team</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Building2 className="h-4 w-4 text-orange-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Icon PLC</div>
              <div className="text-sm text-gray-600">Medium enterprise</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Briefcase className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Siddharth</div>
              <div className="text-sm text-gray-600">Small ERP team</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Zap className="h-4 w-4 text-yellow-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Skedulo</div>
              <div className="text-sm text-gray-600">Startup, single QA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Range Validation & Stakes */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-blue-200">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">
            <span className="font-semibold text-green-600">Universal patterns</span> across startup to enterprise
          </span>
        </div>
        <div className="text-sm text-gray-700">
          <span className="font-semibold text-blue-600">11 validated pain points</span> → Q1 roadmap priorities
        </div>
      </div>
    </div>
  )
}