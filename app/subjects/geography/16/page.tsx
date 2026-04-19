'use client'
import { useState } from 'react'
export default function OceanCurrentsPage(){
  const [activeTab,setActiveTab]=useState('notes')
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 16</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Ocean Currents & Tides</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Warm & Cold Currents · El Niño</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'Warm currents',l:'Move from equator to poles'},{v:'Cold currents',l:'Move from poles to equator'},{v:'Gulf Stream',l:'Warms Western Europe'},{v:'Humboldt',l:'Cold · Peru · Richest fishery'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5">
          {[{id:'notes',label:'📝 Notes'},{id:'visual',label:'📐 Visual'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-cyan-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-cyan-800 to-blue-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-cyan-200 mb-2">GS-I · World Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Ocean Currents — Rivers Within the Sea</div>
              <p className="text-sm leading-relaxed text-cyan-100 mb-4">Ocean currents are massive, continuous movements of ocean water driven by wind, temperature differences, salinity gradients and the Earth's rotation (Coriolis effect). They act like conveyor belts — transporting heat, nutrients and organisms across the globe. Understanding ocean currents is essential for UPSC as they influence climate, fisheries, navigation and even cyclone formation.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-cyan-50 border-b border-cyan-100 px-5 py-3"><div className="text-sm font-bold text-cyan-900">Warm Currents vs Cold Currents — Complete Comparison</div></div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                    <div className="text-sm font-bold text-red-900 mb-3">🔴 Warm Ocean Currents</div>
                    <p className="text-xs text-gray-700 mb-3">Flow from equatorial/tropical regions towards poles. Bring warm water and moderate the climate of the regions they flow past.</p>
                    {[
                      {name:'Gulf Stream (N.Atlantic)',effect:'Warms Western Europe · Without it, London would be like Siberia · Flows at 5 mph'},
                      {name:'Kuroshio Current (N.Pacific)',effect:'Japan receives warm water · Moderates Japan\'s climate'},
                      {name:'North Atlantic Drift',effect:'Extension of Gulf Stream · Keeps ports of Norway ice-free'},
                      {name:'Brazil Current (S.Atlantic)',effect:'Warm water along Brazil coast · Tropical climate maintained'},
                      {name:'Agulhas Current (Indian Ocean)',effect:'Warm water along South Africa east coast · Strong and fast'},
                    ].map(c=>(<div key={c.name} className="bg-white rounded-lg p-2.5 mb-2 border border-red-100"><div className="text-xs font-bold text-red-700">{c.name}</div><div className="text-xs text-gray-600 mt-0.5">{c.effect}</div></div>))}
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                    <div className="text-sm font-bold text-blue-900 mb-3">🔵 Cold Ocean Currents</div>
                    <p className="text-xs text-gray-700 mb-3">Flow from polar regions towards equator. Create cool, fog-prone climates. Associated with upwelling of nutrient-rich water — excellent fisheries.</p>
                    {[
                      {name:'Labrador Current (N.Atlantic)',effect:'Cold from Arctic → NE Canada · Causes dense fog on Grand Banks · Rich fishery'},
                      {name:'Canaries Current (NE Atlantic)',effect:'Cold water past NW Africa → Sahara Desert on coast has fog but no rain'},
                      {name:'Humboldt/Peru Current (Pacific)',effect:'World\'s richest fishery · Peru\'s anchovy industry · Cold water upwelling · El Niño disrupts it'},
                      {name:'California Current (N.Pacific)',effect:'Cold water along California coast · San Francisco\'s famous fog'},
                      {name:'Benguela Current (S.Atlantic)',effect:'Cold past Namibia → Namib Desert · Fog but no rain'},
                    ].map(c=>(<div key={c.name} className="bg-white rounded-lg p-2.5 mb-2 border border-blue-100"><div className="text-xs font-bold text-blue-700">{c.name}</div><div className="text-xs text-gray-600 mt-0.5">{c.effect}</div></div>))}
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mt-4">
                  <div className="bg-purple-50 border-b border-purple-100 px-5 py-3"><div className="text-sm font-bold text-purple-900">Effects of Ocean Currents — UPSC Critical Facts</div></div>
                  <div className="p-5 grid grid-cols-2 gap-3">
                    {[
                      {effect:'Desert formation on west coasts',color:'bg-amber-50 border-amber-200',tc:'text-amber-900',detail:'Cold currents along west coasts create cold deserts: Atacama (Humboldt Current), Namib (Benguela), Sahara NW coast (Canaries). Cold water evaporates less → no rain → desert.'},
                      {effect:'Fog and fishing banks',color:'bg-blue-50 border-blue-200',tc:'text-blue-800',detail:'Where warm and cold currents meet, dense fog forms. Grand Banks (Labrador + Gulf Stream) = world\'s richest fishing ground. Dogger Bank (North Sea) similar. Fog from temperature contrast.'},
                      {effect:'Climate moderation by warm currents',color:'bg-red-50 border-red-200',tc:'text-red-800',detail:'Gulf Stream keeps Western Europe (UK, Norway, France) much warmer than their latitude should be. Without Gulf Stream, London (-10°C in winter), Paris (-20°C. Current moderates by +10-15°C.'},
                      {effect:'El Niño disrupts Humboldt',color:'bg-orange-50 border-orange-200',tc:'text-orange-800',detail:'El Niño causes warm water to pool over E.Pacific — suppresses Humboldt cold upwelling. Fish migrate or die → Peru\'s anchovy catch collapses. 1982-83 El Niño wiped out 1/4 of Peru\'s marine life.'},
                    ].map(e=>(
                      <div key={e.effect} className={`border-2 ${e.color} rounded-xl p-3`}>
                        <div className={`text-xs font-bold ${e.tc} mb-2`}>{e.effect}</div>
                        <p className="text-xs text-gray-700 leading-relaxed">{e.detail}</p>
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
            <div className="text-sm font-semibold text-gray-900 mb-4">Ocean Currents — Schematic Global Pattern</div>
            <svg viewBox="0 0 700 360" width="100%">
              <rect width="700" height="360" fill="#e0f2fe" rx="12"/>
              <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0c4a6e">Global Ocean Current System — Thermohaline Conveyor Belt</text>
              <rect x="20" y="130" width="120" height="100" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" opacity="0.6"/>
              <text x="80" y="175" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e40af">North</text>
              <text x="80" y="188" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e40af">America</text>
              <rect x="250" y="100" width="100" height="120" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" opacity="0.6"/>
              <text x="300" y="158" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e40af">Europe</text>
              <rect x="260" y="230" width="130" height="100" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" opacity="0.6"/>
              <text x="325" y="278" textAnchor="middle" fontSize="10" fontWeight="600" fill="#92400e">Africa</text>
              <rect x="440" y="120" width="100" height="100" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" opacity="0.6"/>
              <text x="490" y="168" textAnchor="middle" fontSize="10" fontWeight="600" fill="#14532d">Asia</text>
              <path d="M 150 160 Q 200 140 250 155" fill="none" stroke="#dc2626" strokeWidth="3" markerEnd="url(#)"/>
              <text x="195" y="148" fontSize="9" fontWeight="600" fill="#dc2626">Gulf Stream →</text>
              <path d="M 150 200 Q 80 230 60 260" fill="none" stroke="#2563eb" strokeWidth="3"/>
              <text x="70" y="245" fontSize="9" fontWeight="600" fill="#2563eb">Labrador ↓</text>
              <path d="M 30 280 Q 80 310 150 290" fill="none" stroke="#2563eb" strokeWidth="2.5"/>
              <text x="80" y="318" fontSize="9" fontWeight="600" fill="#2563eb">Cold S.Atlantic ←</text>
              <path d="M 390 300 Q 350 320 300 310" fill="none" stroke="#2563eb" strokeWidth="2.5"/>
              <text x="340" y="335" fontSize="9" fontWeight="600" fill="#2563eb">Benguela ↑</text>
              <path d="M 540 200 Q 580 240 560 280" fill="none" stroke="#dc2626" strokeWidth="2.5"/>
              <text x="570" y="258" fontSize="9" fontWeight="600" fill="#dc2626">Agulhas →</text>
              <path d="M 80 280 Q 130 330 200 310 Q 350 330 440 300" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
              <text x="260" y="348" fontSize="9" fill="#dc2626">Warm deep water return flow (simplified)</text>
              <rect x="520" y="40" width="170" height="120" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="605" y="58" textAnchor="middle" fontSize="9" fontWeight="700" fill="#374151">LEGEND</text>
              <line x1="535" y1="75" x2="565" y2="75" stroke="#dc2626" strokeWidth="3"/>
              <text x="572" y="79" fontSize="9" fill="#374151">Warm current</text>
              <line x1="535" y1="95" x2="565" y2="95" stroke="#2563eb" strokeWidth="3"/>
              <text x="572" y="99" fontSize="9" fill="#374151">Cold current</text>
              <line x1="535" y1="115" x2="565" y2="115" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
              <text x="572" y="119" fontSize="9" fill="#374151">Deep return flow</text>
              <text x="605" y="148" textAnchor="middle" fontSize="8" fill="#6b7280">Thermohaline</text>
              <text x="605" y="160" textAnchor="middle" fontSize="8" fill="#6b7280">Circulation</text>
            </svg>
          </div>
        )}
        {activeTab==='predict'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[{q:'Atlantic Meridional Overturning Circulation (AMOC) slowdown — implications for global climate including Indian monsoon',prob:88},{q:'Ocean warming and bleaching of coral reefs — Great Barrier Reef, Lakshadweep impact',prob:84},{q:'Indian Ocean sea surface temperature and its impact on Indian monsoon variability',prob:78}].map((pred,i)=>(
                <div key={i} className="bg-cyan-50 border border-cyan-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-cyan-200 text-cyan-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2"><div className="flex-1 h-2 bg-cyan-100 rounded-full"><div className="h-2 bg-cyan-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-cyan-700">{pred.prob}%</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/15" className="text-sm text-green-600">← World Geography</a>
          <div className="text-xs text-gray-400">Topic 16 of 20</div>
          <a href="/subjects/geography/17" className="text-sm text-green-600">Atmosphere →</a>
        </div>
      </div>
    </div>
  )
}