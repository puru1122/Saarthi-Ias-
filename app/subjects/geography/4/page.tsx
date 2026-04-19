'use client'
import { useState } from 'react'
export default function PeninsularPlateauPage() {
  const [activeTab, setActiveTab] = useState('notes')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const quiz = [
    {q:'The Deccan Plateau is a part of which ancient landmass?',options:['Laurasia','Gondwana','Pangaea','Tethys'],correct:1,exp:'The Deccan Plateau is a part of the ancient Gondwana landmass that broke up ~150 million years ago. It is one of the oldest and most stable geological formations on earth, made of hard crystalline rocks.'},
    {q:'The Western Ghats are known by which other name?',options:['Sahyadri','Vindhya','Satpura','Aravalli'],correct:0,exp:'The Western Ghats are also known as Sahyadri. They run parallel to the western coast of India and act as a barrier to the SW monsoon — causing heavy rainfall on the western (windward) side and creating a rain shadow on the eastern side.'},
    {q:'Which is the highest peak of the Western Ghats?',options:['Doddabetta','Anamudi','Guru Shikhar','Mahendragiri'],correct:1,exp:'Anamudi (2,695m) in Kerala is the highest peak of the Western Ghats and also the highest peak in peninsular India. Doddabetta (2,637m) is the highest peak of the Nilgiri hills. Guru Shikhar is in Aravalli.'},
    {q:'The Eastern Ghats are different from Western Ghats in that they are:',options:['Higher in elevation','Continuous range','Discontinuous and cut by rivers','Located along western coast'],correct:2,exp:'The Eastern Ghats are discontinuous — they are cut through by east-flowing rivers like Mahanadi, Godavari, Krishna and Cauvery. They are lower in elevation (avg 600m) compared to Western Ghats (avg 900m).'},
    {q:'The black cotton soil (Regur) of the Deccan Plateau is formed from:',options:['Granite rocks','Alluvial deposits','Volcanic basalt (Deccan Traps)','Sandstone'],correct:2,exp:'Regur (black cotton soil) is formed from the weathering of volcanic basalt rocks of the Deccan Traps — volcanic lava flows that occurred ~65 million years ago. It has high clay content and retains moisture well — ideal for cotton cultivation.'},
  ]
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
          <a href="/gk" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-pink-400"></span>GK infographics</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 4</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400 hover:text-gray-600">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Peninsular Plateau</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Oldest landmass · Mineral rich</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018, 2015</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'16 lakh km²',l:'Area'},{v:'600-900m',l:'Avg elevation'},{v:'Gondwana',l:'Origin'},{v:'600 million yrs',l:'Age'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'diagram',label:'📐 Diagram'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-orange-600 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes' && (
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-orange-700 to-red-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-orange-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">The Peninsular Plateau — Ancient Heart of India</div>
              <p className="text-sm leading-relaxed text-orange-100 mb-4">The Peninsular Plateau is literally the oldest piece of land in India — a fragment of the ancient Gondwana supercontinent that existed 250 million years ago. While the Himalayas were being born just 50 million years ago, the Deccan was already ancient. Made of hard igneous and metamorphic rocks, it is geologically stable, rich in minerals, and has shaped the drainage pattern, culture and economy of peninsular India.</p>
              <div className="grid grid-cols-3 gap-3">
                {[{v:'Deccan Plateau',l:'Main division'},{v:'Western Ghats',l:'Western boundary'},{v:'Eastern Ghats',l:'Eastern boundary'}].map(s=>(
                  <div key={s.l} className="bg-orange-700 border border-orange-600 rounded-xl p-3 text-center">
                    <div className="text-sm font-bold text-white">{s.v}</div>
                    <div className="text-xs text-orange-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-orange-50 border-b border-orange-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-orange-500 rounded-full"></div>
                <div className="text-sm font-bold text-orange-900">Major Divisions of the Peninsular Plateau</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {name:'Central Highlands',color:'bg-amber-50 border-amber-200',tc:'text-amber-900',detail:'North of the Narmada river. Includes Malwa Plateau, Bundelkhand, Baghelkhand. Slopes northward — rivers drain into Ganga. Vindhya and Satpura ranges are key features. The Satpura range is the watershed between Narmada (south) and Son (north). Malwa Plateau has black soil — wheat and soybean growing.',features:['Malwa Plateau: Wheat, soybean · MP and Rajasthan','Bundelkhand: Hard crystalline rocks · Drought-prone','Baghelkhand: Coal and bauxite deposits · Jharkhand border','Vindhya Range: Separates Ganga plains from Deccan','Satpura Range: Source of Narmada and Tapti rivers']},
                  {name:'Deccan Plateau',color:'bg-orange-50 border-orange-200',tc:'text-orange-900',detail:'South of Narmada. The classic triangular Deccan Plateau bounded by Western Ghats (west), Eastern Ghats (east), and Satpura-Vindhya (north). Covered by Deccan Traps (volcanic basalt) — black cotton soil (Regur). Tilts eastward — most rivers flow west to east. Average elevation 500-600m.',features:['Deccan Traps: Volcanic basalt covers 500,000 sq km','Black cotton soil (Regur): Forms from basalt weathering','Tilts eastward: Godavari, Krishna, Cauvery flow east','Maharashtra, Karnataka, Telangana, AP divisions','Rich minerals: Iron ore, coal, manganese, limestone']},
                  {name:'Western Ghats (Sahyadri)',color:'bg-green-50 border-green-200',tc:'text-green-900',detail:'Continuous range running 1,600 km from Gujarat-Maharashtra border to Kanyakumari. Average elevation 900-1,600m. Acts as watershed — receives heavy SW monsoon rain on western side, creates rain shadow on eastern side. UNESCO World Heritage Site — biodiversity hotspot.',features:['Highest peak: Anamudi (2,695m) in Kerala','Average elevation: 900-1,600m','Continuous — not cut by rivers (unlike Eastern Ghats)','Receives 2,000-6,000mm annual rainfall (windward)','Biodiversity: 5,000+ plant species, 139 mammal species','Important gaps: Thal, Bhor, Pal, Bhorghat (routes used)','Famous hills: Nilgiris, Cardamom, Anamalai']},
                  {name:'Eastern Ghats',color:'bg-blue-50 border-blue-200',tc:'text-blue-900',detail:'Discontinuous range along eastern coast. Cut through by major peninsular rivers (Mahanadi, Godavari, Krishna, Cauvery). Lower than Western Ghats — average 600m. Less rainfall — in rain shadow of Western Ghats.',features:['Highest peak: Mahendragiri (1,501m) in Odisha','Average elevation: 600m — lower than W.Ghats','Discontinuous — cut by east-flowing rivers','Receives less rainfall — 1,000-1,500mm','Nallamala, Javadi, Shevaroy, Biligirirangan hills','Tribes: Kondhs, Savaras, Bondas inhabit these hills']},
                ].map(d=>(
                  <div key={d.name} className={`border-2 ${d.color} rounded-xl p-4`}>
                    <div className={`text-sm font-bold ${d.tc} mb-2`}>{d.name}</div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{d.detail}</p>
                    <div className="bg-white rounded-xl p-3 border border-gray-100">
                      <div className="text-xs font-bold text-gray-700 mb-2">Key Facts</div>
                      <ul className="flex flex-col gap-1">
                        {d.features.map(f=><li key={f} className="text-xs text-gray-600 flex gap-2"><span className="text-green-500 shrink-0">✓</span>{f}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-red-500 rounded-full"></div>
                <div className="text-sm font-bold text-red-900">Mineral Wealth of the Plateau — India's Resource Heartland</div>
              </div>
              <div className="p-5 grid grid-cols-3 gap-3">
                {[
                  {mineral:'Iron Ore',states:'Jharkhand, Odisha, Chhattisgarh, Goa',grade:'Magnetite & Haematite — high grade','belt':'Singhbhum-Keonjhar-Bonai belt · World class deposits'},
                  {mineral:'Coal',states:'Jharkhand, WB, MP, Chhattisgarh, Odisha',grade:'Gondwana coal — 98% of India\'s reserves','belt':'Damodar Valley, Mahanadi basin, Son Valley'},
                  {mineral:'Manganese',states:'Odisha, Karnataka, MP, Goa',grade:'India is 4th largest producer globally','belt':'Odisha-MP belt most important'},
                  {mineral:'Mica',states:'Jharkhand, Rajasthan, AP, Telangana',grade:'India produces 80% of world\'s mica','belt':'Hazaribagh-Nellore mica belt'},
                  {mineral:'Bauxite',states:'Odisha, Jharkhand, MP, Chhattisgarh',grade:'Aluminium ore — large deposits','belt':'Eastern Ghats and Vindhyan belt'},
                  {mineral:'Copper',states:'Jharkhand, Rajasthan, MP',grade:'Low domestic production vs demand','belt':'Singhbhum copper belt (Jharkhand) most important'},
                ].map(m=>(
                  <div key={m.mineral} className="bg-red-50 border border-red-100 rounded-xl p-3">
                    <div className="text-xs font-bold text-red-900 mb-1">{m.mineral}</div>
                    <div className="text-xs text-gray-600 mb-1"><span className="font-semibold">States: </span>{m.states}</div>
                    <div className="text-xs text-gray-600 mb-1">{m.grade}</div>
                    <div className="text-xs text-gray-500 italic">{m.belt}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-teal-500 rounded-full"></div>
                <div className="text-sm font-bold text-teal-900">Current Affairs 2024-25</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  {title:'Western Ghats Kasturirangan Report',tag:'Environment',detail:'Kasturirangan Committee identified 56,825 sq km as Ecologically Sensitive Area (ESA) in Western Ghats. States (Kerala, Karnataka, Goa) resisting implementation — concerns about restrictions on development and mining. Supreme Court involved.'},
                  {title:'Deccan Plateau Mining Issues',tag:'Mining',detail:'Iron ore mining in Odisha-Jharkhand belt faces environmental vs development conflict. SC ordered mine closures in Goa (2012). Tribal land rights vs mining companies — PESA Act 1996 and Forest Rights Act 2006 central to debate.'},
                  {title:'Narmada river dispute resolution',tag:'Water',detail:'Narmada Water Disputes Tribunal (1979) allocated river waters among MP, Gujarat, Maharashtra, Rajasthan. Sardar Sarovar dam height raised repeatedly — displaced lakhs of tribals. Medha Patkar\'s Narmada Bachao Andolan.'},
                  {title:'Eastern Ghats tribal development',tag:'Tribal',detail:'PVTG (Particularly Vulnerable Tribal Groups) like Bondas and Kondhs in Eastern Ghats — PM JANMAN scheme (2023) targeting 75 PVTGs. Road connectivity, healthcare, education in remote Ghats regions being prioritized.'},
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
            <div className="text-sm font-semibold text-gray-900 mb-4">Peninsular Plateau — Cross Section West to East</div>
            <svg viewBox="0 0 700 260" width="100%">
              <rect width="700" height="260" fill="#f8fafc" rx="12"/>
              <polygon points="0,200 0,100 80,80 120,60 150,50 180,55 200,70 200,200" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2"/>
              <text x="100" y="110" textAnchor="middle" fontSize="10" fontWeight="700" fill="#14532d">Western</text>
              <text x="100" y="123" textAnchor="middle" fontSize="10" fontWeight="700" fill="#14532d">Ghats</text>
              <text x="100" y="136" textAnchor="middle" fontSize="8" fill="#15803d">Sahyadri</text>
              <text x="100" y="148" textAnchor="middle" fontSize="8" fill="#15803d">900-1600m</text>
              <text x="100" y="160" textAnchor="middle" fontSize="8" fill="#15803d">Continuous</text>
              <polygon points="200,200 200,70 220,75 250,80 350,85 400,82 420,78 430,80 440,200" fill="#ffedd5" stroke="#ea580c" strokeWidth="2"/>
              <text x="320" y="130" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c2d12">Deccan Plateau</text>
              <text x="320" y="146" textAnchor="middle" fontSize="9" fill="#9a3412">Tilts eastward · 500-600m avg</text>
              <text x="320" y="160" textAnchor="middle" fontSize="8" fill="#c2410c">Black cotton soil · Volcanic basalt</text>
              <text x="320" y="173" textAnchor="middle" fontSize="8" fill="#c2410c">Rivers flow W→E (Godavari, Krishna)</text>
              <polygon points="440,200 440,80 460,90 500,110 540,120 560,115 580,120 600,130 700,150 700,200" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
              <text x="570" y="150" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">Eastern</text>
              <text x="570" y="163" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">Ghats</text>
              <text x="570" y="176" textAnchor="middle" fontSize="8" fill="#3b82f6">600m avg</text>
              <text x="570" y="188" textAnchor="middle" fontSize="8" fill="#3b82f6">Discontinuous</text>
              <text x="30" y="65" fontSize="8" fill="#15803d">Heavy rain</text>
              <text x="30" y="76" fontSize="8" fill="#15803d">2000-6000mm</text>
              <text x="650" y="135" fontSize="8" fill="#3b82f6">Less rain</text>
              <text x="650" y="146" fontSize="8" fill="#3b82f6">1000mm</text>
              <path d="M 10 30 Q 150 10 200 70" fill="none" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="4,3"/>
              <text x="80" y="28" fontSize="8" fill="#0891b2">SW Monsoon →</text>
              <line x1="0" y1="200" x2="700" y2="200" stroke="#94a3b8" strokeWidth="1.5"/>
              <text x="5" y="215" fontSize="8" fill="#94a3b8">Arabian Sea (W)</text>
              <text x="600" y="215" fontSize="8" fill="#94a3b8">Bay of Bengal (E)</text>
            </svg>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                {name:'Western Ghats',color:'bg-green-50 border-green-300',tc:'text-green-800',points:['Continuous range · 1,600 km','Avg 900-1,600m elevation','Heavy SW monsoon rain (windward)','Biodiversity hotspot · UNESCO WH','Highest: Anamudi 2,695m (Kerala)']},
                {name:'Deccan Plateau',color:'bg-orange-50 border-orange-300',tc:'text-orange-800',points:['Tilts eastward (rivers flow E→W)','Black cotton soil (Regur) dominant','Deccan Traps: volcanic basalt','Rich in minerals (iron, coal, manganese)','Average 500-600m elevation']},
                {name:'Eastern Ghats',color:'bg-blue-50 border-blue-300',tc:'text-blue-800',points:['Discontinuous — cut by rivers','Lower elevation (avg 600m)','Rain shadow of Western Ghats','Highest: Mahendragiri 1,501m','Less rainfall (1,000-1,500mm)']},
              ].map(r=>(
                <div key={r.name} className={`border-2 ${r.color} rounded-xl p-3`}>
                  <div className={`text-xs font-bold ${r.tc} mb-2`}>{r.name}</div>
                  <ul className="flex flex-col gap-1">
                    {r.points.map(p=><li key={p} className="text-xs text-gray-600 flex gap-1.5"><span className="text-gray-400">·</span>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab==='pyq' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2021 Prelims',q:'Which of the following is the highest peak of the Western Ghats?'},
                {year:'2018 Mains GS-I',q:'Explain the formation of the Deccan Plateau and discuss how its geological history has contributed to its mineral wealth.'},
                {year:'2015 Prelims',q:'The black cotton soil of the Deccan plateau is formed by the weathering of which rocks?'},
                {year:'2013 Prelims',q:'The Eastern Ghats are different from the Western Ghats. Which of the following is the key difference?'},
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
                <div className="text-5xl mb-4">🪨</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Peninsular Plateau</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-orange-600 text-white px-10 py-3 rounded-xl font-medium text-sm hover:bg-orange-700">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500 shrink-0">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-orange-500 rounded-full transition-all" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-orange-600 shrink-0">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quiz[currentQ].options.map((opt,i)=>(
                    <button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-orange-400 hover:bg-orange-50 cursor-pointer':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}>
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
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-orange-700">
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
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-orange-600 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button>
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
                {q:'Western Ghats as UNESCO World Heritage Site — biodiversity significance and threats from developmental activities',prob:88},
                {q:'Mining in Deccan Plateau — iron ore, coal and environmental impact — Forest Rights Act conflict',prob:82},
                {q:'Deccan Traps — geological formation and its influence on soil type and agriculture in Maharashtra',prob:74},
                {q:'Eastern Ghats tribal communities — PVTGs, Forest Rights Act and PM JANMAN scheme',prob:68},
              ].map((pred,i)=>(
                <div key={i} className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-orange-200 text-orange-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-orange-100 rounded-full"><div className="h-2 bg-orange-400 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                        <span className="text-xs font-bold text-orange-700">{pred.prob}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/3" className="text-sm text-green-600 hover:text-green-700">← Northern Plains</a>
          <div className="text-xs text-gray-400">Topic 4 of 20</div>
          <a href="/subjects/geography/5" className="text-sm text-green-600 hover:text-green-700">Himalayan Rivers →</a>
        </div>
      </div>
    </div>
  )
}