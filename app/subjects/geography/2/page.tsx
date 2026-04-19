'use client'
import { useState } from 'react'

const mindmapData = {
  id: 'root', label: 'Himalayan System', sublabel: '2,500 km · 8 countries', color: '#1d4ed8', textColor: '#fff',
  children: [
    {
      id: 'ranges', label: 'Three Parallel Ranges', sublabel: 'N to S sequence', color: '#2563eb', textColor: '#fff',
      children: [
        { id: 'himadri', label: 'Greater Himalayas (Himadri)', sublabel: 'Avg 6,000m · Everest, K2, Kangchenjunga · Permanent snow', color: '#dbeafe', textColor: '#1e40af' },
        { id: 'himachal', label: 'Lesser Himalayas (Himachal)', sublabel: 'Avg 3,700-4,500m · Mussoorie, Shimla, Darjeeling · Hill stations', color: '#dbeafe', textColor: '#1e40af' },
        { id: 'shivalik', label: 'Outer Himalayas (Shivalik)', sublabel: 'Avg 900-1,100m · Southernmost · Terai region below · Youngest', color: '#dbeafe', textColor: '#1e40af' },
      ]
    },
    {
      id: 'divisions', label: 'Regional Divisions', sublabel: 'W to E across India', color: '#7c3aed', textColor: '#fff',
      children: [
        { id: 'kashmir', label: 'Kashmir Himalayas', sublabel: 'Karakoram, Ladakh, Zanskar ranges · Dal Lake · Siachen glacier', color: '#ede9fe', textColor: '#4c1d95' },
        { id: 'himachalHP', label: 'Himachal Himalayas', sublabel: 'Rohtang, Bara Lacha La · Spiti, Kullu, Kangra valleys · Great Himalayan NP', color: '#ede9fe', textColor: '#4c1d95' },
        { id: 'uttarakhand', label: 'Uttarakhand Himalayas', sublabel: 'Nanda Devi, Kedarnath, Badrinath · Ganga origin · Gangotri glacier', color: '#ede9fe', textColor: '#4c1d95' },
        { id: 'sikkim', label: 'Sikkim Himalayas', sublabel: 'Kangchenjunga (8,586m) · Nathu La · Teesta river · Zemu glacier', color: '#ede9fe', textColor: '#4c1d95' },
        { id: 'arunachal', label: 'Arunachal Himalayas', sublabel: 'Eastern most · Bomdi La · Tawang · Brahmaputra curves south', color: '#ede9fe', textColor: '#4c1d95' },
      ]
    },
    {
      id: 'rivers', label: 'River Systems', sublabel: 'Antecedent drainage', color: '#059669', textColor: '#fff',
      children: [
        { id: 'indus', label: 'Indus System', sublabel: 'Origin: Mansarovar Lake, Tibet · Tributaries: Jhelum, Chenab, Ravi, Beas, Sutlej · Drains into Arabian Sea', color: '#dcfce7', textColor: '#14532d' },
        { id: 'ganga', label: 'Ganga System', sublabel: 'Origin: Gangotri glacier (Bhagirathi) · Yamuna, Ghaghara, Kosi join · Drains into Bay of Bengal · Sacred river', color: '#dcfce7', textColor: '#14532d' },
        { id: 'brahmaputra', label: 'Brahmaputra System', sublabel: 'Origin: Mansarovar (as Tsangpo) · Longest river · Makes U-turn at Namcha Barwa · Creates Assam valley', color: '#dcfce7', textColor: '#14532d' },
      ]
    },
    {
      id: 'glaciers', label: 'Major Glaciers', sublabel: 'Freshwater reserves', color: '#0891b2', textColor: '#fff',
      children: [
        { id: 'siachen', label: 'Siachen Glacier', sublabel: '76 km long · Longest outside polar · World\'s highest battlefield · Nubra river origin', color: '#cffafe', textColor: '#164e63' },
        { id: 'gangotri', label: 'Gangotri Glacier', sublabel: 'Origin of Ganga · Uttarakhand · 30 km long · Retreating 22m/year due to climate change', color: '#cffafe', textColor: '#164e63' },
        { id: 'zemu', label: 'Zemu Glacier', sublabel: 'Largest in Eastern Himalayas · Sikkim · 26 km · Teesta river origin', color: '#cffafe', textColor: '#164e63' },
        { id: 'hispar', label: 'Hispar-Biafo System', sublabel: 'World\'s longest glacier system outside poles · 122 km · Karakoram', color: '#cffafe', textColor: '#164e63' },
      ]
    },
    {
      id: 'passes', label: 'Strategic Passes', sublabel: 'Trade & military routes', color: '#dc2626', textColor: '#fff',
      children: [
        { id: 'zojila', label: 'Zoji La (3,528m)', sublabel: 'J&K · Srinagar to Leh · Only all-weather route NH1 · Strategic importance', color: '#fee2e2', textColor: '#7f1d1d' },
        { id: 'nathula', label: 'Nathu La (4,310m)', sublabel: 'Sikkim · India-China trade since 2006 · Ancient Silk Route · Strategically vital', color: '#fee2e2', textColor: '#7f1d1d' },
        { id: 'rohtang', label: 'Rohtang Pass (3,978m)', sublabel: 'Himachal · Manali-Spiti · Atal Tunnel (2020) bypasses it · Lahaul-Spiti access', color: '#fee2e2', textColor: '#7f1d1d' },
        { id: 'shipkila', label: 'Shipki La (5,639m)', sublabel: 'Himachal · Sutlej enters India here · India-China border · Tibet trade route', color: '#fee2e2', textColor: '#7f1d1d' },
        { id: 'bomdila', label: 'Bomdi La (2,217m)', sublabel: 'Arunachal · Tawang sector · 1962 war route · Strategic border importance', color: '#fee2e2', textColor: '#7f1d1d' },
      ]
    },
  ]
}

