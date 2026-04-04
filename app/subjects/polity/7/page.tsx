export default function PresidentPMPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">President & Prime Minister</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Articles 52–78</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2020, 2018</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">Art. 52–62</div>
            <div className="text-xs text-gray-400 mt-1">President articles</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">5 years</div>
            <div className="text-xs text-gray-400 mt-1">President term</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">Art. 74–75</div>
            <div className="text-xs text-gray-400 mt-1">PM & Council articles</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                President of India
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  {label:'Election', val:'Indirectly elected by Electoral College — elected MPs + MLAs (not MLCs)'},
                  {label:'Term', val:'5 years — can be re-elected any number of times'},
                  {label:'Removal', val:'Impeachment by Parliament — Art. 61 — 2/3 majority of total membership'},
                  {label:'Qualifications', val:'Citizen of India · 35 years · Eligible for Lok Sabha · Not hold any office of profit'},
                  {label:'Oath', val:'Administered by Chief Justice of India'},
                  {label:'Salary', val:'Rs. 5 lakh per month + official residence Rashtrapati Bhavan'},
                ].map((r) => (
                  <div key={r.label} className="bg-blue-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-blue-800 mb-1">{r.label}</div>
                    <div className="text-xs text-gray-600">{r.val}</div>
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold text-gray-800 mb-2">Powers of President</div>
              <div className="flex flex-col gap-2">
                {[
                  {power:'Executive powers', detail:'All executive actions of GOI taken in his name. Appoints PM, ministers, governors, judges, CAG, AG etc.'},
                  {power:'Legislative powers', detail:'Summons, prorogues, dissolves Lok Sabha. Addresses joint sitting. Nominates 12 members to RS. Gives assent to bills.'},
                  {power:'Veto powers', detail:'Absolute veto (withhold assent) · Suspensive veto (return bill) · Pocket veto (no time limit) — No veto on Money Bills'},
                  {power:'Emergency powers', detail:'Art. 352 (National), Art. 356 (State), Art. 360 (Financial) — most important presidential powers'},
                  {power:'Pardoning powers', detail:'Art. 72 — Pardon, Reprieve, Respite, Remission, Commutation — applies to Union law offences and death sentence'},
                ].map((p) => (
                  <div key={p.power} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-semibold text-blue-700 shrink-0 w-32">{p.power}</div>
                    <div className="text-xs text-gray-600">{p.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Prime Minister of India
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  {label:'Appointment', val:'Appointed by President — leader of majority party in Lok Sabha'},
                  {label:'Term', val:'No fixed term — holds office during pleasure of President'},
                  {label:'Removal', val:'Loses majority in Lok Sabha — no-confidence motion passed'},
                  {label:'Qualifications', val:'Member of either house of Parliament (can be RS member too)'},
                  {label:'Powers', val:'Head of Council of Ministers · Communicates between President and Cabinet'},
                  {label:'Art. 74', val:'Council of Ministers to aid and advise President — advice is binding'},
                ].map((r) => (
                  <div key={r.label} className="bg-green-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-green-800 mb-1">{r.label}</div>
                    <div className="text-xs text-gray-600">{r.val}</div>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                <p className="text-sm text-green-800"><strong>Key point:</strong> India has a Parliamentary system — President is the nominal/constitutional head. PM is the real executive. The President acts on the advice of the Council of Ministers headed by the PM (Art. 74).</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'President vs Governor', a:'President elected by Electoral College. Governor appointed by President. Both are nominal heads — President at Centre, Governor at State.'},
                  {q:'Art. 72 vs Art. 161', a:'Art. 72 — President pardon power including death sentence and military offences. Art. 161 — Governor pardon power but NOT death sentence.'},
                  {q:'Pocket veto', a:'President keeps bill pending indefinitely — no time limit to give assent. Used by President Zail Singh in 1986 (Indian Post Office Amendment Bill).'},
                  {q:'Can PM be from Rajya Sabha?', a:'Yes — PM can be a member of Rajya Sabha. Dr. Manmohan Singh was PM and RS member for 10 years.'},
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
              <div className="flex flex-col gap-2">
                <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium text-center">President</div>
                <div className="flex flex-col gap-1.5">
                  {[
                    {label:'Election', detail:'Electoral College', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Term', detail:'5 years', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Removal', detail:'Impeachment Art. 61', color:'bg-red-50 text-red-700 border-red-200'},
                    {label:'Veto', detail:'Absolute, Suspensive, Pocket', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Pardon', detail:'Art. 72', color:'bg-green-50 text-green-700 border-green-200'},
                  ].map((n) => (
                    <div key={n.label} className={`border rounded-lg p-2 flex justify-between items-center ${n.color}`}>
                      <div className="text-xs font-medium">{n.label}</div>
                      <div className="text-xs opacity-70">{n.detail}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium text-center mt-2">Prime Minister</div>
                <div className="flex flex-col gap-1.5">
                  {[
                    {label:'Appointment', detail:'By President', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Real executive', detail:'Head of Cabinet', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Art. 74', detail:'Advice binding on President', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Removal', detail:'No confidence motion', color:'bg-red-50 text-red-700 border-red-200'},
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
                  {year:'2022 Prelims', q:'The President of India can be removed from office through which process?'},
                  {year:'2020 Mains GS-II', q:'The President of India is not an executive President but is not a mere rubber stamp either. Comment.'},
                  {year:'2018 Prelims', q:'With reference to the pardoning power of the President under Art. 72, which of the following is correct?'},
                  {year:'2016 Mains GS-II', q:'Discuss the role of PM in India. How does the PM exercise real executive power despite the President being the constitutional head?'},
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
                  {q:'Discretionary powers of President — when can President act without PM advice', prob:85},
                  {q:'Governor vs President — pardoning powers comparison Art. 72 vs 161', prob:78},
                  {q:'Coalition politics and role of PM — challenges to executive authority', prob:70},
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
          <a href="/subjects/polity/6" className="text-sm text-blue-600 hover:text-blue-700">← Parliament</a>
          <div className="text-xs text-gray-400">Topic 7 of 20</div>
          <a href="/subjects/polity/8" className="text-sm text-blue-600 hover:text-blue-700">Judiciary →</a>
        </div>
      </div>
    </div>
  )
}
