'use client'
import { useState } from 'react'

export default function NorthernPlainsPage() {
  const [activeTab, setActiveTab] = useState('notes')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const quiz = [
    {q:'The Northern Plains of India are formed by the depositional work of which type of rivers?',options:['Peninsular rivers','Himalayan rivers','Desert rivers','Coastal rivers'],correct:1,exp:'The Northern Plains are formed by the alluvial deposits brought by the three Himalayan river systems — Indus, Ganga and Brahmaputra — over millions of years. The plains are essentially a giant alluvial fan.'},
    {q:'Which of the following correctly describes Khadar soil?',options:['Old alluvium found above flood plains','New alluvium deposited annually in flood plains','Coarse gravel near Himalayan foothills','Dark volcanic soil of Deccan'],correct:1,exp:'Khadar is new alluvium deposited in the flood plains of rivers during annual floods. It is more fertile than Bhangar (old alluvium) as it gets renewed every year. Khadar is found at lower elevations, closer to river channels.'},
    {q:'The Terai belt is known for which of the following characteristics?',options:['Arid and dry conditions','Marshy, swampy and forested','Rocky and mountainous','Sandy desert landscape'],correct:1,exp:'The Terai is a marshy, swampy, forested belt just south of the Shivalik range. It has high rainfall and a high water table. It is home to famous national parks like Jim Corbett, Kaziranga and Dudhwa.'},
    {q:'Bhabar is characterized by which of the following?',options:['Fine alluvial soil','Coarse gravel and pebbles where rivers disappear','Marshy waterlogged land','Old alluvium with Kankar nodules'],correct:1,exp:'Bhabar is the belt of coarse gravel and pebbles found at the base of the Shivalik hills. Rivers disappear underground here due to highly porous nature of the soil. They re-emerge in the Terai belt further south.'},
    {q:'Which is the longest river in India?',options:['Indus','Brahmaputra','Ganga','Godavari'],correct:2,exp:'The Ganga (2,525 km) is the longest river in India. The Indus (3,180 km total) is longer but most of its length is outside India. Brahmaputra is the longest river in Assam. Godavari is the longest peninsular river.'},
  ]

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
          <div className="px-3 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Study</div>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
          <div className="px-3 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Stay updated</div>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-orange-400"></span>Current affairs</a>
          <a href="/gk" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-pink-400"></span>GK infographics</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="text-xs text-gray-400">UPSC CSE 2027</div>
          <div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 3</div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400 hover:text-gray-600">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">The Northern Plains</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">7 lakh sq km · Food bowl of India</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019, 2016</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'7 lakh km²',l:'Total area'},{v:'2,400 km',l:'Length E to W'},{v:'150-300 km',l:'Width'},{v:'40%',l:'India\'s population'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'diagram',label:'📐 Diagram'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-amber-600 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab==='notes' && (
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-amber-600 to-amber-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">The Northern Plains — India's Food Bowl</div>
              <p className="text-sm leading-relaxed text-amber-100 mb-4">The Northern Plains are one of the most fertile and densely populated regions on Earth. Stretching 2,400 km from the Indus in the west to the Brahmaputra in the east, they were formed over millions of years by the deposition of alluvial soil carried by Himalayan rivers. Home to 40% of India's population on just 15% of its land, they produce the bulk of India's food — wheat, rice, sugarcane, pulses.</p>
              <div className="grid grid-cols-3 gap-3">
                {[{v:'Punjab Plains',l:'Western division'},{v:'Ganga Plains',l:'Central division'},{v:'Brahmaputra Plains',l:'Eastern division'}].map(s=>(
                  <div key={s.l} className="bg-amber-700 border border-amber-600 rounded-xl p-3 text-center">
                    <div className="text-sm font-bold text-white">{s.v}</div>
                    <div className="text-xs text-amber-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-amber-50 border-b border-amber-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-amber-500 rounded-full"></div>
                <div className="text-sm font-bold text-amber-900">4 Belts from North to South — The Most Important Concept</div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">As you move from the Himalayan foothills southward into the Northern Plains, the terrain changes dramatically in 4 distinct belts. Understanding these belts is crucial for UPSC — they appear almost every year in Prelims.</p>
                <div className="flex flex-col gap-3">
                  {[
                    {belt:'1. Bhabar',color:'bg-stone-100 border-stone-300',tc:'text-stone-900',elevation:'Narrow belt just south of Shivaliks',nature:'Coarse gravel, pebbles and boulders brought by fast-flowing mountain streams. Highly porous — streams disappear underground here. Width: 8-16 km. Not suitable for cultivation.',crops:'No agriculture — streams invisible, dry surface',key:'Rivers disappear in Bhabar → reappear in Terai'},
                    {belt:'2. Terai',color:'bg-green-100 border-green-300',tc:'text-green-900',elevation:'Just south of Bhabar',nature:'Marshy, swampy and forested belt. Underground streams of Bhabar re-emerge here. Dense forests, high rainfall, high water table. Width: 15-30 km. Very fertile once cleared.',crops:'Rice, sugarcane, wheat after forest clearing',key:'Jim Corbett NP, Kaziranga NP, Dudhwa NP are in Terai'},
                    {belt:'3. Bhangar',color:'bg-amber-100 border-amber-300',tc:'text-amber-900',elevation:'Old alluvial upland',nature:'Old alluvium — above the flood level of rivers. More elevated than Khadar. Contains calcareous nodules called Kankar (calcium carbonate). Less fertile than Khadar.',crops:'Wheat, millets, pulses — rain-fed agriculture',key:'Kankar (kanker) nodules are the identification feature of Bhangar'},
                    {belt:'4. Khadar',color:'bg-blue-100 border-blue-300',tc:'text-blue-900',elevation:'New alluvial flood plains',nature:'New alluvium deposited by rivers in their flood plains every year during monsoon floods. Most fertile of all belts — continuously renewed. Lower elevation than Bhangar.',crops:'Most intensive cultivation — rice, wheat, sugarcane, vegetables',key:'Khadar is the most fertile belt — renewed annually by floods'},
                  ].map(b=>(
                    <div key={b.belt} className={`border-2 ${b.color} rounded-xl p-4`}>
                      <div className={`text-sm font-bold ${b.tc} mb-2`}>{b.belt}</div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs font-semibold text-gray-600 mb-1">Location</div>
                          <p className="text-xs text-gray-700">{b.elevation}</p>
                          <div className="text-xs font-semibold text-gray-600 mb-1 mt-2">Nature</div>
                          <p className="text-xs text-gray-700 leading-relaxed">{b.nature}</p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-600 mb-1">Agriculture</div>
                          <p className="text-xs text-gray-700">{b.crops}</p>
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 mt-2">
                            <div className="text-xs font-bold text-yellow-800">💡 Key fact</div>
                            <div className="text-xs text-gray-700 mt-0.5">{b.key}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-blue-500 rounded-full"></div>
                <div className="text-sm font-bold text-blue-900">3 Regional Divisions of the Northern Plains</div>
              </div>
              <div className="p-5 grid grid-cols-3 gap-4">
                {[
                  {div:'Punjab Plains',color:'bg-blue-50 border-blue-200',tc:'text-blue-900',states:'Punjab, Haryana, western UP',rivers:'Indus system: Sutlej, Beas, Ravi, Chenab, Jhelum',area:'~1.75 lakh sq km',features:['Doabs — land between two rivers (Punjab = Land of 5 rivers)','Highly irrigated — canal irrigation dominant','Green Revolution started here (1960s)','Wheat and rice dominant crops','Mostly Bhangar type soil'],importance:'India\'s granary before Green Revolution spread'},
                  {div:'Ganga Plains',color:'bg-amber-50 border-amber-200',tc:'text-amber-900',states:'UP, Bihar, West Bengal (part)',rivers:'Ganga and tributaries: Yamuna, Ghaghara, Gandak, Kosi, Son',area:'~3.75 lakh sq km',features:['Largest division of Northern Plains','The doab between Ganga and Yamuna is most fertile','Upper Ganga Plain (UP) — Bhangar dominant','Lower Ganga Plain (Bihar/Bengal) — Khadar dominant','Very high population density (>500/sq km)'],importance:'Largest food producing region — wheat, rice, sugarcane'},
                  {div:'Brahmaputra Plains',color:'bg-green-50 border-green-200',tc:'text-green-900',states:'Assam (primarily)',rivers:'Brahmaputra and tributaries',area:'~1 lakh sq km',features:['Narrow plain — 60-100 km wide','Brahmaputra is a braided river here (sandbanks = chars)','Prone to severe flooding every year','One-horned rhinoceros (Kaziranga) unique wildlife','Tea gardens of Assam on low hills bordering plains','Highly fertile but flood-prone'],importance:'Tea, rice, jute — northeastern economy backbone'},
                ].map(d=>(
                  <div key={d.div} className={`border-2 ${d.color} rounded-xl p-4`}>
                    <div className={`text-sm font-bold ${d.tc} mb-1`}>{d.div}</div>
                    <div className="text-xs text-gray-500 mb-2">{d.states}</div>
                    <div className="text-xs text-gray-600 mb-1"><span className="font-semibold">Rivers: </span>{d.rivers}</div>
                    <div className="text-xs text-gray-600 mb-2"><span className="font-semibold">Area: </span>{d.area}</div>
                    <ul className="flex flex-col gap-1 mb-2">
                      {d.features.map(f=><li key={f} className="text-xs text-gray-600 flex gap-1.5"><span className="text-green-500 shrink-0">✓</span>{f}</li>)}
                    </ul>
                    <div className="bg-white border border-gray-100 rounded-lg p-2">
                      <div className="text-xs font-semibold text-gray-700">Importance</div>
                      <div className="text-xs text-gray-600 mt-0.5">{d.importance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-teal-500 rounded-full"></div>
                <div className="text-sm font-bold text-teal-900">Current Affairs — Northern Plains Issues 2024-25</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  {title:'Delhi floods (2023)',tag:'Flood',detail:'Yamuna river reached its highest level ever in Delhi (208.66m) in July 2023. ITO, Civil Lines, Kashmiri Gate submerged. Showed extreme vulnerability of Delhi — built on Khadar floodplain. Climate change intensifying monsoon events.'},
                  {title:'Punjab stubble burning & air quality',tag:'Environment',detail:'Paddy stubble burning in Punjab and Haryana after harvest creates toxic smog over Delhi NCR every October-November. A persistent problem — farmers burn to quickly clear fields before wheat sowing. Over 4 lakh fires counted in 2023 alone.'},
                  {title:'Ganga rejuvenation — Namami Gange',tag:'River',detail:'Namami Gange programme (Rs. 20,000 crore) aims to clean the Ganga by 2026. Sewage treatment plants, industrial effluent control, ghats development. Dolphins returned to some stretches — positive sign. But industrial pollution still a major challenge.'},
                  {title:'Eastern UP mega expressways',tag:'Infrastructure',detail:'Purvanchal Expressway (341 km), Bundelkhand Expressway — transforming connectivity in the Ganga plains. PM Gati Shakti plan integrating roads, railways across the plains. Boosting industrial and agricultural growth.'},
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
            <div className="text-sm font-semibold text-gray-900 mb-1">North to South Profile — 4 Belts of Northern Plains</div>
            <div className="text-xs text-gray-400 mb-5">From Himalayan foothills (north) to the main plain (south)</div>
            <svg viewBox="0 0 700 280" width="100%" className="mb-5">
              <rect width="700" height="280" fill="#f8fafc" rx="12"/>
              <polygon points="0,100 120,40 150,100" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="60" y="80" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e40af">Shivalik</text>
              <text x="60" y="93" textAnchor="middle" fontSize="8" fill="#3b82f6">Hills</text>
              <rect x="120" y="95" width="80" height="110" fill="#d6d3d1" stroke="#78716c" strokeWidth="1.5"/>
              <text x="160" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill="#44403c">BHABAR</text>
              <text x="160" y="155" textAnchor="middle" fontSize="8" fill="#78716c">Coarse gravel</text>
              <text x="160" y="168" textAnchor="middle" fontSize="8" fill="#78716c">Streams disappear</text>
              <text x="160" y="181" textAnchor="middle" fontSize="8" fill="#78716c">Width: 8-16 km</text>
              <rect x="200" y="95" width="100" height="110" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5"/>
              <text x="250" y="135" textAnchor="middle" fontSize="11" fontWeight="700" fill="#14532d">TERAI</text>
              <text x="250" y="150" textAnchor="middle" fontSize="8" fill="#15803d">Marshy &amp; forested</text>
              <text x="250" y="163" textAnchor="middle" fontSize="8" fill="#15803d">Streams re-appear</text>
              <text x="250" y="176" textAnchor="middle" fontSize="8" fill="#15803d">Dense forest</text>
              <text x="250" y="189" textAnchor="middle" fontSize="8" fill="#15803d">Width: 15-30 km</text>
              <rect x="300" y="105" width="170" height="100" fill="#fde68a" stroke="#d97706" strokeWidth="1.5"/>
              <text x="385" y="145" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400e">BHANGAR</text>
              <text x="385" y="160" textAnchor="middle" fontSize="8" fill="#b45309">Old alluvium · Above flood level</text>
              <text x="385" y="173" textAnchor="middle" fontSize="8" fill="#b45309">Kankar nodules present</text>
              <text x="385" y="186" textAnchor="middle" fontSize="8" fill="#b45309">Wheat, millets, pulses</text>
              <rect x="470" y="115" width="200" height="90" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="570" y="152" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e40af">KHADAR</text>
              <text x="570" y="167" textAnchor="middle" fontSize="8" fill="#3b82f6">New alluvium · Flood plains</text>
              <text x="570" y="180" textAnchor="middle" fontSize="8" fill="#3b82f6">Most fertile · Renewed yearly</text>
              <text x="570" y="193" textAnchor="middle" fontSize="8" fill="#3b82f6">Rice, wheat, sugarcane</text>
              <line x1="120" y1="205" x2="700" y2="205" stroke="#94a3b8" strokeWidth="1.5"/>
              <text x="160" y="220" textAnchor="middle" fontSize="8" fill="#94a3b8">8-16 km</text>
              <text x="250" y="220" textAnchor="middle" fontSize="8" fill="#94a3b8">15-30 km</text>
              <text x="385" y="220" textAnchor="middle" fontSize="8" fill="#94a3b8">Very wide</text>
              <text x="570" y="220" textAnchor="middle" fontSize="8" fill="#94a3b8">Widest belt</text>
              <text x="20" y="150" fontSize="9" fill="#64748b" fontWeight="600">N</text>
              <text x="680" y="150" fontSize="9" fill="#64748b" fontWeight="600">S</text>
              <line x1="250" y1="60" x2="250" y2="95" stroke="#16a34a" strokeWidth="1" strokeDasharray="3,2"/>
              <text x="255" y="55" fontSize="8" fill="#16a34a">Jim Corbett NP</text>
              <circle cx="350" cy="145" r="4" fill="#d97706"/>
              <text x="356" y="143" fontSize="7" fill="#92400e">Kankar</text>
            </svg>
            <div className="grid grid-cols-4 gap-3">
              {[
                {belt:'Bhabar',color:'bg-stone-100 border-stone-300',tc:'text-stone-800',key:'Streams disappear underground · No cultivation · Coarse gravel'},
                {belt:'Terai',color:'bg-green-100 border-green-300',tc:'text-green-800',key:'Streams re-emerge · Dense forest · National Parks · High rainfall'},
                {belt:'Bhangar',color:'bg-amber-100 border-amber-300',tc:'text-amber-800',key:'Old alluvium · Kankar nodules · Above flood level · Less fertile'},
                {belt:'Khadar',color:'bg-blue-100 border-blue-300',tc:'text-blue-800',key:'New alluvium · Most fertile · Renewed by floods · Intensive farming'},
              ].map(b=>(
                <div key={b.belt} className={`border-2 ${b.color} rounded-xl p-3`}>
                  <div className={`text-xs font-bold ${b.tc} mb-2`}>{b.belt}</div>
                  <p className="text-xs text-gray-700 leading-relaxed">{b.key}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==='pyq' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions — Northern Plains</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2022 Prelims',q:'Which of the following best describes the term "Bhangar" in the context of Indian geography?'},
                {year:'2019 Prelims',q:'The Terai belt in India is characterized by which of the following features?'},
                {year:'2017 Prelims',q:'Bhabar is a belt of coarse gravel found between which two geographical features?'},
                {year:'2016 Mains GS-I',q:'Discuss the significance of the Northern Plains in India\'s economic and demographic context.'},
                {year:'2014 Prelims',q:'Which of the following correctly describes Khadar soil?'},
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
                <div className="text-5xl mb-4">🌾</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Northern Plains</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions · Instant explanations</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-amber-600 text-white px-10 py-3 rounded-xl font-medium text-sm hover:bg-amber-700">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500 shrink-0">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-amber-500 rounded-full transition-all" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-amber-600 shrink-0">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quiz[currentQ].options.map((opt,i)=>(
                    <button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50 cursor-pointer':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}>
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
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-amber-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-amber-700">
                      {currentQ<quiz.length-1?'Next →':'Results →'}
                    </button>
                  </>
                )}
              </div>
            ):(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">{score>=4?'🏆':score>=3?'👍':'📚'}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div>
                <div className="flex gap-3 justify-center mt-6">
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-amber-600 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button>
                  <button onClick={()=>setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm">Review Notes</button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab==='predict' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-1">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3 mt-4">
              {[
                {q:'Flooding in the Northern Plains — causes, impact of climate change and flood management strategies in Ganga-Brahmaputra basin',prob:88},
                {q:'Stubble burning in Punjab-Haryana — causes, air pollution impact on Delhi and alternative management approaches',prob:84},
                {q:'Namami Gange programme — achievements, challenges and significance for Ganga rejuvenation',prob:78},
                {q:'Green Revolution — impact on Punjab plains, subsequent problems of soil degradation, water table depletion',prob:70},
              ].map((pred,i)=>(
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-amber-100 rounded-full"><div className="h-2 bg-amber-400 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                        <span className="text-xs font-bold text-amber-700">{pred.prob}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/2" className="text-sm text-green-600 hover:text-green-700">← Himalayan Ranges</a>
          <div className="text-xs text-gray-400">Topic 3 of 20</div>
          <a href="/subjects/geography/4" className="text-sm text-green-600 hover:text-green-700">Peninsular Plateau →</a>
        </div>
      </div>
    </div>
  )
}