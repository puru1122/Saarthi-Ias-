export default function ParliamentPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Parliament</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Articles 79–122</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2023, 2021, 2019</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">3 houses</div>
            <div className="text-xs text-gray-400 mt-1">President + LS + RS</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">543 seats</div>
            <div className="text-xs text-gray-400 mt-1">Lok Sabha strength</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">245 seats</div>
            <div className="text-xs text-gray-400 mt-1">Rajya Sabha strength</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What is Parliament?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The Parliament of India is the supreme legislative body of the Republic of India. It consists of <strong>three parts</strong> — the President, the Rajya Sabha (Council of States) and the Lok Sabha (House of the People). Parliament derives its power from <strong>Articles 79–122</strong> of the Constitution.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> India has a bicameral legislature — two houses. Lok Sabha is the lower house (directly elected). Rajya Sabha is the upper house (indirectly elected). The President is an integral part of Parliament but not a member of either house.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                Lok Sabha vs Rajya Sabha
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="text-sm font-semibold text-blue-800 mb-3 text-center">Lok Sabha</div>
                  {[
                    {label:'Also called', val:'Lower house / House of People'},
                    {label:'Members', val:'543 elected + 2 nominated (Anglo-Indian — now abolished)'},
                    {label:'Election', val:'Directly elected by people'},
                    {label:'Term', val:'5 years (can be dissolved earlier)'},
                    {label:'Presided by', val:'Speaker (Deputy Speaker when absent)'},
                    {label:'Min age', val:'25 years'},
                    {label:'Special power', val:'Money Bills — only in Lok Sabha'},
                    {label:'No confidence', val:'Only Lok Sabha can pass no-confidence motion'},
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between text-xs py-1 border-b border-blue-100 last:border-0">
                      <span className="text-blue-600">{r.label}</span>
                      <span className="text-gray-700 text-right ml-2">{r.val}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <div className="text-sm font-semibold text-purple-800 mb-3 text-center">Rajya Sabha</div>
                  {[
                    {label:'Also called', val:'Upper house / Council of States'},
                    {label:'Members', val:'238 elected + 12 nominated by President'},
                    {label:'Election', val:'Indirectly elected by state legislatures'},
                    {label:'Term', val:'Permanent body — 1/3 retire every 2 years'},
                    {label:'Presided by', val:'Vice President (ex-officio Chairman)'},
                    {label:'Min age', val:'30 years'},
                    {label:'Special power', val:'Can create new All India Services (Art. 312)'},
                    {label:'Dissolution', val:'Cannot be dissolved — permanent house'},
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between text-xs py-1 border-b border-purple-100 last:border-0">
                      <span className="text-purple-600">{r.label}</span>
                      <span className="text-gray-700 text-right ml-2">{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Types of Bills
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {type:'Ordinary Bill', color:'bg-gray-50 border-gray-200', tcolor:'text-gray-800', desc:'Can be introduced in either house. Needs simple majority. If deadlock — joint sitting called.'},
                  {type:'Money Bill (Art. 110)', color:'bg-green-50 border-green-200', tcolor:'text-green-800', desc:'Only in Lok Sabha. Rajya Sabha can only suggest amendments — not reject. Certified by Speaker. President cannot withhold assent.'},
                  {type:'Finance Bill', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800', desc:'Contains money bill provisions + other provisions. Rajya Sabha can reject it unlike Money Bill.'},
                  {type:'Constitutional Amendment Bill (Art. 368)', color:'bg-purple-50 border-purple-200', tcolor:'text-purple-800', desc:'Special majority needed (2/3 present and voting + majority of total membership). Some need state ratification too.'},
                  {type:'Private Member Bill', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800', desc:'Introduced by any MP other than a minister. Very rarely passed — only 14 passed in Indian history.'},
                ].map((b) => (
                  <div key={b.type} className={`border rounded-xl p-3 ${b.color}`}>
                    <div className={`text-xs font-semibold mb-1 ${b.tcolor}`}>{b.type}</div>
                    <div className="text-xs text-gray-600">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Parliamentary sessions & key terms
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  {term:'Budget session', detail:'Feb–May · Longest session · Budget presented'},
                  {term:'Monsoon session', detail:'Jul–Aug · Second session of year'},
                  {term:'Winter session', detail:'Nov–Dec · Third and shortest session'},
                  {term:'Prorogation', detail:'End of session by President — pending bills lapse'},
                  {term:'Dissolution', detail:'End of Lok Sabha — only by President on PM advice'},
                  {term:'Adjournment', detail:'Temporary suspension within a session'},
                  {term:'Quorum', detail:'1/10 of total members must be present'},
                  {term:'Zero Hour', detail:'12 noon — unannounced matters raised. Not in Constitution.'},
                ].map((t) => (
                  <div key={t.term} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-gray-800 mb-1">{t.term}</div>
                    <div className="text-xs text-gray-500">{t.detail}</div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg">
                <p className="text-sm text-amber-800"><strong>UPSC tip:</strong> Question Hour, Zero Hour, Calling Attention Motion, Adjournment Motion, No-confidence Motion — know the differences. These appear almost every year.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-red-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'Money Bill vs Finance Bill', a:'Money Bill — only taxation/borrowing. Finance Bill — includes other matters too. RS cannot reject Money Bill.'},
                  {q:'Joint sitting', a:'Called by President for deadlock on Ordinary Bills. NOT for Money Bills or Constitutional Amendment Bills.'},
                  {q:'Speaker vs Chairman', a:'Speaker presides over Lok Sabha. Vice President is ex-officio Chairman of Rajya Sabha.'},
                  {q:'Question Hour vs Zero Hour', a:'Question Hour — first hour, scheduled questions. Zero Hour — 12 noon, unscheduled, not in rules.'},
                ].map((d) => (
                  <div key={d.q} className="bg-red-50 border border-red-100 rounded-lg p-3">
                    <div className="text-xs font-semibold text-red-800 mb-1">{d.q}</div>
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
                <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Parliament</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'President', detail:'Integral part', color:'bg-gray-50 text-gray-700 border-gray-200'},
                    {label:'Lok Sabha', detail:'543 seats, 5yr term', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Rajya Sabha', detail:'245 seats, permanent', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Money Bill', detail:'Only Lok Sabha', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Joint sitting', detail:'Ordinary bills only', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Speaker', detail:'Presides over LS', color:'bg-teal-50 text-teal-700 border-teal-200'},
                    {label:'Articles', detail:'79–122', color:'bg-pink-50 text-pink-700 border-pink-200'},
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
                  {year:'2023 Prelims', q:'With reference to Money Bills, which of the following statements is correct?'},
                  {year:'2021 Mains GS-II', q:'Discuss the significance of the Rajya Sabha as a permanent house. Can it be more powerful than Lok Sabha in certain situations?'},
                  {year:'2019 Prelims', q:'Zero Hour in the Indian Parliament refers to which of the following?'},
                  {year:'2017 Mains GS-II', q:'Examine the role of parliamentary committees in the legislative process of India.'},
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
                  {q:'One Nation One Election — constitutional implications for Parliament', prob:92},
                  {q:'Anti-defection law and its impact on parliamentary democracy', prob:85},
                  {q:'Declining standards of parliamentary debate — reasons and solutions', prob:75},
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
          <a href="/subjects/polity/5" className="text-sm text-blue-600 hover:text-blue-700">← Fundamental Duties</a>
          <div className="text-xs text-gray-400">Topic 6 of 20</div>
          <a href="/subjects/polity/7" className="text-sm text-blue-600 hover:text-blue-700">President & PM →</a>
        </div>
      </div>
    </div>
  )
}