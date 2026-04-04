export default function FederalismPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Federalism</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Articles 245–263</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2020, 2017</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">3 lists</div>
            <div className="text-xs text-gray-400 mt-1">Union, State, Concurrent</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">7th Schedule</div>
            <div className="text-xs text-gray-400 mt-1">Contains 3 lists</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">Strong Centre</div>
            <div className="text-xs text-gray-400 mt-1">Quasi-federal nature</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What is Federalism?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Federalism means division of powers between the Centre and States. India has a <strong>quasi-federal</strong> system — federal in normal times but unitary in emergencies. The Constitution divides powers through three lists in the <strong>7th Schedule</strong>.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> India is described as a "Union of States" — not a federation. The word "federal" is NOT used anywhere in the Constitution. This shows the strong unitary bias of Indian federalism.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                3 Legislative Lists — 7th Schedule
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {list:'Union List', num:'List I', subjects:'98 subjects', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800', examples:'Defence, foreign affairs, currency, railways, atomic energy, insurance', who:'Only Parliament can make laws'},
                  {list:'State List', num:'List II', subjects:'59 subjects', color:'bg-green-50 border-green-200', tcolor:'text-green-800', examples:'Police, public health, agriculture, land, irrigation, local government', who:'Only State Legislature can make laws (normally)'},
                  {list:'Concurrent List', num:'List III', subjects:'52 subjects', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800', examples:'Education, forests, trade unions, marriage, adoption, criminal law', who:'Both Parliament and States — Central law prevails in conflict'},
                ].map((l) => (
                  <div key={l.list} className={`border rounded-xl p-4 ${l.color}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`text-sm font-semibold ${l.tcolor}`}>{l.list} ({l.num})</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${l.color} ${l.tcolor}`}>{l.subjects}</span>
                    </div>
                    <div className="text-xs text-gray-600 mb-1"><strong>Examples:</strong> {l.examples}</div>
                    <div className={`text-xs font-medium ${l.tcolor}`}>{l.who}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg">
                <p className="text-sm text-red-800"><strong>Residuary powers:</strong> Subjects not in any list go to Parliament (Union) — Art. 248. This is different from USA where residuary powers go to States.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                Centre-State Relations
              </div>
              <div className="flex flex-col gap-2 mb-3">
                {[
                  {area:'Legislative', detail:'Parliament can legislate on State List in national interest (Art. 249), during emergency (Art. 250), on state request (Art. 252), for international treaties (Art. 253)'},
                  {area:'Administrative', detail:'Centre can give directions to states. Governor appointed by President. State Public Service Commission consulted by UPSC.'},
                  {area:'Financial', detail:'Finance Commission divides tax revenue. GST Council — cooperative federalism example. Centre gives grants to states.'},
                ].map((r) => (
                  <div key={r.area} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-semibold text-violet-700 shrink-0 w-24">{r.area}</div>
                    <div className="text-xs text-gray-600">{r.detail}</div>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                <p className="text-sm text-green-800"><strong>Cooperative Federalism:</strong> Recent trend where Centre and States work together. Examples — GST Council, NITI Aayog, Swachh Bharat Mission. Very important for 2027!</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'Federal vs Unitary features', a:'Federal: Written constitution, division of powers, independent judiciary. Unitary: Strong centre, single citizenship, flexible constitution.'},
                  {q:'Art. 356 — President Rule', a:'Governor recommends President Rule when state govt fails. Parliament approves within 2 months. Max 3 years total.'},
                  {q:'Inter-State Council', a:'Art. 263 — advisory body for Centre-State and inter-state disputes. Recommendations not binding.'},
                  {q:'Zonal Councils', a:'5 zones — not constitutional (statutory). Created under States Reorganisation Act 1956. Chaired by Union Home Minister.'},
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
                <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Federalism</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'Union List', detail:'98 subjects', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'State List', detail:'59 subjects', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Concurrent List', detail:'52 subjects', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Residuary', detail:'Goes to Centre', color:'bg-red-50 text-red-700 border-red-200'},
                    {label:'7th Schedule', detail:'Contains all 3 lists', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Cooperative', detail:'GST, NITI Aayog', color:'bg-teal-50 text-teal-700 border-teal-200'},
                    {label:'Nature', detail:'Quasi-federal', color:'bg-gray-50 text-gray-700 border-gray-200'},
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
                  {year:'2022 Mains GS-II', q:'Examine the concept of cooperative federalism in India with reference to GST and NITI Aayog.'},
                  {year:'2020 Prelims', q:'Which schedule of the Indian Constitution contains the three legislative lists?'},
                  {year:'2017 Mains GS-II', q:'Discuss the changes in Centre-State relations since 1991. Has economic liberalisation strengthened or weakened federalism?'},
                  {year:'2015 Prelims', q:'Regarding the residuary powers of legislation under Indian Constitution, which of the following is correct?'},
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
                  {q:'Cooperative federalism vs competitive federalism — recent trends', prob:88},
                  {q:'Governor role in state politics — constitutional vs political use', prob:82},
                  {q:'Finance Commission and fiscal federalism — 16th FC recommendations', prob:76},
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
          <a href="/subjects/polity/8" className="text-sm text-blue-600 hover:text-blue-700">← Judiciary</a>
          <div className="text-xs text-gray-400">Topic 9 of 20</div>
          <a href="/subjects/polity/10" className="text-sm text-blue-600 hover:text-blue-700">Local Bodies →</a>
        </div>
      </div>
    </div>
  )
}
