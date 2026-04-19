'use client'
import { useState } from 'react'
export default function AtmospherePage(){
  const [activeTab,setActiveTab]=useState('notes')
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 17</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Atmosphere & Climate Zones</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full">5 layers · Pressure belts · Wind systems</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'5 layers',l:'Troposphere to Exosphere'},{v:'Ozone layer',l:'Stratosphere 15-35km'},{v:'Jet streams',l:'Upper troposphere'},{v:'Coriolis effect',l:'Earth\'s rotation effect'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5">
          {[{id:'notes',label:'📝 Notes'},{id:'visual',label:'📐 Visual'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-sky-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-sky-800 to-indigo-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-200 mb-2">GS-I · World Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Atmosphere — Earth's Protective Shell</div>
              <p className="text-sm leading-relaxed text-sky-100 mb-4">The atmosphere is the thin layer of gases surrounding Earth — extending about 10,000 km above the surface. Despite its vast extent, 99% of its mass is concentrated in the lowest 32 km. It protects life by absorbing UV radiation (ozone layer), moderating temperatures, and providing oxygen for respiration. Understanding atmospheric layers, pressure belts and wind systems is fundamental to understanding all climate phenomena.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-sky-50 border-b border-sky-100 px-5 py-3"><div className="text-sm font-bold text-sky-900">5 Layers of the Atmosphere</div></div>
              <div className="p-5 flex flex-col gap-3">
                {[
                  {layer:'Troposphere',height:'0–12 km (varies: 8km poles, 16km equator)',color:'bg-blue-100 border-blue-300',tc:'text-blue-900',
                    key:'All weather phenomena occur here · Temperature decreases with altitude (lapse rate 6.5°C/km) · Contains 75% of atmospheric mass · 99% of water vapour · Jet streams at top (tropopause)',
                    importance:'Most important layer for geography — all rain, storms, snow, cyclones happen here'},
                  {layer:'Stratosphere',height:'12–50 km',color:'bg-purple-100 border-purple-300',tc:'text-purple-900',
                    key:'Contains ozone layer (15-35 km) — absorbs UV radiation · Temperature increases with altitude (ozone absorbs UV heat) · Very calm — no turbulence · Commercial aircraft fly here',
                    importance:'Ozone hole over Antarctica (CFC damage) — UV increases → skin cancer · Montreal Protocol 1987 — most successful environmental treaty'},
                  {layer:'Mesosphere',height:'50–80 km',color:'bg-indigo-100 border-indigo-300',tc:'text-indigo-900',
                    key:'Temperature decreases again with altitude · Coldest layer (-90°C at top) · Meteors burn up here (shooting stars) · Noctilucent clouds at 80 km',
                    importance:'Protects Earth from meteorite bombardment · Without it, Earth would be pockmarked like the Moon'},
                  {layer:'Thermosphere (Ionosphere)',height:'80–700 km',color:'bg-violet-100 border-violet-300',tc:'text-violet-900',
                    key:'Temperature rises dramatically (up to 2000°C) but air so thin it feels cold · Contains ionosphere — reflects radio waves (AM radio broadcasts) · Auroras (Northern/Southern Lights) occur here',
                    importance:'Aurora Borealis/Australis visible from here · Radio wave reflection enables long-distance communication'},
                  {layer:'Exosphere',height:'700+ km (merges with space)',color:'bg-gray-100 border-gray-300',tc:'text-gray-800',
                    key:'Outermost layer · Gases very thin — atoms escape to space · Satellites orbit here · Gradually merges with outer space · Hydrogen and Helium dominant',
                    importance:'ISS orbits in lower exosphere · GPS satellites · Weather satellites provide cloud imagery'},
                ].map(l=>(
                  <div key={l.layer} className={`border-2 ${l.color} rounded-xl p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`text-sm font-bold ${l.tc}`}>{l.layer}</div>
                      <span className="text-xs text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">{l.height}</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-2">{l.key}</p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                      <div className="text-xs font-bold text-yellow-800">UPSC Importance</div>
                      <div className="text-xs text-gray-700 mt-0.5">{l.importance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-indigo-50 border-b border-indigo-100 px-5 py-3"><div className="text-sm font-bold text-indigo-900">Pressure Belts & Global Wind Systems</div></div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold text-gray-700 mb-3">Pressure Belts (from Equator to Poles)</div>
                    {[
                      {belt:'Equatorial Low (0°)',type:'Low pressure',reason:'Sun overhead → hot air rises → low pressure · ITCZ here · Heavy rainfall · Doldrums (calm winds)'},
                      {belt:'Sub-tropical High (30°N/S)',type:'High pressure',reason:'Air descends here (subsidence) → high pressure · Hot dry deserts here (Sahara, Thar, Australian) · Horse latitudes'},
                      {belt:'Sub-polar Low (60°N/S)',type:'Low pressure',reason:'Polar and tropical air meet (polar front) → low pressure · Frontal rainfall · Cyclones (temperate) common'},
                      {belt:'Polar High (90°N/S)',type:'High pressure',reason:'Very cold air → dense → sinks → high pressure · Antarctica and Arctic high pressure'},
                    ].map(b=>(
                      <div key={b.belt} className="bg-gray-50 rounded-lg p-3 mb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-gray-800">{b.belt}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${b.type==='Low pressure'?'bg-red-100 text-red-700':'bg-blue-100 text-blue-700'}`}>{b.type}</span>
                        </div>
                        <p className="text-xs text-gray-600">{b.reason}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-700 mb-3">Global Wind Systems</div>
                    {[
                      {wind:'Trade Winds',from:'Sub-tropical high (30°) → Equatorial low (0°)',direction:'NE trades (N.hemisphere) · SE trades (S.hemisphere)',importance:'Most consistent winds · Drove sailing ships in Age of Discovery · Columbus used NE trades to reach Americas'},
                      {wind:'Westerlies',from:'Sub-tropical high (30°) → Sub-polar low (60°)',direction:'SW winds in N.hemisphere · NW winds in S.hemisphere',importance:'Bring Western Disturbances to India in winter · Responsible for temperate cyclones · Mid-latitude weather systems'},
                      {wind:'Polar Easterlies',from:'Polar high (90°) → Sub-polar low (60°)',direction:'NE in N.hemisphere · SE in S.hemisphere',importance:'Cold dry winds · Create polar weather systems · Interact with westerlies at polar front'},
                      {wind:'Jet Streams',from:'Upper troposphere (8-12 km altitude)',direction:'West to east · Polar jet and Subtropical jet · 300-400 km/h speed',importance:'Control weather systems · Western Disturbances travel along them · Pilots use them for faster flights · Block jet stream causes heatwaves'},
                    ].map(w=>(
                      <div key={w.wind} className="bg-blue-50 rounded-lg p-3 mb-2 border border-blue-100">
                        <div className="text-xs font-bold text-blue-800 mb-1">{w.wind}</div>
                        <div className="text-xs text-gray-600 mb-1">{w.from}</div>
                        <div className="text-xs text-gray-600 mb-1">{w.direction}</div>
                        <div className="text-xs text-green-700 font-medium">{w.importance}</div>
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
            <div className="text-sm font-semibold text-gray-900 mb-4">Atmospheric Layers — Height Profile</div>
            <svg viewBox="0 0 700 400" width="100%">
              <rect width="700" height="400" fill="#f0f9ff" rx="12"/>
              {[
                {name:'Exosphere',h:0,hh:60,color:'#e0e7ff',stroke:'#4338ca',note:'700km+ · Satellites · Merges with space'},
                {name:'Thermosphere / Ionosphere',h:60,hh:80,color:'#ede9fe',stroke:'#7c3aed',note:'80-700km · Auroras · Radio reflection · ISS'},
                {name:'Mesosphere',h:140,hh:80,color:'#dbeafe',stroke:'#2563eb',note:'50-80km · Meteor burn · Coldest (-90°C)'},
                {name:'Stratosphere',h:220,hh:100,color:'#d1fae5',stroke:'#059669',note:'12-50km · OZONE LAYER · Aircraft fly here'},
                {name:'Troposphere',h:320,hh:70,color:'#fef3c7',stroke:'#d97706',note:'0-12km · ALL WEATHER · 75% mass'},
              ].map(l=>(
                <g key={l.name}>
                  <rect x="100" y={l.h} width="300" height={l.hh} rx="4" fill={l.color} stroke={l.stroke} strokeWidth="1.5"/>
                  <text x="250" y={l.h+l.hh/2-4} textAnchor="middle" fontSize="11" fontWeight="700" fill={l.stroke}>{l.name}</text>
                  <text x="250" y={l.h+l.hh/2+10} textAnchor="middle" fontSize="8" fill="#374151">{l.note}</text>
                </g>
              ))}
              <text x="50" y="392" fontSize="10" fontWeight="700" fill="#374151">EARTH</text>
              <rect x="100" y="390" width="300" height="10" rx="3" fill="#6b7280"/>
              <line x1="410" y1="355" x2="500" y2="355" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="505" y="359" fontSize="9" fill="#d97706">Weather zone</text>
              <line x1="410" y1="270" x2="500" y2="270" stroke="#059669" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="505" y="274" fontSize="9" fill="#059669">Ozone layer</text>
              <line x1="410" y1="180" x2="500" y2="180" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="505" y="184" fontSize="9" fill="#2563eb">Meteor burns here</text>
              <line x1="410" y1="100" x2="500" y2="100" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4,2"/>
              <text x="505" y="104" fontSize="9" fill="#7c3aed">Auroras here</text>
              <text x="50" y="320" fontSize="8" fill="#d97706">0km</text>
              <text x="50" y="220" fontSize="8" fill="#059669">12km</text>
              <text x="50" y="140" fontSize="8" fill="#2563eb">50km</text>
              <text x="50" y="60" fontSize="8" fill="#7c3aed">80km</text>
            </svg>
          </div>
        )}
        {activeTab==='predict'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[{q:'Ozone layer recovery — Montreal Protocol success story, CFC phase-out, what India has done',prob:82},{q:'Jet stream disruption due to Arctic warming — impact on extreme weather events globally and in India',prob:78},{q:'Urban heat island effect — causes, measurement, mitigation in Indian cities',prob:72}].map((pred,i)=>(
                <div key={i} className="bg-sky-50 border border-sky-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-sky-200 text-sky-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2"><div className="flex-1 h-2 bg-sky-100 rounded-full"><div className="h-2 bg-sky-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-sky-700">{pred.prob}%</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/16" className="text-sm text-green-600">← Ocean Currents</a>
          <div className="text-xs text-gray-400">Topic 17 of 20</div>
          <a href="/subjects/geography/18" className="text-sm text-green-600">Rocks & Earthquakes →</a>
        </div>
      </div>
    </div>
  )
}