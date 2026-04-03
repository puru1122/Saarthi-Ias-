export default function ConstitutionOverviewPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Constitution — Overview</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2023, 2021, 2019</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">26 Nov 1949</div><div className="text-xs text-gray-400 mt-1">Adopted</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">26 Jan 1950</div><div className="text-xs text-gray-400 mt-1">Enforced</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">2 yrs 11 m 18 d</div><div className="text-xs text-gray-400 mt-1">Time to draft</div></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What is the Indian Constitution?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The Constitution of India is the supreme law of the land. It lays down the framework for the political system, defines the powers and duties of the government, and guarantees fundamental rights to citizens. It came into force on <strong>26 January 1950</strong> — celebrated as Republic Day.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg mb-3">
                <p className="text-sm text-blue-800"><strong>Key fact:</strong> India has the longest written constitution in the world. Originally it had 395 articles, 22 parts and 8 schedules. Now it has 448 articles, 25 parts and 12 schedules.</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Constitution was drafted by the <strong>Constituent Assembly</strong> under the chairmanship of Dr. B.R. Ambedkar (Drafting Committee). Dr. Rajendra Prasad was the President of the Constituent Assembly.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Sources of the Indian Constitution
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {source:'Government of India Act 1935', borrowed:'Federal scheme, Office of Governor, Judiciary, Public Service Commissions, Emergency provisions', color:'bg-blue-50 border-blue-200'},
                  {source:'British Constitution', borrowed:'Parliamentary system, Rule of Law, Single citizenship, Cabinet system, Writs', color:'bg-green-50 border-green-200'},
                  {source:'USA Constitution', borrowed:'Fundamental Rights, Independence of Judiciary, Judicial review, Preamble, Impeachment', color:'bg-purple-50 border-purple-200'},
                  {source:'Irish Constitution', borrowed:'Directive Principles of State Policy, Nomination of members to Rajya Sabha', color:'bg-amber-50 border-amber-200'},
                  {source:'Canadian Constitution', borrowed:'Federal system with strong centre, Residuary powers with centre', color:'bg-orange-50 border-orange-200'},
                  {source:'Australian Constitution', borrowed:'Concurrent List, Joint sitting of Parliament, Freedom of trade', color:'bg-pink-50 border-pink-200'},
                  {source:'Soviet Constitution (USSR)', borrowed:'Fundamental Duties, Ideals of justice in Preamble', color:'bg-red-50 border-red-200'},
                  {source:'German Constitution', borrowed:'Suspension of Fundamental Rights during Emergency', color:'bg-gray-50 border-gray-200'},
                ].map((s) => (
                  <div key={s.source} className={`border rounded-lg p-3 ${s.color}`}>
                    <div className="text-xs font-semibold text-gray-800 mb-1">{s.source}</div>
                    <div className="text-xs text-gray-600">{s.borrowed}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                Key features of the Constitution
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {feature:'Longest written constitution', detail:'448 articles, 25 parts, 12 schedules, 106 amendments'},
                  {feature:'Federal with unitary bias', detail:'Quasi-federal — strong centre but states have autonomy'},
                  {feature:'Parliamentary system', detail:'Executive responsible to legislature — borrowed from UK'},
                  {feature:'Independent judiciary', detail:'Supreme Court as guardian of Constitution'},
                  {feature:'Fundamental Rights', detail:'Justiciable rights — Part III, Articles 12–35'},
                  {feature:'Universal adult franchise', detail:'Every citizen above 18 can vote — 61st Amendment 1988'},
                  {feature:'Single citizenship', detail:'Only Indian citizenship — no state citizenship'},
                  {feature:'Secular state', detail:'No state religion — equal respect for all religions'},
                ].map((f) => (
                  <div key={f.feature} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-gray-800 mb-1">{f.feature}</div>
                    <div className="text-xs text-gray-500">{f.detail}</div>
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
                  {q:'Adopted vs Enforced', a:'Adopted on 26 Nov 1949 (Constitution Day). Enforced on 26 Jan 1950 (Republic Day).'},
                  {q:'Drafting Committee chair', a:'Dr. B.R. Ambedkar. President of Constituent Assembly was Dr. Rajendra Prasad.'},
                  {q:'Original vs Current', a:'Originally 395 articles, 22 parts, 8 schedules. Now 448 articles, 25 parts, 12 schedules.'},
                  {q:'Rigid vs Flexible', a:'India has a mix — some provisions need special majority, some need state ratification too.'},
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
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Indian Constitution</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'Adopted', detail:'26 Nov 1949', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Enforced', detail:'26 Jan 1950', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Articles', detail:'448 total', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Parts', detail:'25 parts', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Schedules', detail:'12 schedules', color:'bg-orange-50 text-orange-700 border-orange-200'},
                    {label:'Amendments', detail:'106 so far', color:'bg-pink-50 text-pink-700 border-pink-200'},
                    {label:'Drafter', detail:'Dr. B.R. Ambedkar', color:'bg-teal-50 text-teal-700 border-teal-200'},
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
                  {year:'2023 Prelims', q:'Which country\'s constitution was the biggest source for the Indian Constitution?'},
                  {year:'2021 Prelims', q:'The concept of Judicial Review in India is borrowed from which country?'},
                  {year:'2019 Mains GS-II', q:'The Indian Constitution is often described as quasi-federal. Examine this statement.'},
                  {year:'2017 Prelims', q:'The Directive Principles of State Policy in the Indian Constitution are borrowed from which country?'},
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
                  {q:'Sources of Constitution — which feature borrowed from which country', prob:85},
                  {q:'Basic Structure doctrine and its impact on constitutional amendments', prob:78},
                  {q:'Constituent Assembly — composition, debates, role of Dr. Ambedkar', prob:70},
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
          <div className="text-sm text-gray-300">← Previous</div>
          <div className="text-xs text-gray-400">Topic 1 of 20</div>
          <a href="/subjects/polity/2" className="text-sm text-blue-600 hover:text-blue-700">Preamble →</a>
        </div>
      </div>
    </div>
  )
}

