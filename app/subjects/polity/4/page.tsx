export default function DPSPPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Directive Principles of State Policy</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Articles 36–51</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2020, 2018</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Part IV</div><div className="text-xs text-gray-400 mt-1">Constitution</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Ireland</div><div className="text-xs text-gray-400 mt-1">Borrowed from</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Non-justiciable</div><div className="text-xs text-gray-400 mt-1">Nature</div></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What are DPSPs?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Directive Principles of State Policy (DPSPs) are guidelines given to the central and state governments for making laws and policies. They are contained in <strong>Part IV (Articles 36–51)</strong> of the Constitution and are borrowed from the <strong>Irish Constitution</strong>.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg mb-3">
                <p className="text-sm text-amber-800"><strong>Key point:</strong> DPSPs are non-justiciable — they cannot be enforced by courts. But they are fundamental to governance and the state must apply them while making laws.</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dr. B.R. Ambedkar called DPSPs a <strong>"novel feature"</strong> of the Indian Constitution. Granville Austin described them as the <strong>"conscience of the Constitution"</strong>.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                3 types of DPSPs
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {type:'Socialistic DPSPs', color:'bg-green-50 border-green-200', tcolor:'text-green-800', articles:'Art. 38, 39, 39A, 41, 42, 43, 43A, 47', points:['Equal pay for equal work (Art. 39)', 'Right to work, education, public assistance (Art. 41)', 'Just and humane conditions of work (Art. 42)', 'Living wage for workers (Art. 43)', 'Participation of workers in management (Art. 43A)', 'Raise level of nutrition and public health (Art. 47)']},
                  {type:'Gandhian DPSPs', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800', articles:'Art. 40, 43, 43B, 46, 47, 48', points:['Organisation of village panchayats (Art. 40)', 'Promote cottage industries (Art. 43)', 'Promotion of cooperative societies (Art. 43B)', 'Promotion of educational and economic interests of SCs/STs (Art. 46)', 'Prohibition of cow slaughter (Art. 48)']},
                  {type:'Liberal-Intellectual DPSPs', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800', articles:'Art. 44, 45, 48A, 49, 50, 51', points:['Uniform Civil Code (Art. 44) — most controversial DPSP', 'Free and compulsory education for children (Art. 45) — now FR under Art. 21A', 'Protection of environment (Art. 48A) — added by 42nd Amendment', 'Protection of monuments (Art. 49)', 'Separation of judiciary from executive (Art. 50)', 'Promotion of international peace (Art. 51)']},
                ].map((t) => (
                  <div key={t.type} className={`border rounded-xl p-4 ${t.color}`}>
                    <div className={`text-sm font-semibold mb-1 ${t.tcolor}`}>{t.type}</div>
                    <div className="text-xs text-gray-500 mb-2">{t.articles}</div>
                    <ul className="flex flex-col gap-1">
                      {t.points.map((p) => (
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
                <span className="w-1 h-5 bg-red-500 rounded-full inline-block"></span>
                FR vs DPSP — The big conflict
              </div>
              <div className="flex flex-col gap-2 mb-3">
                {[
                  {case:'Champakam Dorairajan (1951)', point:'FRs prevail over DPSPs. Led to 1st Constitutional Amendment.'},
                  {case:'Golaknath (1967)', point:'Parliament cannot amend FRs to give effect to DPSPs.'},
                  {case:'Kesavananda Bharati (1973)', point:'Parliament can amend FRs but cannot destroy Basic Structure.'},
                  {case:'Minerva Mills (1980)', point:'Balance between FRs and DPSPs is part of Basic Structure — neither can override the other.'},
                ].map((c) => (
                  <div key={c.case} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-semibold text-red-700 shrink-0 w-44">{c.case}</div>
                    <div className="text-xs text-gray-600">{c.point}</div>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg">
                <p className="text-sm text-red-800"><strong>Current position:</strong> Art. 31C protects laws implementing DPSPs from being challenged on grounds of violating Arts. 14 and 19.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'FRs vs DPSPs', a:'FRs are negative (restrict state), DPSPs are positive (guide state). FRs justiciable, DPSPs not.'},
                  {q:'Most controversial DPSP', a:'Art. 44 — Uniform Civil Code. Applies to personal laws of all religions. Highly debated.'},
                  {q:'DPSP implemented as law', a:'Art. 45 (free education) became FR under Art. 21A by 86th Amendment 2002.'},
                  {q:'New DPSPs added', a:'42nd Amendment added Art. 39A (legal aid), 43A (worker participation), 48A (environment).'},
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
                <div className="bg-amber-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium">DPSPs — Part IV</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'Socialistic', detail:'Equality & welfare', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Gandhian', detail:'Villages & cottage', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Liberal', detail:'UCC, Environment', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Source', detail:'Irish Constitution', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Nature', detail:'Non-justiciable', color:'bg-red-50 text-red-700 border-red-200'},
                    {label:'Key quote', detail:'Conscience of Const.', color:'bg-gray-50 text-gray-700 border-gray-200'},
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
                  {year:'2022 Mains GS-II', q:'Discuss the relationship between Fundamental Rights and Directive Principles. Has the conflict been resolved?'},
                  {year:'2020 Prelims', q:'Which of the following is a Gandhian Directive Principle?'},
                  {year:'2018 Prelims', q:'Article 44 of the Constitution of India refers to which of the following?'},
                  {year:'2016 Mains GS-II', q:'Examine Art. 31C in light of Minerva Mills case. What is its current status?'},
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
                  {q:'Uniform Civil Code — current debate, recent Supreme Court observations', prob:90},
                  {q:'Balance between FRs and DPSPs — Basic Structure dimension', prob:78},
                  {q:'Art. 48A and environmental protection — judicial interpretation', prob:65},
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
          <a href="/subjects/polity/3" className="text-sm text-blue-600 hover:text-blue-700">← Fundamental Rights</a>
          <div className="text-xs text-gray-400">Topic 4 of 20</div>
          <a href="/subjects/polity/5" className="text-sm text-blue-600 hover:text-blue-700">Fundamental Duties →</a>
        </div>
      </div>
    </div>
  )
}

