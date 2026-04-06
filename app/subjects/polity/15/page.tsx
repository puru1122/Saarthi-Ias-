export default function ElectionCommissionPage() {
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
      <div className="flex-1 p-6 max-w-5xl">
        <div className="mb-4">
          <a href="/subjects/polity" className="text-xs text-gray-400 hover:text-gray-600">← Polity & Governance</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Election Commission</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Article 324</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019, 2016</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Art. 324</div><div className="text-xs text-gray-400 mt-1">ECI established</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">25 Jan 1950</div><div className="text-xs text-gray-400 mt-1">ECI founded</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Constitutional body</div><div className="text-xs text-gray-400 mt-1">Not statutory</div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What is the Election Commission?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The Election Commission of India (ECI) is a permanent constitutional body established under <strong>Article 324</strong>. It is responsible for administering election processes for Lok Sabha, Rajya Sabha, State Assemblies, President and Vice President elections.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> ECI does NOT conduct Panchayat and Municipal elections — those are conducted by State Election Commissions set up under Art. 243K (73rd Amendment).</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Composition & Appointment
              </div>
              <div className="flex flex-col gap-2 mb-3">
                {[
                  {label:'Chief Election Commissioner', detail:'Head of ECI · Appointed by President · Cannot be removed except like SC judge · Protected tenure'},
                  {label:'Election Commissioners', detail:'Currently 2 ECs · Appointed by President · Can be removed by President on CEC recommendation'},
                  {label:'Tenure', detail:'6 years OR 65 years of age — whichever is earlier'},
                  {label:'Salary', detail:'Charged to Consolidated Fund of India — ensures independence'},
                ].map((r) => (
                  <div key={r.label} className="bg-green-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-green-800 mb-1">{r.label}</div>
                    <div className="text-xs text-gray-600">{r.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                Powers & Functions
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {power:'Superintendence', detail:'Complete control over conduct of elections to Parliament and State Legislatures'},
                  {power:'Model Code of Conduct', detail:'Enforces MCC from announcement of elections — restricts ruling party from misusing power'},
                  {power:'Recognition of parties', detail:'Grants national/state party status based on vote share and seat criteria'},
                  {power:'Election symbols', detail:'Allots election symbols to parties and candidates'},
                  {power:'Delimitation', detail:'Works with Delimitation Commission for constituency boundaries'},
                  {power:'EVM & VVPAT', detail:'Introduced EVMs in 1982 (Parur constituency) · VVPAT for transparency'},
                ].map((p) => (
                  <div key={p.power} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-semibold text-violet-700 shrink-0 w-28">{p.power}</div>
                    <div className="text-xs text-gray-600">{p.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'ECI vs SEC', a:'ECI — constitutional body Art. 324 — conducts Parliament and Assembly elections. SEC — Art. 243K — conducts Panchayat and Municipal elections.'},
                  {q:'CEC removal', a:'CEC can only be removed by President on address of Parliament by special majority — same as SC judge. Very strong protection.'},
                  {q:'National vs State party', a:'National party — 6% votes + 4 seats in 4 states OR 2% LS seats from 3 states. State party — 6% votes + 2 seats in state.'},
                  {q:'2023 Amendment', a:'Chief Election Commissioner and other Election Commissioners Act 2023 — changed appointment process. Now a committee recommends — PM + Home Minister + Leader of Opposition.'},
                ].map((d) => (
                  <div key={d.q} className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                    <div className="text-xs font-semibold text-amber-800 mb-1">{d.q}</div>
                    <div className="text-xs text-gray-600">{d.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Mind map</div>
              <div className="flex flex-col gap-1.5">
                {[
                  {label:'Article', detail:'324', color:'bg-blue-50 text-blue-700 border-blue-200'},
                  {label:'Founded', detail:'25 Jan 1950', color:'bg-green-50 text-green-700 border-green-200'},
                  {label:'CEC tenure', detail:'6 yrs or 65 yrs', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  {label:'Removal', detail:'Like SC judge', color:'bg-red-50 text-red-700 border-red-200'},
                  {label:'NOT conducts', detail:'Panchayat elections', color:'bg-amber-50 text-amber-700 border-amber-200'},
                  {label:'MCC', detail:'Model Code of Conduct', color:'bg-teal-50 text-teal-700 border-teal-200'},
                  {label:'EVM', detail:'Since 1982', color:'bg-gray-50 text-gray-700 border-gray-200'},
                ].map((n) => (
                  <div key={n.label} className={`border rounded-lg p-2 flex justify-between items-center ${n.color}`}>
                    <div className="text-xs font-medium">{n.label}</div>
                    <div className="text-xs opacity-70">{n.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Previous year questions</div>
              <div className="flex flex-col gap-2">
                {[
                  {year:'2022 Mains GS-II', q:'Examine the independence of the Election Commission. What reforms are needed to strengthen it?'},
                  {year:'2019 Prelims', q:'Which of the following elections is NOT conducted by the Election Commission of India?'},
                  {year:'2016 Mains GS-II', q:'Discuss the role of Election Commission in ensuring free and fair elections in India.'},
                ].map((pyq) => (
                  <div key={pyq.year} className="border border-gray-100 rounded-lg p-2.5">
                    <div className="text-xs font-medium text-amber-700 mb-1">{pyq.year}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{pyq.q}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-amber-200 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-1"><span className="text-amber-500">★</span> Predicted for 2027</div>
              <div className="flex flex-col gap-2">
                {[
                  {q:'2023 EC Amendment Act — impact on ECI independence', prob:92},
                  {q:'One Nation One Election — ECI role and challenges', prob:88},
                  {q:'Electoral bonds and ECI — right to information in elections', prob:80},
                ].map((pred) => (
                  <div key={pred.q} className="bg-amber-50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-700 leading-relaxed mb-1.5">{pred.q}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-amber-100 rounded-full"><div className="h-1 bg-amber-400 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                      <span className="text-xs text-amber-700 font-medium">{pred.prob}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/polity/14" className="text-sm text-blue-600 hover:text-blue-700">← Writs</a>
          <div className="text-xs text-gray-400">Topic 15 of 20</div>
          <a href="/subjects/polity/16" className="text-sm text-blue-600 hover:text-blue-700">Anti-defection →</a>
        </div>
      </div>
    </div>
  )
}