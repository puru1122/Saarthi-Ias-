export default function FundamentalRightsPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Fundamental Rights</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Articles 12–35</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: Every year</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Part III</div><div className="text-xs text-gray-400 mt-1">Constitution</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">6 types</div><div className="text-xs text-gray-400 mt-1">Categories</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">14 PYQs</div><div className="text-xs text-gray-400 mt-1">In 20 years</div></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What are Fundamental Rights?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Fundamental Rights are basic rights guaranteed to every citizen of India under <strong>Part III (Articles 12–35)</strong> of the Constitution. They are called "fundamental" because they are essential for the all-round development of individuals and are protected by the courts.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg mb-3">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> Article 13 is the guardian of Fundamental Rights — any law that violates Part III is void ab initio (void from the beginning).</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unlike ordinary legal rights, Fundamental Rights are <strong>justiciable</strong> — meaning a person can directly approach the Supreme Court (Art. 32) or High Court (Art. 226) if these rights are violated.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                6 Categories of Fundamental Rights
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {num:'14–18', title:'Right to Equality', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800', points:['Equality before law (Art. 14)','No discrimination on religion, race, caste, sex, place of birth (Art. 15)','Equality of opportunity in public employment (Art. 16)','Abolition of untouchability (Art. 17)','Abolition of titles (Art. 18)']},
                  {num:'19–22', title:'Right to Freedom', color:'bg-green-50 border-green-200', tcolor:'text-green-800', points:['6 freedoms under Art. 19 — speech, assembly, association, movement, residence, profession','Right to life and personal liberty (Art. 21) — most expanded article','Right to education (Art. 21A) — added by 86th Amendment 2002','Protection against arrest (Art. 22)']},
                  {num:'23–24', title:'Right against Exploitation', color:'bg-orange-50 border-orange-200', tcolor:'text-orange-800', points:['Prohibition of trafficking and forced labour (Art. 23)','Prohibition of child labour in factories (Art. 24) — below 14 years']},
                  {num:'25–28', title:'Right to Freedom of Religion', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800', points:['Freedom of conscience and free profession of religion (Art. 25)','Freedom to manage religious affairs (Art. 26)','Freedom from paying taxes for religion (Art. 27)','Freedom from religious instruction in state-funded schools (Art. 28)']},
                  {num:'29–30', title:'Cultural & Educational Rights', color:'bg-pink-50 border-pink-200', tcolor:'text-pink-800', points:['Protection of interests of minorities (Art. 29)','Right of minorities to establish educational institutions (Art. 30)']},
                  {num:'32', title:'Right to Constitutional Remedies', color:'bg-purple-50 border-purple-200', tcolor:'text-purple-800', points:['"Heart and soul of Constitution" — Dr. B.R. Ambedkar','Right to move Supreme Court for enforcement of FRs','5 writs: Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto','Cannot be suspended except during Emergency (Art. 352)']},
                ].map((cat) => (
                  <div key={cat.num} className={`border rounded-xl p-3 ${cat.color}`}>
                    <div className={`text-sm font-semibold mb-2 ${cat.tcolor}`}>Art. {cat.num} — {cat.title}</div>
                    <ul className="flex flex-col gap-1">
                      {cat.points.map((p) => (
                        <li key={p} className="text-xs text-gray-600 flex items-start gap-1.5">
                          <span className="mt-1 w-1 h-1 rounded-full bg-gray-400 shrink-0"></span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Key Supreme Court Cases
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {case:'Kesavananda Bharati (1973)', point:'Established Basic Structure doctrine — Parliament cannot amend FRs to destroy the basic structure'},
                  {case:'Maneka Gandhi (1978)', point:'Expanded Art. 21 — procedure must be just, fair and reasonable. Not just any procedure.'},
                  {case:'Golaknath (1967)', point:'Parliament cannot amend FRs — later overruled by Kesavananda Bharati'},
                  {case:'Minerva Mills (1980)', point:'Reaffirmed Basic Structure — balance between FRs and DPSPs must be maintained'},
                  {case:'Puttaswamy (2017)', point:'Right to Privacy is a Fundamental Right under Art. 21 — landmark for digital age'},
                ].map((c) => (
                  <div key={c.case} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-semibold text-blue-700 shrink-0 w-44">{c.case}</div>
                    <div className="text-xs text-gray-600">{c.point}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-red-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'FR vs DPSP', a:'FRs are justiciable, DPSPs are not. But DPSPs can be used to restrict FRs (Art. 31C).'},
                  {q:'Art. 32 vs Art. 226', a:'Art. 32 is SC only for FR violations. Art. 226 is HC for any legal right — wider scope.'},
                  {q:'Suspended during Emergency?', a:'Art. 19 FRs suspended during Art. 352. Art. 20 & 21 can NEVER be suspended.'},
                  {q:'Available to foreigners?', a:'Arts. 14, 20, 21, 22, 25, 27, 28 are available to all persons. Rest only to citizens.'},
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
              <div className="flex flex-col items-center gap-1">
                <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium text-center">Fundamental Rights</div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="grid grid-cols-2 gap-1.5 w-full">
                  {[
                    {label:'Equality', art:'14–18', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Freedom', art:'19–22', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Exploitation', art:'23–24', color:'bg-orange-50 text-orange-700 border-orange-200'},
                    {label:'Religion', art:'25–28', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Culture', art:'29–30', color:'bg-pink-50 text-pink-700 border-pink-200'},
                    {label:'Remedies', art:'32', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  ].map((n) => (
                    <div key={n.label} className={`border rounded-lg p-2 text-center ${n.color}`}>
                      <div className="text-xs font-medium">{n.label}</div>
                      <div className="text-xs opacity-70">Art. {n.art}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 w-full bg-gray-50 rounded-lg p-2 text-center">
                  <div className="text-xs text-gray-500">Guardian: Art. 13</div>
                  <div className="text-xs text-gray-400">Enforcer: Art. 32</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Previous year questions</div>
              <div className="flex flex-col gap-2">
                {[
                  {year:'2023 Prelims', q:'Which Article was described as the "heart and soul" of the Constitution by Dr. Ambedkar?'},
                  {year:'2022 Mains GS-II', q:'Examine how Art. 21 has evolved through judicial interpretation to include the right to privacy.'},
                  {year:'2021 Prelims', q:'Art. 20 and 21 cannot be suspended even during National Emergency. True or False?'},
                  {year:'2019 Prelims', q:'Which of the following writs can be issued against private bodies?'},
                  {year:'2018 Mains GS-II', q:'Discuss the Basic Structure doctrine. How has it protected Fundamental Rights from being amended away?'},
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
                  {q:'Technology and Right to Privacy under Art. 21 — AI surveillance angle', prob:88},
                  {q:'Electoral bonds judgment — Art. 19 right to information vs anonymity', prob:82},
                  {q:'Art. 32 vs Art. 226 — scope and difference', prob:74},
                  {q:'Fundamental Rights available to foreigners — which ones and why', prob:65},
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

            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Current affairs link</div>
              <div className="flex flex-col gap-2">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5 cursor-pointer">
                  <div className="text-xs font-medium text-blue-800">Electoral bonds judgment (2024)</div>
                  <div className="text-xs text-blue-600 mt-0.5">Art. 19(1)(a) — right to information connects here</div>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-lg p-2.5 cursor-pointer">
                  <div className="text-xs font-medium text-green-800">PM Vidyalaxmi scheme (2024)</div>
                  <div className="text-xs text-green-600 mt-0.5">Art. 21A — Right to Education connects here</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-4 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/polity/2" className="text-sm text-gray-500 hover:text-gray-700">← Preamble</a>
          <div className="text-xs text-gray-400">Topic 3 of 20</div>
          <a href="/subjects/polity/4" className="text-sm text-blue-600 hover:text-blue-700">DPSP →</a>
        </div>
      </div>
    </div>
  )
}
