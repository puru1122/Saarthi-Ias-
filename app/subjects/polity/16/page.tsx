export default function AntiDefectionPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Anti-defection Law</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">10th Schedule</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">10th Schedule</div><div className="text-xs text-gray-400 mt-1">Contains anti-defection</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">52nd Amendment</div><div className="text-xs text-gray-400 mt-1">Added in 1985</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">91st Amendment</div><div className="text-xs text-gray-400 mt-1">Modified in 2003</div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What is Anti-defection Law?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The Anti-defection Law is contained in the <strong>10th Schedule</strong> of the Constitution, added by the <strong>52nd Constitutional Amendment Act 1985</strong>. It aims to prevent political defections by legislators (MPs and MLAs) which destabilize governments.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> The law was needed because of "Aaya Ram Gaya Ram" phenomenon — Gaya Lal of Haryana changed parties 3 times in 1 day in 1967, making a mockery of democracy.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-red-500 rounded-full inline-block"></span>
                Grounds for Disqualification
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {ground:'Voluntarily gives up membership', detail:'A member voluntarily gives up membership of their political party — even without formally resigning', color:'bg-red-50 border-red-200', tcolor:'text-red-800'},
                  {ground:'Votes against party direction', detail:'A member votes in the House or abstains from voting contrary to party direction without permission', color:'bg-orange-50 border-orange-200', tcolor:'text-orange-800'},
                  {ground:'Independent member joins party', detail:'An independently elected member joins any political party after election', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800'},
                  {ground:'Nominated member joins party', detail:'A nominated member joins a political party after 6 months of taking their seat', color:'bg-yellow-50 border-yellow-200', tcolor:'text-yellow-800'},
                ].map((g) => (
                  <div key={g.ground} className={`border rounded-xl p-3 ${g.color}`}>
                    <div className={`text-xs font-semibold mb-1 ${g.tcolor}`}>{g.ground}</div>
                    <div className="text-xs text-gray-600">{g.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Exceptions — When defection is allowed
              </div>
              <div className="flex flex-col gap-2 mb-3">
                {[
                  {exc:'Merger', detail:'If at least 2/3 of the members of a legislative party merge with another party — this is NOT defection. (91st Amendment 2003 raised this from 1/3 to 2/3)'},
                  {exc:'Speaker election', detail:'A member can vote against party in Speaker/Deputy Speaker/Chairman elections without disqualification'},
                ].map((e) => (
                  <div key={e.exc} className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="text-xs font-semibold text-green-800 mb-1">{e.exc}</div>
                    <div className="text-xs text-gray-600">{e.detail}</div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg">
                <p className="text-sm text-amber-800"><strong>Decision maker:</strong> The Speaker/Chairman of the House decides on disqualification. Their decision is subject to judicial review (Kihoto Hollohan case 1992).</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'52nd vs 91st Amendment', a:'52nd (1985) added 10th Schedule. 91st (2003) removed exception for split — now only merger (2/3) is allowed, not split.'},
                  {q:'Kihoto Hollohan case 1992', a:'SC held 10th Schedule is valid. Speaker decision is subject to judicial review BUT only after final order, not during proceedings.'},
                  {q:'Speaker bias problem', a:'Speaker belongs to ruling party — conflict of interest in deciding defection cases. SC has noted this problem in several cases.'},
                  {q:'Recent cases', a:'Maharashtra (2022) — Shinde vs Thackeray. SC referred to larger bench. Raised questions about Governor role and Speaker powers.'},
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
                  {label:'10th Schedule', detail:'Contains the law', color:'bg-blue-50 text-blue-700 border-blue-200'},
                  {label:'52nd Amendment', detail:'1985 — added', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  {label:'91st Amendment', detail:'2003 — modified', color:'bg-green-50 text-green-700 border-green-200'},
                  {label:'Disqualification', detail:'4 grounds', color:'bg-red-50 text-red-700 border-red-200'},
                  {label:'Merger allowed', detail:'2/3 members', color:'bg-amber-50 text-amber-700 border-amber-200'},
                  {label:'Decision by', detail:'Speaker/Chairman', color:'bg-teal-50 text-teal-700 border-teal-200'},
                  {label:'Kihoto case', detail:'1992 — JR allowed', color:'bg-gray-50 text-gray-700 border-gray-200'},
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
                  {year:'2021 Mains GS-II', q:'The anti-defection law has failed to prevent political defections. Critically examine with recent examples.'},
                  {year:'2018 Prelims', q:'Under the 10th Schedule, which authority decides on disqualification of a member on grounds of defection?'},
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
                  {q:'Maharashtra political crisis — anti-defection and Governor role', prob:90},
                  {q:'Reform of anti-defection law — independent tribunal instead of Speaker', prob:82},
                  {q:'Free vote vs party whip — parliamentary democracy dilemma', prob:70},
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
          <a href="/subjects/polity/15" className="text-sm text-blue-600 hover:text-blue-700">← Election Commission</a>
          <div className="text-xs text-gray-400">Topic 16 of 20</div>
          <a href="/subjects/polity/17" className="text-sm text-blue-600 hover:text-blue-700">Money Bill →</a>
        </div>
      </div>
    </div>
  )
}