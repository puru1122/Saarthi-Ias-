'use client'
import { useState } from 'react'
export default function CoastalPlainsPage(){
  const [activeTab,setActiveTab]=useState('notes')
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 19</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Coastal Plains & Islands</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-full">7,516 km coastline · A&N · Lakshadweep</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'7,516 km',l:'Total coastline'},{v:'572 islands',l:'Andaman & Nicobar'},{v:'36 islands',l:'Lakshadweep'},{v:'2.37 million km²',l:'India\'s EEZ'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5">
          {[{id:'notes',label:'📝 Notes'},{id:'visual',label:'📐 Visual'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-teal-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-teal-800 to-cyan-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Coastal Plains & Islands of India</div>
              <p className="text-sm leading-relaxed text-teal-100 mb-4">India's 7,516 km coastline is one of its greatest strategic and economic assets. The two coasts — Western (Arabian Sea) and Eastern (Bay of Bengal) — have dramatically different characters in terms of width, landforms, rainfall and economic activities. The two island groups — Andaman & Nicobar and Lakshadweep — give India strategic depth in the Indo-Pacific and a massive Exclusive Economic Zone.</p>
              <div className="grid grid-cols-3 gap-3">
                {[{v:'West Coast',l:'1,500 km · Narrow · Lagoons'},{v:'East Coast',l:'1,700 km · Wider · Deltas'},{v:'Islands',l:'A&N + Lakshadweep'}].map(s=>(
                  <div key={s.l} className="bg-teal-700 border border-teal-600 rounded-xl p-3 text-center">
                    <div className="text-sm font-bold text-white">{s.v}</div>
                    <div className="text-xs text-teal-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3"><div className="text-sm font-bold text-teal-900">West Coast vs East Coast — Detailed Comparison</div></div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 mb-5">
                  {[
                    {coast:'Western Coastal Plain',color:'bg-blue-50 border-blue-300',tc:'text-blue-900',
                      length:'~1,500 km (Gujarat to Kanyakumari)',width:'10-25 km (narrow)',sea:'Arabian Sea',rainfall:'SW Monsoon hits first — very heavy (1,500-3,500mm)',divisions:['Konkan Coast: Maharashtra + Goa · 500 km · Narrow · Rocky','Kannad/Karnataka Coast: Karnataka · 300 km · Laterite cliffs','Malabar Coast: Kerala · 500 km · Famous for lagoons (Kayals) · Coconut palms'],
                      ports:'Mumbai (largest), Jawaharlal Nehru (JNPT), Kochi, Marmagao, New Mangalore, Kandla',
                      unique:'Kerala Backwaters (Vembanad Lake, Kayamkulam Lake) — unique lagoon system separated from sea by narrow sand bars · Houseboat tourism · Important waterway',
                      resources:'Fish, coconut, spices (Malabar was spice coast of ancient trade), rubber, coffee'},
                    {coast:'Eastern Coastal Plain',color:'bg-green-50 border-green-300',tc:'text-green-900',
                      length:'~1,700 km (WB to Kanyakumari)',width:'80-120 km (much wider)',sea:'Bay of Bengal',rainfall:'NE Monsoon (Oct-Dec) for Tamil Nadu · Less overall than west coast',divisions:['Northern Circar: Odisha + North AP · Mahanadi and Godavari deltas','Coromandel Coast: South AP + Tamil Nadu · Sandy · Krishna, Cauvery deltas','Deltaic plains: Very fertile · Rice bowl of India'],
                      ports:'Chennai, Visakhapatnam, Paradip, Haldia (Kolkata), Ennore, Tuticorin',
                      unique:'Chilika Lake (Odisha) — India\'s largest coastal lagoon, Ramsar site, flamingoes, Irrawaddy dolphins · Pulicat Lake (AP-TN border) — 2nd largest lagoon',
                      resources:'Rice (delta areas), fish, salt, oil and gas (KG basin offshore)'},
                  ].map(c=>(
                    <div key={c.coast} className={`border-2 ${c.color} rounded-xl p-4`}>
                      <div className={`text-sm font-bold ${c.tc} mb-3`}>{c.coast}</div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div><div className="text-xs font-semibold text-gray-600">Length</div><div className="text-xs text-gray-700">{c.length}</div></div>
                        <div><div className="text-xs font-semibold text-gray-600">Width</div><div className="text-xs text-gray-700">{c.width}</div></div>
                        <div><div className="text-xs font-semibold text-gray-600">Rainfall</div><div className="text-xs text-gray-700">{c.rainfall}</div></div>
                        <div><div className="text-xs font-semibold text-gray-600">Major ports</div><div className="text-xs text-gray-700">{c.ports}</div></div>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 border border-gray-100 mb-2">
                        <div className="text-xs font-bold text-gray-700 mb-1">Divisions</div>
                        {c.divisions.map(d=><div key={d} className="text-xs text-gray-600 mb-0.5">• {d}</div>)}
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2.5">
                        <div className="text-xs font-bold text-yellow-800">Special feature</div>
                        <div className="text-xs text-gray-700 mt-0.5">{c.unique}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                  <div className="bg-purple-50 border-b border-purple-100 px-5 py-3"><div className="text-sm font-bold text-purple-900">Islands — Strategic Importance</div></div>
                  <div className="p-5 grid grid-cols-2 gap-4">
                    {[
                      {name:'Andaman & Nicobar Islands',color:'bg-green-50 border-green-200',tc:'text-green-900',
                        location:'Bay of Bengal · 1,200 km from mainland · Close to Malacca Strait',
                        geography:'572 islands · 38 inhabited · Origin: submerged Arakan mountain range (Myanmar extension)',
                        admin:'UT · Capital: Port Blair · Only tribal reserve in India (Sentinelese, Jarawas)',
                        strategic:['Close to Malacca Strait — 40% world trade passes through','Tri-Services command (Navy, Army, Air Force) based here','INS Baaz — India\'s southernmost naval air station','India\'s unsinkable aircraft carrier in Bay of Bengal'],
                        special:'Barren Island: India\'s only active volcano · Indira Point: India\'s southernmost point · Cellular Jail (Kala Pani): British prison',
                        current:'Great Nicobar Development Project — India plans $72,000 crore holistic development including port, airport, township · Environmental concerns about tribal areas and biodiversity'},
                      {name:'Lakshadweep Islands',color:'bg-cyan-50 border-cyan-200',tc:'text-cyan-900',
                        location:'Arabian Sea · 200-440 km from Kerala coast',
                        geography:'36 coral atolls · 11 inhabited · Origin: coral reef (not volcanic) · No rivers · No perennial freshwater',
                        admin:'UT (smallest UT by area) · Capital: Kavaratti · Mostly Muslim population',
                        strategic:['Vital for monitoring Arabian Sea trade routes','Exclusive Economic Zone extends India\'s maritime reach','India-Maldives-Lakshadweep strategic triangle','Close to India\'s west coast oil shipping lanes'],
                        special:'9 Degree Channel separates from Maldives · Coconut is economic mainstay · Tuna fishing · Tourism on Agatti and Bangaram · Coral bleaching major threat',
                        current:'PM Modi visited (Jan 2024) — promoted as alternative to Maldives for tourism. Maldives-India diplomatic tension context. NITI Aayog development plan for Lakshadweep.'},
                    ].map(isl=>(
                      <div key={isl.name} className={`border-2 ${isl.color} rounded-xl p-4`}>
                        <div className={`text-sm font-bold ${isl.tc} mb-3`}>{isl.name}</div>
                        <div className="text-xs text-gray-600 mb-1"><span className="font-semibold">Location: </span>{isl.location}</div>
                        <div className="text-xs text-gray-600 mb-1"><span className="font-semibold">Geography: </span>{isl.geography}</div>
                        <div className="text-xs text-gray-600 mb-2"><span className="font-semibold">Administration: </span>{isl.admin}</div>
                        <div className="bg-white rounded-lg p-2.5 border border-gray-100 mb-2">
                          <div className="text-xs font-bold text-gray-700 mb-1">Strategic importance</div>
                          {isl.strategic.map(s=><div key={s} className="text-xs text-gray-600 mb-0.5">• {s}</div>)}
                        </div>
                        <div className="text-xs text-gray-600 mb-2"><span className="font-semibold">Special: </span>{isl.special}</div>
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-2.5">
                          <div className="text-xs font-bold text-teal-800">Current Affairs 2024</div>
                          <div className="text-xs text-gray-700 mt-0.5">{isl.current}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">India's Maritime Zones & Exclusive Economic Zone</div>
            <svg viewBox="0 0 700 320" width="100%">
              <rect width="700" height="320" fill="#e0f2fe" rx="12"/>
              <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0c4a6e">India's Maritime Zones (UNCLOS 1982)</text>
              {[
                {label:'Territorial Sea',dist:'12 nautical miles',rights:'Full sovereignty · Same as land territory · No foreign military vessels without permission',color:'#1d4ed8',x:20,w:130},
                {label:'Contiguous Zone',dist:'24 nautical miles',rights:'Can enforce customs, immigration, sanitation laws · Not full sovereignty',color:'#2563eb',x:165,w:130},
                {label:'Exclusive Economic Zone (EEZ)',dist:'200 nautical miles',rights:'Sovereign rights over all marine resources — fish, oil, gas, minerals · No sovereignty over water itself',color:'#0891b2',x:310,w:200},
                {label:'High Seas / International Waters',dist:'Beyond 200 nm',rights:'Freedom of navigation for all · No country has sovereignty · Common heritage of mankind',color:'#6b7280',x:525,w:150},
              ].map((z,i)=>(
                <g key={z.label}>
                  <rect x={z.x} y="40" width={z.w} height="160" rx="8" fill={z.color} opacity="0.15" stroke={z.color} strokeWidth="2"/>
                  <text x={z.x+z.w/2} y="68" textAnchor="middle" fontSize="10" fontWeight="700" fill={z.color}>{z.label}</text>
                  <text x={z.x+z.w/2} y="85" textAnchor="middle" fontSize="9" fill={z.color}>{z.dist}</text>
                  {z.rights.split('·').map((r,j)=>(
                    <text key={r} x={z.x+z.w/2} y={110+j*18} textAnchor="middle" fontSize="8" fill="#374151">{r.trim()}</text>
                  ))}
                </g>
              ))}
              <rect x="20" y="220" width="660" height="80" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="350" y="240" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0c4a6e">India's Strategic Maritime Significance</text>
              <text x="350" y="258" textAnchor="middle" fontSize="9" fill="#374151">EEZ: 2.37 million sq km · Largest in Indian Ocean · Fish, oil, gas, minerals, polymetallic nodules</text>
              <text x="350" y="274" textAnchor="middle" fontSize="9" fill="#374151">A&N Islands extend EEZ towards Malacca Strait · Lakshadweep extends EEZ into Arabian Sea</text>
              <text x="350" y="290" textAnchor="middle" fontSize="9" fill="#374151">India Coast Guard + Navy patrol this vast area · Blue Economy: $300 billion potential</text>
            </svg>
          </div>
        )}
        {activeTab==='predict'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[{q:'Great Nicobar Development Project — strategic significance, environmental concerns, tribal rights conflict',prob:92},{q:'India-Maldives relations and Lakshadweep — strategic importance, PM Modi\'s visit, tourism competition',prob:88},{q:'Blue Economy — India\'s maritime potential, Deep Ocean Mission, polymetallic nodules in Indian Ocean',prob:84},{q:'Coastal erosion in India — causes, affected states, CRZ regulations, adaptation measures',prob:76}].map((pred,i)=>(
                <div key={i} className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-teal-200 text-teal-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2"><div className="flex-1 h-2 bg-teal-100 rounded-full"><div className="h-2 bg-teal-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-teal-700">{pred.prob}%</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/18" className="text-sm text-green-600">← Rocks & Earthquakes</a>
          <div className="text-xs text-gray-400">Topic 19 of 20</div>
          <a href="/subjects/geography/20" className="text-sm text-green-600">Disaster Management →</a>
        </div>
      </div>
    </div>
  )
}