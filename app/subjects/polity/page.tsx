export default function PolityPage() {
  const topics = [
    {id:1, name:'Constitution — Overview', desc:'Sources, features, nature of Indian Constitution', pyq:'2023, 2021, 2019', difficulty:'Beginner', done:true},
    {id:2, name:'Preamble', desc:'Keywords, significance, amendments to Preamble', pyq:'2022, 2020, 2017', difficulty:'Beginner', done:true},
    {id:3, name:'Fundamental Rights', desc:'Articles 12–35, types, limitations, writs', pyq:'2023, 2022, 2021', difficulty:'Intermediate', done:true},
    {id:4, name:'DPSP', desc:'Articles 36–51, types, conflict with FRs', pyq:'2022, 2020, 2018', difficulty:'Intermediate', done:false},
    {id:5, name:'Fundamental Duties', desc:'Article 51A, 11 duties, 42nd Amendment', pyq:'2021, 2018, 2015', difficulty:'Beginner', done:false},
    {id:6, name:'Parliament', desc:'Lok Sabha, Rajya Sabha, sessions, bills, committees', pyq:'2023, 2021, 2019', difficulty:'Intermediate', done:false},
    {id:7, name:'President & PM', desc:'Powers, election, removal, relationship', pyq:'2022, 2020, 2018', difficulty:'Intermediate', done:false},
    {id:8, name:'Judiciary', desc:'Supreme Court, High Courts, judicial review, PIL', pyq:'2023, 2021, 2019', difficulty:'Intermediate', done:false},
    {id:9, name:'Federalism', desc:'Centre-State relations, Inter-state council, Zonal councils', pyq:'2022, 2020, 2017', difficulty:'Intermediate', done:false},
    {id:10, name:'Local Bodies', desc:'73rd & 74th Amendments, Panchayati Raj, Urban local bodies', pyq:'2023, 2021, 2018', difficulty:'Beginner', done:false},
    {id:11, name:'Emergency Provisions', desc:'Articles 352–360, 3 types of emergency, safeguards', pyq:'2022, 2019, 2016', difficulty:'Intermediate', done:false},
    {id:12, name:'Amendment Procedure', desc:'Article 368, types of amendments, Basic Structure doctrine', pyq:'2023, 2020, 2017', difficulty:'Advanced', done:false},
    {id:13, name:'Schedules', desc:'All 12 schedules and what they contain', pyq:'2021, 2018, 2015', difficulty:'Beginner', done:false},
    {id:14, name:'Writs', desc:'5 writs — Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto', pyq:'2023, 2022, 2020', difficulty:'Intermediate', done:false},
    {id:15, name:'Election Commission', desc:'Composition, powers, Model Code of Conduct, EVM', pyq:'2022, 2019, 2016', difficulty:'Beginner', done:false},
    {id:16, name:'Anti-defection Law', desc:'10th Schedule, 52nd Amendment, disqualification grounds', pyq:'2021, 2018', difficulty:'Intermediate', done:false},
    {id:17, name:'Money Bill', desc:'Article 110, difference from Finance Bill, Speaker role', pyq:'2023, 2020', difficulty:'Intermediate', done:false},
    {id:18, name:'RTI Act', desc:'2005 Act, exemptions, CIC, recent amendments', pyq:'2022, 2019, 2016', difficulty:'Beginner', done:false},
    {id:19, name:'Lokpal & Lokayukta', desc:'Lokpal Act 2013, jurisdiction, composition', pyq:'2021, 2018', difficulty:'Beginner', done:false},
    {id:20, name:'e-Governance', desc:'Digital India, MyGov, UMANG, CoWIN, GeM portal', pyq:'2022, 2020, 2017', difficulty:'Beginner', done:false},
  ]
  const diffColor: Record<string,string> = {Beginner:'bg-green-50 text-green-700', Intermediate:'bg-amber-50 text-amber-700', Advanced:'bg-red-50 text-red-700'}
  const done = topics.filter(t => t.done).length
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100">
          <div className="text-lg font-semibold text-gray-900">Saarthi IAS</div>
          <div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div>
        </div>
        <nav className="flex-1 py-3">
          <div className="px-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Overview</div>
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-purple-400"></span>Learning path</a>
          <div className="px-3 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Study</div>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-amber-400"></span>PYQ bank</a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-violet-400"></span>Mock tests</a>
          <div className="px-3 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Stay updated</div>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-orange-400"></span>Current affairs</a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-teal-400"></span>Govt schemes</a>
          <a href="/gk" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-pink-400"></span>GK infographics</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="text-xs text-gray-400">UPSC CSE 2027</div>
          <div className="text-sm font-medium text-gray-800 mt-0.5">Aspirant · Level 2</div>
          <div className="mt-2 h-1 bg-gray-100 rounded-full"><div className="h-1 bg-blue-500 rounded-full w-1/4"></div></div>
          <div className="text-xs text-gray-400 mt-1">28% complete</div>
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="mb-6">
          <a href="/subjects" className="text-xs text-gray-400 hover:text-gray-600">← Subjects</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Polity & Governance</div>
          <div className="text-sm text-gray-500 mt-1">GS-II · 20 topics · Highest weightage in UPSC</div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-2xl font-medium text-gray-900">20</div><div className="text-xs text-gray-400 mt-1">Total topics</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-2xl font-medium text-green-600">{done}</div><div className="text-xs text-gray-400 mt-1">Done</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-2xl font-medium text-gray-900">{20-done}</div><div className="text-xs text-gray-400 mt-1">Remaining</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-2xl font-medium text-amber-600">{Math.round((done/20)*100)}%</div><div className="text-xs text-gray-400 mt-1">Complete</div></div>
        </div>
        <div className="flex flex-col gap-3">
          {topics.map((topic) => (
            <a href={`/subjects/polity/${topic.id}`} key={topic.id} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:border-blue-200 transition-all no-underline block">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0 ${topic.done ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {topic.done ? '✓' : topic.id}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">{topic.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{topic.desc}</div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${diffColor[topic.difficulty]}`}>{topic.difficulty}</span>
                <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">PYQ: {topic.pyq}</span>
              </div>
              <span className="text-gray-300 text-lg">›</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

