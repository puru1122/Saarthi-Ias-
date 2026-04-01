export default function RiversPage() {
  const rivers = [
    {name:'Ganga', length:'2,525 km', origin:'Gangotri glacier, Uttarakhand', joins:'Bay of Bengal', type:'Himalayan — perennial', tributaries:'Yamuna, Ghaghra, Son, Kosi', states:'Uttarakhand, UP, Bihar, WB', pyq:'2023, 2021, 2019, 2016', color:'bg-blue-500', light:'bg-blue-50', text:'text-blue-700'},
    {name:'Brahmaputra', length:'2,900 km', origin:'Mansarovar lake, Tibet', joins:'Bay of Bengal via Bangladesh', type:'Himalayan — perennial', tributaries:'Dibang, Lohit, Subansiri', states:'Arunachal Pradesh, Assam', pyq:'2022, 2020, 2017, 2013', color:'bg-violet-500', light:'bg-violet-50', text:'text-violet-700'},
    {name:'Indus', length:'3,180 km', origin:'Mansarovar, Tibet', joins:'Arabian Sea', type:'Himalayan — perennial', tributaries:'Chenab, Ravi, Beas, Sutlej', states:'Ladakh, Himachal, Punjab', pyq:'2023, 2020, 2018, 2015', color:'bg-teal-500', light:'bg-teal-50', text:'text-teal-700'},
    {name:'Godavari', length:'1,465 km', origin:'Trimbakeshwar, Nasik', joins:'Bay of Bengal', type:'Peninsular — seasonal', tributaries:'Pranhita, Indravati, Manjra', states:'Maharashtra, Telangana, AP', pyq:'2023, 2021, 2018, 2014', color:'bg-orange-500', light:'bg-orange-50', text:'text-orange-700'},
    {name:'Krishna', length:'1,400 km', origin:'Mahabaleshwar, Western Ghats', joins:'Bay of Bengal', type:'Peninsular — seasonal', tributaries:'Tungabhadra, Bhima, Musi', states:'Maharashtra, Karnataka, AP', pyq:'2022, 2019, 2016', color:'bg-amber-500', light:'bg-amber-50', text:'text-amber-700'},
    {name:'Cauvery', length:'800 km', origin:'Talakaveri, Coorg, Karnataka', joins:'Bay of Bengal', type:'Peninsular — seasonal', tributaries:'Hemavati, Shimsha, Arkavathi', states:'Karnataka, Tamil Nadu', pyq:'2023, 2020, 2017, 2014', color:'bg-red-500', light:'bg-red-50', text:'text-red-700'},
    {name:'Narmada', length:'1,312 km', origin:'Amarkantak plateau, MP', joins:'Arabian Sea', type:'Peninsular — flows west', tributaries:'Tawa, Hiran, Barna', states:'MP, Maharashtra, Gujarat', pyq:'2022, 2018, 2015', color:'bg-green-500', light:'bg-green-50', text:'text-green-700'},
    {name:'Mahanadi', length:'858 km', origin:'Sihawa, Chhattisgarh', joins:'Bay of Bengal', type:'Peninsular — seasonal', tributaries:'Seonath, Ib, Mand', states:'Chhattisgarh, Odisha', pyq:'2021, 2017, 2013', color:'bg-pink-500', light:'bg-pink-50', text:'text-pink-700'},
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
          <a href="/gk" className="text-xs text-gray-400 hover:text-gray-600">← GK Infographics</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Rivers & Water Bodies</div>
          <div className="text-sm text-gray-500 mt-1">8 major rivers · Origins · Tributaries · PYQ years</div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">8</div>
            <div className="text-xs text-gray-400 mt-1">Major rivers</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">3</div>
            <div className="text-xs text-gray-400 mt-1">Himalayan rivers</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">5</div>
            <div className="text-xs text-gray-400 mt-1">Peninsular rivers</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">22+</div>
            <div className="text-xs text-gray-400 mt-1">PYQs in 20 years</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {rivers.map((river) => (
            <div key={river.name} className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-2 h-8 rounded-full ${river.color}`}></div>
                <div>
                  <div className="text-base font-semibold text-gray-900">{river.name}</div>
                  <div className="text-xs text-gray-400">{river.length} · {river.type}</div>
                </div>
                <div className={`ml-auto text-xs px-2 py-1 rounded-full ${river.light} ${river.text} font-medium`}>
                  PYQ: {river.pyq}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                <div className="flex justify-between text-sm border-b border-gray-50 pb-1">
                  <span className="text-gray-400">Origin</span>
                  <span className="text-gray-700 font-medium text-right">{river.origin}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-50 pb-1">
                  <span className="text-gray-400">Joins</span>
                  <span className="text-gray-700 font-medium text-right">{river.joins}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-50 pb-1">
                  <span className="text-gray-400">Tributaries</span>
                  <span className="text-gray-700 font-medium text-right">{river.tributaries}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-50 pb-1">
                  <span className="text-gray-400">States</span>
                  <span className="text-gray-700 font-medium text-right">{river.states}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-blue-900">Test yourself on Rivers</div>
            <div className="text-xs text-blue-600 mt-1">10 PYQ-based questions · Instant answers</div>
          </div>
          <a href="/gk" className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
            Start quiz
          </a>
        </div>
      </div>
    </div>
  )
}