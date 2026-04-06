export default function SchedulesPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Schedules of the Constitution</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018, 2015</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">12 schedules</div><div className="text-xs text-gray-400 mt-1">Total in Constitution</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Originally 8</div><div className="text-xs text-gray-400 mt-1">At time of adoption</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">4 added later</div><div className="text-xs text-gray-400 mt-1">9th, 10th, 11th, 12th</div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                All 12 Schedules
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {num:'1st', content:'Names of States and Union Territories — 28 states + 8 UTs', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800'},
                  {num:'2nd', content:'Salaries and allowances of constitutional post holders — President, VP, Governors, Speakers, SC/HC judges', color:'bg-purple-50 border-purple-200', tcolor:'text-purple-800'},
                  {num:'3rd', content:'Forms of oaths and affirmations — for President, VP, ministers, MPs, judges', color:'bg-green-50 border-green-200', tcolor:'text-green-800'},
                  {num:'4th', content:'Allocation of seats in Rajya Sabha — how many seats each state gets', color:'bg-teal-50 border-teal-200', tcolor:'text-teal-800'},
                  {num:'5th', content:'Administration and control of Scheduled Areas and Scheduled Tribes', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800'},
                  {num:'6th', content:'Administration of Tribal Areas in Assam, Meghalaya, Tripura and Mizoram', color:'bg-orange-50 border-orange-200', tcolor:'text-orange-800'},
                  {num:'7th', content:'3 Legislative Lists — Union List (98), State List (59), Concurrent List (52)', color:'bg-red-50 border-red-200', tcolor:'text-red-800'},
                  {num:'8th', content:'22 official languages of India — originally 14, now 22', color:'bg-pink-50 border-pink-200', tcolor:'text-pink-800'},
                  {num:'9th', content:'Laws protected from judicial review — land reforms, property laws. Added by 1st Amendment 1951. Laws after 24 April 1973 can be reviewed (Waman Rao case).', color:'bg-rose-50 border-rose-200', tcolor:'text-rose-800'},
                  {num:'10th', content:'Anti-defection law — grounds for disqualification of MPs and MLAs. Added by 52nd Amendment 1985.', color:'bg-violet-50 border-violet-200', tcolor:'text-violet-800'},
                  {num:'11th', content:'29 subjects transferred to Panchayats under 73rd Amendment 1992 — agriculture, education, roads etc.', color:'bg-indigo-50 border-indigo-200', tcolor:'text-indigo-800'},
                  {num:'12th', content:'18 subjects transferred to Urban Local Bodies under 74th Amendment 1992 — urban planning, roads, public health etc.', color:'bg-cyan-50 border-cyan-200', tcolor:'text-cyan-800'},
                ].map((s) => (
                  <div key={s.num} className={`border rounded-xl p-3 flex gap-3 ${s.color}`}>
                    <div className={`text-sm font-bold shrink-0 w-8 ${s.tcolor}`}>{s.num}</div>
                    <div className="text-xs text-gray-600">{s.content}</div>
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
                  {label:'1st', detail:'States & UTs', color:'bg-blue-50 text-blue-700 border-blue-200'},
                  {label:'2nd', detail:'Salaries', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  {label:'3rd', detail:'Oaths', color:'bg-green-50 text-green-700 border-green-200'},
                  {label:'4th', detail:'RS seats', color:'bg-teal-50 text-teal-700 border-teal-200'},
                  {label:'5th & 6th', detail:'Tribal areas', color:'bg-amber-50 text-amber-700 border-amber-200'},
                  {label:'7th', detail:'3 lists', color:'bg-red-50 text-red-700 border-red-200'},
                  {label:'8th', detail:'22 languages', color:'bg-pink-50 text-pink-700 border-pink-200'},
                  {label:'9th', detail:'Protected laws', color:'bg-rose-50 text-rose-700 border-rose-200'},
                  {label:'10th', detail:'Anti-defection', color:'bg-violet-50 text-violet-700 border-violet-200'},
                  {label:'11th', detail:'29 Panchayat subjects', color:'bg-indigo-50 text-indigo-700 border-indigo-200'},
                  {label:'12th', detail:'18 ULB subjects', color:'bg-cyan-50 text-cyan-700 border-cyan-200'},
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
                  {year:'2021 Prelims', q:'Which schedule of the Constitution contains the anti-defection law?'},
                  {year:'2018 Prelims', q:'The 8th Schedule of the Indian Constitution deals with which of the following?'},
                  {year:'2015 Prelims', q:'Laws placed in the 9th Schedule can be challenged in courts on what grounds?'},
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
                  {q:'9th Schedule laws and judicial review after 24 April 1973', prob:78},
                  {q:'8th Schedule — demand for inclusion of new languages', prob:70},
                  {q:'7th Schedule — should education move from Concurrent to Union List', prob:65},
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
          <a href="/subjects/polity/12" className="text-sm text-blue-600 hover:text-blue-700">← Amendment Procedure</a>
          <div className="text-xs text-gray-400">Topic 13 of 20</div>
          <a href="/subjects/polity/14" className="text-sm text-blue-600 hover:text-blue-700">Writs →</a>
        </div>
      </div>
    </div>
  )
}