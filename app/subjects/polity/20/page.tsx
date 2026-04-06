export default function EGovernancePage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">e-Governance</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">Digital India</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2020, 2017</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Digital India</div><div className="text-xs text-gray-400 mt-1">Launched 2015</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">4 interactions</div><div className="text-xs text-gray-400 mt-1">G2G, G2C, G2B, G2E</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">MeghRaj</div><div className="text-xs text-gray-400 mt-1">Govt cloud platform</div></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What is e-Governance?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                e-Governance refers to the use of Information and Communication Technology (ICT) by government to provide services, exchange information, communicate transactions, and integrate various stand-alone systems between government to citizen (G2C), government to business (G2B), government to government (G2G) and government to employee (G2E).
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> Digital India programme (2015) is the umbrella programme for e-governance in India. It aims to transform India into a digitally empowered society and knowledge economy.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                Key e-Governance initiatives
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {init:'Aadhaar', detail:'Unique biometric identity for 1.4 billion citizens · Used for DBT, verification, banking', color:'bg-blue-50 border-blue-200 text-blue-800'},
                  {init:'UPI (Unified Payments Interface)', detail:'NPCI · Real-time payment system · World\'s largest · 10+ billion transactions/month', color:'bg-green-50 border-green-200 text-green-800'},
                  {init:'DigiLocker', detail:'Digital document storage · 6 billion documents · Accepted as official documents', color:'bg-purple-50 border-purple-200 text-purple-800'},
                  {init:'UMANG App', detail:'Unified Mobile Application for New-age Governance · 1200+ govt services on one app', color:'bg-amber-50 border-amber-200 text-amber-800'},
                  {init:'GeM Portal', detail:'Government e-Marketplace · Public procurement platform · Rs. 4 lakh crore+ transactions', color:'bg-orange-50 border-orange-200 text-orange-800'},
                  {init:'CoWIN', detail:'COVID-19 vaccine management · 2.2 billion doses managed · Became global model', color:'bg-teal-50 border-teal-200 text-teal-800'},
                  {init:'PFMS', detail:'Public Financial Management System · Tracks all government payments · DBT backbone', color:'bg-pink-50 border-pink-200 text-pink-800'},
                  {init:'MyGov', detail:'Citizen engagement platform · Crowdsource policy ideas · 3 crore+ users', color:'bg-indigo-50 border-indigo-200 text-indigo-800'},
                ].map((i) => (
                  <div key={i.init} className={`border rounded-xl p-3 ${i.color}`}>
                    <div className="text-xs font-semibold mb-1">{i.init}</div>
                    <div className="text-xs text-gray-600">{i.detail}</div>
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
                  {q:'DBT — Direct Benefit Transfer', a:'Transfers subsidies directly to beneficiary bank accounts via Aadhaar-linked accounts. Eliminates middlemen. Saved Rs. 2.7 lakh crore (2014-2022).'},
                  {q:'JAM Trinity', a:'Jan Dhan + Aadhaar + Mobile — three pillars of financial inclusion and direct transfers. Revolutionary for welfare delivery.'},
                  {q:'Challenges of e-Governance', a:'Digital divide, privacy concerns, cybersecurity, lack of digital literacy, connectivity in rural areas, language barriers.'},
                  {q:'e-Governance vs Good Governance', a:'e-Governance is a tool for good governance — not an end in itself. Good governance needs accountability, transparency, participation — technology enables these.'},
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
                  {label:'Digital India', detail:'2015 umbrella', color:'bg-blue-50 text-blue-700 border-blue-200'},
                  {label:'Aadhaar', detail:'Biometric identity', color:'bg-green-50 text-green-700 border-green-200'},
                  {label:'UPI', detail:'Payment system', color:'bg-purple-50 text-purple-700 border-purple-200'},
                  {label:'JAM Trinity', detail:'JDY+Aadhaar+Mobile', color:'bg-amber-50 text-amber-700 border-amber-200'},
                  {label:'GeM Portal', detail:'Govt procurement', color:'bg-orange-50 text-orange-700 border-orange-200'},
                  {label:'DigiLocker', detail:'Digital documents', color:'bg-teal-50 text-teal-700 border-teal-200'},
                  {label:'DBT', detail:'Direct to bank', color:'bg-pink-50 text-pink-700 border-pink-200'},
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
                  {year:'2022 Mains GS-II', q:'Examine the role of JAM Trinity in transforming welfare delivery in India.'},
                  {year:'2020 Mains GS-II', q:'e-Governance is a necessary but not sufficient condition for good governance. Discuss.'},
                  {year:'2017 Prelims', q:'Which of the following is NOT a feature of the Digital India programme?'},
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
                  {q:'AI in governance — opportunities and ethical challenges', prob:90},
                  {q:'Digital divide — rural-urban gap in e-governance access', prob:82},
                  {q:'Data privacy and Aadhaar — Digital Personal Data Protection Act 2023', prob:88},
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
          <a href="/subjects/polity/19" className="text-sm text-blue-600 hover:text-blue-700">← Lokpal & Lokayukta</a>
          <div className="text-xs text-gray-400">Topic 20 of 20</div>
          <a href="/subjects/polity" className="text-sm text-green-600 hover:text-green-700">Polity complete! ✓</a>
        </div>
      </div>
    </div>
  )
}