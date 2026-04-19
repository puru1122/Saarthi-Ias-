// Topic 15 - World Physical Geography
'use client'
import { useState } from 'react'
export default function WorldGeographyPage(){
  const [activeTab,setActiveTab]=useState('notes')
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 15</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">World Physical Geography</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Continents·Oceans·Mountains·Rivers</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018, 2015</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'7 continents',l:'Asia largest'},{v:'5 oceans',l:'Pacific largest'},{v:'Everest 8,849m',l:'Highest peak'},{v:'Mariana 11,034m',l:'Deepest trench'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5">
          {[{id:'notes',label:'📝 Notes'},{id:'visual',label:'📐 Visual'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-blue-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-blue-800 to-teal-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-2">GS-I · World Geography</div>
              <div className="text-2xl font-bold text-white mb-3">World Physical Geography — The Big Picture</div>
              <p className="text-sm leading-relaxed text-blue-100 mb-4">Understanding world physical geography is essential for UPSC — both for direct geography questions and for contextualizing international relations, resources, climate and disaster questions. The world has 7 continents, 5 oceans, and extraordinary diversity of landforms — from the Himalayas to the Mariana Trench, from the Amazon rainforest to the Sahara Desert.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 px-5 py-3"><div className="text-sm font-bold text-blue-900">7 Continents — Key Facts</div></div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  {cont:'Asia',color:'bg-red-50 border-red-200',tc:'text-red-900',area:'44.6 million sq km · Largest continent · 30% land area',pop:'4.7 billion · 60% world population',features:'Himalayas (highest mountains) · Tibetan Plateau (roof of world) · Gobi Desert · Yangtze, Yellow, Mekong rivers · Arabian Peninsula · Japanese archipelago',upsc:'China and India — 2 largest economies in Asia. South China Sea disputes. Belt and Road Initiative.'},
                  {cont:'Africa',color:'bg-amber-50 border-amber-200',tc:'text-amber-900',area:'30.2 million sq km · 2nd largest continent · 20% land area',pop:'1.4 billion · Fastest growing continent',features:'Sahara Desert (world\'s largest hot desert) · Congo Rainforest · Nile (longest river 6,650km) · Great Rift Valley · Kilimanjaro (5,895m highest peak)',upsc:'54 countries · Most resource-rich continent · India-Africa partnership growing · AU-India summit.'},
                  {cont:'North America',color:'bg-blue-50 border-blue-200',tc:'text-blue-900',area:'24.7 million sq km · 3rd largest',pop:'590 million',features:'Rocky Mountains · Appalachians · Mississippi-Missouri river system · Great Lakes · Caribbean islands · Central American isthmus',upsc:'USA dominant power · Canada-India relations (Khalistan issue) · Mexico near-shoring trend competing with India.'},
                  {cont:'South America',color:'bg-green-50 border-green-200',tc:'text-green-900',area:'17.8 million sq km',pop:'434 million',features:'Andes Mountains (longest mountain range, 7,000km) · Amazon River (largest by discharge) · Amazon Rainforest (40% of world\'s tropical forests) · Atacama Desert (driest)',upsc:'Amazon deforestation — global climate concern. Lithium Triangle (Chile, Bolivia, Argentina) — critical for EVs. Brazil in BRICS.'},
                  {cont:'Antarctica',color:'bg-gray-50 border-gray-200',tc:'text-gray-900',area:'14 million sq km · 5th largest · Ice-covered',pop:'No permanent population · 1,000-5,000 researchers',features:'90% of world\'s fresh water (frozen) · Vinson Massif (4,892m) · Antarctic Treaty 1959 · Ozone hole above Antarctica · India has Maitri and Bharati stations',upsc:'India\'s Antarctic research · Antarctic Treaty — India signatory · Climate change melting ice — sea level rise threat.'},
                  {cont:'Europe',color:'bg-purple-50 border-purple-200',tc:'text-purple-900',area:'10.5 million sq km · 6th largest',pop:'748 million',features:'Alps, Pyrenees mountain ranges · Rhine, Danube, Volga major rivers · Mediterranean Sea · Scandinavian Peninsula · Baltic and North Seas',upsc:'EU integration · NATO expansion · Russia-Ukraine war impact. India-EU FTA negotiations. Russia energy dependence issues.'},
                  {cont:'Australia (Oceania)',color:'bg-teal-50 border-teal-200',tc:'text-teal-900',area:'8.5 million sq km · Smallest continent',pop:'43 million',features:'Great Dividing Range · Great Barrier Reef · Outback desert · Murray-Darling river system · Uluru (Ayers Rock)',upsc:'Australia-India Quad partnership. AUKUS nuclear submarine deal. Indo-Pacific strategy. Critical minerals partnership.'},
                ].map(c=>(
                  <div key={c.cont} className={`border-2 ${c.color} rounded-xl p-4`}>
                    <div className={`text-sm font-bold ${c.tc} mb-2`}>{c.cont}</div>
                    <div className="text-xs text-gray-600 mb-1"><span className="font-semibold">Area: </span>{c.area}</div>
                    <div className="text-xs text-gray-600 mb-1"><span className="font-semibold">Population: </span>{c.pop}</div>
                    <div className="text-xs text-gray-600 mb-2"><span className="font-semibold">Key features: </span>{c.features}</div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                      <div className="text-xs font-bold text-yellow-800">UPSC relevance</div>
                      <div className="text-xs text-gray-700 mt-0.5">{c.upsc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3"><div className="text-sm font-bold text-teal-900">5 Oceans & World's Extreme Points</div></div>
              <div className="p-5 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-bold text-gray-700 mb-3">🌊 Five Oceans</div>
                  {[
                    {ocean:'Pacific Ocean',area:'165 million sq km · Largest · Mariana Trench (11,034m deepest)',note:'Ring of Fire surrounds it · 46% of world\'s ocean area'},
                    {ocean:'Atlantic Ocean',area:'106 million sq km · 2nd largest · S-shaped',note:'Mid-Atlantic Ridge · Gulf Stream warm current · Most shipping routes'},
                    {ocean:'Indian Ocean',area:'70 million sq km · 3rd · Warm waters',note:'Monsoon dependent · India surrounded on 3 sides · Strategic for India'},
                    {ocean:'Southern Ocean',area:'21 million sq km · Surrounds Antarctica',note:'Recognized as 5th ocean in 2000 · Strong circumpolar current'},
                    {ocean:'Arctic Ocean',area:'14 million sq km · Smallest · North Pole',note:'Melting due to climate change · New shipping routes opening up'},
                  ].map(o=>(
                    <div key={o.ocean} className="bg-blue-50 rounded-lg p-2.5 mb-2">
                      <div className="text-xs font-bold text-blue-800">{o.ocean}</div>
                      <div className="text-xs text-gray-600">{o.area}</div>
                      <div className="text-xs text-gray-500 italic">{o.note}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-700 mb-3">📌 World Extremes</div>
                  {[
                    {cat:'Highest mountain',val:'Mt. Everest 8,849m (Nepal/China border)'},
                    {cat:'Deepest ocean point',val:'Mariana Trench 11,034m (Pacific)'},
                    {cat:'Longest river',val:'Nile 6,650km (disputed with Amazon)'},
                    {cat:'Largest river by discharge',val:'Amazon 209,000 m³/s (South America)'},
                    {cat:'Largest desert (hot)',val:'Sahara 9.2 million sq km (Africa)'},
                    {cat:'Largest desert (cold)',val:'Antarctic Desert 14.2 million sq km'},
                    {cat:'Largest lake',val:'Caspian Sea 371,000 sq km (saline)'},
                    {cat:'Deepest lake',val:'Lake Baikal 1,642m (Russia) · largest freshwater'},
                    {cat:'Largest rainforest',val:'Amazon 5.5 million sq km (South America)'},
                    {cat:'Largest coral reef',val:'Great Barrier Reef 2,300km (Australia)'},
                  ].map(e=>(
                    <div key={e.cat} className="flex gap-2 py-1.5 border-b border-gray-100 last:border-0">
                      <span className="text-xs text-gray-500 w-40 shrink-0">{e.cat}</span>
                      <span className="text-xs font-semibold text-gray-800">{e.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">World's Major Mountain Ranges — Comparison</div>
            <svg viewBox="0 0 700 280" width="100%">
              <rect width="700" height="280" fill="#f0f9ff" rx="12"/>
              <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">World's Major Mountain Ranges</text>
              {[
                {range:'Himalayas',ht:8849,color:'#1d4ed8',continent:'Asia',peak:'Everest'},
                {range:'Andes',ht:6961,color:'#059669',continent:'S.America',peak:'Aconcagua'},
                {range:'Rockies',ht:4399,color:'#7c3aed',continent:'N.America',peak:'Elbert'},
                {range:'Alps',ht:4808,color:'#dc2626',continent:'Europe',peak:'Mont Blanc'},
                {range:'Kilimanjaro',ht:5895,color:'#d97706',continent:'Africa',peak:'Uhuru'},
                {range:'Great Dividing',ht:2228,color:'#0891b2',continent:'Australia',peak:'Kosciuszko'},
              ].map((m,i)=>(
                <g key={m.range}>
                  <rect x={20+i*110} y={240-m.ht/50} width="90" height={m.ht/50} rx="4" fill={m.color} opacity="0.8"/>
                  <text x={65+i*110} y={235-m.ht/50} textAnchor="middle" fontSize="8" fontWeight="600" fill={m.color}>{(m.ht/1000).toFixed(1)}km</text>
                  <text x={65+i*110} y="256" textAnchor="middle" fontSize="9" fontWeight="700" fill="#374151">{m.range}</text>
                  <text x={65+i*110} y="269" textAnchor="middle" fontSize="8" fill="#6b7280">{m.continent}</text>
                </g>
              ))}
            </svg>
          </div>
        )}
        {activeTab==='predict'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[{q:'Indo-Pacific region — geographical significance, chokepoints, Quad and India\'s maritime strategy',prob:92},{q:'Amazon deforestation — global climate impact, Brazil\'s policies, India\'s stakes in global carbon sinks',prob:85},{q:'Arctic melting — new shipping routes, resource competition, India\'s Arctic policy 2022',prob:80},{q:'Lithium Triangle (S.America) — India\'s critical mineral sourcing strategy for EV revolution',prob:74}].map((pred,i)=>(
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2"><div className="flex-1 h-2 bg-blue-100 rounded-full"><div className="h-2 bg-blue-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-blue-700">{pred.prob}%</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/14" className="text-sm text-green-600">← Population</a>
          <div className="text-xs text-gray-400">Topic 15 of 20</div>
          <a href="/subjects/geography/16" className="text-sm text-green-600">Ocean Currents →</a>
        </div>
      </div>
    </div>
  )
}