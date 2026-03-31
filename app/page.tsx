export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      <div className="w-56 bg-white border-r border-gray-100 flex flex-col">
        <div className="px-4 py-5 border-b border-gray-100">
          <div className="text-lg font-semibold text-gray-900">Saarthi IAS</div>
          <div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div>
        </div>
        <nav className="flex-1 py-3">
          <div className="px-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Overview</div>
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>Learning path
          </a>
          <div className="px-3 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Study</div>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects and notes
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>PYQ bank
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span>Mock tests
          </a>
          <div className="px-3 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Stay updated</div>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>Current affairs
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>Govt schemes
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-pink-400"></span>GK infographics
          </a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="text-xs text-gray-400">UPSC CSE 2027</div>
          <div className="text-sm font-medium text-gray-800 mt-0.5">Aspirant · Level 2</div>
          <div className="mt-2 h-1 bg-gray-100 rounded-full">
            <div className="h-1 bg-blue-500 rounded-full w-1/4"></div>
          </div>
          <div className="text-xs text-gray-400 mt-1">28% complete</div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="mb-6">
          <div className="text-2xl font-semibold text-gray-900">Good morning, Aspirant</div>
          <div className="text-sm text-gray-500 mt-1">730 days to UPSC CSE 2027 · Keep the streak alive</div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">42</div>
            <div className="text-xs text-gray-400 mt-1">Topics done</div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">318</div>
            <div className="text-xs text-gray-400 mt-1">PYQs solved</div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">14</div>
            <div className="text-xs text-gray-400 mt-1">Day streak</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <div className="text-sm font-medium text-gray-800 mb-3">Continue studying</div>
            <div className="border border-gray-100 rounded-lg p-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">Fundamental Rights</div>
                <div className="text-xs text-gray-400 mt-0.5">Polity · Level 2 · 68% done</div>
              </div>
              <span className="text-gray-300 text-lg">›</span>
            </div>
            <div className="mt-3 h-1 bg-gray-100 rounded-full">
              <div className="h-1 bg-blue-500 rounded-full w-2/3"></div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <div className="text-sm font-medium text-gray-800 mb-3">Today in current affairs</div>
            <div className="text-sm font-medium text-gray-900 mb-1">PM launches solar scheme expansion</div>
            <div className="text-xs text-gray-500 mb-2">Free solar panels for 1 crore households</div>
            <div className="flex gap-1.5">
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700">Environment</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">Schemes</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <div className="text-sm font-medium text-gray-800 mb-3">Predicted hot topics for 2027</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-xs bg-amber-50 text-amber-800 px-3 py-2 rounded-lg">Cooperative Federalism</div>
            <div className="text-xs bg-amber-50 text-amber-800 px-3 py-2 rounded-lg">Green Hydrogen Mission</div>
            <div className="text-xs bg-amber-50 text-amber-800 px-3 py-2 rounded-lg">Sedition Law Reform</div>
            <div className="text-xs bg-amber-50 text-amber-800 px-3 py-2 rounded-lg">AI Governance and Ethics</div>
            <div className="text-xs bg-amber-50 text-amber-800 px-3 py-2 rounded-lg">One Nation One Election</div>
            <div className="text-xs bg-amber-50 text-amber-800 px-3 py-2 rounded-lg">Judicial Reforms</div>
          </div>
        </div>
      </div>

    </div>
  )
}