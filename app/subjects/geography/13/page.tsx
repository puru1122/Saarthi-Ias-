'use client'
import { useState } from 'react'
export default function TransportPage(){
  const [activeTab,setActiveTab]=useState('notes')
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 13</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Transport & Communication</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Roads·Railways·Airways·Waterways</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'63.73 lakh km',l:'Road network (2nd world)'},{v:'68,000 km',l:'Railway network (4th world)'},{v:'148 airports',l:'Civil aviation'},{v:'111 waterways',l:'National waterways'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'visual',label:'📐 Visual'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-indigo-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-indigo-800 to-blue-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-indigo-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Transport & Communication Networks</div>
              <p className="text-sm leading-relaxed text-indigo-100 mb-4">Transport is the lifeline of a nation's economy. India has one of the world's largest transport networks — the 2nd largest road network, 4th largest railway network, and rapidly expanding air and waterway connectivity. The PM Gati Shakti National Master Plan (2021) aims to integrate all modes of transport for seamless multimodal logistics.</p>
              <div className="grid grid-cols-4 gap-2">
                {[{v:'Roads',l:'63.73 lakh km'},{v:'Railways',l:'68,000 km'},{v:'Airports',l:'148 civil airports'},{v:'Waterways',l:'NW-1: Ganga 1620km'}].map(s=>(
                  <div key={s.l} className="bg-indigo-700 border border-indigo-600 rounded-xl p-2.5 text-center">
                    <div className="text-xs font-bold text-white">{s.v}</div>
                    <div className="text-xs text-indigo-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-indigo-50 border-b border-indigo-100 px-5 py-3"><div className="text-sm font-bold text-indigo-900">4 Modes of Transport — Complete Analysis</div></div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {mode:'Road Transport',color:'bg-orange-600',light:'bg-orange-50',border:'border-orange-200',icon:'🚗',
                    stats:'63.73 lakh km total road network — 2nd largest in world after USA',
                    types:[
                      {type:'National Highways',detail:'1.45 lakh km · Connect state capitals, major ports · NH-44 longest (3,745 km — Srinagar to Kanyakumari) · Maintained by NHAI'},
                      {type:'State Highways',detail:'1.76 lakh km · Connect district HQ to state capital · State PWD maintains · Golden Quadrilateral (5,846 km) connects Delhi-Mumbai-Chennai-Kolkata'},
                      {type:'District Roads',detail:'Maintained by Zila Parishads · Connect villages to district HQ'},
                      {type:'Rural/Village Roads',detail:'PMGSY (2000) — Pradhan Mantri Gram Sadak Yojana · All-weather roads to villages · 6.43 lakh km built'},
                    ],
                    current:'PM Gati Shakti · Bharatmala Project · 42 Economic Corridors · Express highways · India built 37km roads/day in FY2024'},
                  {mode:'Railway Transport',color:'bg-blue-700',light:'bg-blue-50',border:'border-blue-200',icon:'🚂',
                    stats:'68,000 km route length — 4th largest in world · 22 million passengers/day · 8,000 MT freight/year',
                    types:[
                      {type:'Broad Gauge (1676mm)',detail:'90% of Indian network · Standard for most mainlines · High speed Vande Bharat runs on this'},
                      {type:'Metro Gauge (1000mm)',detail:'Declining · Being converted to broad gauge · Still in some hill areas'},
                      {type:'Narrow Gauge (762mm)',detail:'Mountain railways — Darjeeling, Kalka-Shimla, Matheran · UNESCO World Heritage · Tourist lines'},
                      {type:'High Speed Rail',detail:'Bullet train Mumbai-Ahmedabad (under construction) · Vande Bharat Express · Fastest Indian train 180 km/h'},
                    ],
                    current:'Kavach anti-collision system · 100% electrification target · Dedicated Freight Corridors (EDFC, WDFC) · Station redevelopment'},
                  {mode:'Air Transport',color:'bg-sky-600',light:'bg-sky-50',border:'border-sky-200',icon:'✈️',
                    stats:'India 3rd largest domestic aviation market · 148 operational airports · 250 million passengers (2023)',
                    types:[
                      {type:'International hubs',detail:'Delhi (Indira Gandhi) · Mumbai (Chhatrapati Shivaji) · Bangalore · Chennai · Hyderabad · Kolkata'},
                      {type:'UDAN scheme 2016',detail:'Regional Connectivity Scheme · 449 routes · 70 underserved airports · Fare cap at Rs.2,500 · Northeast connectivity'},
                      {type:'Cargo aviation',detail:'Delhi, Mumbai major cargo hubs · Perishables, pharma exports · Post-COVID air cargo boom'},
                      {type:'New airports',detail:'Noida International Airport (Jewar) · Navi Mumbai · Mopa (Goa) · Under construction nationwide'},
                    ],
                    current:'IndiGo dominates 60% market share · Air India Tata relaunch · India to need 2,000 new aircraft by 2042 (Boeing forecast)'},
                  {mode:'Water Transport',color:'bg-teal-600',light:'bg-teal-50',border:'border-teal-200',icon:'⚓',
                    stats:'7,516 km coastline · 111 National Waterways · 12 major ports handle 1,500 MT cargo annually',
                    types:[
                      {type:'Major Ports',detail:'12 major ports under Centre: Mumbai, JNPT, Chennai, Visakhapatnam, Kolkata, Paradip, Kandla, etc. · JNPT handles 50% container traffic'},
                      {type:'National Waterway 1',detail:'Allahabad-Haldia (1620 km) on Ganga · Longest NW · Ro-Ro service · Coal, fertilizer transport'},
                      {type:'Inland Water Transport',detail:'Northeast India · Kerala backwaters · Assam-Bangladesh · Low cost bulk cargo'},
                      {type:'Sagarmala Project',detail:'Port-led development · Port modernization · Coastal shipping promotion · 150,000 crore investment'},
                    ],
                    current:'Sagarmala · Waterway development · Blue Economy · India aims 10GT merchant fleet by 2030'},
                ].map(t=>(
                  <div key={t.mode} className={`border-2 ${t.border} rounded-2xl overflow-hidden`}>
                    <div className={`${t.color} text-white px-5 py-3 flex items-center gap-2`}><span className="text-xl">{t.icon}</span><div><div className="font-bold text-sm text-white">{t.mode}</div><div className="text-xs text-white opacity-80">{t.stats}</div></div></div>
                    <div className={`p-4 ${t.light}`}>
                      <div className="flex flex-col gap-2 mb-3">
                        {t.types.map(ty=>(
                          <div key={ty.type} className="bg-white rounded-xl p-3 border border-gray-100">
                            <div className="text-xs font-bold text-gray-800 mb-1">{ty.type}</div>
                            <div className="text-xs text-gray-600 leading-relaxed">{ty.detail}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                        <div className="text-xs font-bold text-yellow-800 mb-1">💡 Current Affairs 2024-25</div>
                        <div className="text-xs text-gray-700">{t.current}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">Transport Network Comparison</div>
            <svg viewBox="0 0 700 300" width="100%">
              <rect width="700" height="300" fill="#f8fafc" rx="12"/>
              <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#374151">India's Transport Network — Key Statistics</text>
              {[
                {mode:'Roads',value:63.73,unit:'lakh km',rank:'2nd world',color:'#ea580c',x:50},
                {mode:'Railways',value:68,unit:'000 km',rank:'4th world',color:'#2563eb',x:220},
                {mode:'Airports',value:148,unit:'operational',rank:'Growing fast',color:'#0891b2',x:390},
                {mode:'Major Ports',value:12,unit:'major ports',rank:'1500MT/yr',color:'#059669',x:550},
              ].map(t=>(
                <g key={t.mode}>
                  <rect x={t.x} y="40" width="130" height="220" rx="10" fill={t.color} opacity="0.1" stroke={t.color} strokeWidth="2"/>
                  <text x={t.x+65} y="70" textAnchor="middle" fontSize="11" fontWeight="700" fill={t.color}>{t.mode}</text>
                  <text x={t.x+65} y="120" textAnchor="middle" fontSize="22" fontWeight="900" fill={t.color}>{t.value}</text>
                  <text x={t.x+65} y="140" textAnchor="middle" fontSize="10" fill="#6b7280">{t.unit}</text>
                  <rect x={t.x+20} y="155" width="90" height="25" rx="6" fill={t.color}/>
                  <text x={t.x+65} y="172" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">{t.rank}</text>
                  <text x={t.x+65} y="220" textAnchor="middle" fontSize="8" fill={t.color} fontWeight="600">PM Gati Shakti</text>
                  <text x={t.x+65} y="234" textAnchor="middle" fontSize="8" fill={t.color}>Integration focus</text>
                </g>
              ))}
            </svg>
          </div>
        )}
        {activeTab==='predict'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[{q:'PM Gati Shakti National Master Plan — multimodal logistics, NIP, economic corridors and impact on manufacturing competitiveness',prob:90},{q:'UDAN scheme — regional aviation connectivity, impact on tier-2/3 cities and Northeast India',prob:84},{q:'Dedicated Freight Corridors — EDFC and WDFC — impact on logistics cost, industrial corridors',prob:80},{q:'Inland waterways development — NW-1 Ganga, Sagarmala and Blue Economy potential',prob:72}].map((pred,i)=>(
                <div key={i} className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-indigo-200 text-indigo-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2"><div className="flex-1 h-2 bg-indigo-100 rounded-full"><div className="h-2 bg-indigo-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-indigo-700">{pred.prob}%</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/12" className="text-sm text-green-600">← Industries</a>
          <div className="text-xs text-gray-400">Topic 13 of 20</div>
          <a href="/subjects/geography/14" className="text-sm text-green-600">Population →</a>
        </div>
      </div>
    </div>
  )
}