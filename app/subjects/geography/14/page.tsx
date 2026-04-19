'use client'
import { useState } from 'react'
export default function PopulationPage(){
  const [activeTab,setActiveTab]=useState('notes')
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 14</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Population & Migration</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full">Census 2011 · 1.43 billion</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: Every year</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'1.43 billion',l:'Population (2023 est)'},{v:'#1 in world',l:'Surpassed China 2023'},{v:'940',l:'Sex ratio (2011)'},{v:'74.04%',l:'Literacy rate 2011'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'visual',label:'📐 Visual'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-rose-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-rose-700 to-red-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-rose-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Population & Migration — India's Demographic Story</div>
              <p className="text-sm leading-relaxed text-rose-100 mb-4">In April 2023, India surpassed China to become the world's most populous nation with 1.43 billion people. India is at a demographic inflection point — it has the world's largest youth population (demographic dividend) but also faces challenges of unemployment, urbanization and regional inequality. The Census 2011 remains the official reference; Census 2021 was delayed due to COVID.</p>
              <div className="grid grid-cols-4 gap-2">
                {[{v:'1.43 billion',l:'2023 estimate'},{v:'382/sq km',l:'Density (2011)'},{v:'17.5%',l:'World population share'},{v:'65%',l:'Below 35 years age'}].map(s=>(
                  <div key={s.l} className="bg-rose-700 border border-rose-600 rounded-xl p-2.5 text-center">
                    <div className="text-xs font-bold text-white">{s.v}</div>
                    <div className="text-xs text-rose-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-rose-50 border-b border-rose-100 px-5 py-3"><div className="text-sm font-bold text-rose-900">Census 2011 — Key Data Points</div></div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[
                    {cat:'Total Population',color:'bg-red-50 border-red-200',tc:'text-red-900',data:[{k:'Total',v:'121.1 crore (1.21 billion)'},{k:'Male',v:'62.3 crore'},{k:'Female',v:'58.8 crore'},{k:'Decadal growth',v:'17.7% (2001-2011)'},{k:'Annual growth rate',v:'1.64%'}]},
                    {cat:'Distribution',color:'bg-orange-50 border-orange-200',tc:'text-orange-900',data:[{k:'Most populous state',v:'Uttar Pradesh (19.98 crore)'},{k:'Least populous state',v:'Sikkim (6.1 lakh)'},{k:'Highest density',v:'Bihar (1,102/sq km)'},{k:'Lowest density',v:'Arunachal Pradesh (17/sq km)'},{k:'Most urban',v:'Goa (62.2% urban)'}]},
                    {cat:'Social Indicators',color:'bg-pink-50 border-pink-200',tc:'text-pink-900',data:[{k:'Literacy rate',v:'74.04% (Male 82.14%, Female 65.46%)'},{k:'Sex ratio',v:'940 females per 1000 males'},{k:'Child sex ratio',v:'919 (0-6 years) — alarming'},{k:'Urban population',v:'31.16% (37.71 crore)'},{k:'SC population',v:'16.6% · ST population 8.6%'}]},
                  ].map(c=>(
                    <div key={c.cat} className={`border-2 ${c.color} rounded-xl p-4`}>
                      <div className={`text-xs font-bold ${c.tc} mb-3`}>{c.cat}</div>
                      {c.data.map(d=>(<div key={d.k} className="flex justify-between text-xs py-1 border-b border-gray-100 last:border-0"><span className="text-gray-500">{d.k}</span><span className="font-semibold text-gray-800 text-right ml-2">{d.v}</span></div>))}
                    </div>
                  ))}
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mt-4">
                  <div className="bg-purple-50 border-b border-purple-100 px-5 py-3"><div className="text-sm font-bold text-purple-900">Migration in India — Types, Causes & Impact</div></div>
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {type:'Rural to Urban Migration',color:'bg-blue-50 border-blue-200',tc:'text-blue-900',
                          causes:['Economic: jobs, higher wages, better opportunities','Social: education, healthcare, marriage','Natural disasters: drought, flood displacement'],
                          impacts:['Mumbai, Delhi, Kolkata: 30-40% migrants','Slum proliferation — Dharavi, Kurla in Mumbai','Remittances support rural economy','Brain drain from villages'],
                          examples:'UP-Bihar to Delhi-Mumbai corridor most significant · Seasonal labor migration for harvest'},
                        {type:'Rural to Rural Migration',color:'bg-green-50 border-green-200',tc:'text-green-900',
                          causes:['Agricultural labor migration across states','Marriage — women migrate to husband\'s village','Tribal displacement due to mining/dams'],
                          impacts:['Labour shortages in source areas during harvest','Cultural mixing in destination areas','Landlessness as cause — no alternative'],
                          examples:'Bihar-UP agricultural workers to Punjab-Haryana for wheat harvest (reverse migration in pandemic)'},
                        {type:'International Migration',color:'bg-amber-50 border-amber-200',tc:'text-amber-900',
                          causes:['Gulf migration: UAE, Saudi Arabia, Qatar — construction, domestic work','US/UK/Canada: IT professionals, students, skilled workers','Brain drain concerns vs remittance benefits'],
                          impacts:['India largest remittance receiver — $125 billion (2023)','Gulf diaspora 8+ million · NRI diaspora 32 million total','Skilled migration: 2 lakh+ Indians to US annually'],
                          examples:'Kerala heavily dependent on Gulf remittances · Punjab youth migration to Canada — immigration industry'},
                        {type:'Demographic Dividend Window',color:'bg-rose-50 border-rose-200',tc:'text-rose-900',
                          causes:['India has 65% population below 35 years','Dependency ratio falling — more workers, fewer dependents','Window open until ~2045 approximately'],
                          impacts:['Could add $400-800 billion to GDP annually if harnessed','Requires skill development, education, jobs','States like UP, Bihar, MP have youngest populations'],
                          examples:'South India (Kerala, TN) already past demographic dividend — aging · Bihar, UP: maximum dividend potential'},
                      ].map(m=>(
                        <div key={m.type} className={`border-2 ${m.color} rounded-xl p-4`}>
                          <div className={`text-xs font-bold ${m.tc} mb-2`}>{m.type}</div>
                          <div className="text-xs font-semibold text-gray-600 mb-1">Causes:</div>
                          <ul className="flex flex-col gap-1 mb-2">{m.causes.map(c=><li key={c} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-400 shrink-0">→</span>{c}</li>)}</ul>
                          <div className="text-xs font-semibold text-gray-600 mb-1">Impacts:</div>
                          <ul className="flex flex-col gap-1 mb-2">{m.impacts.map(i=><li key={i} className="text-xs text-gray-600 flex gap-1.5"><span className="text-red-400 shrink-0">→</span>{i}</li>)}</ul>
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                            <div className="text-xs font-bold text-yellow-800">Example</div>
                            <div className="text-xs text-gray-700 mt-0.5">{m.examples}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">India's Population Distribution — State-wise</div>
            <svg viewBox="0 0 700 320" width="100%">
              <rect width="700" height="320" fill="#fff1f2" rx="12"/>
              <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#9f1239">India's Most Populous States (Census 2011)</text>
              {[
                {state:'Uttar Pradesh',pop:19.98,color:'#dc2626'},
                {state:'Maharashtra',pop:11.24,color:'#ea580c'},
                {state:'Bihar',pop:10.41,color:'#d97706'},
                {state:'West Bengal',pop:9.13,color:'#65a30d'},
                {state:'Madhya Pradesh',pop:7.27,color:'#0891b2'},
                {state:'Rajasthan',pop:6.86,color:'#7c3aed'},
                {state:'Tamil Nadu',pop:7.21,color:'#be185d'},
                {state:'Karnataka',pop:6.11,color:'#0369a1'},
              ].map((s,i)=>(
                <g key={s.state}>
                  <rect x="30" y={40+i*30} width={s.pop*18} height="22" rx="4" fill={s.color} opacity="0.8"/>
                  <text x="28" y={56+i*30} textAnchor="end" fontSize="9" fill="#374151">{s.state}</text>
                  <text x={32+s.pop*18} y={56+i*30} fontSize="9" fontWeight="600" fill={s.color}>{s.pop} crore</text>
                </g>
              ))}
              <rect x="400" y="40" width="280" height="260" rx="10" fill="white" stroke="#fecdd3" strokeWidth="1.5"/>
              <text x="540" y="62" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9f1239">Population Density Map</text>
              {[
                {label:'Highest: Bihar 1,102/sq km',color:'#dc2626',y:85},
                {label:'High: WB 1,029 · UP 828 · Kerala 859',color:'#ea580c',y:105},
                {label:'Medium: TN 555 · HP 123 · Punjab 550',color:'#d97706',y:125},
                {label:'Low: HP 123 · Uttarakhand 189',color:'#65a30d',y:145},
                {label:'Very low: Arunachal Pradesh 17/sq km',color:'#0891b2',y:165},
              ].map(d=>(
                <g key={d.label}><circle cx="415" cy={d.y} r="4" fill={d.color}/><text x="424" y={d.y+4} fontSize="9" fill="#374151">{d.label}</text></g>
              ))}
              <text x="540" y="200" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9f1239">Sex Ratio Extremes</text>
              {[
                {label:'Best: Kerala 1,084 F per 1000 M',color:'#15803d',y:220},
                {label:'Worst: Haryana 879 (child ratio 834)',color:'#dc2626',y:240},
                {label:'National avg: 940 F per 1000 M',color:'#374151',y:260},
                {label:'Child sex ratio: 919 (alarming)',color:'#7c3aed',y:280},
              ].map(d=>(
                <g key={d.label}><circle cx="415" cy={d.y} r="4" fill={d.color}/><text x="424" y={d.y+4} fontSize="9" fill="#374151">{d.label}</text></g>
              ))}
            </svg>
          </div>
        )}
        {activeTab==='predict'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[{q:'India surpassing China as most populous nation — demographic dividend, challenges and policy implications',prob:92},{q:'Internal migration and urbanization — impact on cities, slums, social security and policy gaps',prob:88},{q:'India\'s remittance economy — $125 billion, Gulf migration risks, skilled migration to West',prob:80},{q:'Declining child sex ratio — causes, PCPNDT Act effectiveness, son preference culture',prob:75}].map((pred,i)=>(
                <div key={i} className="bg-rose-50 border border-rose-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2"><div className="flex-1 h-2 bg-rose-100 rounded-full"><div className="h-2 bg-rose-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-rose-700">{pred.prob}%</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/13" className="text-sm text-green-600">← Transport</a>
          <div className="text-xs text-gray-400">Topic 14 of 20</div>
          <a href="/subjects/geography/15" className="text-sm text-green-600">World Geography →</a>
        </div>
      </div>
    </div>
  )
}