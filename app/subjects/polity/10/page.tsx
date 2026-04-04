export default function LocalBodiesPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Local Bodies</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">73rd & 74th Amendment</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2023, 2021, 2018</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">73rd Amendment</div>
            <div className="text-xs text-gray-400 mt-1">Panchayati Raj — 1992</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">74th Amendment</div>
            <div className="text-xs text-gray-400 mt-1">Urban Local Bodies — 1992</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">3-tier system</div>
            <div className="text-xs text-gray-400 mt-1">Village, Block, District</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Panchayati Raj — 73rd Amendment 1992
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The 73rd Constitutional Amendment Act 1992 gave constitutional status to Panchayati Raj institutions. It added <strong>Part IX (Articles 243–243O)</strong> and the <strong>11th Schedule</strong> (29 subjects) to the Constitution. It came into force on <strong>24 April 1993</strong> — celebrated as Panchayati Raj Diwas.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg mb-4">
                <p className="text-sm text-green-800"><strong>Key point:</strong> Before 73rd Amendment, Panchayati Raj was only a DPSP (Art. 40). After 1992, it became a constitutional mandate with elections, reservations and devolution of powers.</p>
              </div>
              <div className="text-sm font-semibold text-gray-800 mb-2">3-tier Panchayati Raj structure</div>
              <div className="flex flex-col gap-2">
                {[
                  {tier:'Gram Panchayat', level:'Village level', head:'Sarpanch/Pradhan', color:'bg-green-50 border-green-200', tcolor:'text-green-800'},
                  {tier:'Panchayat Samiti', level:'Block/Taluka level', head:'Block Development Officer', color:'bg-teal-50 border-teal-200', tcolor:'text-teal-800'},
                  {tier:'Zila Parishad', level:'District level', head:'Adhyaksha/President', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800'},
                ].map((t) => (
                  <div key={t.tier} className={`border rounded-xl p-3 flex items-center gap-4 ${t.color}`}>
                    <div className="flex-1">
                      <div className={`text-sm font-semibold ${t.tcolor}`}>{t.tier}</div>
                      <div className="text-xs text-gray-500">{t.level}</div>
                    </div>
                    <div className="text-xs text-gray-600">Head: {t.head}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  {feat:'Elections', detail:'State Election Commission conducts elections every 5 years'},
                  {feat:'Reservations', detail:'1/3 seats for women — some states have 50%. SC/ST proportional.'},
                  {feat:'Finance Commission', detail:'State Finance Commission — recommends fund distribution'},
                  {feat:'11th Schedule', detail:'29 subjects transferred to Panchayats — agriculture, education, etc.'},
                ].map((f) => (
                  <div key={f.feat} className="bg-gray-50 rounded-lg p-2.5">
                    <div className="text-xs font-semibold text-gray-700 mb-1">{f.feat}</div>
                    <div className="text-xs text-gray-500">{f.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                Urban Local Bodies — 74th Amendment 1992
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The 74th Amendment added <strong>Part IX-A (Articles 243P–243ZG)</strong> and the <strong>12th Schedule</strong> (18 subjects) for urban local bodies. It came into force on <strong>1 June 1993</strong>.
              </p>
              <div className="flex flex-col gap-2 mb-3">
                {[
                  {type:'Nagar Panchayat', for:'Transitioning area — rural to urban', color:'bg-blue-50 border-blue-200 text-blue-800'},
                  {type:'Municipal Council', for:'Smaller urban areas', color:'bg-purple-50 border-purple-200 text-purple-800'},
                  {type:'Municipal Corporation', for:'Larger urban areas — Metropolitan cities', color:'bg-violet-50 border-violet-200 text-violet-800'},
                ].map((u) => (
                  <div key={u.type} className={`border rounded-lg p-3 flex justify-between items-center ${u.color}`}>
                    <div className="text-xs font-semibold">{u.type}</div>
                    <div className="text-xs opacity-80">{u.for}</div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800"><strong>12th Schedule</strong> has 18 subjects including urban planning, roads, bridges, public health, slum improvement, vital statistics, public amenities.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'73rd vs 74th Amendment', a:'73rd — rural Panchayati Raj, Part IX, 11th Schedule, 29 subjects. 74th — urban bodies, Part IX-A, 12th Schedule, 18 subjects.'},
                  {q:'Gram Sabha vs Gram Panchayat', a:'Gram Sabha — all voters of village. Gram Panchayat — elected body. Sabha is the foundation, Panchayat is the executive.'},
                  {q:'Reservation for women', a:'Constitutional minimum is 1/3. Several states (Rajasthan, MP, Bihar) have increased to 50% by state law.'},
                  {q:'State Election Commission', a:'Independent body for conducting Panchayat and municipal elections. Different from Election Commission of India.'},
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
                <div className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Local Bodies</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'73rd Amendment', detail:'Panchayati Raj 1992', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'74th Amendment', detail:'Urban bodies 1992', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Part IX', detail:'Arts. 243–243O', color:'bg-teal-50 text-teal-700 border-teal-200'},
                    {label:'11th Schedule', detail:'29 subjects', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'12th Schedule', detail:'18 subjects', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Women quota', detail:'Min 1/3 reserved', color:'bg-pink-50 text-pink-700 border-pink-200'},
                    {label:'SEC', detail:'State Election Commission', color:'bg-amber-50 text-amber-700 border-amber-200'},
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
                  {year:'2023 Mains GS-II', q:'Examine the financial autonomy of Panchayati Raj institutions. What are the challenges in devolution of funds?'},
                  {year:'2021 Prelims', q:'Which Schedule of the Constitution contains subjects transferred to Panchayats under 73rd Amendment?'},
                  {year:'2018 Mains GS-II', q:'Discuss the significance of 74th Amendment for urban governance in India.'},
                  {year:'2015 Prelims', q:'The 73rd Constitutional Amendment Act 1992 refers to which of the following?'},
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
                  {q:'Women reservation in Panchayats — impact and remaining challenges', prob:85},
                  {q:'Urban local bodies and smart cities — governance challenges', prob:78},
                  {q:'Gram Sabha as foundation of democracy — role and effectiveness', prob:70},
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
          <a href="/subjects/polity/9" className="text-sm text-blue-600 hover:text-blue-700">← Federalism</a>
          <div className="text-xs text-gray-400">Topic 10 of 20</div>
          <a href="/subjects/polity/11" className="text-sm text-blue-600 hover:text-blue-700">Emergency Provisions →</a>
        </div>
      </div>
    </div>
  )
}