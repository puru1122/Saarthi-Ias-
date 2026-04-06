export default function EmergencyPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Emergency Provisions</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full">Articles 352–360</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019, 2016</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">3 types</div>
            <div className="text-xs text-gray-400 mt-1">National, State, Financial</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">Art. 352</div>
            <div className="text-xs text-gray-400 mt-1">National Emergency</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">44th Amendment</div>
            <div className="text-xs text-gray-400 mt-1">Added safeguards 1978</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-red-500 rounded-full inline-block"></span>
                3 Types of Emergency
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    type:'National Emergency — Art. 352',
                    grounds:'War, external aggression or armed rebellion (not internal disturbance — changed by 44th Amendment)',
                    proclaimed:'President on written advice of Cabinet',
                    approval:'Parliament within 1 month — special majority (2/3 present & voting + majority of total)',
                    duration:'6 months initially — can be extended indefinitely by 6-month Parliament approval',
                    effects:'Centre can legislate on State List · Art. 19 FRs suspended · Art. 20 & 21 cannot be suspended',
                    revocation:'President anytime OR Lok Sabha by simple majority (special provision — 44th Amendment)',
                    instances:'1962 (China war), 1971 (Bangladesh war), 1975 (internal disturbance — most controversial)',
                    color:'bg-red-50 border-red-200',
                    tcolor:'text-red-800',
                  },
                  {
                    type:'State Emergency — Art. 356 (President Rule)',
                    grounds:'Failure of constitutional machinery in state — Governor report or President satisfaction',
                    proclaimed:'President on Governor recommendation',
                    approval:'Parliament within 2 months — simple majority',
                    duration:'6 months initially — max 3 years total (with Parliament approval every 6 months)',
                    effects:'President assumes state govt functions · Parliament legislates for state · State Assembly suspended',
                    revocation:'President anytime. SC can review — Bommai case 1994 set limits.',
                    instances:'Used 100+ times. Bommai case (1994) made it harder to misuse.',
                    color:'bg-orange-50 border-orange-200',
                    tcolor:'text-orange-800',
                  },
                  {
                    type:'Financial Emergency — Art. 360',
                    grounds:'Financial stability or credit of India or any part threatened',
                    proclaimed:'President',
                    approval:'Parliament within 2 months — simple majority',
                    duration:'Indefinite — no maximum period specified',
                    effects:'Centre directs states on financial matters · Salaries of govt employees can be reduced · Money Bills need Presidential approval',
                    revocation:'President anytime',
                    instances:'Never proclaimed in India so far',
                    color:'bg-amber-50 border-amber-200',
                    tcolor:'text-amber-800',
                  },
                ].map((e) => (
                  <div key={e.type} className={`border rounded-xl p-4 ${e.color}`}>
                    <div className={`text-sm font-semibold mb-3 ${e.tcolor}`}>{e.type}</div>
                    <div className="flex flex-col gap-1.5">
                      {[
                        {label:'Grounds', val:e.grounds},
                        {label:'Proclaimed by', val:e.proclaimed},
                        {label:'Parliament approval', val:e.approval},
                        {label:'Duration', val:e.duration},
                        {label:'Effects', val:e.effects},
                        {label:'Instances', val:e.instances},
                      ].map((r) => (
                        <div key={r.label} className="flex gap-2 text-xs">
                          <span className="font-semibold text-gray-600 shrink-0 w-28">{r.label}:</span>
                          <span className="text-gray-600">{r.val}</span>
                        </div>
                      ))}
                    </div>
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
                  {q:'Art. 20 & 21 during Emergency', a:'Art. 20 (protection against conviction) and Art. 21 (right to life) CANNOT be suspended even during National Emergency. All other Art. 19 freedoms can be suspended.'},
                  {q:'44th Amendment changes', a:'Changed "internal disturbance" to "armed rebellion" for Art. 352. Cabinet must give written advice. Lok Sabha can revoke by simple majority.'},
                  {q:'Bommai case 1994', a:'SC held Art. 356 is subject to judicial review. Floor test must be held before dismissing state govt. President Rule cannot be used for political reasons.'},
                  {q:'Special majority for Art. 352', a:'2/3 of members present and voting PLUS majority of total membership of each house. Both Lok Sabha and Rajya Sabha must approve.'},
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
                <div className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Emergency Provisions</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'Art. 352', detail:'National Emergency', color:'bg-red-50 text-red-700 border-red-200'},
                    {label:'Art. 356', detail:'President Rule', color:'bg-orange-50 text-orange-700 border-orange-200'},
                    {label:'Art. 360', detail:'Financial Emergency', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Art. 20 & 21', detail:'Cannot be suspended', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'44th Amendment', detail:'Added safeguards 1978', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Bommai case', detail:'Art. 356 reviewable', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Financial Emg', detail:'Never proclaimed', color:'bg-gray-50 text-gray-700 border-gray-200'},
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
                  {year:'2022 Prelims', q:'Under which Article can the President proclaim Financial Emergency in India?'},
                  {year:'2019 Mains GS-II', q:'Discuss the safeguards added by the 44th Amendment to prevent misuse of Art. 352.'},
                  {year:'2016 Prelims', q:'During a National Emergency, which Fundamental Rights cannot be suspended?'},
                  {year:'2013 Mains GS-II', q:'Examine the Bommai judgment and its impact on Centre-State relations under Art. 356.'},
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
                  {q:'Misuse of Art. 356 — historical instances and judicial checks', prob:82},
                  {q:'Emergency and Fundamental Rights — what gets suspended and what does not', prob:78},
                  {q:'Financial Emergency — when can it be proclaimed and its effects', prob:65},
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
          <a href="/subjects/polity/10" className="text-sm text-blue-600 hover:text-blue-700">← Local Bodies</a>
          <div className="text-xs text-gray-400">Topic 11 of 20</div>
          <a href="/subjects/polity/12" className="text-sm text-blue-600 hover:text-blue-700">Amendment Procedure →</a>
        </div>
      </div>
    </div>
  )
}