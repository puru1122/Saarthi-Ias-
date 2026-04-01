export default function GKPage() {
  const categories = [
    {icon:'🌊', name:'Rivers & Water Bodies', sub:'Rivers · Lakes · Dams', color:'bg-blue-500', link:'/gk/rivers'},
    {icon:'⛰️', name:'Mountains & Passes', sub:'Peaks · Ranges · Passes', color:'bg-gray-400', link:'#'},
    {icon:'🪨', name:'Soils & Agriculture', sub:'Soil types · Crops · Seasons', color:'bg-amber-500', link:'#'},
    {icon:'🌦️', name:'Climate & Monsoon', sub:'Seasons · Monsoon · Winds', color:'bg-teal-500', link:'#'},
    {icon:'🐯', name:'Wildlife & Forests', sub:'National Parks · Species', color:'bg-green-500', link:'#'},
    {icon:'💎', name:'Minerals & Industries', sub:'Iron · Coal · Belts', color:'bg-orange-500', link:'#'},
    {icon:'📜', name:'Constitution Basics', sub:'Articles · Writs · Schedules', color:'bg-violet-500', link:'/gk/constitution'},
    {icon:'🏛️', name:'Ancient & Medieval', sub:'Dynasties · Battles', color:'bg-pink-500', link:'#'},
    {icon:'🇮🇳', name:'Freedom Struggle', sub:'Acts · Movements · Leaders', color:'bg-red-500', link:'#'},
    {icon:'📊', name:'Economy & Banking', sub:'GDP · RBI · Budget', color:'bg-amber-600', link:'#'},
    {icon:'🔬', name:'Science & Technology', sub:'Space · Defence · Bio', color:'bg-blue-600', link:'#'},
    {icon:'🏆', name:'Awards & Honours', sub:'Bharat Ratna · Nobel', color:'bg-yellow-500', link:'#'},
    {icon:'🌍', name:'International Orgs', sub:'UN · WTO · IMF · SAARC', color:'bg-teal-600', link:'#'},
    {icon:'🏅', name:'Sports & Games', sub:'Olympics · CWG · National', color:'bg-purple-500', link:'#'},
    {icon:'🎭', name:'Art Culture & Dance', sub:'Classical · Folk · UNESCO', color:'bg-pink-600', link:'#'},
    {icon:'📚', name:'Books & Authors', sub:'Famous works · Nobel', color:'bg-gray-600', link:'#'},
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100">
          <div className="text-lg font-semibold text-gray-900">Saarthi IAS</div>
          <div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div>
        </div>
        <nav className="flex-1 py-3">
          <div className="px-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Overview</div>
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
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
          <a href="/gk" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium">
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
          <a href="/" className="text-xs text-gray-400 hover:text-gray-600">← Dashboard</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">GK Infographics</div>
          <div className="text-sm text-gray-500 mt-1">Visual learning · 16 categories · All UPSC tagged</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat) => (
            <a href={cat.link} key={cat.name} className="bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-all block no-underline">
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-sm font-medium text-gray-900 leading-tight">{cat.name}</div>
              <div className="text-xs text-gray-400 mt-1">{cat.sub}</div>
              <div className={`h-0.5 rounded-full mt-3 ${cat.color}`}></div>
            </a>
          ))}
        </div>
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-blue-900">Full GK quiz — test yourself</div>
            <div className="text-xs text-blue-600 mt-1">10 questions · All categories · PYQ based</div>
          </div>
          <a href="/" className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
            Start quiz
          </a>
        </div>
      </div>
    </div>
  )
}