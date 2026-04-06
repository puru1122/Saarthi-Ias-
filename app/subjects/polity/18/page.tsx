export default function RTIPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">RTI Act 2005</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Right to Information</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019, 2016</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">12 Oct 2005</div><div className="text-xs text-gray-400 mt-1">RTI Act came into force</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">30 days</div><div className="text-xs text-gray-400 mt-1">Response time limit</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Art. 19(1)(a)</div><div className="text-xs text-gray-400 mt-1">Constitutional basis</div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-teal-500 rounded-full inline-block"></span>
                What is RTI Act?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The Right to Information Act 2005 empowers every citizen to request information from public authorities. It is based on the fundamental right of <strong>freedom of speech and expression (Art. 19(1)(a))</strong>. The right to information is implicit in the right to know.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-3 rounded-r-lg">
                <p className="text-sm text-teal-800"><strong>Key point:</strong> RTI applies to all public authorities — including bodies substantially financed by government. It does NOT apply to J&K (separate RTI law), intelligence organisations (IB, RAW), and certain security organisations.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                How RTI works
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {step:'1', action:'Citizen files RTI application', detail:'To Public Information Officer (PIO) of concerned public authority · Fee: Rs. 10 (BPL citizens free)', color:'bg-blue-50 text-blue-800'},
                  {step:'2', action:'PIO responds within 30 days', detail:'Must provide information · If life/liberty at risk — 48 hours · Can refuse with reasons', color:'bg-green-50 text-green-800'},
                  {step:'3', action:'First appeal (within 30 days)', detail:'To First Appellate Authority (senior officer) · Decided within 30 days (45 days max)', color:'bg-amber-50 text-amber-800'},
                  {step:'4', action:'Second appeal to CIC/SIC', detail:'Central/State Information Commission · Within 90 days of first appeal order', color:'bg-purple-50 text-purple-800'},
                ].map((s) => (
                  <div key={s.step} className={`rounded-xl p-3 flex gap-3 ${s.color}`}>
                    <div className="text-lg font-bold shrink-0 w-6">{s.step}</div>
                    <div>
                      <div className="text-xs font-semibold mb-1">{s.action}</div>
                      <div className="text-xs text-gray-600">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-red-500 rounded-full inline-block"></span>
                Exemptions — Information that cannot be sought
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {[
                  'National security & sovereignty',
                  'Intelligence agencies (IB, RAW)',
                  'Cabinet papers & deliberations',
                  'Personal information — no public interest',
                  'Information received in confidence from foreign govt',
                  'Trade secrets & intellectual property',
                  'Information causing breach of privilege of Parliament',
                  'Fiduciary relationship information',
                ].map((e) => (
                  <span key={e} className="text-xs bg-red-50 text-red-700 border border-red-200 px-2 py-1 rounded-lg">{e}</span>
                ))}
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                <p className="text-sm text-green-800"><strong>Exception to exemption:</strong> Even exempt information CAN be disclosed if public interest outweighs harm. This is the key override principle of RTI.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                RTI Amendment Act 2019
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'What changed', a:'Tenure of CIC and ICs changed from fixed 5 years to "as prescribed by Central Govt". Salary also to be prescribed by Govt.'},
                  {q:'Controversy', a:'Critics say it makes CIC dependent on govt — undermines independence. Opposition called it attack on RTI.'},
                  {q:'CIC vs ICs', a:'Chief Information Commissioner — heads CIC at Centre. Information Commissioners — members. Each state has own SIC.'},
                  {q:'Penalty for non-compliance', a:'PIO can be fined Rs. 250/day up to Rs. 25,000 for delay or wrong information. CIC/SIC can impose.'},
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
                  {label:'Enacted', detail:'12 Oct 2005', color:'bg-teal-50 text-teal-700 border-teal-200'},
                  {label:'Basis', detail:'Art. 19(1)(a)', color:'bg-blue-50 text-blue-700 border-blue-200'},
                  {label:'Response time', detail:'30 days (48hr urgent)', color:'bg-green-50 text-green-700 border-green-200'},
                  {label:'Application fee', detail:'Rs. 10', color:'bg-amber-50 text-amber-700 border-amber-200'},
                  {label:'First appeal', detail:'To senior officer', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  {label:'Final appeal', detail:'CIC/SIC', color:'bg-red-50 text-red-700 border-red-200'},
                  {label:'2019 Amendment', detail:'Tenure changed', color:'bg-orange-50 text-orange-700 border-orange-200'},
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
                  {year:'2022 Mains GS-II', q:'Examine the RTI Amendment Act 2019. Has it weakened the independence of the Information Commission?'},
                  {year:'2019 Prelims', q:'Under RTI Act 2005, which of the following organisations is exempt from providing information?'},
                  {year:'2016 Mains GS-II', q:'The RTI Act has emerged as a powerful tool against corruption. Discuss its impact with examples.'},
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
                  {q:'RTI and political parties — should parties be under RTI', prob:85},
                  {q:'Digital RTI — proactive disclosure and Section 4', prob:75},
                  {q:'RTI vs privacy — balancing transparency and personal data', prob:70},
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
          <a href="/subjects/polity/17" className="text-sm text-blue-600 hover:text-blue-700">← Money Bill</a>
          <div className="text-xs text-gray-400">Topic 18 of 20</div>
          <a href="/subjects/polity/19" className="text-sm text-blue-600 hover:text-blue-700">Lokpal →</a>
        </div>
      </div>
    </div>
  )
}