export default function WritsPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Writs</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Art. 32 & 226</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2023, 2022, 2020</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">5 writs</div><div className="text-xs text-gray-400 mt-1">Total types</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Art. 32</div><div className="text-xs text-gray-400 mt-1">SC — only for FRs</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Art. 226</div><div className="text-xs text-gray-400 mt-1">HC — wider scope</div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                5 Types of Writs
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {writ:'Habeas Corpus', latin:'You shall have the body', use:'Issued to release a person from illegal detention or wrongful imprisonment', against:'State and private individuals both', scope:'Most widely used writ · Available even during emergency except Art. 352', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800'},
                  {writ:'Mandamus', latin:'We command', use:'Issued to command a public authority to perform its legal duty which it has failed to perform', against:'Public bodies, corporations, inferior courts · NOT against President, Governor, private individuals', scope:'Cannot be issued against a private person · Cannot compel discretionary duties', color:'bg-green-50 border-green-200', tcolor:'text-green-800'},
                  {writ:'Certiorari', latin:'To be certified / To be informed', use:'Issued to quash the order of an inferior court or tribunal that has acted beyond its jurisdiction', against:'Inferior courts and tribunals', scope:'Post-decisional — issued AFTER decision is made · Both SC and HC can issue', color:'bg-purple-50 border-purple-200', tcolor:'text-purple-800'},
                  {writ:'Prohibition', latin:'To forbid / To stop', use:'Issued to prevent an inferior court from exceeding its jurisdiction or acting contrary to law', against:'Inferior courts and tribunals only', scope:'Pre-decisional — issued BEFORE decision is made · Preventive in nature', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800'},
                  {writ:'Quo Warranto', latin:'By what authority / warrant', use:'Issued to enquire into the legality of a person holding a public office — to show by what authority they hold office', against:'Persons holding public offices only', scope:'Only for substantive public offices created by Constitution or statute · Not for ministerial or private offices', color:'bg-orange-50 border-orange-200', tcolor:'text-orange-800'},
                ].map((w) => (
                  <div key={w.writ} className={`border rounded-xl p-4 ${w.color}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`text-sm font-semibold ${w.tcolor}`}>{w.writ}</div>
                      <div className="text-xs text-gray-400 italic">"{w.latin}"</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-gray-600"><span className="font-medium">Use: </span>{w.use}</div>
                      <div className="text-xs text-gray-600"><span className="font-medium">Against: </span>{w.against}</div>
                      <div className="text-xs text-gray-600"><span className="font-medium">Scope: </span>{w.scope}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Art. 32 vs Art. 226
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'Scope', a:'Art. 32 — only for FR violations. Art. 226 — for any legal right including FRs. HC has wider scope.'},
                  {q:'Court', a:'Art. 32 — Supreme Court only. Art. 226 — High Court only. SC is higher but HC has broader jurisdiction here.'},
                  {q:'Nature of right', a:'Art. 32 is itself a Fundamental Right — cannot be suspended. Art. 226 is constitutional right — can be restricted.'},
                  {q:'Discretion', a:'Art. 32 — SC must issue writ if FR is violated (no discretion). Art. 226 — HC has discretion whether to issue.'},
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
                  {label:'Habeas Corpus', detail:'Illegal detention', color:'bg-blue-50 text-blue-700 border-blue-200'},
                  {label:'Mandamus', detail:'Perform public duty', color:'bg-green-50 text-green-700 border-green-200'},
                  {label:'Certiorari', detail:'Quash illegal order', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  {label:'Prohibition', detail:'Stop exceeding jurisdiction', color:'bg-amber-50 text-amber-700 border-amber-200'},
                  {label:'Quo Warranto', detail:'By what authority', color:'bg-orange-50 text-orange-700 border-orange-200'},
                  {label:'Art. 32', detail:'SC — FR violations', color:'bg-red-50 text-red-700 border-red-200'},
                  {label:'Art. 226', detail:'HC — any legal right', color:'bg-teal-50 text-teal-700 border-teal-200'},
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
                  {year:'2023 Prelims', q:'Which writ is issued to release a person from illegal detention?'},
                  {year:'2022 Mains GS-II', q:'Distinguish between Certiorari and Prohibition. In what situations can each be issued?'},
                  {year:'2020 Prelims', q:'Mandamus cannot be issued against which of the following?'},
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
                  {q:'Habeas Corpus and digital detention — social media arrests', prob:85},
                  {q:'PIL vs writ petition — differences and misuse of PIL', prob:78},
                  {q:'Quo Warranto against ministers — scope and limitations', prob:65},
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
          <a href="/subjects/polity/13" className="text-sm text-blue-600 hover:text-blue-700">← Schedules</a>
          <div className="text-xs text-gray-400">Topic 14 of 20</div>
          <a href="/subjects/polity/15" className="text-sm text-blue-600 hover:text-blue-700">Election Commission →</a>
        </div>
      </div>
    </div>
  )
}