export default function MoneyBillPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Money Bill</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Article 110</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2023, 2020</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Art. 110</div><div className="text-xs text-gray-400 mt-1">Money Bill definition</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Lok Sabha only</div><div className="text-xs text-gray-400 mt-1">Introduced in LS</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Speaker certifies</div><div className="text-xs text-gray-400 mt-1">Final authority</div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                What is a Money Bill?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                A Money Bill is defined under <strong>Article 110</strong> of the Constitution. It deals exclusively with matters related to taxation, government borrowing, expenditure from the Consolidated Fund of India, and related financial matters.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg mb-3">
                <p className="text-sm text-green-800"><strong>Key feature:</strong> The Speaker of Lok Sabha has the final authority to certify whether a bill is a Money Bill. This certificate is conclusive and cannot be challenged in courts.</p>
              </div>
              <div className="text-sm font-semibold text-gray-800 mb-2">Subjects covered under Money Bill (Art. 110)</div>
              <div className="flex flex-col gap-1.5">
                {[
                  'Imposition, abolition, remission, alteration of any tax',
                  'Regulation of borrowing of money by the Government of India',
                  'Custody of the Consolidated Fund or Contingency Fund of India',
                  'Appropriation of money out of the Consolidated Fund',
                  'Declaration of any expenditure as charged on Consolidated Fund',
                  'Receipt of money on account of Consolidated Fund or Public Account',
                  'Any incidental matter connected with above',
                ].map((s) => (
                  <div key={s} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"></span>{s}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                Money Bill vs Finance Bill vs Ordinary Bill
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {type:'Money Bill', intro:'Only in Lok Sabha', rs:'Can only suggest amendments within 14 days — LS can accept or reject', president:'Cannot withhold assent', joint:'No joint sitting', color:'bg-green-50 border-green-200', tcolor:'text-green-800'},
                  {type:'Finance Bill (Category A)', intro:'Only in Lok Sabha', rs:'Same as Money Bill — 14 days only', president:'Can withhold assent', joint:'No joint sitting', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800'},
                  {type:'Finance Bill (Category B)', intro:'Either house', rs:'Full powers — can reject', president:'Can withhold assent', joint:'Joint sitting possible', color:'bg-purple-50 border-purple-200', tcolor:'text-purple-800'},
                  {type:'Ordinary Bill', intro:'Either house', rs:'Full powers — can reject', president:'Can withhold assent', joint:'Joint sitting called by President', color:'bg-gray-50 border-gray-200', tcolor:'text-gray-700'},
                ].map((b) => (
                  <div key={b.type} className={`border rounded-xl p-3 ${b.color}`}>
                    <div className={`text-xs font-semibold mb-2 ${b.tcolor}`}>{b.type}</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      <div className="text-xs text-gray-600"><span className="font-medium">Intro: </span>{b.intro}</div>
                      <div className="text-xs text-gray-600"><span className="font-medium">RS: </span>{b.rs}</div>
                      <div className="text-xs text-gray-600"><span className="font-medium">President: </span>{b.president}</div>
                      <div className="text-xs text-gray-600"><span className="font-medium">Joint sitting: </span>{b.joint}</div>
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
                  {q:'Rajya Sabha role in Money Bills', a:'RS can only make recommendations within 14 days. LS can accept or reject all or any recommendations. If RS does nothing, deemed passed after 14 days.'},
                  {q:'Speaker certificate', a:'Speaker certifies Money Bill — conclusive, not subject to judicial review. Misuse possible — Aadhaar Bill 2016 controversy.'},
                  {q:'Aadhaar Bill controversy', a:'Aadhaar Bill 2016 was certified as Money Bill — bypassing RS. SC upheld in 2018 but noted it should not be misused.'},
                  {q:'Annual Budget', a:'Budget (Appropriation Bill + Finance Bill) — combination. Appropriation Bill is a Money Bill. Parts of Finance Bill may not be Money Bill.'},
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
                  {label:'Art. 110', detail:'Definition', color:'bg-green-50 text-green-700 border-green-200'},
                  {label:'Lok Sabha only', detail:'Introduced here', color:'bg-blue-50 text-blue-700 border-blue-200'},
                  {label:'Speaker certifies', detail:'Conclusive', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  {label:'RS — 14 days', detail:'Only suggest', color:'bg-amber-50 text-amber-700 border-amber-200'},
                  {label:'No joint sitting', detail:'For Money Bills', color:'bg-red-50 text-red-700 border-red-200'},
                  {label:'President', detail:'Cannot withhold assent', color:'bg-teal-50 text-teal-700 border-teal-200'},
                  {label:'Aadhaar 2016', detail:'Controversial case', color:'bg-orange-50 text-orange-700 border-orange-200'},
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
                  {year:'2023 Prelims', q:'With reference to Money Bills in India, which of the following statements is correct?'},
                  {year:'2020 Mains GS-II', q:'Examine the controversy surrounding the passage of Aadhaar Bill as a Money Bill. Was it constitutionally valid?'},
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
                  {q:'Misuse of Money Bill route to bypass Rajya Sabha — reforms needed', prob:88},
                  {q:'Role of Rajya Sabha as revising chamber — weakened by Money Bill route', prob:80},
                  {q:'Speaker certification of Money Bill — should it be subject to judicial review', prob:72},
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
          <a href="/subjects/polity/16" className="text-sm text-blue-600 hover:text-blue-700">← Anti-defection Law</a>
          <div className="text-xs text-gray-400">Topic 17 of 20</div>
          <a href="/subjects/polity/18" className="text-sm text-blue-600 hover:text-blue-700">RTI Act →</a>
        </div>
      </div>
    </div>
  )
}