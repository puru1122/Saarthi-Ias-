export default function LokpalPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Lokpal & Lokayukta</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Lokpal Act 2013</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Lokpal Act 2013</div><div className="text-xs text-gray-400 mt-1">Anti-corruption ombudsman</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">1 + 8 members</div><div className="text-xs text-gray-400 mt-1">Chairperson + 8 members</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Statutory body</div><div className="text-xs text-gray-400 mt-1">Not constitutional</div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What is Lokpal?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Lokpal is an anti-corruption ombudsman body at the central level established by the <strong>Lokpal and Lokayuktas Act 2013</strong>. The concept was borrowed from the Scandinavian institution of Ombudsman. The term Lokpal was coined by <strong>Dr. L.M. Singhvi</strong> in 1963.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg mb-3">
                <p className="text-sm text-blue-800"><strong>Background:</strong> First Administrative Reforms Commission (1966) under Morarji Desai recommended Lokpal. After 45 years of debate, it was finally passed following Anna Hazare's anti-corruption movement in 2011. First Lokpal appointed in 2019.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Composition & Appointment
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  {label:'Chairperson', detail:'Former CJI or SC judge or eminent person with impeccable integrity'},
                  {label:'Members', detail:'8 members — 4 judicial (former SC/HC judges) + 4 non-judicial · At least 50% from SC/ST/OBC/minorities/women'},
                  {label:'Appointment', detail:'By President on recommendation of Selection Committee'},
                  {label:'Selection Committee', detail:'PM (chair) + LS Speaker + Leader of Opposition + CJI + one eminent jurist'},
                  {label:'Tenure', detail:'5 years or 70 years of age — whichever earlier'},
                  {label:'Removal', detail:'By President on SC inquiry recommendation'},
                ].map((r) => (
                  <div key={r.label} className="bg-green-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-green-800 mb-1">{r.label}</div>
                    <div className="text-xs text-gray-600">{r.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                Jurisdiction — Who comes under Lokpal
              </div>
              <div className="flex flex-col gap-2 mb-3">
                {[
                  {who:'Prime Minister', note:'Can investigate PM but with restrictions — no inquiry on national security, international relations, public order matters'},
                  {who:'Ministers & MPs', note:'All Union Ministers and Members of Parliament'},
                  {who:'Group A, B, C, D officers', note:'All central government employees'},
                  {who:'Chairpersons and members of statutory bodies', note:'Bodies created by Parliament'},
                  {who:'NGOs receiving government funding', note:'Receiving more than Rs. 1 crore from government'},
                ].map((j) => (
                  <div key={j.who} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-semibold text-violet-700 shrink-0 w-32">{j.who}</div>
                    <div className="text-xs text-gray-600">{j.note}</div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg">
                <p className="text-sm text-amber-800"><strong>Lokayukta:</strong> State-level equivalent of Lokpal. Act mandates states to establish Lokayukta within 1 year. Structure varies by state. Rajasthan had first Lokayukta in 1973.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Mind map</div>
              <div className="flex flex-col gap-1.5">
                {[
                  {label:'Act', detail:'Lokpal Act 2013', color:'bg-blue-50 text-blue-700 border-blue-200'},
                  {label:'Nature', detail:'Statutory body', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  {label:'Composition', detail:'1 + 8 members', color:'bg-green-50 text-green-700 border-green-200'},
                  {label:'Tenure', detail:'5 yrs or 70 yrs', color:'bg-amber-50 text-amber-700 border-amber-200'},
                  {label:'First Lokpal', detail:'Appointed 2019', color:'bg-teal-50 text-teal-700 border-teal-200'},
                  {label:'Covers PM', detail:'With restrictions', color:'bg-orange-50 text-orange-700 border-orange-200'},
                  {label:'Lokayukta', detail:'State level', color:'bg-pink-50 text-pink-700 border-pink-200'},
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
                  {year:'2021 Mains GS-II', q:'Examine the composition and jurisdiction of Lokpal. Has it been effective in fighting corruption?'},
                  {year:'2018 Prelims', q:'The Lokpal and Lokayuktas Act 2013 was passed following which movement in India?'},
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
                  {q:'Lokpal effectiveness — cases filed vs disposed, challenges faced', prob:82},
                  {q:'State Lokayuktas — variation across states, need for uniformity', prob:74},
                  {q:'Whistleblower Protection Act and Lokpal — complementary mechanisms', prob:65},
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
          <a href="/subjects/polity/18" className="text-sm text-blue-600 hover:text-blue-700">← RTI Act</a>
          <div className="text-xs text-gray-400">Topic 19 of 20</div>
          <a href="/subjects/polity/20" className="text-sm text-blue-600 hover:text-blue-700">e-Governance →</a>
        </div>
      </div>
    </div>
  )
}