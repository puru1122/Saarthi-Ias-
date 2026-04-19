'use client'
import { useState } from 'react'
export default function ClimateMonsoonPage() {
  const [activeTab, setActiveTab] = useState('notes')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const quiz = [
    {q:'The onset of the Southwest Monsoon in India is first recorded at which place?',options:['Mumbai','Chennai','Kerala (Thiruvananthapuram)','Kolkata'],correct:2,exp:'The Southwest Monsoon first arrives at Kerala (Thiruvananthapuram) around June 1st. This marks the official onset of the monsoon season in India. It then advances northward covering the entire country by mid-July.'},
    {q:'El Niño refers to which of the following?',options:['Cold ocean current in Atlantic','Warm ocean current in Pacific that weakens Indian monsoon','Cold winds from the Himalayas','Cyclone in Bay of Bengal'],correct:1,exp:'El Niño is the warming of central and eastern Pacific Ocean waters. It weakens the Indian Ocean temperature gradient which is the driving force of the Indian monsoon — leading to below-normal rainfall in India. La Niña (cooling) has the opposite effect — strengthening monsoon.'},
    {q:'Which of the following receives rainfall from the Northeast Monsoon?',options:['Kerala','Punjab','Tamil Nadu','Rajasthan'],correct:2,exp:'Tamil Nadu receives most of its annual rainfall from the Northeast Monsoon (Oct-Dec) — the reverse of the rest of India. While most of India gets SW monsoon rain (June-Sept), Tamil Nadu is in the rain shadow of Western Ghats and gets its main rain from NE monsoon.'},
    {q:'Cherrapunji (Mawsynram) in Meghalaya receives highest rainfall because:',options:['It is near the sea','Funnel-shaped valleys force moist air upward (orographic rainfall)','It is on the west coast','It receives cyclonic rainfall'],correct:1,exp:'Mawsynram/Cherrapunji receives the world\'s highest rainfall due to orographic (relief) rainfall. The funnel-shaped valley of the Meghalaya hills forces the moisture-laden Bay of Bengal air upward — causing intense condensation and rainfall. The valley shape concentrates the moist air.'},
    {q:'The "October Heat" in India refers to:',options:['Heat wave in October','Warm and humid conditions during withdrawal of monsoon','Cold wave in northern India','Dry heat in Rajasthan'],correct:1,exp:'The "October Heat" or "Retreating Monsoon" period (Oct-Nov) is characterized by high temperature combined with high humidity — creating oppressive, uncomfortable conditions especially in northern India. As the monsoon withdraws, the sky clears but humidity remains high, causing this phenomenon.'},
  ]
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 7</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Climate & Monsoon</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">4 seasons · SW & NE monsoon</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: Every year</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'4 seasons',l:'India\'s climate'},{v:'June 1',l:'Monsoon onset Kerala'},{v:'75%',l:'Annual rain in 4 months'},{v:'El Niño',l:'Weakens Indian monsoon'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'diagram',label:'📐 Diagram'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-sky-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes' && (
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-sky-700 to-blue-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Indian Climate & the Monsoon</div>
              <p className="text-sm leading-relaxed text-sky-100 mb-4">India's climate is dominated by the monsoon — one of the most dramatic and complex atmospheric phenomena on Earth. The Southwest Monsoon brings 75-90% of India's annual rainfall in just 4 months (June-September). Understanding the monsoon — its causes, onset, branches, variability and the El Niño connection — is critical for UPSC as it links to agriculture, economy, water security and disaster management.</p>
              <div className="grid grid-cols-4 gap-3">
                {[{v:'Winter',l:'Dec–Feb'},{v:'Summer',l:'Mar–May'},{v:'SW Monsoon',l:'Jun–Sep'},{v:'Retreating',l:'Oct–Nov'}].map(s=>(
                  <div key={s.l} className="bg-sky-700 border border-sky-600 rounded-xl p-3 text-center">
                    <div className="text-sm font-bold text-white">{s.v}</div>
                    <div className="text-xs text-sky-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-sky-50 border-b border-sky-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-sky-600 rounded-full"></div>
                <div className="text-sm font-bold text-sky-900">The 4 Seasons of India</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                {[
                  {season:'Winter (Dec–Feb)',color:'bg-blue-50 border-blue-200',tc:'text-blue-900',icon:'❄️',
                    mechanism:'Continental high pressure over Central Asia pushes cold, dry air southward. Western Disturbances (extra-tropical cyclones from Mediterranean) bring rainfall to NW India.',
                    characteristics:['NW India: Cold waves, frost, fog','Southern India: Pleasant temperatures (20-25°C)','Western Disturbances bring rain to Punjab, HP, Uttarakhand','Mawsynram and Cherrapunji dry in winter','Rabi crops: Wheat, mustard, peas, barley growing season'],
                    keyFact:'Western Disturbances are crucial for wheat crop in Punjab-Haryana. Without them, rabi crop fails.'},
                  {season:'Hot Summer (Mar–May)',color:'bg-red-50 border-red-200',tc:'text-red-900',icon:'☀️',
                    mechanism:'Sun shifts northward. Temperatures rise rapidly. Low pressure develops over NW India (Rajasthan-Punjab). Jet stream withdraws from Indian subcontinent. Trade winds blow.',
                    characteristics:['Temperatures exceed 45-48°C in Rajasthan, UP','Loo — hot, dry, dust-laden wind in North India','Mango showers in Kerala and Karnataka (pre-monsoon)','Norwesters (Kalbaisakhi) in Bengal and Assam','Dust storms in Rajasthan'],
                    keyFact:'Loo is a hot dry westerly wind that blows in afternoons in UP and Bihar (May-June). Can cause fatal heat strokes.'},
                  {season:'SW Monsoon (Jun–Sep)',color:'bg-green-50 border-green-200',tc:'text-green-900',icon:'🌧️',
                    mechanism:'Intense low pressure forms over Thar Desert/NW India. Cross-equatorial flow establishes. ITCZ shifts northward. Arabian Sea and Bay of Bengal branches form. Himalayan barrier causes orographic lifting.',
                    characteristics:['Kerala onset: June 1 (±7 days) — meteorological event','Two branches: Arabian Sea branch (faster) + Bay of Bengal branch','75-90% of annual rainfall in 4 months','Rainfall decreases westward across Rajasthan','Cherrapunji/Mawsynram: World\'s highest rainfall','Kharif crops: Rice, cotton, sugarcane, jowar, bajra'],
                    keyFact:'The Arabian Sea Branch is stronger and faster — strikes Western Ghats first, causes heavy rain on windward side, then crosses Deccan.'},
                  {season:'Retreating Monsoon (Oct–Nov)',color:'bg-amber-50 border-amber-200',tc:'text-amber-900',icon:'🍂',
                    mechanism:'Low pressure shifts south. Monsoon withdraws from NW India first (September). Northeast Trade Winds blow over Bay of Bengal. Bay of Bengal picks up moisture and gives rain to Tamil Nadu coast.',
                    characteristics:['October Heat — hot, humid, oppressive conditions in North India','NE Monsoon (Oct-Dec): Main rainy season for Tamil Nadu','Bay of Bengal cyclones most frequent (Oct-Nov)','Odisha, AP, Tamil Nadu coast most vulnerable to cyclones','Withdraws from Kerala by late November'],
                    keyFact:'Tamil Nadu receives 50% of its annual rain during NE monsoon (Oct-Dec). It is in rain shadow of W.Ghats for SW monsoon.'},
                ].map(s=>(
                  <div key={s.season} className={`border-2 ${s.color} rounded-xl p-4`}>
                    <div className={`text-sm font-bold ${s.tc} mb-1 flex items-center gap-2`}><span>{s.icon}</span>{s.season}</div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-3">{s.mechanism}</p>
                    <ul className="flex flex-col gap-1 mb-3">
                      {s.characteristics.map(c=><li key={c} className="text-xs text-gray-600 flex gap-2"><span className="text-green-500 shrink-0">✓</span>{c}</li>)}
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                      <div className="text-xs font-bold text-yellow-800">💡 Key fact</div>
                      <div className="text-xs text-gray-700 mt-0.5">{s.keyFact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-purple-50 border-b border-purple-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-purple-600 rounded-full"></div>
                <div className="text-sm font-bold text-purple-900">El Niño, La Niña & Indian Monsoon Connection</div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {term:'El Niño',color:'bg-red-50 border-red-200',tc:'text-red-900',def:'Warming of central and eastern Pacific Ocean surface waters. Occurs every 2-7 years. Weakens the pressure gradient between Indian Ocean and Pacific — disrupting the Walker Circulation.',effect:'Weakens SW Monsoon → below normal rainfall in India → drought risk. Also causes floods in South America (Peru). Recent El Niño years in India: 2009, 2014, 2015, 2023.',impact:'2009 drought: SW monsoon 23% below normal due to El Niño. Food inflation, agricultural distress.'},
                    {term:'La Niña',color:'bg-blue-50 border-blue-200',tc:'text-blue-900',def:'Cooling of central and eastern Pacific Ocean. Opposite of El Niño. Strengthens the Walker Circulation and pressure gradient between Indian Ocean and Pacific.',effect:'Strengthens SW Monsoon → above normal rainfall in India → flood risk. La Niña years often see above-normal rainfall, especially in central and NW India.',impact:'2022 was strong La Niña — India had excellent monsoon. But some areas had devastating floods (Assam, Meghalaya, Uttarakhand).'},
                    {term:'Indian Ocean Dipole (IOD)',color:'bg-green-50 border-green-200',tc:'text-green-900',def:'Temperature difference between western and eastern Indian Ocean. Positive IOD = warmer western Indian Ocean (near Africa). Negative IOD = cooler western Indian Ocean.',effect:'Positive IOD → strengthens Indian monsoon (warmer water near India → more evaporation → more rain). Negative IOD → weakens monsoon. Often occurs with El Niño/La Niña.',impact:'2019: El Niño weakened monsoon but strong positive IOD compensated — monsoon was normal overall. Shows complexity of monsoon prediction.'},
                  ].map(e=>(
                    <div key={e.term} className={`border-2 ${e.color} rounded-xl p-4`}>
                      <div className={`text-sm font-bold ${e.tc} mb-2`}>{e.term}</div>
                      <div className="text-xs font-semibold text-gray-600 mb-1">What it is</div>
                      <p className="text-xs text-gray-700 leading-relaxed mb-2">{e.def}</p>
                      <div className="text-xs font-semibold text-gray-600 mb-1">Effect on India</div>
                      <p className="text-xs text-gray-700 leading-relaxed mb-2">{e.effect}</p>
                      <div className="bg-white border border-gray-100 rounded-lg p-2">
                        <div className="text-xs font-semibold text-gray-600">Real example</div>
                        <div className="text-xs text-gray-700 mt-0.5">{e.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-teal-600 rounded-full"></div>
                <div className="text-sm font-bold text-teal-900">Current Affairs — Climate 2024-25</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  {title:'2023 El Niño — Deficient Monsoon',tag:'Climate',detail:'2023 SW monsoon was deficient (94% of normal) due to strong El Niño. Kharif crops affected — especially rice, pulses, oilseeds. Food inflation spike. IMD changed its forecasting model to better account for IOD and El Niño interactions.'},
                  {title:'Increasing frequency of extreme events',tag:'Climate Change',detail:'Climate change is intensifying extreme weather — both floods and droughts. 2023 saw record heat in April-May, devastating floods in Himachal and Uttarakhand, and severe drought in parts of Karnataka. IMD now issues 5-day forecasts with higher accuracy.'},
                  {title:'Heat wave deaths 2024',tag:'Public Health',detail:'India recorded over 100+ heat-related deaths in the pre-monsoon season of 2024. Temperatures reached 47-50°C in Delhi and Rajasthan. National Action Plan on Heat Action being implemented in cities. Vulnerable population (elderly, outdoor workers) most affected.'},
                  {title:'Western Disturbances and Uttarakhand',tag:'Disaster',detail:'Unseasonal and intense western disturbances in 2023 caused massive landslides and floods in Uttarakhand, Himachal Pradesh and J&K during June-October. Joshimath and Tehri region saw hundreds of landslides. Climate change making WDs more intense.'},
                ].map(c=>(
                  <div key={c.title} className="border border-teal-100 rounded-xl p-3 bg-teal-50">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-xs font-bold text-teal-900">{c.title}</div>
                      <span className="text-xs bg-teal-200 text-teal-800 px-2 py-0.5 rounded-full shrink-0">{c.tag}</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab==='diagram' && (
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">Southwest Monsoon — Mechanism & Two Branches</div>
            <svg viewBox="0 0 700 380" width="100%">
              <rect width="700" height="380" fill="#f0f9ff" rx="12"/>
              <ellipse cx="350" cy="80" rx="200" ry="40" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
              <text x="350" y="75" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400e">LOW PRESSURE over NW India</text>
              <text x="350" y="90" textAnchor="middle" fontSize="9" fill="#b45309">(Thar Desert heats up → hot air rises → low pressure)</text>
              <ellipse cx="120" cy="270" rx="80" ry="30" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
              <text x="120" y="267" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">Arabian Sea</text>
              <text x="120" y="280" textAnchor="middle" fontSize="8" fill="#3b82f6">HIGH PRESSURE</text>
              <ellipse cx="580" cy="270" rx="80" ry="30" fill="#dcfce7" stroke="#059669" strokeWidth="2"/>
              <text x="580" y="267" textAnchor="middle" fontSize="10" fontWeight="700" fill="#065f46">Bay of Bengal</text>
              <text x="580" y="280" textAnchor="middle" fontSize="8" fill="#059669">HIGH PRESSURE</text>
              <path d="M 155 255 Q 200 180 250 120" fill="none" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrowBlue)"/>
              <text x="175" y="200" fontSize="10" fontWeight="600" fill="#1d4ed8">Arabian Sea</text>
              <text x="175" y="213" fontSize="10" fontWeight="600" fill="#1d4ed8">Branch</text>
              <text x="170" y="228" fontSize="8" fill="#3b82f6">Hits W.Ghats first</text>
              <text x="170" y="240" fontSize="8" fill="#3b82f6">Heavy orographic rain</text>
              <path d="M 545 255 Q 490 190 430 130" fill="none" stroke="#059669" strokeWidth="3" markerEnd="url(#arrowGreen)"/>
              <text x="480" y="200" fontSize="10" fontWeight="600" fill="#065f46">Bay of Bengal</text>
              <text x="480" y="213" fontSize="10" fontWeight="600" fill="#065f46">Branch</text>
              <text x="475" y="228" fontSize="8" fill="#059669">Hits NE India first</text>
              <text x="475" y="240" fontSize="8" fill="#059669">Cherrapunji rain</text>
              <rect x="270" y="130" width="160" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
              <text x="350" y="156" textAnchor="middle" fontSize="10" fontWeight="600" fill="#14532d">Both branches MERGE</text>
              <text x="350" y="170" textAnchor="middle" fontSize="9" fill="#16a34a">Spread across India</text>
              <text x="350" y="182" textAnchor="middle" fontSize="8" fill="#16a34a">Jun 1 (Kerala) → Mid-July (whole India)</text>
              <rect x="10" y="310" width="680" height="60" rx="8" fill="#fef9c3" stroke="#d97706" strokeWidth="1.5"/>
              <text x="350" y="330" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400e">Key Driver: Temperature gradient between hot Indian landmass (low pressure) and cool oceans (high pressure)</text>
              <text x="350" y="348" textAnchor="middle" fontSize="9" fill="#b45309">Himalayas act as a barrier — prevent monsoon from escaping northward → traps moisture over India</text>
              <text x="350" y="362" textAnchor="middle" fontSize="9" fill="#b45309">El Niño reduces this gradient → weaker monsoon | La Niña strengthens gradient → stronger monsoon</text>
            </svg>
          </div>
        )}
        {activeTab==='pyq' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2023 Mains GS-I',q:'What is El Niño? How does it affect the Indian monsoon? Discuss with reference to recent events.'},
                {year:'2021 Prelims',q:'The retreating monsoon season is associated with which of the following weather phenomenon?'},
                {year:'2019 Mains GS-I',q:'Why does the southwest monsoon arrive earlier in the Arabian Sea than in the Bay of Bengal? Explain the mechanism.'},
                {year:'2017 Prelims',q:'Mawsynram in Meghalaya receives the highest rainfall in the world due to which of the following?'},
                {year:'2015 Mains GS-I',q:'How does the Indian Ocean Dipole influence the Indian monsoon? Explain.'},
              ].map((p,i)=>(
                <div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{p.year}</span>
                  <div className="text-sm text-gray-700 mt-2">{p.q}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab==='quiz' && (
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            {!quizStarted?(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🌧️</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Climate & Monsoon</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-sky-700 text-white px-10 py-3 rounded-xl font-medium text-sm">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-sky-600 rounded-full" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-sky-700">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quiz[currentQ].options.map((opt,i)=>(
                    <button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-sky-400 hover:bg-sky-50':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}>
                      <span className="font-bold mr-3 text-gray-400">{String.fromCharCode(65+i)}.</span>{opt}
                      {selectedAnswer!==null&&i===quiz[currentQ].correct&&<span className="ml-2 text-green-600">✓</span>}
                      {selectedAnswer===i&&i!==quiz[currentQ].correct&&<span className="ml-2 text-red-600">✗</span>}
                    </button>
                  ))}
                </div>
                {selectedAnswer!==null&&(
                  <>
                    <div className={`rounded-xl p-4 mb-5 ${selectedAnswer===quiz[currentQ].correct?'bg-green-50 border border-green-200':'bg-red-50 border border-red-200'}`}>
                      <div className={`text-sm font-semibold mb-1 ${selectedAnswer===quiz[currentQ].correct?'text-green-800':'text-red-800'}`}>{selectedAnswer===quiz[currentQ].correct?'✓ Correct!':'✗ Incorrect'}</div>
                      <div className="text-sm text-gray-700">{quiz[currentQ].exp}</div>
                    </div>
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-sky-700 text-white px-6 py-2.5 rounded-xl text-sm">{currentQ<quiz.length-1?'Next →':'Results →'}</button>
                  </>
                )}
              </div>
            ):(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">{score>=4?'🏆':'📚'}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div>
                <div className="flex gap-3 justify-center mt-6">
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-sky-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button>
                  <button onClick={()=>setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm">Review Notes</button>
                </div>
              </div>
            )}
          </div>
        )}
        {activeTab==='predict' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[
                {q:'Climate change and Indian monsoon — how is global warming altering rainfall patterns, intensity and distribution across India',prob:92},
                {q:'El Niño 2023-24 — impact on Indian agriculture, food security and policy response',prob:88},
                {q:'Heat waves in India — increasing frequency, vulnerable populations, Heat Action Plans',prob:85},
                {q:'Western Disturbances — importance for rabi crops and increasing erratic behavior due to climate change',prob:72},
              ].map((pred,i)=>(
                <div key={i} className="bg-sky-50 border border-sky-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-sky-200 text-sky-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-sky-100 rounded-full"><div className="h-2 bg-sky-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                        <span className="text-xs font-bold text-sky-700">{pred.prob}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/6" className="text-sm text-green-600">← Peninsular Rivers</a>
          <div className="text-xs text-gray-400">Topic 7 of 20</div>
          <a href="/subjects/geography/8" className="text-sm text-green-600">Soils of India →</a>
        </div>
      </div>
    </div>
  )
}