'use client'
import { useState } from 'react'
export default function PeninsularRiversPage() {
  const [activeTab, setActiveTab] = useState('notes')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const quiz = [
    {q:'Which is the longest peninsular river of India?',options:['Krishna','Cauvery','Godavari','Mahanadi'],correct:2,exp:'Godavari (1,465 km) is the longest peninsular river — called the "Dakshin Ganga" (Ganga of the South). It originates from Trimbakeshwar in Nashik, Maharashtra and drains into the Bay of Bengal forming a large delta in Andhra Pradesh.'},
    {q:'The Narmada river is unique among peninsular rivers because it:',options:['Flows eastward','Flows into Arabian Sea through a rift valley','Forms the largest delta','Has most tributaries'],correct:1,exp:'The Narmada flows westward through a rift valley (tectonic fault) — unlike most peninsular rivers that flow east. It flows between the Vindhya range (north) and Satpura range (south) and drains into the Arabian Sea.'},
    {q:'Which river is known as the "Dakshin Ganga"?',options:['Krishna','Cauvery','Godavari','Mahanadi'],correct:2,exp:'The Godavari is called "Dakshin Ganga" (Ganga of the South) because of its length, religious significance and the large area it drains. It originates in Maharashtra and flows through Telangana and Andhra Pradesh.'},
    {q:'The Cauvery water dispute is between which states?',options:['AP and Tamil Nadu','Karnataka and Tamil Nadu','Kerala and Karnataka','Tamil Nadu and Kerala'],correct:1,exp:'The Cauvery water dispute is between Karnataka and Tamil Nadu. The Cauvery Tribunal (1990) and Supreme Court have given multiple orders. The Cauvery Water Management Authority was established in 2018.'},
    {q:'Which peninsular river flows through a rift valley?',options:['Godavari','Mahanadi','Narmada','Cauvery'],correct:2,exp:'The Narmada flows through a rift valley — a graben (down-dropped block between two faults). The Tapti also flows through a parallel rift valley. Both flow westward into the Arabian Sea, unlike other peninsular rivers.'},
  ]
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 6</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Rivers — Peninsular System</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full">Seasonal · Rain-fed</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019, 2016</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'Seasonal',l:'Rain-fed only'},{v:'East flowing',l:'Most rivers'},{v:'2 West flowing',l:'Narmada & Tapti'},{v:'Old valleys',l:'No waterfalls mostly'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'diagram',label:'📐 Diagram'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-teal-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes' && (
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-teal-700 to-green-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Peninsular River Systems</div>
              <p className="text-sm leading-relaxed text-teal-100 mb-4">Peninsular rivers are fundamentally different from Himalayan rivers. They are <strong>seasonal (non-perennial)</strong> — they depend entirely on monsoon rainfall and dry up or reduce to a trickle in summer. They flow through old, hard rock valleys — so they don't carry much silt. Most flow <strong>eastward</strong> into the Bay of Bengal, but two unique rivers — Narmada and Tapti — flow westward through rift valleys into the Arabian Sea.</p>
              <div className="grid grid-cols-4 gap-3">
                {[{v:'Godavari',l:'1,465km · Longest'},{v:'Krishna',l:'1,400km · 2nd longest'},{v:'Cauvery',l:'800km · Sacred'},{v:'Narmada',l:'1,312km · Rift valley'}].map(s=>(
                  <div key={s.l} className="bg-teal-700 border border-teal-600 rounded-xl p-3 text-center">
                    <div className="text-sm font-bold text-white">{s.v}</div>
                    <div className="text-xs text-teal-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-teal-600 rounded-full"></div>
                <div className="text-sm font-bold text-teal-900">Major Peninsular Rivers — Complete Analysis</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {name:'Godavari — Dakshin Ganga',len:'1,465 km',origin:'Trimbakeshwar, Nashik, Maharashtra (1,067m)',drains:'Bay of Bengal · Large delta in AP',color:'bg-blue-50 border-blue-200',tc:'text-blue-900',
                    states:'Maharashtra, Telangana, AP, Chhattisgarh, Odisha',basin:'3.13 lakh sq km — largest peninsular basin',
                    tributaries:'Pranhita, Indravati, Manjra, Wainganga',
                    significance:'Popularly called Dakshin Ganga. Most sacred peninsular river after Ganga. Pushkaram fair held every 12 years.',
                    project:'Godavari-Krishna interlinking · Polavaram project (under construction) — AP\'s lifeline',
                    dispute:'Godavari waters shared between Maharashtra, AP, Telangana, Odisha under tribunal award'},
                  {name:'Krishna River',len:'1,400 km',origin:'Mahabaleshwar, Maharashtra (1,337m)',drains:'Bay of Bengal · Delta in AP',color:'bg-green-50 border-green-200',tc:'text-green-900',
                    states:'Maharashtra, Karnataka, Telangana, Andhra Pradesh',basin:'2.59 lakh sq km',
                    tributaries:'Bhima, Tungabhadra, Koyna, Ghataprabha, Malprabha',
                    significance:'Tungabhadra tributary — ancient Vijayanagara Empire on its banks. Hampi (UNESCO WH) on Tungabhadra.',
                    project:'Nagarjuna Sagar dam, Srisailam dam (largest reservoir in India by capacity)',
                    dispute:'Krishna Water Disputes Tribunal (1969) — allocated waters to Maharashtra, Karnataka, AP'},
                  {name:'Cauvery (Kaveri) River',len:'800 km',origin:'Talakaveri, Kodagu, Karnataka (1,341m)',drains:'Bay of Bengal · Fertile delta in Tamil Nadu',color:'bg-amber-50 border-amber-200',tc:'text-amber-900',
                    states:'Karnataka, Tamil Nadu, Kerala, Puducherry',basin:'81,155 sq km',
                    tributaries:'Hemavati, Shimsha, Arkavathi, Kabini, Bhavani',
                    significance:'Called the "Ganga of the South" in Karnataka. Sacred river — Srirangapatna, Mysuru, Srirangam on its banks.',
                    project:'Krishnarajasagar dam, Mettur dam — critical for Karnataka and TN irrigation',
                    dispute:'Cauvery Water Dispute — most contentious interstate river dispute in India. SC final order 2018. CWMA established.'},
                  {name:'Narmada River — The Rift Valley River',len:'1,312 km',origin:'Amarkantak, Anuppur, MP (1,057m)',drains:'Arabian Sea · Gulf of Khambhat',color:'bg-orange-50 border-orange-200',tc:'text-orange-900',
                    states:'Madhya Pradesh (87%), Maharashtra, Gujarat',basin:'98,796 sq km',
                    tributaries:'Hiran, Orsang, Tawa, Banjar, Sher',
                    significance:'Flows westward through a rift valley (graben) between Vindhya (N) and Satpura (S). Does NOT form a delta — estuarial mouth. Sacred: Omkareshwar, Maheshwar temples on banks.',
                    project:'Sardar Sarovar Dam on Narmada — 30 large, 135 medium, 3,000 small dams in Narmada Valley',
                    dispute:'Narmada Bachao Andolan (Medha Patkar) — protested displacement of 2.5 lakh people. SC allowed height increase in stages.'},
                  {name:'Tapti (Tapi) River',len:'724 km',origin:'Betul district, Madhya Pradesh (752m)',drains:'Arabian Sea · Gulf of Khambhat',color:'bg-yellow-50 border-yellow-200',tc:'text-yellow-900',
                    states:'Madhya Pradesh, Maharashtra, Gujarat',basin:'65,145 sq km',
                    tributaries:'Purna, Girna, Panzara, Waghur',
                    significance:'Only the second major river (after Narmada) to flow westward. Also flows through a rift valley parallel to Narmada. Twin rivers — Narmada and Tapti — separated by Satpura range.',
                    project:'Ukai dam (Gujarat) — largest dam on Tapti · Surat city on Tapti estuary',
                    dispute:'No major dispute — Surat flooding issue from dam releases is a concern'},
                  {name:'Mahanadi River',len:'858 km',origin:'Sihawa, Chhattisgarh (442m)',drains:'Bay of Bengal · Delta in Odisha',color:'bg-red-50 border-red-200',tc:'text-red-900',
                    states:'Chhattisgarh, Odisha',basin:'1.42 lakh sq km',
                    tributaries:'Seonath, Jonk, Hasdeo, Ib, Tel',
                    significance:'Hirakud Dam — one of Asia\'s longest dams (4.8 km) and oldest post-independence dams (1957). Delta is one of most fertile in India.',
                    project:'Hirakud Dam — multiple purposes: flood control, irrigation, power generation',
                    dispute:'Chhattisgarh-Odisha dispute over water — Odisha accuses CG of excess extraction'},
                ].map(r=>(
                  <div key={r.name} className={`border-2 ${r.color} rounded-xl p-4`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`text-sm font-bold ${r.tc}`}>{r.name}</div>
                      <span className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">{r.len}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <div className="text-xs font-semibold text-gray-600">Origin</div>
                        <div className="text-xs text-gray-700">{r.origin}</div>
                        <div className="text-xs font-semibold text-gray-600 mt-2">States</div>
                        <div className="text-xs text-gray-700">{r.states}</div>
                        <div className="text-xs font-semibold text-gray-600 mt-2">Basin area</div>
                        <div className="text-xs text-gray-700">{r.basin}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-600">Key tributaries</div>
                        <div className="text-xs text-gray-700">{r.tributaries}</div>
                        <div className="text-xs font-semibold text-gray-600 mt-2">Drains into</div>
                        <div className="text-xs text-gray-700">{r.drains}</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-gray-100 mb-2">
                      <div className="text-xs font-bold text-gray-700 mb-1">Significance</div>
                      <p className="text-xs text-gray-600 leading-relaxed">{r.significance}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 rounded-lg p-2">
                        <div className="text-xs font-semibold text-blue-800">Major project</div>
                        <div className="text-xs text-gray-700 mt-0.5">{r.project}</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-2">
                        <div className="text-xs font-semibold text-red-800">Dispute/Issue</div>
                        <div className="text-xs text-gray-700 mt-0.5">{r.dispute}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-red-500 rounded-full"></div>
                <div className="text-sm font-bold text-red-900">Himalayan vs Peninsular Rivers — Complete Comparison</div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {title:'Himalayan Rivers',color:'bg-blue-50 border-blue-300',tc:'text-blue-900',points:['Perennial — flow throughout year','Fed by both monsoon AND glacier melt','Antecedent — older than mountains','Young rivers — V-shaped valleys','High erosion and sediment load','Long rivers — travel across plains','Form large deltas in Bay of Bengal','Prone to flooding in plains','Examples: Ganga, Indus, Brahmaputra']},
                    {title:'Peninsular Rivers',color:'bg-orange-50 border-orange-300',tc:'text-orange-900',points:['Seasonal — depend only on monsoon','No glacier feed — dry in summer','Consequent — flow on rock gradient','Old rivers — shallow wide valleys','Less silt — harder rock basins','Shorter — contained in plateau','Form deltas (E-flowing) or estuaries (W-flowing)','Flash floods during heavy monsoon','Examples: Godavari, Krishna, Narmada']},
                  ].map(c=>(
                    <div key={c.title} className={`border-2 ${c.color} rounded-xl p-4`}>
                      <div className={`text-sm font-bold ${c.tc} mb-3`}>{c.title}</div>
                      <ul className="flex flex-col gap-1.5">
                        {c.points.map(p=><li key={p} className="text-xs text-gray-700 flex gap-2 leading-relaxed"><span className="shrink-0 mt-0.5 text-gray-400">→</span>{p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab==='diagram' && (
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">Peninsular Rivers — Flow Direction Map</div>
            <svg viewBox="0 0 700 380" width="100%">
              <rect width="700" height="380" fill="#f0fdf4" rx="12"/>
              <polygon points="100,20 600,20 650,200 350,370 50,200" fill="#fff7ed" stroke="#ea580c" strokeWidth="2"/>
              <text x="350" y="180" textAnchor="middle" fontSize="13" fontWeight="700" fill="#7c2d12">DECCAN PLATEAU</text>
              <text x="350" y="196" textAnchor="middle" fontSize="9" fill="#9a3412">Tilts eastward → Most rivers flow east</text>
              <line x1="340" y1="120" x2="600" y2="220" stroke="#2563eb" strokeWidth="3"/>
              <text x="490" y="155" fontSize="10" fontWeight="600" fill="#1d4ed8">Godavari</text>
              <text x="490" y="167" fontSize="8" fill="#3b82f6">1,465 km → Bay of Bengal</text>
              <line x1="340" y1="160" x2="580" y2="270" stroke="#059669" strokeWidth="2.5"/>
              <text x="475" y="210" fontSize="10" fontWeight="600" fill="#065f46">Krishna</text>
              <text x="475" y="222" fontSize="8" fill="#059669">1,400 km → Bay of Bengal</text>
              <line x1="340" y1="220" x2="540" y2="320" stroke="#d97706" strokeWidth="2.5"/>
              <text x="450" y="275" fontSize="10" fontWeight="600" fill="#92400e">Cauvery</text>
              <text x="450" y="287" fontSize="8" fill="#b45309">800 km → Bay of Bengal</text>
              <line x1="320" y1="130" x2="80" y2="210" stroke="#dc2626" strokeWidth="3"/>
              <text x="140" y="155" fontSize="10" fontWeight="600" fill="#991b1b">Narmada</text>
              <text x="140" y="167" fontSize="8" fill="#dc2626">1,312 km → Arabian Sea</text>
              <text x="140" y="179" fontSize="7" fill="#dc2626">(Rift valley · Westward)</text>
              <line x1="310" y1="155" x2="80" y2="250" stroke="#7c3aed" strokeWidth="2"/>
              <text x="140" y="220" fontSize="10" fontWeight="600" fill="#5b21b6">Tapti</text>
              <text x="140" y="232" fontSize="8" fill="#7c3aed">724 km → Arabian Sea (Rift valley)</text>
              <text x="50" y="200" fontSize="11" fontWeight="700" fill="#0891b2">Arabian</text>
              <text x="50" y="215" fontSize="11" fontWeight="700" fill="#0891b2">Sea</text>
              <text x="610" y="200" fontSize="11" fontWeight="700" fill="#0891b2">Bay of</text>
              <text x="610" y="215" fontSize="11" fontWeight="700" fill="#0891b2">Bengal</text>
              <rect x="10" y="290" width="320" height="80" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="170" y="308" textAnchor="middle" fontSize="10" fontWeight="700" fill="#374151">Key: Why Narmada &amp; Tapti flow West</text>
              <text x="20" y="325" fontSize="9" fill="#6b7280">• They flow through rift valleys (grabens/tectonic faults)</text>
              <text x="20" y="340" fontSize="9" fill="#6b7280">• Vindhya range (N) and Satpura range (S) force westward flow</text>
              <text x="20" y="355" fontSize="9" fill="#6b7280">• Form estuaries (not deltas) in Gulf of Khambhat</text>
            </svg>
          </div>
        )}
        {activeTab==='pyq' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2022 Prelims',q:'The Cauvery Water Management Authority was established following which Supreme Court order?'},
                {year:'2020 Mains GS-I',q:'Why do most peninsular rivers flow eastward while Narmada and Tapti flow westward? Explain the geological reasons.'},
                {year:'2018 Prelims',q:'Which of the following rivers flows through a rift valley?'},
                {year:'2016 Prelims',q:'Which river is called the "Dakshin Ganga"?'},
                {year:'2014 Mains GS-I',q:'Examine the Cauvery river water dispute. What are the key issues and how has the judiciary tried to resolve them?'},
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
                <div className="text-5xl mb-4">🏞️</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Peninsular Rivers</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-teal-700 text-white px-10 py-3 rounded-xl font-medium text-sm">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-teal-600 rounded-full" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-teal-700">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quiz[currentQ].options.map((opt,i)=>(
                    <button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-teal-400 hover:bg-teal-50':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}>
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
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-teal-700 text-white px-6 py-2.5 rounded-xl text-sm">{currentQ<quiz.length-1?'Next →':'Results →'}</button>
                  </>
                )}
              </div>
            ):(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">{score>=4?'🏆':'📚'}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div>
                <div className="flex gap-3 justify-center mt-6">
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-teal-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button>
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
                {q:'Interstate river water disputes — Cauvery, Mahanadi, Krishna — institutional mechanisms and challenges in resolution',prob:90},
                {q:'Ken-Betwa river interlinking project — first project under National River Linking, ecological concerns and benefits',prob:85},
                {q:'Sardar Sarovar dam and Narmada — displacement, rehabilitation, water distribution and current status',prob:78},
                {q:'Polavaram project on Godavari — India\'s national project, importance for Andhra Pradesh development',prob:72},
              ].map((pred,i)=>(
                <div key={i} className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-teal-200 text-teal-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-teal-100 rounded-full"><div className="h-2 bg-teal-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                        <span className="text-xs font-bold text-teal-700">{pred.prob}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/5" className="text-sm text-green-600">← Himalayan Rivers</a>
          <div className="text-xs text-gray-400">Topic 6 of 20</div>
          <a href="/subjects/geography/7" className="text-sm text-green-600">Climate & Monsoon →</a>
        </div>
      </div>
    </div>
  )
}