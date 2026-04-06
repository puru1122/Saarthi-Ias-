export default function AmendmentPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Amendment Procedure</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full">Advanced</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Article 368</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2023, 2020, 2017</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">Art. 368</div>
            <div className="text-xs text-gray-400 mt-1">Amendment procedure</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">106</div>
            <div className="text-xs text-gray-400 mt-1">Amendments so far</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">3 methods</div>
            <div className="text-xs text-gray-400 mt-1">Simple, Special, Special+States</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What is Article 368?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Article 368 in Part XX of the Constitution gives Parliament the power to amend the Constitution. The amendment bill can be introduced in either house and must be passed by both houses separately. The President cannot withhold assent to a Constitutional Amendment Bill.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> India has a partly rigid, partly flexible Constitution. Different provisions require different amendment procedures — making it unique among world constitutions.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                3 Methods of Amendment
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    method:'Simple majority (outside Art. 368)',
                    majority:'More than 50% of members present and voting',
                    color:'bg-green-50 border-green-200',
                    tcolor:'text-green-800',
                    examples:['Admission of new states', 'Creation of new states', 'Abolition of Legislative Councils', 'Second Schedule — salaries', 'Quorum in Parliament', 'Rules of procedure in Parliament'],
                  },
                  {
                    method:'Special majority (Art. 368)',
                    majority:'2/3 of members present and voting + majority of total membership of each house',
                    color:'bg-blue-50 border-blue-200',
                    tcolor:'text-blue-800',
                    examples:['Fundamental Rights (Part III)', 'DPSP (Part IV)', 'All provisions not in other two categories', 'Most constitutional amendments use this method'],
                  },
                  {
                    method:'Special majority + ratification by half the states',
                    majority:'Special majority in Parliament + ratified by legislatures of at least half the states',
                    color:'bg-purple-50 border-purple-200',
                    tcolor:'text-purple-800',
                    examples:['Election of President (Art. 54, 55)', 'Extent of executive power of Centre and States', 'Supreme Court and High Courts (Arts. 124–147, 214–231)', '7th Schedule — Union, State, Concurrent Lists', 'Representation of states in Parliament', 'Art. 368 itself'],
                  },
                ].map((m) => (
                  <div key={m.method} className={`border rounded-xl p-4 ${m.color}`}>
                    <div className={`text-sm font-semibold mb-1 ${m.tcolor}`}>{m.method}</div>
                    <div className="text-xs text-gray-500 mb-2 italic">{m.majority}</div>
                    <ul className="flex flex-col gap-1">
                      {m.examples.map((e) => (
                        <li key={e} className="text-xs text-gray-600 flex items-start gap-1.5">
                          <span className="mt-1 w-1 h-1 rounded-full bg-gray-400 shrink-0"></span>{e}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-red-500 rounded-full inline-block"></span>
                Basic Structure Doctrine
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The Basic Structure doctrine was established in the landmark <strong>Kesavananda Bharati case (1973)</strong>. The Supreme Court held that while Parliament can amend any part of the Constitution, it cannot destroy or abrogate the <strong>basic structure</strong> of the Constitution.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg mb-3">
                <p className="text-sm text-red-800"><strong>Key point:</strong> The Basic Structure is not defined in the Constitution — it has been developed by the Supreme Court through various judgments. Parliament cannot amend these features even with special majority.</p>
              </div>
              <div className="text-sm font-semibold text-gray-800 mb-2">Elements of Basic Structure (as identified by SC)</div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Supremacy of Constitution',
                  'Republican and democratic form of government',
                  'Secular character',
                  'Separation of powers',
                  'Federal character',
                  'Unity and integrity of India',
                  'Judicial review',
                  'Rule of law',
                  'Free and fair elections',
                  'Independence of judiciary',
                  'Harmony between FRs and DPSPs',
                  'Limited power of Parliament to amend',
                ].map((e) => (
                  <span key={e} className="text-xs bg-red-50 text-red-700 border border-red-200 px-2 py-1 rounded-lg">{e}</span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Key cases on amendment power
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {case:'Shankari Prasad (1951)', point:'Parliament can amend FRs under Art. 368. Right to property can be amended.'},
                  {case:'Golaknath (1967)', point:'Parliament cannot amend FRs. FRs are beyond Parliament\'s amending power. Overruled later.'},
                  {case:'Kesavananda Bharati (1973)', point:'Parliament can amend any part including FRs but cannot destroy Basic Structure. Most important case.'},
                  {case:'Minerva Mills (1980)', point:'Art. 31C (protecting DPSP laws) struck down if it destroys Basic Structure. Balance is key.'},
                  {case:'Waman Rao (1981)', point:'Laws added to 9th Schedule after 24 April 1973 are subject to judicial review.'},
                ].map((c) => (
                  <div key={c.case} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-semibold text-amber-700 shrink-0 w-44">{c.case}</div>
                    <div className="text-xs text-gray-600">{c.point}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Mind map</div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-violet-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Art. 368</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'Simple majority', detail:'Outside Art. 368', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Special majority', detail:'2/3 + total majority', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Special + States', detail:'Half states ratify', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Basic Structure', detail:'Cannot be amended', color:'bg-red-50 text-red-700 border-red-200'},
                    {label:'Kesavananda', detail:'1973 landmark case', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Total amendments', detail:'106 so far', color:'bg-gray-50 text-gray-700 border-gray-200'},
                  ].map((n) => (
                    <div key={n.label} className={`border rounded-lg p-2 flex justify-between items-center ${n.color}`}>
                      <div className="text-xs font-medium">{n.label}</div>
                      <div className="text-xs opacity-70">{n.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Previous year questions</div>
              <div className="flex flex-col gap-2">
                {[
                  {year:'2023 Mains GS-II', q:'The Basic Structure doctrine has become the most powerful tool of judicial review. Critically examine.'},
                  {year:'2020 Prelims', q:'Which of the following requires ratification by legislatures of not less than half of the states?'},
                  {year:'2017 Mains GS-II', q:'Discuss the Kesavananda Bharati judgment. How did it change the relationship between Parliament and the Supreme Court?'},
                  {year:'2014 Prelims', q:'Consider Art. 368 of the Indian Constitution. Which of the following requires special majority plus state ratification?'},
                ].map((pyq) => (
                  <div key={pyq.year} className="border border-gray-100 rounded-lg p-2.5">
                    <div className="text-xs font-medium text-amber-700 mb-1">{pyq.year}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{pyq.q}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-amber-200 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-1">
                <span className="text-amber-500">★</span> Predicted for 2027
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {q:'Basic Structure and One Nation One Election — constitutional challenge', prob:88},
                  {q:'Can Parliament amend Art. 368 itself — limits of amending power', prob:80},
                  {q:'9th Schedule laws and judicial review after Waman Rao case', prob:72},
                ].map((pred) => (
                  <div key={pred.q} className="bg-amber-50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-700 leading-relaxed mb-1.5">{pred.q}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-amber-100 rounded-full">
                        <div className="h-1 bg-amber-400 rounded-full" style={{width:`${pred.prob}%`}}></div>
                      </div>
                      <span className="text-xs text-amber-700 font-medium">{pred.prob}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/polity/11" className="text-sm text-blue-600 hover:text-blue-700">← Emergency Provisions</a>
          <div className="text-xs text-gray-400">Topic 12 of 20</div>
          <a href="/subjects/polity/13" className="text-sm text-blue-600 hover:text-blue-700">Schedules →</a>
        </div>
      </div>
    </div>
  )
}