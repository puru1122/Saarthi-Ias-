'use client'
import { useState } from 'react'

export default function PhysicalFeaturesPage() {
  const [activeTab, setActiveTab] = useState('notes')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const quiz = [
    {q:'Which is the highest peak in India?',options:['Mt. Everest','Kangchenjunga','K2','Kamet'],correct:1,exp:'Kangchenjunga (8,586m) is the highest peak in India located on the India-Nepal border. K2 (8,611m) is in Pakistan-administered territory. Mt. Everest is in Nepal.'},
    {q:'The Deccan Plateau is bounded on the west by which range?',options:['Eastern Ghats','Satpura Range','Western Ghats','Vindhya Range'],correct:2,exp:'The Deccan Plateau is bounded on the west by the Western Ghats (Sahyadri), which act as a watershed — rivers flow both east and west from this range.'},
    {q:'Which islands in India are of coral origin?',options:['Andaman Islands','Nicobar Islands','Lakshadweep Islands','Both A and B'],correct:2,exp:'Lakshadweep Islands are of coral origin — they are atolls formed by coral reefs. Andaman and Nicobar Islands are of oceanic origin formed by submerged mountains.'},
    {q:'The Great Indian Desert (Thar) is located primarily in which state?',options:['Gujarat','Rajasthan','Haryana','Punjab'],correct:1,exp:'The Thar Desert is primarily located in Rajasthan. It extends into Gujarat, Punjab and Haryana but the bulk of it is in Rajasthan.'},
    {q:'Which of the following is NOT a division of the Northern Plains?',options:['Punjab Plains','Ganga Plains','Brahmaputra Plains','Deccan Plains'],correct:3,exp:'The Northern Plains are divided into Punjab Plains, Ganga Plains and Brahmaputra Plains. Deccan Plains is not a division — the Deccan Plateau is a separate physiographic unit.'},
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
          <div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 1</div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400 hover:text-gray-600">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Physical Features of India</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">6 physiographic divisions</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2023, 2021, 2019</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'3.28 million km²',l:'Total area'},{v:'7th largest',l:'In the world'},{v:'6 divisions',l:'Physiographic'},{v:'7,516 km',l:'Coastline length'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'visual',label:'🗺️ Visual Map'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-green-600 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab==='notes' && (
          <div className="flex flex-col gap-5">

            <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-green-200 mb-2">GS-I · Geography of India</div>
              <div className="text-2xl font-bold text-white mb-3">Physical Features of India</div>
              <p className="text-sm leading-relaxed text-green-100 mb-4">India is a land of extraordinary geographical diversity — from the world's highest mountain ranges in the north to tropical coastlines in the south, from the great alluvial plains of the Ganga to the ancient rocky plateau of the Deccan. Understanding India's physical geography is the foundation for understanding its climate, rivers, agriculture, and economy.</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {v:'28°4\'N to 8°4\'N',l:'Latitude range'},
                  {v:'68°7\'E to 97°25\'E',l:'Longitude range'},
                  {v:'~3,214 km',l:'N to S extent'},
                  {v:'~2,933 km',l:'E to W extent'},
                  {v:'15,200 km',l:'Land boundary'},
                  {v:'7,516 km',l:'Sea coastline'},
                ].map(s=>(
                  <div key={s.l} className="bg-green-600 rounded-xl p-3 text-center border border-green-500">
                    <div className="text-sm font-bold text-white">{s.v}</div>
                    <div className="text-xs text-green-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-blue-500 rounded-full"></div>
                <div className="text-sm font-bold text-blue-900">6 Physiographic Divisions of India</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {num:'01',name:'The Himalayan Mountains',color:'bg-blue-600',light:'bg-blue-50',border:'border-blue-200',tcolor:'text-blue-900',
                    overview:'The youngest and highest mountain ranges in the world, formed by the collision of the Indian and Eurasian tectonic plates during the Cenozoic era. They act as a natural barrier against cold Arctic winds and are the origin of major rivers.',
                    keyFacts:[
                      'Extend 2,500 km from Indus in the west to Brahmaputra in the east',
                      'Width varies from 150 to 400 km',
                      'Three parallel ranges: Greater Himalayas (Himadri), Lesser Himalayas (Himachal), Outer Himalayas (Shivalik)',
                      'Highest peak in India: Kangchenjunga (8,586m) on India-Nepal border',
                      'Contains 15,000+ glaciers including Siachen (longest outside polar regions at 76 km)',
                      'Geologically young folded mountains — still rising at ~5mm per year',
                    ],
                    upscTip:'The Himalayas are antecedent rivers — rivers that existed before the mountains rose and cut through them as they rose. Indus, Ganga, Brahmaputra are antecedent rivers.',
                    pyq:'Correct sequence from north to south: Greater Himalayas → Lesser Himalayas → Shivalik (Outer Himalayas)'},
                  {num:'02',name:'The Northern Plains',color:'bg-amber-600',light:'bg-amber-50',border:'border-amber-200',tcolor:'text-amber-900',
                    overview:'Formed by the deposition of alluvial soil brought by Himalayan rivers over millions of years. These plains form the most fertile and densely populated region of India — often called the food bowl of the nation.',
                    keyFacts:[
                      'Extend over 7 lakh sq km across Punjab, Haryana, Delhi, UP, Bihar, West Bengal',
                      'Length: ~2,400 km · Width: 150-300 km',
                      'Three divisions: Punjab Plains (west), Ganga Plains (central), Brahmaputra Plains (east)',
                      'Four belts from north to south: Bhabar (coarse gravel) → Terai (marshy) → Bhangar (old alluvium) → Khadar (new alluvium)',
                      'Depth of alluvial soil: up to 6,100 metres in some areas',
                      'Home to over 40% of India\'s population on just 15% of land area',
                    ],
                    upscTip:'Bhangar is the older alluvium found above flood level — has calcareous deposits called Kankar. Khadar is newer alluvium in flood plains — more fertile, renewed every flood season.',
                    pyq:'The Terai belt adjacent to Himalayan foothills is marshy, forested, and receives heavy rainfall — home to elephants, tigers, rhinos.'},
                  {num:'03',name:'The Peninsular Plateau',color:'bg-orange-600',light:'bg-orange-50',border:'border-orange-200',tcolor:'text-orange-900',
                    overview:'One of the oldest landmasses on earth — a fragment of the ancient Gondwana supercontinent. Made of hard igneous and metamorphic rocks, it is geologically stable and extraordinarily rich in minerals.',
                    keyFacts:[
                      'Covers about 16 lakh sq km — largest physiographic unit of India',
                      'Bounded by Western Ghats (west), Eastern Ghats (east), Vindhya-Satpura (north)',
                      'Average elevation: 600-900 m above sea level',
                      'Black cotton soil (Regur) dominates western Deccan — formed from volcanic Deccan basalt',
                      'Western Ghats: continuous range, highest peak Anamudi (2,695m) in Kerala',
                      'Eastern Ghats: discontinuous, lower, cut by east-flowing rivers, highest peak Mahendragiri (1,501m)',
                      'Rich in minerals: iron ore (Jharkhand), coal (Damodar valley), manganese (Odisha), mica (Bihar)',
                    ],
                    upscTip:'Western Ghats are continuous and receive heavy SW monsoon rainfall (windward side). Eastern Ghats are discontinuous, lower, and in rain shadow — receive less rainfall.',
                    pyq:'The Deccan Traps — vast volcanic basalt formations covering 500,000 sq km — were formed by volcanic eruptions ~65 million years ago (same time as dinosaur extinction).'},
                  {num:'04',name:'The Indian Desert (Thar)',color:'bg-yellow-600',light:'bg-yellow-50',border:'border-yellow-200',tcolor:'text-yellow-900',
                    overview:'The 9th largest hot desert in the world and the most densely populated desert on earth. Located in the extreme northwest, it experiences extreme temperatures — over 50°C in summer and near 0°C in winter nights.',
                    keyFacts:[
                      'Covers about 2 lakh sq km mainly in Rajasthan — extends into Gujarat, Punjab, Haryana',
                      'Annual rainfall: less than 150mm — highly erratic and unpredictable',
                      'Characterized by: shifting sand dunes (barchans), rocky plateaus (hamadas), saline lakes',
                      'The Luni river is the only significant river — it disappears into the desert',
                      'Indira Gandhi Canal (670 km) has transformed agriculture in western Rajasthan',
                      'Sambhar Lake — India\'s largest inland saltwater lake — is in the Thar',
                    ],
                    upscTip:'The Aravalli Range acts as a barrier but the Thar extends beyond it. The desert has been advancing eastward — afforestation and Indira Gandhi Canal have helped check this.',
                    pyq:'The Luni river drains the Thar Desert and becomes saline in its lower course before disappearing into the Rann of Kutch.'},
                  {num:'05',name:'The Coastal Plains',color:'bg-teal-600',light:'bg-teal-50',border:'border-teal-200',tcolor:'text-teal-900',
                    overview:'India has a total coastline of 7,516 km. The West Coast (Arabian Sea) and East Coast (Bay of Bengal) have dramatically different characters due to different geological origins, monsoon patterns, and river systems.',
                    keyFacts:[
                      'West Coast: ~1,500 km · Narrow (10-15 km) · Steep · Lagoons (Kayals) · No deltas',
                      'East Coast: ~1,700 km · Broader (80-100 km) · Large river deltas · Sandy beaches',
                      'West Coast divisions: Konkan (Maharashtra+Goa) → Kannad (Karnataka) → Malabar (Kerala)',
                      'East Coast divisions: Northern Circar (Odisha+AP) → Coromandel (Tamil Nadu)',
                      'Major coastal lakes: Chilika (Odisha, largest coastal lake) · Vembanad (Kerala) · Pulicat (AP)',
                      'Kerala backwaters (Kayals) — network of lagoons — unique to Malabar coast',
                    ],
                    upscTip:'The West Coast receives SW Monsoon first (June) and gets very heavy rainfall. The East Coast (Tamil Nadu) gets its main rainfall from NE Monsoon in Oct-Dec — opposite to the rest of India.',
                    pyq:'Chilika Lake in Odisha is India\'s largest coastal lagoon and an important Ramsar wetland — home to flamingoes and Irrawaddy dolphins.'},
                  {num:'06',name:'The Islands',color:'bg-purple-600',light:'bg-purple-50',border:'border-purple-200',tcolor:'text-purple-900',
                    overview:'India has two distinct island groups — Andaman & Nicobar in the Bay of Bengal (volcanic/oceanic origin) and Lakshadweep in the Arabian Sea (coral atolls). They give India a vast Exclusive Economic Zone of 2.37 million sq km.',
                    keyFacts:[
                      'Andaman & Nicobar: 572 islands total · Only 38 inhabited · UT · Capital: Port Blair',
                      'Lakshadweep: 36 islands · Only 11 inhabited · Smallest UT · Capital: Kavaratti',
                      'A&N origin: Submerged extension of Arakan Mountains (Myanmar) — oceanic/volcanic',
                      'Lakshadweep origin: Coral atolls built on coral reefs — no rivers, no perennial freshwater',
                      '10 Degree Channel separates Andaman from Nicobar Islands',
                      '9 Degree Channel separates Lakshadweep from Maldives',
                      'Indira Point (Great Nicobar) = southernmost point of India — partially submerged after 2004 tsunami',
                    ],
                    upscTip:'Barren Island (A&N) is India\'s only active volcano. Narcondam Island nearby has an extinct volcano. Great Nicobar Island is India\'s southernmost territory.',
                    pyq:'The 10 Degree Channel is a strategic maritime passage separating Andaman and Nicobar Islands. India has established a major naval base (INS Baaz) in the Nicobar Islands.'},
                ].map(div=>(
                  <div key={div.num} className={`border-2 ${div.border} rounded-2xl overflow-hidden`}>
                    <div className={`${div.color} text-white px-5 py-3 flex items-center gap-3`}>
                      <div className="text-2xl font-black text-white opacity-50">{div.num}</div>
                      <div className="font-bold text-sm text-white">{div.name}</div>
                    </div>
                    <div className={`p-4 ${div.light}`}>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{div.overview}</p>
                      <div className="bg-white rounded-xl p-3 border border-gray-100 mb-3">
                        <div className="text-xs font-bold text-gray-700 mb-2">Key Facts & Figures</div>
                        <ul className="flex flex-col gap-1.5">
                          {div.keyFacts.map(f=>(
                            <li key={f} className="text-xs text-gray-600 flex gap-2 leading-relaxed">
                              <span className="text-green-500 shrink-0 mt-0.5">✓</span>{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                          <div className="text-xs font-bold text-yellow-800 mb-1">💡 UPSC Tip</div>
                          <p className="text-xs text-gray-700 leading-relaxed">{div.upscTip}</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                          <div className="text-xs font-bold text-amber-800 mb-1">📋 Remember This</div>
                          <p className="text-xs text-gray-700 leading-relaxed">{div.pyq}</p>
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
                <div className="text-sm font-bold text-red-900">East Coast vs West Coast — Complete Comparison</div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {title:'West Coast',color:'bg-blue-50',border:'border-blue-200',tc:'text-blue-900',points:[
                      'Length: ~1,500 km',
                      'Narrow — just 10-15 km wide in places',
                      'No major delta formations',
                      'Rich in lagoons and backwaters (Kayals)',
                      'Arabian Sea coast',
                      'Receives SW Monsoon first — heavy rainfall (1000-3000mm)',
                      'Major ports: Mumbai, Marmagoa, Kochi, Mangalore',
                      'States: Gujarat, Maharashtra, Goa, Karnataka, Kerala',
                      'Konkan, Kannad, Malabar divisions',
                    ]},
                    {title:'East Coast',color:'bg-green-50',border:'border-green-200',tc:'text-green-900',points:[
                      'Length: ~1,700 km',
                      'Broader — 80-100 km wide',
                      'Large deltas of Mahanadi, Godavari, Krishna, Cauvery',
                      'Sandy beaches — no major lagoons',
                      'Bay of Bengal coast',
                      'Gets NE Monsoon rain in Oct-Dec (Tamil Nadu)',
                      'Major ports: Chennai, Visakhapatnam, Paradip, Haldia',
                      'States: West Bengal, Odisha, AP, Tamil Nadu',
                      'Northern Circar and Coromandel divisions',
                    ]},
                  ].map(c=>(
                    <div key={c.title} className={`border-2 ${c.border} ${c.color} rounded-xl p-4`}>
                      <div className={`text-sm font-bold ${c.tc} mb-3`}>{c.title}</div>
                      <ul className="flex flex-col gap-1.5">
                        {c.points.map(p=>(
                          <li key={p} className="text-xs text-gray-700 flex gap-2 leading-relaxed">
                            <span className="shrink-0 mt-0.5 text-gray-400">→</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-purple-50 border-b border-purple-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-purple-500 rounded-full"></div>
                <div className="text-sm font-bold text-purple-900">Important Peaks, Passes & Extreme Points</div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs font-bold text-gray-700 mb-3">🏔️ Important Peaks</div>
                    <div className="flex flex-col gap-2">
                      {[
                        {peak:'Kangchenjunga',ht:'8,586m',loc:'India-Nepal · Highest in India'},
                        {peak:'K2 (Godwin-Austen)',ht:'8,611m',loc:'PoK · 2nd highest globally'},
                        {peak:'Nanda Devi',ht:'7,816m',loc:'Uttarakhand · Highest entirely in India'},
                        {peak:'Kamet',ht:'7,756m',loc:'Uttarakhand · 2nd highest in India'},
                        {peak:'Anamudi',ht:'2,695m',loc:'Kerala · Highest in South India'},
                        {peak:'Guru Shikhar',ht:'1,722m',loc:'Rajasthan · Highest in Aravalli'},
                        {peak:'Mahendragiri',ht:'1,501m',loc:'Odisha · Highest in Eastern Ghats'},
                      ].map(p=>(
                        <div key={p.peak} className="bg-blue-50 rounded-lg p-2.5">
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-semibold text-blue-800">{p.peak}</div>
                            <div className="text-xs font-bold text-blue-600">{p.ht}</div>
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">{p.loc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-700 mb-3">🚪 Key Mountain Passes</div>
                    <div className="flex flex-col gap-2">
                      {[
                        {pass:'Zoji La',loc:'J&K · Srinagar-Leh route'},
                        {pass:'Nathu La',loc:'Sikkim · India-China trade'},
                        {pass:'Banihal Pass',loc:'J&K · Jawahar Tunnel'},
                        {pass:'Bara Lacha La',loc:'Himachal · Manali-Leh'},
                        {pass:'Shipki La',loc:'Himachal · Sutlej enters India'},
                        {pass:'Rohtang Pass',loc:'Himachal · Atal Tunnel below'},
                        {pass:'Bomdi La',loc:'Arunachal · Tawang sector'},
                        {pass:'Lipulekh Pass',loc:'Uttarakhand · India-China-Nepal'},
                      ].map(p=>(
                        <div key={p.pass} className="bg-green-50 rounded-lg p-2.5">
                          <div className="text-xs font-semibold text-green-800">{p.pass}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{p.loc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-700 mb-3">📌 Extreme Points of India</div>
                    <div className="flex flex-col gap-2">
                      {[
                        {dir:'Northernmost',val:'Indira Col, Siachen, J&K'},
                        {dir:'Southernmost',val:'Indira Point, Great Nicobar'},
                        {dir:'Easternmost',val:'Kibithu, Arunachal Pradesh'},
                        {dir:'Westernmost',val:'Sir Creek, Gujarat'},
                        {dir:'Mainland south tip',val:'Cape Comorin, Kanyakumari'},
                        {dir:'Largest state area',val:'Rajasthan (342,239 sq km)'},
                        {dir:'Smallest state area',val:'Goa (3,702 sq km)'},
                        {dir:'Highest battlefield',val:'Siachen Glacier (~6,000m)'},
                      ].map(p=>(
                        <div key={p.dir} className="bg-amber-50 rounded-lg p-2.5">
                          <div className="text-xs font-semibold text-amber-800">{p.dir}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{p.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-teal-500 rounded-full"></div>
                <div className="text-sm font-bold text-teal-900">Current Affairs Connect — 2024-25</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  {title:'Glacial Lake Outburst Floods (GLOFs)',tag:'Environment',detail:'Himalayas are losing glaciers due to climate change. GLOFs — sudden floods when glacial lakes burst — are increasing. Kedarnath (2013) and Chamoli (2021) disasters were linked to glacial phenomena. Uttarakhand, Himachal and Sikkim are most vulnerable.'},
                  {title:'Indira Point submergence concern',tag:'Climate Change',detail:'India\'s southernmost point on Great Nicobar Island has been partially submerged since the 2004 tsunami. Rising sea levels threaten further submergence. India is planning major infrastructure development in Nicobar Islands (Great Nicobar Project).'},
                  {title:'Aravalli protection by Supreme Court',tag:'Ecology',detail:'The Aravalli range — one of world\'s oldest mountains (600 million years old) — faces severe degradation in NCR. SC has issued multiple orders to protect Aravalli forests. The range acts as a crucial barrier against Thar Desert encroachment into Delhi.'},
                  {title:'Siachen — strategic importance',tag:'Strategic Geo',detail:'At ~6,000m elevation, Siachen is the world\'s highest battlefield. India has maintained military presence since Operation Meghdoot (1984). Glacial melt threatens freshwater supply to Indus river system downstream in Pakistan and India.'},
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

        {activeTab==='visual' && (
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">India — Physiographic Divisions (Schematic Map)</div>
            <div className="text-xs text-gray-400 mb-5">A simplified north-to-south layout of India's 6 major physiographic divisions</div>
            <div className="flex gap-6">
              <div className="flex-1">
                <svg viewBox="0 0 340 520" width="100%" style={{maxWidth:'340px'}}>
                  <rect x="80" y="10" width="180" height="80" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
                  <text x="170" y="40" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">Himalayan Mountains</text>
                  <text x="170" y="56" textAnchor="middle" fontSize="9" fill="#3b82f6">Greater · Lesser · Outer Himalayas</text>
                  <text x="170" y="70" textAnchor="middle" fontSize="9" fill="#3b82f6">2,500 km long · up to 8,586m high</text>
                  <text x="170" y="84" textAnchor="middle" fontSize="8" fill="#93c5fd">Kangchenjunga · K2 · Nanda Devi</text>
                  <line x1="170" y1="90" x2="170" y2="110" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <rect x="50" y="110" width="240" height="70" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
                  <text x="170" y="138" textAnchor="middle" fontSize="12" fontWeight="700" fill="#92400e">Northern Plains</text>
                  <text x="170" y="154" textAnchor="middle" fontSize="9" fill="#b45309">Punjab · Ganga · Brahmaputra Plains</text>
                  <text x="170" y="168" textAnchor="middle" fontSize="9" fill="#b45309">7 lakh sq km · Most fertile region</text>
                  <text x="170" y="182" textAnchor="middle" fontSize="8" fill="#d97706">Bhabar → Terai → Bhangar → Khadar</text>
                  <line x1="100" y1="180" x2="60" y2="210" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <line x1="230" y1="180" x2="230" y2="205" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <rect x="10" y="210" width="90" height="80" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
                  <text x="55" y="242" textAnchor="middle" fontSize="10" fontWeight="700" fill="#713f12">Thar</text>
                  <text x="55" y="256" textAnchor="middle" fontSize="9" fill="#92400e">Desert</text>
                  <text x="55" y="270" textAnchor="middle" fontSize="8" fill="#a16207">Rajasthan</text>
                  <text x="55" y="283" textAnchor="middle" fontSize="8" fill="#a16207">&lt;150mm rain</text>
                  <rect x="110" y="205" width="200" height="110" rx="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2"/>
                  <text x="210" y="248" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c2d12">Peninsular Plateau</text>
                  <text x="210" y="264" textAnchor="middle" fontSize="9" fill="#9a3412">Deccan · Central Highlands</text>
                  <text x="210" y="278" textAnchor="middle" fontSize="9" fill="#9a3412">W.Ghats · E.Ghats boundaries</text>
                  <text x="210" y="292" textAnchor="middle" fontSize="8" fill="#c2410c">Oldest landmass · Mineral rich</text>
                  <text x="210" y="306" textAnchor="middle" fontSize="8" fill="#c2410c">Anamudi 2695m · Mahendragiri 1501m</text>
                  <line x1="55" y1="290" x2="55" y2="360" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <line x1="295" y1="315" x2="295" y2="360" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <rect x="10" y="360" width="80" height="110" rx="10" fill="#cffafe" stroke="#0891b2" strokeWidth="2"/>
                  <text x="50" y="390" textAnchor="middle" fontSize="10" fontWeight="700" fill="#164e63">West</text>
                  <text x="50" y="404" textAnchor="middle" fontSize="10" fontWeight="700" fill="#164e63">Coast</text>
                  <text x="50" y="420" textAnchor="middle" fontSize="8" fill="#0e7490">1,500 km</text>
                  <text x="50" y="433" textAnchor="middle" fontSize="8" fill="#0e7490">Narrow</text>
                  <text x="50" y="446" textAnchor="middle" fontSize="8" fill="#0e7490">Kayals/Lagoons</text>
                  <text x="50" y="459" textAnchor="middle" fontSize="8" fill="#0e7490">Heavy rain</text>
                  <rect x="250" y="360" width="80" height="110" rx="10" fill="#dcfce7" stroke="#059669" strokeWidth="2"/>
                  <text x="290" y="390" textAnchor="middle" fontSize="10" fontWeight="700" fill="#064e3b">East</text>
                  <text x="290" y="404" textAnchor="middle" fontSize="10" fontWeight="700" fill="#064e3b">Coast</text>
                  <text x="290" y="420" textAnchor="middle" fontSize="8" fill="#065f46">1,700 km</text>
                  <text x="290" y="433" textAnchor="middle" fontSize="8" fill="#065f46">Broader</text>
                  <text x="290" y="446" textAnchor="middle" fontSize="8" fill="#065f46">Deltas</text>
                  <text x="290" y="459" textAnchor="middle" fontSize="8" fill="#065f46">NE Monsoon</text>
                  <rect x="110" y="480" width="120" height="32" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
                  <text x="170" y="497" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4c1d95">Islands</text>
                  <text x="170" y="509" textAnchor="middle" fontSize="8" fill="#6d28d9">A&N (volcanic) · Lakshadweep (coral)</text>
                </svg>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-xs font-bold text-gray-700 mb-1">Map Legend</div>
                {[
                  {color:'#dbeafe',border:'#2563eb',name:'Himalayan Mountains',note:'Youngest · Folded · Still rising · 8,586m'},
                  {color:'#fef3c7',border:'#d97706',name:'Northern Plains',note:'Alluvial · Most fertile · Densest population'},
                  {color:'#fef9c3',border:'#ca8a04',name:'Thar Desert',note:'9th largest hot desert · Shifting sand dunes'},
                  {color:'#ffedd5',border:'#ea580c',name:'Peninsular Plateau',note:'Oldest landmass · Hard rock · Mineral rich'},
                  {color:'#cffafe',border:'#0891b2',name:'West Coast',note:'Narrow · Lagoons · Very heavy rainfall'},
                  {color:'#dcfce7',border:'#059669',name:'East Coast',note:'Wider · Deltas · NE Monsoon rainfall'},
                  {color:'#ede9fe',border:'#7c3aed',name:'Islands',note:'A&N = volcanic · Lakshadweep = coral'},
                ].map(l=>(
                  <div key={l.name} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded shrink-0" style={{background:l.color,border:`2px solid ${l.border}`}}></div>
                    <div>
                      <div className="text-xs font-semibold text-gray-800">{l.name}</div>
                      <div className="text-xs text-gray-500">{l.note}</div>
                    </div>
                  </div>
                ))}
                <div className="mt-3 bg-red-50 border border-red-200 rounded-xl p-3">
                  <div className="text-xs font-bold text-red-800 mb-2">⚠️ Common Exam Mistakes</div>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      'K2 is NOT in India — it\'s in Pakistan-administered Kashmir',
                      'Indira Point is southernmost of India, not mainland India',
                      'Lakshadweep is coral origin, NOT volcanic origin',
                      'Western Ghats are continuous, Eastern Ghats are discontinuous',
                      'Kangchenjunga (not Everest) is highest peak IN India',
                    ].map(m=>(
                      <li key={m} className="text-xs text-gray-700 flex gap-1.5 leading-relaxed">
                        <span className="text-red-400 shrink-0 mt-0.5">!</span>{m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab==='pyq' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions — Physical Features</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2023 Prelims',q:'Which of the following statements about the Western Ghats is correct? They are a continuous range unlike the Eastern Ghats. The highest peak is Anamudi (2,695m) in Kerala.'},
                {year:'2021 Prelims',q:'With reference to the Himalayan rivers, which of the following are Antecedent rivers that predate the Himalayas?'},
                {year:'2019 Prelims',q:'Consider the following statements about Lakshadweep Islands: 1. They are of volcanic origin. 2. They have no perennial rivers. Which statement is correct?'},
                {year:'2018 Mains GS-I',q:'How do the Himalayan mountains act as a climatic divide? Explain their role in the Indian monsoon system.'},
                {year:'2017 Prelims',q:'The Bhabar belt in India is found between which two geographical features?'},
                {year:'2016 Prelims',q:'The term Bhangar in context of Indian geography refers to which of the following?'},
                {year:'2014 Mains GS-I',q:'Describe the formation of the Deccan Plateau. How does it differ geologically from the Himalayan range?'},
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
                <div className="text-5xl mb-4">🗺️</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Physical Features of India</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions · Instant explanations</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-green-600 text-white px-10 py-3 rounded-xl font-medium text-sm hover:bg-green-700">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500 shrink-0">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-green-500 rounded-full transition-all" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-green-600 shrink-0">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5 leading-relaxed">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quiz[currentQ].options.map((opt,i)=>(
                    <button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-green-400 hover:bg-green-50 cursor-pointer':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}>
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
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700">
                      {currentQ<quiz.length-1?'Next Question →':'See Results →'}
                    </button>
                  </>
                )}
              </div>
            ):(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">{score>=4?'🏆':score>=3?'👍':'📚'}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">You scored {score} / {quiz.length}</div>
                <div className="text-sm text-gray-500 mb-8">{score===5?'Perfect! Outstanding geography knowledge!':score>=3?'Good effort! Review the notes.':'Keep studying! Geography needs revision.'}</div>
                <div className="flex gap-3 justify-center">
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-green-600 text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-green-700">Try Again</button>
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
                {q:'Glacial Lake Outburst Floods (GLOFs) — causes, affected Himalayan regions and disaster management measures',prob:90},
                {q:'Western Ghats as a biodiversity hotspot — ecological significance and threats from infrastructure projects',prob:85},
                {q:'Siachen glacier — strategic importance, environmental concerns and freshwater security implications',prob:78},
                {q:'Coastal erosion along Indian coastline — causes, affected states and management strategies',prob:72},
                {q:'The Thar Desert ecology — Indira Gandhi Canal impact and desertification concerns in Rajasthan',prob:65},
              ].map((pred,i)=>(
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-green-200 text-green-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-green-100 rounded-full"><div className="h-2 bg-green-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                        <span className="text-xs font-bold text-green-700">{pred.prob}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <div className="text-sm text-gray-300">← Previous</div>
          <div className="text-xs text-gray-400">Topic 1 of 20</div>
          <a href="/subjects/geography/2" className="text-sm text-green-600 hover:text-green-700">Himalayan Ranges →</a>
        </div>
      </div>
    </div>
  )
}