type MNode = { id: string; label: string; sublabel: string; color: string; textColor: string; children?: MNode[] }

function MindNode({ node, level = 0 }: { node: MNode; level?: number }) {
  const [expanded, setExpanded] = useState(level < 2)
  const hasChildren = node.children && node.children.length > 0
  return (
    <div className="flex items-start">
      <button onClick={() => hasChildren && setExpanded(!expanded)}
        style={{ backgroundColor: node.color, color: node.textColor, minWidth: level === 0 ? '220px' : level === 1 ? '200px' : '220px', cursor: hasChildren ? 'pointer' : 'default' }}
        className="flex items-start gap-2 px-3 py-2.5 rounded-xl text-left transition-all hover:opacity-90 hover:scale-105 shadow-sm">
        <div className="flex-1">
          <div style={{ fontSize: level === 0 ? '13px' : '12px', fontWeight: 700, lineHeight: 1.3 }}>{node.label}</div>
          <div style={{ fontSize: '10px', opacity: 0.85, marginTop: '3px', lineHeight: 1.4 }}>{node.sublabel}</div>
        </div>
        {hasChildren && <span style={{ fontSize: '10px', opacity: 0.7, marginTop: '2px', flexShrink: 0 }}>{expanded ? '▼' : '▶'}</span>}
      </button>
      {hasChildren && expanded && (
        <div className="flex items-start ml-1">
          <div style={{ width: '20px', display: 'flex', alignItems: 'center', alignSelf: 'stretch' }}>
            <div style={{ width: '20px', height: '1.5px', backgroundColor: node.color, opacity: 0.5 }}></div>
          </div>
          <div className="flex flex-col gap-2">
            {node.children!.map(child => (
              <div key={child.id} className="flex items-center gap-0">
                <MindNode node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function HimalayanRangesPage() {
  const [activeTab, setActiveTab] = useState('notes')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const quiz = [
    { q: 'Which is the correct sequence of Himalayan ranges from north to south?', options: ['Shivalik → Lesser Himalayas → Greater Himalayas', 'Greater Himalayas → Lesser Himalayas → Shivalik', 'Lesser Himalayas → Greater Himalayas → Shivalik', 'Shivalik → Greater Himalayas → Lesser Himalayas'], correct: 1, exp: 'From north to south: Greater Himalayas (Himadri) → Lesser Himalayas (Himachal) → Outer Himalayas (Shivalik). The Greater Himalayas are the innermost and highest range closest to Tibet.' },
    { q: 'Nathu La pass connects India with which country?', options: ['Nepal', 'Bhutan', 'China', 'Myanmar'], correct: 2, exp: 'Nathu La (4,310m) in Sikkim connects India with China (Tibet). It was reopened for trade in 2006 after being closed since 1962. It is part of the ancient Silk Route and is strategically very important.' },
    { q: 'The Brahmaputra river is known by which name in Tibet?', options: ['Padma', 'Tsangpo', 'Meghna', 'Jamuna'], correct: 1, exp: 'The Brahmaputra is known as Tsangpo (meaning "the purifier") in Tibet. It originates near Mansarovar Lake, flows eastward through Tibet, then takes a sharp U-turn around Namcha Barwa peak and enters Arunachal Pradesh as Dihang/Siang.' },
    { q: 'Which glacier is the longest glacier in India?', options: ['Gangotri Glacier', 'Zemu Glacier', 'Siachen Glacier', 'Hispar Glacier'], correct: 2, exp: 'Siachen Glacier in Ladakh (J&K) is the longest glacier in India at about 76 km. It is also the world\'s longest glacier outside the polar regions. It is located in the Karakoram range and is the source of the Nubra river.' },
    { q: 'The Atal Tunnel (Rohtang) connects Manali to which region?', options: ['Spiti Valley', 'Lahaul Valley', 'Zanskar Valley', 'Kashmir Valley'], correct: 1, exp: 'The Atal Tunnel (9.02 km — world\'s longest highway tunnel above 10,000 feet) bypasses the Rohtang Pass and connects Manali to the Lahaul Valley. Opened in 2020, it provides all-year connectivity to Lahaul-Spiti district.' },
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
          <div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 2</div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400 hover:text-gray-600">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Himalayan Ranges & Passes</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">3 ranges · 5 regional divisions</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2020, 2018</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'2,500 km',l:'Length W to E'},{v:'8,586m',l:'Highest peak India'},{v:'15,000+',l:'Glaciers'},{v:'~5mm/yr',l:'Still rising'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'mindmap',label:'🗺️ Mind Map'},{id:'diagram',label:'📐 Diagram'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-blue-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab==='notes' && (
          <div className="flex flex-col gap-5">

            <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">The Himalayan System</div>
              <p className="text-sm leading-relaxed text-blue-100 mb-4">The Himalayas are the world's youngest, highest and most dramatic mountain system — formed just 50 million years ago (yesterday in geological time) by the collision of the Indian and Eurasian plates. They span 2,500 km from the Indus gorge in the west to the Brahmaputra gorge in the east, covering parts of Pakistan, India, Nepal, Bhutan and China. For India, the Himalayas are not just mountains — they are the source of our rivers, the regulator of our monsoon, the guardian of our northern frontier, and the keeper of our freshwater reserves.</p>
              <div className="grid grid-cols-4 gap-3">
                {[{v:'50 million',l:'Years old (young!)'},{v:'8 countries',l:'Span across'},{v:'~400 km',l:'Max width'},{v:'6.7 bn people',l:'Water source for'}].map(s=>(
                  <div key={s.l} className="bg-blue-700 border border-blue-600 rounded-xl p-3 text-center">
                    <div className="text-sm font-bold text-white">{s.v}</div>
                    <div className="text-xs text-blue-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-blue-600 rounded-full"></div>
                <div className="text-sm font-bold text-blue-900">Formation — How the Himalayas Were Born</div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    {time:'250 mya',event:'Tethys Sea',detail:'A shallow sea called Tethys Sea existed between Gondwana (India) and Laurasia (Eurasia). Sediments accumulated here for millions of years.',color:'bg-blue-50 border-blue-200',tc:'text-blue-800'},
                    {time:'100 mya',event:'India drifts north',detail:'India broke away from Gondwana and started drifting northward at ~15 cm/year — the fastest moving tectonic plate ever recorded.',color:'bg-purple-50 border-purple-200',tc:'text-purple-800'},
                    {time:'50 mya',event:'Collision begins',detail:'India collides with Asia. The Tethys Sea sediments get squeezed and folded upward. This is when the Himalayan uplift begins. Himalayas start forming.',color:'bg-amber-50 border-amber-200',tc:'text-amber-800'},
                    {time:'Today',event:'Still rising',detail:'India continues to push into Asia at ~5cm/year. The Himalayas continue to rise at ~5mm/year. This also causes frequent earthquakes in the region.',color:'bg-green-50 border-green-200',tc:'text-green-800'},
                  ].map(s=>(
                    <div key={s.time} className={`border-2 ${s.color} rounded-xl p-3`}>
                      <div className={`text-xs font-bold ${s.tc} mb-1`}>{s.time}</div>
                      <div className="text-xs font-semibold text-gray-800 mb-1.5">{s.event}</div>
                      <p className="text-xs text-gray-600 leading-relaxed">{s.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="text-xs font-bold text-yellow-800 mb-1">💡 Key Concept: Antecedent Drainage</div>
                  <p className="text-sm text-gray-700 leading-relaxed">The Himalayan rivers (Indus, Ganga, Brahmaputra) are <strong>older than the mountains themselves</strong>. They were flowing before the mountains rose. As the mountains rose, the rivers maintained their course by cutting deeper gorges — this is called <strong>antecedent drainage</strong>. This is why these rivers have incredibly deep gorges (the Indus gorge near Gilgit is deeper than the Grand Canyon).</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-purple-50 border-b border-purple-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-purple-600 rounded-full"></div>
                <div className="text-sm font-bold text-purple-900">Three Parallel Himalayan Ranges — Complete Analysis</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {
                    name:'Greater Himalayas (Himadri)',num:'01',
                    color:'bg-blue-600',light:'bg-blue-50',border:'border-blue-300',tc:'text-blue-900',
                    elevation:'Average 6,000m · Highest range',
                    nature:'Innermost, northernmost and highest range. Made of granite and other crystalline rocks. Always snow-covered — the source of glaciers and major rivers.',
                    features:['Contains the highest peaks in the world — Everest (8,849m), K2 (8,611m), Kangchenjunga (8,586m), Lhotse (8,516m), Makalu (8,485m)','Width: 25 km average but very steep','Permanently covered with snow and glaciers year-round','Contains some of India\'s largest glaciers — Siachen (76km), Gangotri (30km), Zemu (26km)','The Himadri forms the main watershed — rivers flow both north (into Tibet) and south (into India)','High altitude passes: Zoji La, Shipki La, Nathu La, Bomdi La'],
                    states:'J&K, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh',
                    upscTip:'The Greater Himalayas are asymmetrical — the northern slope towards Tibet is gentler while the southern slope towards India is much steeper. This affects river flow and climate dramatically.'
                  },
                  {
                    name:'Lesser Himalayas (Himachal)',num:'02',
                    color:'bg-violet-600',light:'bg-violet-50',border:'border-violet-300',tc:'text-violet-900',
                    elevation:'Average 3,700–4,500m',
                    nature:'South of the Greater Himalayas, separated from Himadri by a long valley (Kullu, Kashmir, Nepal). This is where most Himalayan hill stations, valleys and tourist destinations are located.',
                    features:['Contains famous valleys: Kashmir Valley, Kullu Valley, Kangra Valley, Kulu Valley','Important ranges within: Pir Panjal (J&K), Dhauladhar (HP), Mussoorie Range (Uttarakhand), Nag Tibba','Hill stations: Shimla, Mussoorie, Nainital, Darjeeling, Ooty (not Himalayas)','The Pirpanjal is the southern arm of the Kashmir Valley — creates the famous Dal Lake basin','Duns and Karewas: Karewas are flat-topped hills in Kashmir used for saffron cultivation','Contains the famous Rohtang Pass (3,978m), Sinthan Pass and other important passes'],
                    states:'J&K, Himachal Pradesh, Uttarakhand, Sikkim',
                    upscTip:'Karewas (also called Nappe) are glacial lake deposits found in the Kashmir Valley. They are famous for saffron cultivation — Kashmir produces most of India\'s saffron here.'
                  },
                  {
                    name:'Outer Himalayas (Shivalik)',num:'03',
                    color:'bg-teal-600',light:'bg-teal-50',border:'border-teal-300',tc:'text-teal-900',
                    elevation:'Average 900–1,100m · Lowest and outermost',
                    nature:'The southernmost, youngest and lowest Himalayan range. These are the foothills of the Himalayas. The area between Shivalik and Lesser Himalayas forms long valleys called "Duns" — the most famous being Dehradun.',
                    features:['Width: 10–50 km', 'Composed of unconsolidated sediments — gravel, sand, conglomerate — very young geologically','Parallel to the plains — acts as a transition zone between mountains and plains','Famous Duns (valleys): Dehradun, Kotli Dun, Patli Dun in Uttarakhand; Kangra Dun, Nalagarh Dun in HP','Terai region lies just south — marshy, forested, high rainfall area (Jim Corbett NP, Kaziranga NP)','Most earthquake-prone — shallow focus earthquakes common due to ongoing compression'],
                    states:'Punjab, Himachal Pradesh, Uttarakhand, Uttar Pradesh, West Bengal, Arunachal Pradesh',
                    upscTip:'Duns are structural valleys formed between Lesser Himalayas and Shivaliks. Dehradun is the most famous Dun. It is where the Ganga and Yamuna emerge from the mountains.'
                  },
                ].map(r=>(
                  <div key={r.num} className={`border-2 ${r.border} rounded-2xl overflow-hidden`}>
                    <div className={`${r.color} text-white px-5 py-3 flex items-center gap-3`}>
                      <div className="text-3xl font-black text-white opacity-30">{r.num}</div>
                      <div>
                        <div className="font-bold text-base text-white">{r.name}</div>
                        <div className="text-xs text-white opacity-80">{r.elevation}</div>
                      </div>
                    </div>
                    <div className={`p-4 ${r.light}`}>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{r.nature}</p>
                      <div className="bg-white rounded-xl p-3 border border-gray-100 mb-3">
                        <div className="text-xs font-bold text-gray-700 mb-2">Key Features & Facts</div>
                        <ul className="flex flex-col gap-1.5">
                          {r.features.map(f=>(
                            <li key={f} className="text-xs text-gray-600 flex gap-2 leading-relaxed">
                              <span className="text-green-500 shrink-0 mt-0.5">✓</span>{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white border border-gray-100 rounded-xl p-3">
                          <div className="text-xs font-bold text-gray-600 mb-1">States covered</div>
                          <p className="text-xs text-gray-700">{r.states}</p>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                          <div className="text-xs font-bold text-yellow-800 mb-1">💡 UPSC Tip</div>
                          <p className="text-xs text-gray-700 leading-relaxed">{r.upscTip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-red-500 rounded-full"></div>
                <div className="text-sm font-bold text-red-900">Major Himalayan Passes — Strategic & Commercial Importance</div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    {pass:'Zoji La',ht:'3,528m',loc:'J&K (Greater Himalayas)',connects:'Srinagar ↔ Leh',imp:'Only all-weather route between Kashmir and Ladakh (NH1). Controlled by Indian Army. Z-Morh tunnel being built to keep it open in winter.',strategic:'Vital for Ladakh supply — if closed, Ladakh gets cut off from Kashmir'},
                    {pass:'Nathu La',ht:'4,310m',loc:'Sikkim (Greater Himalayas)',connects:'India (Gangtok) ↔ China (Yadong)',imp:'Reopened for trade in 2006 after closure since 1962 Indo-China war. Part of ancient Silk Route. Allows trade of specific goods between India and China.',strategic:'India-China trade route. Strategically sensitive — overlooks Chumbi Valley which China controls.'},
                    {pass:'Rohtang Pass',ht:'3,978m',loc:'Himachal Pradesh (Lesser Himalayas)',connects:'Manali ↔ Lahaul & Spiti',imp:'Bypass created by Atal Tunnel (9.02 km, completed 2020) — world\'s longest highway tunnel above 3,000m. Pass was closed 6 months/year due to snow.',strategic:'Provides all-year access to Lahaul-Spiti for military and civilians. Reduced distance by 46 km.'},
                    {pass:'Shipki La',ht:'5,639m',loc:'Himachal Pradesh (Greater Himalayas)',connects:'India (Kinnaur) ↔ China (Tibet)',imp:'The Sutlej river enters India through this pass from Tibet. India-China trade point. Very high altitude.',strategic:'Entry point of Sutlej — vital river. Border trade route. India\'s trade with Tibet passes here.'},
                    {pass:'Bomdi La',ht:'2,217m',loc:'Arunachal Pradesh',connects:'India ↔ Tawang ↔ China',imp:'Critical route used by Chinese troops during 1962 war to advance towards Tezpur (Assam). India regained this area.',strategic:'Key route to Tawang — which China claims. SEZ Arunachal sensitive border — India maintains forward posts here.'},
                    {pass:'Bara Lacha La',ht:'4,890m',loc:'Himachal Pradesh',connects:'Manali ↔ Leh (Ladakh)',imp:'Part of the Manali-Leh Highway (NH3) — the second route to Ladakh after Zoji La. High altitude desert pass.',strategic:'Alternative route to Ladakh for military supplies. Remains open longer than Rohtang but closed in heavy winter.'},
                  ].map(p=>(
                    <div key={p.pass} className="border border-red-100 bg-red-50 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-bold text-red-900">{p.pass}</div>
                        <span className="text-xs bg-red-200 text-red-900 px-2 py-0.5 rounded-full font-bold">{p.ht}</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">{p.loc} · {p.connects}</div>
                      <p className="text-xs text-gray-700 leading-relaxed mb-2">{p.imp}</p>
                      <div className="bg-white rounded-lg p-2 border border-red-100">
                        <div className="text-xs font-semibold text-red-700">Strategic Importance</div>
                        <div className="text-xs text-gray-600 mt-0.5">{p.strategic}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-cyan-50 border-b border-cyan-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-cyan-500 rounded-full"></div>
                <div className="text-sm font-bold text-cyan-900">Major Glaciers — India's Frozen Water Towers</div>
              </div>
              <div className="p-5">
                <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">The Himalayas contain the largest concentration of glaciers outside the polar regions — often called the <strong>"Third Pole"</strong>. These glaciers are the source of major rivers that sustain over 1.5 billion people in South Asia. Climate change is causing them to retreat at alarming rates — a crisis that threatens India's water security.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {name:'Siachen Glacier',len:'76 km',loc:'Karakoram, Ladakh (J&K)',river:'Nubra River',fact:'Longest glacier outside polar regions. World\'s highest battlefield (~5,400-6,000m). India has maintained military presence here since Operation Meghdoot (1984). Melting at ~1km/decade.'},
                    {name:'Gangotri Glacier',len:'30 km',loc:'Uttarakhand (Greater Himalayas)',river:'Bhagirathi → Ganga',fact:'Origin of the sacred Ganga river. Retreating at 22m/year — one of fastest retreating glaciers. Gaumukh (cow\'s mouth) is the actual snout. Pilgrims trek here.'},
                    {name:'Zemu Glacier',len:'26 km',loc:'Sikkim (Greater Himalayas)',river:'Teesta River',fact:'Largest glacier in the Eastern Himalayas. Located in the Kangchenjunga massif. Origin of Teesta river. Sikkim glacier retreat threatens Teesta water availability for Bengal and Bangladesh.'},
                    {name:'Biafo Glacier',len:'67 km',loc:'Karakoram (PoK)',river:'Braldu River',fact:'Part of the Hispar-Biafo system — world\'s longest non-polar glacier highway at 122 km. Not in Indian territory but important for UPSC world geography questions.'},
                  ].map(g=>(
                    <div key={g.name} className="border border-cyan-200 bg-cyan-50 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs font-bold text-cyan-900">{g.name}</div>
                        <span className="text-xs bg-cyan-200 text-cyan-900 px-2 py-0.5 rounded-full font-bold">{g.len}</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-1">{g.loc} · River: {g.river}</div>
                      <p className="text-xs text-gray-700 leading-relaxed">{g.fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-teal-500 rounded-full"></div>
                <div className="text-sm font-bold text-teal-900">Current Affairs 2024-25 — Himalayan Issues</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  {title:'Sikkim GLOF Disaster (Oct 2023)',tag:'Disaster',detail:'South Lhonak glacial lake burst in Sikkim — massive GLOF destroyed Teesta Stage III dam, killed 40+ people, washed away Mangan town. Warning systems failed. Showed vulnerability of Himalayan states to climate change.'},
                  {title:'Joshimath Subsidence (2023)',tag:'Geology',detail:'The holy town of Joshimath in Uttarakhand started sinking — houses developed cracks, roads cracked. Caused by combination of construction pressure, underground water seepage and geological weakness. Over 600 families affected. National disaster declared.'},
                  {title:'Atal Tunnel Impact (2020-present)',tag:'Infrastructure',detail:'Rohtang tunnel revolutionized Lahaul-Spiti connectivity. Before: 6 months cut off every winter. After: year-round access. Boosted tourism (700%+), enabled faster military deployment, improved healthcare access for 40,000 residents.'},
                  {title:'Nathu La Trade & India-China',tag:'Strategic',detail:'Trade through Nathu La was suspended in 2017 (Doklam) and partially resumed. India-China relations affect this route directly. Important for understanding India\'s border trade policy and strategic considerations in Sikkim sector.'},
                ].map(c=>(
                  <div key={c.title} className="border border-teal-100 rounded-xl p-3 bg-teal-50">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-xs font-bold text-teal-900">{c.title}</div>
                      <span className="text-xs bg-teal-200 text-teal-800 px-2 py-0.5 rounded-full shrink-0 font-medium">{c.tag}</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeTab==='mindmap' && (
          <div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-auto">
            <div className="text-sm font-semibold text-gray-900 mb-1">Himalayan System — Interactive Mind Map</div>
            <div className="text-xs text-gray-400 mb-5">Click any node to expand/collapse · Each branch has 3+ detailed nodes</div>
            <div className="overflow-x-auto pb-6">
              <div className="flex flex-col gap-4" style={{minWidth:'700px'}}>
                <MindNode node={mindmapData} level={0} />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-3 border-t border-gray-100 pt-4">
              {[
                {label:'Total ranges',val:'3 parallel (N to S)',color:'bg-blue-50 text-blue-800'},
                {label:'Regional divisions',val:'5 (Kashmir to Arunachal)',color:'bg-purple-50 text-purple-800'},
                {label:'Major glaciers',val:'15,000+ glaciers',color:'bg-cyan-50 text-cyan-800'},
                {label:'Key passes',val:'Zoji La, Nathu La, Rohtang',color:'bg-red-50 text-red-800'},
              ].map(f=>(
                <div key={f.label} className={`${f.color} rounded-xl p-3 text-center`}>
                  <div className="text-xs opacity-70 mb-1">{f.label}</div>
                  <div className="text-xs font-bold">{f.val}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==='diagram' && (
          <div className="flex flex-col gap-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-sm font-semibold text-gray-900 mb-1">Cross-Section Diagram — Three Himalayan Ranges (North to South)</div>
              <div className="text-xs text-gray-400 mb-4">Elevation profile showing the three parallel ranges and key features</div>
              <svg viewBox="0 0 700 320" width="100%" className="mb-4">
                <rect width="700" height="320" fill="#f8fafc" rx="12"/>
                <text x="350" y="25" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="500">Cross-Section: Tibet (North) → India (South)</text>
                <text x="30" y="160" textAnchor="middle" fontSize="9" fill="#94a3b8" transform="rotate(-90, 30, 160)">Elevation (m)</text>
                {[0,2000,4000,6000,8000].map((e,i)=>(
                  <g key={e}>
                    <line x1="55" y1={280-i*52} x2="680" y2={280-i*52} stroke="#e2e8f0" strokeWidth="0.5"/>
                    <text x="50" y={284-i*52} textAnchor="end" fontSize="8" fill="#94a3b8">{e.toLocaleString()}</text>
                  </g>
                ))}
                <polygon points="55,280 100,240 130,210 160,80 190,60 220,40 240,35 260,60 280,100 310,200 350,240 380,280" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
                <text x="220" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">Greater Himalayas</text>
                <text x="220" y="42" textAnchor="middle" fontSize="8" fill="#3b82f6">Avg 6,000m | Permanently snow-covered</text>
                <polygon points="310,200 350,240 380,280 420,260 450,220 480,200 500,195 520,210 540,250 560,280" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
                <text x="450" y="190" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4c1d95">Lesser Himalayas</text>
                <text x="450" y="202" textAnchor="middle" fontSize="8" fill="#7c3aed">3,700–4,500m | Hill stations</text>
                <polygon points="540,250 560,280 580,275 600,260 620,250 640,255 660,270 680,280" fill="#dcfce7" stroke="#059669" strokeWidth="2"/>
                <text x="620" y="244" textAnchor="middle" fontSize="10" fontWeight="700" fill="#065f46">Shivalik</text>
                <text x="620" y="256" textAnchor="middle" fontSize="8" fill="#059669">900–1,100m</text>
                <line x1="55" y1="280" x2="680" y2="280" stroke="#94a3b8" strokeWidth="1.5"/>
                <rect x="55" y="280" width="60" height="12" fill="#fef3c7" stroke="#d97706" strokeWidth="1"/>
                <text x="85" y="290" textAnchor="middle" fontSize="8" fill="#92400e">Tibet Plateau</text>
                <rect x="240" y="280" width="70" height="12" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1"/>
                <text x="275" y="290" textAnchor="middle" fontSize="8" fill="#075985">Kashmir/Kullu Valley</text>
                <rect x="540" y="280" width="50" height="12" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1"/>
                <text x="565" y="290" textAnchor="middle" fontSize="8" fill="#15803d">Dun Valley</text>
                <rect x="630" y="280" width="50" height="12" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1"/>
                <text x="655" y="290" textAnchor="middle" fontSize="8" fill="#92400e">Northern Plains</text>
                <circle cx="240" cy="35" r="4" fill="#ef4444"/>
                <text x="252" y="38" fontSize="8" fill="#ef4444" fontWeight="600">Everest 8,849m</text>
                <circle cx="190" cy="60" r="4" fill="#f97316"/>
                <text x="202" y="63" fontSize="8" fill="#f97316" fontWeight="600">Kangchenjunga 8,586m</text>
                <circle cx="500" cy="195" r="3" fill="#7c3aed"/>
                <text x="466" y="192" fontSize="8" fill="#7c3aed" fontWeight="600" textAnchor="end">Mussoorie 2,000m</text>
                <line x1="160" y1="100" x2="160" y2="80" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="3,2"/>
                <text x="162" y="78" fontSize="7" fill="#0891b2">Gangotri Glacier</text>
                <text x="80" y="175" textAnchor="middle" fontSize="8" fill="#1e40af" fontWeight="600">NORTH</text>
                <text x="660" y="175" textAnchor="middle" fontSize="8" fill="#1e40af" fontWeight="600">SOUTH</text>
                <line x1="55" y1="175" x2="80" y2="175" stroke="#1e40af" strokeWidth="1" markerEnd="url(#arrow)"/>
                <line x1="645" y1="175" x2="670" y2="175" stroke="#1e40af" strokeWidth="1"/>
              </svg>

              <div className="grid grid-cols-3 gap-3">
                {[
                  {name:'Greater Himalayas',color:'bg-blue-50 border-blue-300',tc:'text-blue-800',facts:['Innermost & highest range','Average elevation: 6,000m+','Permanently snow-covered','Source of all major glaciers','Made of granite/crystalline rocks','Asymmetrical — steeper S slope']},
                  {name:'Lesser Himalayas',color:'bg-purple-50 border-purple-300',tc:'text-purple-800',facts:['Middle range','Avg: 3,700–4,500m','Hill stations: Shimla, Mussoorie','Pir Panjal, Dhauladhar ranges','Kashmir & Kullu valleys here','Karewas: saffron cultivation']},
                  {name:'Outer Himalayas (Shivalik)',color:'bg-green-50 border-green-300',tc:'text-green-800',facts:['Southernmost & youngest','Avg: 900–1,100m','Unconsolidated sediments','Duns: Dehradun, Kotli Dun','Earthquake-prone zone','Terai lies just south']},
                ].map(r=>(
                  <div key={r.name} className={`border-2 ${r.color} rounded-xl p-3`}>
                    <div className={`text-xs font-bold ${r.tc} mb-2`}>{r.name}</div>
                    <ul className="flex flex-col gap-1">
                      {r.facts.map(f=><li key={f} className="text-xs text-gray-600 flex gap-1.5"><span className="shrink-0 text-gray-400">·</span>{f}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="text-sm font-semibold text-gray-900 mb-1">Regional Divisions — West to East Across India</div>
              <div className="text-xs text-gray-400 mb-4">The Himalayas in India are divided into 5 regional sections from west to east</div>
              <div className="flex gap-2 overflow-x-auto pb-3">
                {[
                  {region:'Kashmir Himalayas',color:'bg-blue-100 border-blue-400',tc:'text-blue-900',state:'J&K + Ladakh',peaks:'K2 (PoK), Saser Kangri',passes:'Zoji La, Banihal, Pir Panjal',valleys:'Kashmir Valley, Zanskar, Nubra, Shyok',special:'Siachen glacier · Dal Lake · Karewas'},
                  {region:'Himachal Himalayas',color:'bg-violet-100 border-violet-400',tc:'text-violet-900',state:'Himachal Pradesh',peaks:'Kullu, Bara Shigri glacier',passes:'Rohtang, Bara Lacha La, Shipki La',valleys:'Kullu, Kangra, Spiti, Lahaul',special:'Atal Tunnel · Great Himalayan NP'},
                  {region:'Uttarakhand Himalayas',color:'bg-green-100 border-green-400',tc:'text-green-900',state:'Uttarakhand',peaks:'Nanda Devi (7,816m), Kamet, Kedarnath',passes:'Lipu Lekh, Mana Pass, Niti Pass',valleys:'Bhagirathi, Alaknanda, Pindar',special:'Char Dham · Gangotri glacier · Haridwar, Rishikesh'},
                  {region:'Sikkim Himalayas',color:'bg-amber-100 border-amber-400',tc:'text-amber-900',state:'Sikkim',peaks:'Kangchenjunga (8,586m) — India\'s highest',passes:'Nathu La (China trade), Jelep La',valleys:'Teesta, Rangit',special:'Zemu glacier · India-China border · Biodiversity hotspot'},
                  {region:'Arunachal Himalayas',color:'bg-orange-100 border-orange-400',tc:'text-orange-900',state:'Arunachal Pradesh',peaks:'Kangto, Nyegyi Kangsang, Gorichen (6,538m)',passes:'Bomdi La, Diphu La, Pangsau Pass',valleys:'Brahmaputra tributaries: Subansiri, Siang, Dibang',special:'China claims this region · 1962 war battleground · Tawang monastery'},
                ].map(r=>(
                  <div key={r.region} className={`border-2 ${r.color} rounded-xl p-3 shrink-0`} style={{width:'200px'}}>
                    <div className={`text-xs font-bold ${r.tc} mb-2`}>{r.region}</div>
                    <div className="text-xs text-gray-500 mb-2 font-medium">{r.state}</div>
                    {[
                      {label:'Peaks',val:r.peaks},
                      {label:'Passes',val:r.passes},
                      {label:'Valleys',val:r.valleys},
                      {label:'Special',val:r.special},
                    ].map(d=>(
                      <div key={d.label} className="mb-1.5">
                        <span className="text-xs font-semibold text-gray-600">{d.label}: </span>
                        <span className="text-xs text-gray-600">{d.val}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeTab==='pyq' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions — Himalayan Ranges</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2022 Prelims',q:'Which of the following is the correct sequence of Himalayan ranges from north to south? (A) Greater Himalayas, Shivalik, Lesser Himalayas (B) Greater Himalayas, Lesser Himalayas, Shivalik'},
                {year:'2021 Mains GS-I',q:'Discuss the geomorphic processes and factors responsible for the formation of the Himalayan mountain ranges. How do the Himalayas influence the climate of the Indian subcontinent?'},
                {year:'2020 Prelims',q:'With reference to Nathu La Pass, which of the following statements is correct? It is located in Sikkim and connects India to China.'},
                {year:'2019 Prelims',q:'Siachen Glacier is located to the north of which of the following? (A) Aksai Chin (B) Nubra Valley (C) Gilgit-Baltistan (D) Ladakh'},
                {year:'2018 Mains GS-I',q:'The Brahmaputra, Indus and Ganga are said to be older than the Himalayas. Substantiate this claim with geological evidence.'},
                {year:'2016 Prelims',q:'Which of the following passes lies in the Sutlej valley? (A) Nathu La (B) Jelep La (C) Shipki La (D) Mana Pass'},
                {year:'2014 Prelims',q:'The Karewas of Kashmir are associated with which of the following? (A) River terraces (B) Glacial deposits (C) Saffron cultivation (D) Both B and C'},
              ].map((p,i)=>(
                <div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-all">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{p.year}</span>
                  <div className="text-sm text-gray-700 leading-relaxed mt-2">{p.q}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==='quiz' && (
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            {!quizStarted?(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🏔️</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Himalayan Ranges & Passes</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions · Instant explanations</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-blue-700 text-white px-10 py-3 rounded-xl font-medium text-sm hover:bg-blue-800">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500 shrink-0">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-blue-600 rounded-full transition-all" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-blue-700 shrink-0">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5 leading-relaxed">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quiz[currentQ].options.map((opt,i)=>(
                    <button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}>
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
                      <div className="text-sm text-gray-700 leading-relaxed">{quiz[currentQ].exp}</div>
                    </div>
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-800">
                      {currentQ<quiz.length-1?'Next Question →':'See Results →'}
                    </button>
                  </>
                )}
              </div>
            ):(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">{score>=4?'🏆':score>=3?'👍':'📚'}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">You scored {score} / {quiz.length}</div>
                <div className="text-sm text-gray-500 mb-8">{score===5?'Perfect! You know the Himalayas well!':score>=3?'Good! Review the passes and ranges once more.':'The Himalayas need more attention — go through the notes again.'}</div>
                <div className="flex gap-3 justify-center">
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-blue-700 text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-blue-800">Try Again</button>
                  <button onClick={()=>setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm hover:bg-gray-200">Review Notes</button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab==='predict' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-1">Predicted questions for UPSC 2027</div>
            <div className="text-xs text-gray-500 mb-5">Based on 20-year PYQ pattern + current affairs analysis</div>
            <div className="flex flex-col gap-3">
              {[
                {q:'Himalayan glaciers as the "Third Pole" — significance for South Asian water security and impact of climate change',prob:92},
                {q:'Strategic importance of mountain passes — Nathu La, Zoji La, Bomdi La — in context of India\'s border management',prob:86},
                {q:'Antecedent drainage in the Himalayas — explain with examples of Indus, Ganga, Brahmaputra',prob:80},
                {q:'Joshimath subsidence and geological vulnerability of Himalayan towns — causes and lessons',prob:75},
                {q:'Sikkim GLOF 2023 — causes, impact and disaster preparedness in Himalayan states',prob:70},
              ].map((pred,i)=>(
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-blue-100 rounded-full"><div className="h-2 bg-blue-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                        <span className="text-xs font-bold text-blue-700">{pred.prob}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/1" className="text-sm text-green-600 hover:text-green-700">← Physical Features</a>
          <div className="text-xs text-gray-400">Topic 2 of 20</div>
          <a href="/subjects/geography/3" className="text-sm text-green-600 hover:text-green-700">Northern Plains →</a>
        </div>
      </div>
    </div>
  )
}