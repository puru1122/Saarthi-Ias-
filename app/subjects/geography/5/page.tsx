'use client'
import { useState } from 'react'
export default function HimalayanRiversPage() {
  const [activeTab, setActiveTab] = useState('notes')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const quiz = [
    {q:'Which river is known as the "Sorrow of Bihar"?',options:['Ganga','Yamuna','Kosi','Gandak'],correct:2,exp:'The Kosi river is called the "Sorrow of Bihar" because it frequently changes its course (shifted 120 km westward in 200 years) causing devastating floods in Bihar. It originates in Nepal and carries huge sediment load.'},
    {q:'The Brahmaputra river enters India through which state?',options:['Sikkim','West Bengal','Arunachal Pradesh','Assam'],correct:2,exp:'The Brahmaputra enters India through Arunachal Pradesh as the Dihang/Siang river after making a dramatic U-turn around the Namcha Barwa peak (7,756m). It then flows through Assam where it is called Brahmaputra.'},
    {q:'Which two rivers are called "antecedent rivers"?',options:['Ganga and Yamuna','Indus and Brahmaputra','Kosi and Gandak','Chambal and Betwa'],correct:1,exp:'Indus and Brahmaputra are classic antecedent rivers — they predate the Himalayas. As the mountains rose, these rivers maintained their original courses by cutting deep gorges. The Indus gorge near Gilgit is deeper than the Grand Canyon.'},
    {q:'The Sundarbans delta is formed by which rivers?',options:['Ganga only','Brahmaputra only','Ganga and Brahmaputra together','Mahanadi and Godavari'],correct:2,exp:'The Sundarbans mangrove delta — world\'s largest delta — is formed by the combined delta of the Ganga and Brahmaputra rivers in West Bengal and Bangladesh. The Ganga is called Padma in Bangladesh.'},
    {q:'Which river originates from the Yamunotri glacier?',options:['Ganga','Yamuna','Sutlej','Beas'],correct:1,exp:'The Yamuna originates from the Yamunotri glacier in Uttarakhand at an altitude of 6,387m. It is the largest tributary of the Ganga. The Ganga originates from Gangotri glacier (Bhagirathi).'},
  ]
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 5</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Rivers — Himalayan System</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Indus · Ganga · Brahmaputra</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: Every year</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'3 systems',l:'Indus·Ganga·Brahmaputra'},{v:'Antecedent',l:'Older than Himalayas'},{v:'Perennial',l:'Fed by glaciers'},{v:'World\'s largest',l:'Sundarban delta'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'diagram',label:'📐 Diagram'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-blue-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes' && (
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-blue-700 to-cyan-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Himalayan River Systems</div>
              <p className="text-sm leading-relaxed text-blue-100 mb-4">The Himalayan rivers are among the most powerful and important river systems on earth. Unlike peninsular rivers which dry up in summer, Himalayan rivers are <strong>perennial</strong> — they flow throughout the year because they are fed by both monsoon rains AND glacier meltwater. They are also <strong>antecedent</strong> — older than the Himalayas themselves — which is why they cut through mountains in dramatic gorges.</p>
              <div className="grid grid-cols-3 gap-3">
                {[{v:'Indus System',l:'NW India · Pakistan'},{v:'Ganga System',l:'Central India · Bengal'},{v:'Brahmaputra',l:'NE India · Bangladesh'}].map(s=>(
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
                <div className="text-sm font-bold text-blue-900">The Three Major Himalayan River Systems</div>
              </div>
              <div className="p-5 flex flex-col gap-5">
                {[
                  {name:'1. The Indus River System',color:'bg-purple-50 border-purple-200',tc:'text-purple-900',hc:'bg-purple-700',
                    intro:'The Indus (Sindhu) is one of the world\'s longest rivers (3,180 km total) and one of the great rivers of human civilization — the Indus Valley Civilization was born on its banks. It originates from the Tibetan plateau near Mansarovar Lake at 5,182m elevation and flows northwest through Ladakh, then enters Pakistan.',
                    tributaries:[
                      {name:'Jhelum',origin:'Verinag Spring, Kashmir',length:'725 km',note:'Famous for the Battle of Hydaspes (Alexander vs Porus 326 BC)'},
                      {name:'Chenab',origin:'Bara Lacha La, Himachal',length:'960 km',note:'Largest tributary of Indus in terms of water volume'},
                      {name:'Ravi',origin:'Rohtang Pass, Himachal',length:'725 km',note:'Flows past Lahore · India-Pakistan water sharing under Indus Waters Treaty'},
                      {name:'Beas',origin:'Rohtang Pass, Himachal',length:'470 km',note:'Only major Indus tributary entirely within India · Beas Project'},
                      {name:'Sutlej',origin:'Rakshastal Lake, Tibet',length:'1,450 km',note:'Enters India through Shipki La · Bhakra Nangal dam · Critical for Punjab irrigation'},
                    ],
                    keyFact:'The Indus Waters Treaty (1960) between India and Pakistan — brokered by World Bank — allocated eastern rivers (Ravi, Beas, Sutlej) to India and western rivers (Indus, Jhelum, Chenab) to Pakistan.',
                    current:'India threatened to abrogate Indus Waters Treaty after Pulwama attack (2019). Calls to renegotiate treaty as India needs more water for Jammu & Kashmir development. Kishanganga and Ratle hydroelectric projects disputed by Pakistan.'},
                  {name:'2. The Ganga River System',color:'bg-blue-50 border-blue-200',tc:'text-blue-900',hc:'bg-blue-700',
                    intro:'The Ganga (2,525 km) is the longest river entirely within India and the most sacred river in Hinduism. It originates from the Gangotri glacier (Bhagirathi) in Uttarakhand, joins with Alaknanda at Devprayag to form the Ganga proper. After flowing through the most densely populated plains on earth, it forms the world\'s largest delta — the Sundarbans — before entering the Bay of Bengal.',
                    tributaries:[
                      {name:'Yamuna',origin:'Yamunotri glacier, Uttarakhand',length:'1,376 km',note:'Largest tributary of Ganga · Delhi and Agra on its banks · Taj Mahal on Yamuna'},
                      {name:'Ghaghara',origin:'Mapchachungo glacier, Tibet',length:'1,080 km',note:'Largest tributary by volume · Flows through Nepal and Bihar'},
                      {name:'Gandak',origin:'Nepal Himalayas',length:'630 km',note:'Nepal calls it Narayani · Important for Bihar-UP irrigation'},
                      {name:'Kosi',origin:'Nepal Himalayas',length:'720 km',note:'"Sorrow of Bihar" · Shifts course frequently · Causes devastating floods'},
                      {name:'Son',origin:'Amarkantak, MP',length:'784 km',note:'Major right bank tributary · Originates from Peninsular India'},
                      {name:'Chambal',origin:'Vindyachal range, MP',length:'960 km',note:'Ravines of Chambal famous · Joins Yamuna · Pristine water quality'},
                    ],
                    keyFact:'The Ganga is declared India\'s National River (2008). Namami Gange programme (2014) with Rs. 20,000 crore aims to clean and rejuvenate it. The river supports 40% of India\'s population.',
                    current:'Ganga dolphin — National Aquatic Animal — population increasing in upper Ganga. BOD levels still very high near Varanasi and Patna. Zero liquid discharge norms for industries on Ganga banks.'},
                  {name:'3. The Brahmaputra River System',color:'bg-teal-50 border-teal-200',tc:'text-teal-900',hc:'bg-teal-700',
                    intro:'The Brahmaputra is one of the world\'s largest rivers by discharge volume. It originates in Tibet as the Tsangpo (meaning "the purifier") near Mansarovar Lake. After flowing 1,800 km eastward through Tibet, it takes a dramatic U-turn around Namcha Barwa peak and enters Arunachal Pradesh as the Dihang/Siang. In Assam, it is the Brahmaputra — a braided river forming islands (chars).',
                    tributaries:[
                      {name:'Subansiri',origin:'Tibet/Arunachal border',length:'442 km',note:'Gold-bearing river · "Gold River" in local language · Hydropower potential'},
                      {name:'Manas',origin:'Bhutan Himalayas',length:'376 km',note:'UNESCO World Heritage Site · Flows through Manas NP · Tiger Reserve'},
                      {name:'Teesta',origin:'Sikkim Himalayas',length:'315 km',note:'India-Bangladesh water sharing dispute · Originates from Zemu glacier'},
                      {name:'Lohit',origin:'Tibet',length:'200 km (in India)',note:'Joins Brahmaputra in Assam · Forms northeastern boundary'},
                      {name:'Dibang',origin:'Tibet/Arunachal',length:'200 km (in India)',note:'Extreme flow velocity · Contested region with China'},
                    ],
                    keyFact:'The Brahmaputra carries the highest silt load of any major river. Its valley in Assam is prone to severe annual floods. It has the highest potential for hydropower in India — but most remains untapped due to seismic risks.',
                    current:'China has built multiple dams on Tsangpo in Tibet including Motuo mega dam. India concerned about China\'s ability to release floodwaters suddenly or block flow. Brahmaputra water sharing — no treaty exists between India and China.'},
                ].map(sys=>(
                  <div key={sys.name} className={`border-2 ${sys.color} rounded-2xl overflow-hidden`}>
                    <div className={`${sys.hc} text-white px-5 py-3`}>
                      <div className="font-bold text-sm text-white">{sys.name}</div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">{sys.intro}</p>
                      <div className="text-xs font-bold text-gray-700 mb-2">Key Tributaries</div>
                      <div className="flex flex-col gap-2 mb-4">
                        {sys.tributaries.map(t=>(
                          <div key={t.name} className="bg-white border border-gray-100 rounded-xl p-3 grid grid-cols-4 gap-2">
                            <div>
                              <div className="text-xs font-bold text-gray-800">{t.name}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{t.length}</div>
                            </div>
                            <div className="col-span-1">
                              <div className="text-xs text-gray-500">Origin:</div>
                              <div className="text-xs text-gray-700">{t.origin}</div>
                            </div>
                            <div className="col-span-2">
                              <div className="text-xs text-gray-600 italic">{t.note}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                          <div className="text-xs font-bold text-yellow-800 mb-1">💡 Key Fact</div>
                          <p className="text-xs text-gray-700 leading-relaxed">{sys.keyFact}</p>
                        </div>
                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-3">
                          <div className="text-xs font-bold text-teal-800 mb-1">📰 Current Affairs</div>
                          <p className="text-xs text-gray-700 leading-relaxed">{sys.current}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab==='diagram' && (
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">Himalayan River Systems — Flow Diagram</div>
            <svg viewBox="0 0 700 400" width="100%">
              <rect width="700" height="400" fill="#f0f9ff" rx="12"/>
              <rect x="10" y="10" width="680" height="60" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="350" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">HIMALAYAN RANGES — Origin of all three river systems</text>
              <text x="350" y="55" textAnchor="middle" fontSize="9" fill="#3b82f6">Mansarovar Lake (Tibet) → Indus + Brahmaputra origins | Gangotri glacier → Ganga origin</text>
              <rect x="10" y="90" width="200" height="200" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
              <text x="110" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4c1d95">INDUS SYSTEM</text>
              <text x="110" y="130" textAnchor="middle" fontSize="9" fill="#7c3aed">Origin: Mansarovar, Tibet</text>
              {['Jhelum (725km)','Chenab (960km)','Ravi (725km)','Beas (470km)','Sutlej (1450km)'].map((t,i)=>(
                <g key={t}>
                  <rect x="25" y={148+i*28} width="170" height="22" rx="4" fill="#f5f3ff" stroke="#a78bfa" strokeWidth="1"/>
                  <text x="110" y={163+i*28} textAnchor="middle" fontSize="9" fill="#5b21b6">{t}</text>
                </g>
              ))}
              <text x="110" y="295" textAnchor="middle" fontSize="9" fill="#7c3aed">→ Arabian Sea</text>
              <rect x="230" y="90" width="240" height="250" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="350" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e40af">GANGA SYSTEM</text>
              <text x="350" y="130" textAnchor="middle" fontSize="9" fill="#3b82f6">Origin: Gangotri glacier → Bhagirathi</text>
              {['Yamuna (1376km) — Largest trib','Ghaghara (1080km) — from Nepal','Gandak (630km) — Nepal','Kosi (720km) — Sorrow of Bihar','Son (784km) — Peninsular','Chambal (960km) — Pristine water'].map((t,i)=>(
                <g key={t}>
                  <rect x="242" y={148+i*28} width="216" height="22" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1"/>
                  <text x="350" y={163+i*28} textAnchor="middle" fontSize="9" fill="#1d4ed8">{t}</text>
                </g>
              ))}
              <text x="350" y="345" textAnchor="middle" fontSize="9" fill="#2563eb">→ Sundarbans Delta → Bay of Bengal</text>
              <rect x="490" y="90" width="200" height="200" rx="8" fill="#ccfbf1" stroke="#059669" strokeWidth="1.5"/>
              <text x="590" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="#065f46">BRAHMAPUTRA</text>
              <text x="590" y="130" textAnchor="middle" fontSize="9" fill="#059669">Tsangpo → Dihang → Brahmaputra</text>
              {['Subansiri (442km) — Gold River','Manas (376km) — UNESCO WH','Teesta (315km) — Sikkim','Lohit (200km) — NE border','Dibang (200km) — Arunachal'].map((t,i)=>(
                <g key={t}>
                  <rect x="503" y={148+i*28} width="174" height="22" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
                  <text x="590" y={163+i*28} textAnchor="middle" fontSize="9" fill="#14532d">{t}</text>
                </g>
              ))}
              <text x="590" y="295" textAnchor="middle" fontSize="9" fill="#059669">→ Meghna → Bay of Bengal</text>
              <rect x="150" y="360" width="400" height="30" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
              <text x="350" y="380" textAnchor="middle" fontSize="10" fontWeight="600" fill="#92400e">All three systems meet → Bay of Bengal (Ganga + Brahmaputra form world's largest delta)</text>
            </svg>
          </div>
        )}
        {activeTab==='pyq' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2023 Prelims',q:'With reference to the Indus Waters Treaty, which rivers were allocated to India?'},
                {year:'2021 Mains GS-I',q:'The Himalayan rivers are perennial while the peninsular rivers are seasonal. Explain why.'},
                {year:'2019 Prelims',q:'Which of the following rivers originates from the Mansarovar lake region?'},
                {year:'2018 Prelims',q:'The Kosi river is known as the "Sorrow of Bihar". Explain the reason.'},
                {year:'2016 Mains GS-I',q:'Discuss the environmental and geopolitical implications of China\'s dam construction on the Brahmaputra (Tsangpo).'},
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
                <div className="text-5xl mb-4">🌊</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Himalayan Rivers</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-blue-700 text-white px-10 py-3 rounded-xl font-medium text-sm hover:bg-blue-800">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500 shrink-0">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-blue-600 rounded-full transition-all" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-blue-700 shrink-0">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
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
                      <div className="text-sm text-gray-700">{quiz[currentQ].exp}</div>
                    </div>
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-800">
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
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-blue-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button>
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
                {q:'China\'s Motuo mega-dam on Tsangpo — implications for India\'s water security, flood risk and downstream impact',prob:92},
                {q:'Indus Waters Treaty — need for renegotiation in context of climate change and India\'s water needs in J&K',prob:88},
                {q:'Inter-linking of rivers — National River Linking Project — benefits, challenges, ecological impact',prob:82},
                {q:'Teesta river water sharing between India and Bangladesh — diplomatic and hydrological dimensions',prob:75},
              ].map((pred,i)=>(
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
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
          <a href="/subjects/geography/4" className="text-sm text-green-600">← Peninsular Plateau</a>
          <div className="text-xs text-gray-400">Topic 5 of 20</div>
          <a href="/subjects/geography/6" className="text-sm text-green-600">Peninsular Rivers →</a>
        </div>
      </div>
    </div>
  )
}