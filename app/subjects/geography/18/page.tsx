'use client'
import { useState } from 'react'
export default function RocksEarthquakesPage(){
  const [activeTab,setActiveTab]=useState('notes')
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 18</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Rocks, Minerals & Earthquakes</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full">3 rock types · Seismic zones</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'3 rock types',l:'Igneous·Sedimentary·Metamorphic'},{v:'Zone IV & V',l:'Highest seismic risk India'},{v:'Ring of Fire',l:'75% earthquakes occur here'},{v:'Richter scale',l:'Measures magnitude'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5">
          {[{id:'notes',label:'📝 Notes'},{id:'visual',label:'📐 Visual'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-orange-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-orange-800 to-red-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-orange-200 mb-2">GS-I · World Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Rocks, Minerals & Earthquakes</div>
              <p className="text-sm leading-relaxed text-orange-100 mb-4">The Earth's crust is made of rocks — solid aggregates of minerals. Understanding the three rock types (igneous, sedimentary, metamorphic) and their formation is foundational to understanding soil types, mineral distribution, landforms and geological history. Earthquakes and volcanoes — the planet's most dramatic expressions of internal energy — are directly linked to plate tectonics.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-orange-50 border-b border-orange-100 px-5 py-3"><div className="text-sm font-bold text-orange-900">Three Types of Rocks — Complete Analysis</div></div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {type:'Igneous Rocks',color:'bg-red-600',light:'bg-red-50',border:'border-red-200',
                    formation:'Formed from solidification of molten magma (lava). If magma cools slowly inside earth → intrusive/plutonic igneous rocks (large crystals). If lava cools rapidly on surface → extrusive/volcanic rocks (small crystals).',
                    types:['Granite (intrusive): Very hard · Large crystals · Used in construction · Rajasthan, Karnataka · NMDC mines granite','Basalt (extrusive): Dark · Fine crystals · Deccan Traps of Maharashtra are basalt · Weathers to form black cotton soil','Gabbro: Intrusive · Dark · Deep ocean floors made of gabbro','Pumice: Volcanic froth · Very light · Floats on water · Used as abrasive'],
                    minerals:'Feldspar, Quartz, Mica, Olivine',
                    upsc:'Deccan Traps (basalt) cover 500,000 sq km — formed 65 million years ago. Weather to black cotton soil. Barren Island (India\'s only active volcano) erupts basalt.'},
                  {type:'Sedimentary Rocks',color:'bg-amber-600',light:'bg-amber-50',border:'border-amber-200',
                    formation:'Formed from deposition and compaction of sediments (fragments of other rocks, organic matter, minerals) over millions of years in layers (strata). The only rocks that contain fossils.',
                    types:['Sandstone: From sand grains · Porous · Good aquifer · Red Fort and Fatehpur Sikri built from red sandstone','Limestone: From calcium carbonate · Marine organisms · Cement raw material · Karst landscape (caves)','Shale: From clay/mud · Most common sedimentary rock · Source rock for oil and gas','Coal: From plant matter · Gondwana era swamp forests · Most important energy rock'],
                    minerals:'Calcite (limestone), Quartz (sandstone), Clay minerals (shale)',
                    upsc:'Sedimentary rocks contain 90% of world\'s coal, oil and gas. All fossils found in sedimentary rocks — key for paleontology. Rajasthan sandstone used in famous monuments.'},
                  {type:'Metamorphic Rocks',color:'bg-purple-600',light:'bg-purple-50',border:'border-purple-200',
                    formation:'Formed when existing rocks (igneous or sedimentary) are subjected to extreme heat and pressure deep inside the Earth — transforming their mineral structure without melting. Meta = change, morphic = form.',
                    types:['Marble: From limestone → metamorphism · Pure white · Taj Mahal built from Makrana marble (Rajasthan)','Slate: From shale → metamorphism · Splits into thin sheets · Used for roofing, blackboards','Schist: From shale/basalt under more pressure · Shiny · Mica minerals prominent','Quartzite: From sandstone → metamorphism · Very hard · Used as road material'],
                    minerals:'Mica, Garnet, Kyanite, Graphite (from coal → metamorphism)',
                    upsc:'The Aravalli range (world\'s oldest mountains) is made of metamorphic rocks. Kolar gold mines (Karnataka) — gold found in metamorphic schist rocks.'},
                ].map(r=>(
                  <div key={r.type} className={`border-2 ${r.border} rounded-2xl overflow-hidden`}>
                    <div className={`${r.color} text-white px-5 py-3`}><div className="font-bold text-sm text-white">{r.type}</div></div>
                    <div className={`p-4 ${r.light}`}>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{r.formation}</p>
                      <div className="bg-white rounded-xl p-3 border border-gray-100 mb-3">
                        <div className="text-xs font-bold text-gray-700 mb-2">Examples & Uses</div>
                        <ul className="flex flex-col gap-1">{r.types.map(t=><li key={t} className="text-xs text-gray-600 flex gap-1.5"><span className="text-orange-400 shrink-0">✓</span>{t}</li>)}</ul>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white rounded-lg p-2 border border-gray-100"><div className="text-xs font-bold text-gray-700">Key minerals</div><div className="text-xs text-gray-600 mt-0.5">{r.minerals}</div></div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2"><div className="text-xs font-bold text-yellow-800">UPSC tip</div><div className="text-xs text-gray-700 mt-0.5">{r.upsc}</div></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-red-50 border-b border-red-100 px-5 py-3"><div className="text-sm font-bold text-red-900">Earthquakes — India's Seismic Zones</div></div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs font-bold text-gray-700 mb-3">India's 5 Seismic Zones (BIS Classification)</div>
                    {[
                      {zone:'Zone V (Very High)',risk:'Most dangerous · Peak ground acceleration 0.36g',areas:'J&K, HP, Uttarakhand, NE India, Andaman & Nicobar · Entire Himalayan belt',color:'bg-red-100 border-red-300'},
                      {zone:'Zone IV (High)',risk:'Very high seismic risk',areas:'Delhi, Sikkim, Bihar-Nepal border, parts of J&K',color:'bg-orange-100 border-orange-300'},
                      {zone:'Zone III (Moderate)',risk:'Moderate seismic risk',areas:'Kerala, Goa, Mumbai, Rajasthan, UP',color:'bg-amber-100 border-amber-300'},
                      {zone:'Zone II (Low)',risk:'Low seismic risk',areas:'Parts of MP, Rajasthan, Tamil Nadu, AP',color:'bg-yellow-100 border-yellow-300'},
                      {zone:'Zone I (Very Low)',risk:'Very low risk · Not officially classified now',areas:'Merged with Zone II in current BIS code',color:'bg-green-100 border-green-300'},
                    ].map(z=>(
                      <div key={z.zone} className={`border-2 ${z.color} rounded-lg p-3 mb-2`}>
                        <div className="text-xs font-bold text-gray-800">{z.zone} — {z.risk}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{z.areas}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-700 mb-3">Major Earthquakes in India</div>
                    {[
                      {eq:'Bhuj Earthquake (2001)',mag:'7.7 Mw',impact:'20,000+ deaths · 1.5 lakh injured · $5.5 billion damage · Gujarat · Triggered urban earthquake safety reforms'},
                      {eq:'Kedarnath (2013)',mag:'Cloudbursts + EQ',impact:'5,700+ deaths · Glacial lake burst + earthquake + floods · Uttarakhand · Zone V vulnerability'},
                      {eq:'Nepal-India (2015)',mag:'7.8 Mw',impact:'9,000 deaths in Nepal · Tremors in Bihar, UP, Delhi · Reminded of Himalayan seismic risk'},
                      {eq:'Killari, Maharashtra (1993)',mag:'6.2 Mw',impact:'10,000 deaths · Latur district · Zone II area — showed risk everywhere · Triggered disaster management reform'},
                    ].map(e=>(
                      <div key={e.eq} className="bg-red-50 border border-red-100 rounded-xl p-3 mb-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-xs font-bold text-red-800">{e.eq}</div>
                          <span className="text-xs bg-red-200 text-red-900 px-2 py-0.5 rounded-full font-bold">{e.mag}</span>
                        </div>
                        <div className="text-xs text-gray-600">{e.impact}</div>
                      </div>
                    ))}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mt-2">
                      <div className="text-xs font-bold text-yellow-800 mb-1">Ring of Fire</div>
                      <p className="text-xs text-gray-700">The Ring of Fire is a horseshoe-shaped belt around the Pacific Ocean where 75% of world's earthquakes and 90% of volcanoes occur. Countries: Japan, Philippines, Indonesia, New Zealand, USA (California), Chile, Peru. India is NOT on the Ring of Fire — but has its own seismic activity from Himalayan collision.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">Rock Cycle — How Rocks Transform</div>
            <svg viewBox="0 0 700 320" width="100%">
              <rect width="700" height="320" fill="#fff7ed" rx="12"/>
              <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c2d12">The Rock Cycle — All 3 Rock Types are Interconvertible</text>
              <circle cx="180" cy="160" r="70" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
              <text x="180" y="152" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7f1d1d">IGNEOUS</text>
              <text x="180" y="167" textAnchor="middle" fontSize="9" fill="#991b1b">Granite, Basalt</text>
              <text x="180" y="180" textAnchor="middle" fontSize="8" fill="#991b1b">From magma/lava</text>
              <circle cx="520" cy="160" r="70" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
              <text x="520" y="152" textAnchor="middle" fontSize="11" fontWeight="700" fill="#78350f">SEDIMENTARY</text>
              <text x="520" y="167" textAnchor="middle" fontSize="9" fill="#92400e">Sandstone, Limestone</text>
              <text x="520" y="180" textAnchor="middle" fontSize="8" fill="#92400e">From deposits</text>
              <circle cx="350" cy="260" r="70" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
              <text x="350" y="252" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4c1d95">METAMORPHIC</text>
              <text x="350" y="267" textAnchor="middle" fontSize="9" fill="#5b21b6">Marble, Slate</text>
              <text x="350" y="280" textAnchor="middle" fontSize="8" fill="#5b21b6">Heat + Pressure</text>
              <path d="M 245 140 Q 350 100 455 140" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#)"/>
              <text x="350" y="115" textAnchor="middle" fontSize="9" fill="#374151">Weathering → Deposition</text>
              <path d="M 455 180 Q 420 240 390 248" fill="none" stroke="#374151" strokeWidth="2"/>
              <text x="450" y="230" textAnchor="middle" fontSize="9" fill="#374151">Heat+Pressure</text>
              <path d="M 310 248 Q 260 200 220 180" fill="none" stroke="#374151" strokeWidth="2"/>
              <text x="240" y="235" textAnchor="middle" fontSize="9" fill="#374151">Melting+Cooling</text>
              <circle cx="350" cy="80" r="35" fill="#374151" opacity="0.9"/>
              <text x="350" y="75" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">MAGMA</text>
              <text x="350" y="88" textAnchor="middle" fontSize="8" fill="#d1d5db">Molten rock</text>
            </svg>
          </div>
        )}
        {activeTab==='predict'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[{q:'Earthquake preparedness in India — seismic zones, building codes, early warning systems and disaster management',prob:88},{q:'Joshimath land subsidence — geological causes, human factors, lessons for Himalayan towns',prob:84},{q:'Barren Island volcano — India\'s only active volcano, recent eruptions, ecological impact',prob:70}].map((pred,i)=>(
                <div key={i} className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-orange-200 text-orange-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2"><div className="flex-1 h-2 bg-orange-100 rounded-full"><div className="h-2 bg-orange-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-orange-700">{pred.prob}%</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/17" className="text-sm text-green-600">← Atmosphere</a>
          <div className="text-xs text-gray-400">Topic 18 of 20</div>
          <a href="/subjects/geography/19" className="text-sm text-green-600">Coastal Plains →</a>
        </div>
      </div>
    </div>
  )
}