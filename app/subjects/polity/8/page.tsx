export default function JudiciaryPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Judiciary</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Articles 124–147</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2023, 2021, 2019</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">34 judges</div>
            <div className="text-xs text-gray-400 mt-1">Supreme Court strength</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">Art. 124</div>
            <div className="text-xs text-gray-400 mt-1">SC establishment</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">65 years</div>
            <div className="text-xs text-gray-400 mt-1">Retirement age SC judges</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                Supreme Court of India
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The Supreme Court is the highest court of India and the guardian of the Constitution. It was established on <strong>26 January 1950</strong> under <strong>Article 124</strong>. It consists of the Chief Justice of India (CJI) and up to <strong>33 other judges</strong> (total 34).
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg mb-3">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> SC judges are appointed by the President in consultation with the CJI and collegium. The collegium system (not in Constitution — evolved through judicial decisions) gives judges primary say in their own appointments.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {label:'Appointment', val:'By President in consultation with CJI and collegium'},
                  {label:'Retirement age', val:'65 years — cannot practice in SC after retirement'},
                  {label:'Removal', val:'By President on address of Parliament — special majority — Art. 124(4)'},
                  {label:'Salary', val:'Charged to Consolidated Fund of India — not voted by Parliament'},
                ].map((r) => (
                  <div key={r.label} className="bg-blue-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-blue-800 mb-1">{r.label}</div>
                    <div className="text-xs text-gray-600">{r.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                Jurisdiction of Supreme Court
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {type:'Original jurisdiction (Art. 131)', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800', desc:'Disputes between Centre and States OR between two or more states. SC has exclusive original jurisdiction here — no other court can hear these.'},
                  {type:'Writ jurisdiction (Art. 32)', color:'bg-green-50 border-green-200', tcolor:'text-green-800', desc:'Issue writs for enforcement of Fundamental Rights — Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto. Art. 32 itself is a Fundamental Right — "heart and soul of Constitution".'},
                  {type:'Appellate jurisdiction (Art. 132–136)', color:'bg-purple-50 border-purple-200', tcolor:'text-purple-800', desc:'Hear appeals from High Courts in constitutional, civil and criminal matters. Art. 136 — Special Leave Petition (SLP) — can hear appeal from ANY court in India.'},
                  {type:'Advisory jurisdiction (Art. 143)', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800', desc:'President can seek SC opinion on any question of law or fact of public importance. SC opinion is advisory — not binding on President.'},
                  {type:'Review jurisdiction (Art. 137)', color:'bg-orange-50 border-orange-200', tcolor:'text-orange-800', desc:'SC can review its own judgments. Review petition must be filed within 30 days. Curative petition is the last resort after review.'},
                ].map((j) => (
                  <div key={j.type} className={`border rounded-xl p-3 ${j.color}`}>
                    <div className={`text-xs font-semibold mb-1 ${j.tcolor}`}>{j.type}</div>
                    <div className="text-xs text-gray-600">{j.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Judicial Review & PIL
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                  <div className="text-xs font-semibold text-green-800 mb-2">Judicial Review</div>
                  <ul className="flex flex-col gap-1">
                    {[
                      'Power to examine laws for constitutional validity',
                      'Borrowed from USA Constitution',
                      'Not explicitly mentioned — implied from Art. 13, 32, 226',
                      'Can strike down any law violating Constitution',
                      'Basic Structure cannot be amended even by Parliament',
                    ].map((p) => (
                      <li key={p} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="mt-1 w-1 h-1 rounded-full bg-green-400 shrink-0"></span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-3">
                  <div className="text-xs font-semibold text-teal-800 mb-2">Public Interest Litigation (PIL)</div>
                  <ul className="flex flex-col gap-1">
                    {[
                      'Any citizen can file PIL for public interest',
                      'Introduced by Justice P.N. Bhagwati in 1980s',
                      'Relaxed locus standi — even a postcard can be PIL',
                      'Used for environment, bonded labour, prison reforms',
                      'SC can suo motu take cognizance of issues',
                    ].map((p) => (
                      <li key={p} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="mt-1 w-1 h-1 rounded-full bg-teal-400 shrink-0"></span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'SC vs HC writ jurisdiction', a:'SC — Art. 32 — only for FR violations. HC — Art. 226 — for any legal right. HC has wider jurisdiction but SC is higher court.'},
                  {q:'Collegium system', a:'Not in Constitution. Evolved through Three Judges Cases (1981, 1993, 1998). CJI + 4 senior judges recommend appointments.'},
                  {q:'SLP vs Appeal', a:'Special Leave Petition (Art. 136) — discretionary power of SC. Can hear appeal from ANY court including tribunals.'},
                  {q:'Review vs Curative petition', a:'Review petition — filed within 30 days of judgment. Curative petition — last resort after review dismissed, to prevent miscarriage of justice.'},
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
                <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Supreme Court</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'Established', detail:'26 Jan 1950', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Judges', detail:'CJI + 33 others', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Retirement', detail:'65 years', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Original', detail:'Centre-State disputes', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Writ', detail:'Art. 32 — FRs', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Advisory', detail:'Art. 143 — not binding', color:'bg-orange-50 text-orange-700 border-orange-200'},
                    {label:'SLP', detail:'Art. 136 — any court', color:'bg-teal-50 text-teal-700 border-teal-200'},
                    {label:'Review', detail:'Art. 137 — own judgment', color:'bg-pink-50 text-pink-700 border-pink-200'},
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
                  {year:'2023 Mains GS-II', q:'The collegium system of judicial appointments has been criticized for lack of transparency. Examine the need for reform.'},
                  {year:'2021 Prelims', q:'With reference to the Supreme Court of India, which of the following is correct about its advisory jurisdiction?'},
                  {year:'2019 Mains GS-II', q:'Discuss the expanding scope of PIL in India. Has it become a tool of judicial overreach?'},
                  {year:'2017 Prelims', q:'Which of the following gives the Supreme Court power to hear appeals from any court in India?'},
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
                  {q:'Judicial reforms — collegium vs NJAC — way forward', prob:90},
                  {q:'Judicial activism vs judicial overreach — thin line', prob:82},
                  {q:'Pendency of cases in Indian judiciary — causes and solutions', prob:76},
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
          <a href="/subjects/polity/7" className="text-sm text-blue-600 hover:text-blue-700">← President & PM</a>
          <div className="text-xs text-gray-400">Topic 8 of 20</div>
          <a href="/subjects/polity/9" className="text-sm text-blue-600 hover:text-blue-700">Federalism →</a>
        </div>
      </div>
    </div>
  )
}
