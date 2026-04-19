'use client'
import { useState } from 'react'
const mindmap={id:'root',label:'Agriculture in India',sublabel:'58% workforce · 17% GDP · 2 cropping seasons',color:'#166534',textColor:'#fff',children:[
  {id:'kharif',label:'Kharif Crops',sublabel:'Jun-Sep · SW Monsoon · Rice, Cotton, Maize, Groundnut',color:'#16a34a',textColor:'#fff',children:[
    {id:'k1',label:'Rice (Paddy)',sublabel:'Largest food crop · WB, UP, Punjab · Requires 150-200cm rain · High water need',color:'#dcfce7',textColor:'#14532d'},
    {id:'k2',label:'Cotton',sublabel:'White Gold · Maharashtra, Gujarat, AP · Black soil ideal · Cash crop · Bt cotton',color:'#dcfce7',textColor:'#14532d'},
    {id:'k3',label:'Maize, Groundnut, Bajra',sublabel:'Maize: Karnataka, UP · Groundnut: Gujarat, AP · Bajra: Rajasthan, dry areas',color:'#dcfce7',textColor:'#14532d'},
  ]},
  {id:'rabi',label:'Rabi Crops',sublabel:'Oct-Mar · Winter · Wheat, Mustard, Gram, Peas',color:'#0369a1',textColor:'#fff',children:[
    {id:'r1',label:'Wheat',sublabel:'2nd largest food crop · Punjab, Haryana, UP · Temperate climate · Green Revolution crop',color:'#dbeafe',textColor:'#1e40af'},
    {id:'r2',label:'Mustard & Rapeseed',sublabel:'Oilseed · Rajasthan, UP, MP · Cool dry climate · Golden flower fields',color:'#dbeafe',textColor:'#1e40af'},
    {id:'r3',label:'Gram (Chickpea)',sublabel:'Largest pulse · MP, Rajasthan, Maharashtra · Protein crop · Low water need',color:'#dbeafe',textColor:'#1e40af'},
  ]},
  {id:'zaid',label:'Zaid Crops',sublabel:'Mar-Jun · Summer · Watermelon, Cucumber, Vegetables',color:'#d97706',textColor:'#fff',children:[
    {id:'z1',label:'Vegetables & Fruits',sublabel:'Short growing season between rabi and kharif · Irrigation dependent',color:'#fef3c7',textColor:'#78350f'},
    {id:'z2',label:'Sugarcane & Fodder',sublabel:'UP, Maharashtra · Perennial crop spanning multiple seasons',color:'#fef3c7',textColor:'#78350f'},
    {id:'z3',label:'Significance',sublabel:'Fills gap between seasons · Provides income continuity · Needs irrigation',color:'#fef3c7',textColor:'#78350f'},
  ]},
  {id:'revolution',label:'Agricultural Revolutions',sublabel:'Green, White, Blue, Yellow, Pink',color:'#7c3aed',textColor:'#fff',children:[
    {id:'rev1',label:'Green Revolution (1960s)',sublabel:'HYV wheat & rice · Punjab-Haryana · MS Swaminathan · Food self-sufficiency',color:'#ede9fe',textColor:'#4c1d95'},
    {id:'rev2',label:'White Revolution',sublabel:'Operation Flood 1970 · Verghese Kurien · AMUL · India #1 milk producer',color:'#ede9fe',textColor:'#4c1d95'},
    {id:'rev3',label:'Blue, Yellow, Pink',sublabel:'Blue=Fish · Yellow=Oilseeds · Pink=Meat/Shrimp · Evergreen Revolution=Sustainable',color:'#ede9fe',textColor:'#4c1d95'},
  ]},
  {id:'challenges',label:'Key Challenges',sublabel:'Fragmentation, irrigation, climate, MSP',color:'#dc2626',textColor:'#fff',children:[
    {id:'c1',label:'Small & fragmented holdings',sublabel:'Avg farm size 1.08 ha · 86% marginal & small farmers · Uneconomical',color:'#fee2e2',textColor:'#7f1d1d'},
    {id:'c2',label:'Irrigation dependence',sublabel:'Only 48% land irrigated · Rest rain-fed · Groundwater depletion in Punjab',color:'#fee2e2',textColor:'#7f1d1d'},
    {id:'c3',label:'Climate change impact',sublabel:'Erratic monsoon · Heat stress on crops · Increasing extreme events · Food security risk',color:'#fee2e2',textColor:'#7f1d1d'},
  ]},
]}
type MNode={id:string;label:string;sublabel:string;color:string;textColor:string;children?:MNode[]}
function MindNode({node,level=0}:{node:MNode;level?:number}){
  const [exp,setExp]=useState(level<2)
  const hasC=node.children&&node.children.length>0
  return(
    <div className="flex items-start">
      <button onClick={()=>hasC&&setExp(!exp)} style={{backgroundColor:node.color,color:node.textColor,minWidth:level===0?'220px':'200px',cursor:hasC?'pointer':'default'}} className="flex items-start gap-2 px-3 py-2.5 rounded-xl text-left transition-all hover:opacity-90 shadow-sm">
        <div className="flex-1"><div style={{fontSize:level===0?'13px':'12px',fontWeight:700,lineHeight:1.3}}>{node.label}</div><div style={{fontSize:'10px',opacity:0.85,marginTop:'3px',lineHeight:1.4}}>{node.sublabel}</div></div>
        {hasC&&<span style={{fontSize:'10px',opacity:0.7,flexShrink:0}}>{exp?'▼':'▶'}</span>}
      </button>
      {hasC&&exp&&(<div className="flex items-start ml-1"><div style={{width:'20px',display:'flex',alignItems:'center',alignSelf:'stretch'}}><div style={{width:'20px',height:'1.5px',backgroundColor:node.color,opacity:0.5}}></div></div><div className="flex flex-col gap-2">{node.children!.map(child=>(<div key={child.id}><MindNode node={child} level={level+1}/></div>))}</div></div>)}
    </div>
  )
}
export default function AgriculturePage(){
  const [activeTab,setActiveTab]=useState('notes')
  const [quizStarted,setQuizStarted]=useState(false)
  const [currentQ,setCurrentQ]=useState(0)
  const [selectedAnswer,setSelectedAnswer]=useState<number|null>(null)
  const [score,setScore]=useState(0)
  const quiz=[
    {q:'Which crop is known as the "Golden Fibre" of India?',options:['Cotton','Jute','Sugarcane','Wheat'],correct:1,exp:'Jute is known as the "Golden Fibre" because of its golden silky shine and high economic value. India is the world\'s largest producer of jute. West Bengal accounts for over 50% of India\'s jute production. Jute grows in the hot and humid climate of the Ganga delta.'},
    {q:'The Green Revolution in India was primarily associated with which crop?',options:['Rice and maize','Wheat and rice (HYV seeds)','Cotton and sugarcane','Pulses and oilseeds'],correct:1,exp:'The Green Revolution (mid-1960s) was primarily associated with High Yielding Varieties (HYV) of wheat and rice. Norman Borlaug developed dwarf wheat varieties; M.S. Swaminathan introduced them to India. Punjab and Haryana became the granary of India.'},
    {q:'Which state is the largest producer of sugarcane in India?',options:['Maharashtra','Gujarat','Uttar Pradesh','Tamil Nadu'],correct:2,exp:'Uttar Pradesh is the largest producer of sugarcane in India — accounting for about 40% of national production. The Terai region of UP (Gorakhpur, Muzaffarnagar) has ideal conditions: deep fertile alluvial soil, adequate rainfall and warm climate.'},
    {q:'Operation Flood was related to which agricultural revolution?',options:['Green Revolution','Blue Revolution','White Revolution','Yellow Revolution'],correct:2,exp:'Operation Flood (1970-1996) launched by the National Dairy Development Board under Verghese Kurien was related to the White Revolution (milk production). It created a nationwide milk grid and made India the world\'s largest milk producer. AMUL cooperative model was its backbone.'},
    {q:'What percentage of India\'s workforce is engaged in agriculture?',options:['25%','40%','58%','70%'],correct:2,exp:'About 58% of India\'s workforce is employed in agriculture and allied activities (Census 2011). However, agriculture contributes only about 17-18% of GDP — showing the low productivity of the sector. This gap between workforce share and GDP share indicates need for agricultural transformation.'},
  ]
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 10</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Agriculture in India</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">58% workforce</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: Every year</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'58%',l:'Workforce in agri'},{v:'17-18%',l:'GDP contribution'},{v:'142 Mha',l:'Net sown area'},{v:'2nd largest',l:'Arable land world'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'mindmap',label:'🧠 Mind Map'},{id:'visual',label:'📐 Visual'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-green-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-green-700 to-lime-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-green-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Agriculture — The Backbone of India</div>
              <p className="text-sm leading-relaxed text-green-100 mb-4">Agriculture is the foundation of India's economy and society. Despite contributing only 17-18% of GDP, it employs 58% of the workforce and directly supports 700+ million people. India is the world's second largest producer of wheat, rice, fruits and vegetables. Understanding India's cropping patterns, agricultural revolutions and challenges is essential for GS-I, GS-III and Essay papers.</p>
              <div className="grid grid-cols-3 gap-3">
                {[{v:'Kharif',l:'Jun-Sep · Rice, Cotton'},{v:'Rabi',l:'Oct-Mar · Wheat, Mustard'},{v:'Zaid',l:'Mar-Jun · Summer crops'}].map(s=>(
                  <div key={s.l} className="bg-green-700 border border-green-600 rounded-xl p-3 text-center">
                    <div className="text-sm font-bold text-white">{s.v}</div>
                    <div className="text-xs text-green-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-green-600 rounded-full"></div>
                <div className="text-sm font-bold text-green-900">Three Cropping Seasons — Complete Analysis</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {season:'Kharif (Monsoon Crops)',period:'Sown: June-July · Harvested: September-October',color:'bg-green-600',light:'bg-green-50',border:'border-green-200',tc:'text-green-900',
                    desc:'Kharif crops are sown at the beginning of the SW monsoon season. They grow during the hot and rainy season. They need warm temperature, heavy rainfall and humid conditions.',
                    crops:[
                      {name:'Rice (Paddy)',states:'WB, UP, Punjab, AP, Tamil Nadu',note:'Most important food crop · Requires 150-200cm rain or irrigation · 3 crops in WB (aus, aman, boro)'},
                      {name:'Cotton',states:'Maharashtra, Gujarat, AP, Telangana',note:'"White Gold" · Black cotton soil ideal · Bt cotton revolutionized production · India 2nd largest producer'},
                      {name:'Jute',states:'West Bengal, Bihar, Assam',note:'"Golden Fibre" · Ganga delta · Hot humid climate · India largest producer globally'},
                      {name:'Maize (Corn)',states:'Karnataka, UP, Bihar, Rajasthan',note:'Both food and feed crop · Increasing in poultry-feed demand · Ethanol production'},
                      {name:'Groundnut',states:'Gujarat, AP, Tamil Nadu, Rajasthan',note:'Major oilseed · Red soil · India 2nd largest producer · Used in cooking oil, peanut butter'},
                    ]},
                  {season:'Rabi (Winter Crops)',period:'Sown: October-November · Harvested: March-April',color:'bg-blue-600',light:'bg-blue-50',border:'border-blue-200',tc:'text-blue-900',
                    desc:'Rabi crops are grown in winter. They need cool temperatures during growth and warm weather for ripening. They depend on winter rains (Western Disturbances) or irrigation.',
                    crops:[
                      {name:'Wheat',states:'Punjab, Haryana, UP, MP, Rajasthan',note:'India 2nd largest producer · HYV revolution in 1960s · Punjab-Haryana = India\'s wheat bowl'},
                      {name:'Mustard/Rapeseed',states:'Rajasthan, UP, Haryana, MP',note:'Major oilseed crop · Golden yellow flowers · India 3rd largest producer of rapeseed globally'},
                      {name:'Gram (Chickpea)',states:'MP, Rajasthan, Maharashtra, UP',note:'Largest pulse crop · Low water requirement · Protein source · India largest producer globally'},
                      {name:'Barley',states:'UP, Rajasthan, Haryana, Bihar',note:'Drought tolerant · Used in beer, malt, animal feed · Declining production due to wheat preference'},
                      {name:'Peas & Lentils',states:'UP, MP, Bihar',note:'Important pulse crops · Nitrogen fixing · Improve soil fertility · High protein content'},
                    ]},
                ].map(s=>(
                  <div key={s.season} className={`border-2 ${s.border} rounded-2xl overflow-hidden`}>
                    <div className={`${s.color} text-white px-5 py-3`}>
                      <div className="font-bold text-sm text-white">{s.season}</div>
                      <div className="text-xs text-white opacity-80">{s.period}</div>
                    </div>
                    <div className={`p-4 ${s.light}`}>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">{s.desc}</p>
                      <div className="flex flex-col gap-2">
                        {s.crops.map(c=>(
                          <div key={c.name} className="bg-white rounded-xl p-3 border border-gray-100 grid grid-cols-3 gap-2">
                            <div className="font-bold text-xs text-gray-800">{c.name}</div>
                            <div className="text-xs text-gray-500">{c.states}</div>
                            <div className="text-xs text-gray-600 italic">{c.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-purple-50 border-b border-purple-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-purple-600 rounded-full"></div>
                <div className="text-sm font-bold text-purple-900">Agricultural Revolutions — Complete List</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  {name:'Green Revolution',year:'1960s-70s',color:'bg-green-50 border-green-200',tc:'text-green-800',detail:'HYV wheat and rice seeds · MS Swaminathan · Norman Borlaug · Punjab-Haryana · Food self-sufficiency achieved by 1970s · Negative effects: soil degradation, groundwater depletion'},
                  {name:'White Revolution',year:'1970-1996',color:'bg-gray-50 border-gray-200',tc:'text-gray-800',detail:'Operation Flood · NDDB · Verghese Kurien · AMUL model · India became world\'s #1 milk producer · Doubled milk production · 1.5 crore farmer members'},
                  {name:'Blue Revolution',year:'1985-90',color:'bg-blue-50 border-blue-200',tc:'text-blue-800',detail:'Fish production · Aquaculture development · India 2nd largest fish producer · Coastal states benefited · PM Matsya Sampada Yojana (2020) continuing this'},
                  {name:'Yellow Revolution',year:'1986-90',color:'bg-yellow-50 border-yellow-200',tc:'text-yellow-800',detail:'Oilseeds production · Technology Mission on Oilseeds · Mustard, groundnut, sunflower · Reduced import dependence on edible oil · Partially successful'},
                  {name:'Pink Revolution',year:'Recent',color:'bg-pink-50 border-pink-200',tc:'text-pink-800',detail:'Meat and shrimp production · Poultry and fisheries focus · India major shrimp exporter · Andhra Pradesh largest shrimp producer · Export-oriented'},
                  {name:'Evergreen Revolution',year:'Concept',color:'bg-emerald-50 border-emerald-200',tc:'text-emerald-800',detail:'MS Swaminathan\'s concept · Sustainable productivity increase · Combine Green Revolution productivity with ecological sustainability · No soil/water degradation'},
                ].map(r=>(
                  <div key={r.name} className={`border-2 ${r.color} rounded-xl p-3`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className={`text-xs font-bold ${r.tc}`}>{r.name}</div>
                      <span className="text-xs text-gray-500">{r.year}</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab==='mindmap'&&(<div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-auto"><div className="text-sm font-semibold text-gray-900 mb-1">Agriculture Mind Map</div><div className="text-xs text-gray-400 mb-5">Click to expand · 5 branches with 3 nodes each</div><div className="overflow-x-auto pb-6"><MindNode node={mindmap} level={0}/></div></div>)}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">Cropping Calendar — India</div>
            <svg viewBox="0 0 700 300" width="100%">
              <rect width="700" height="300" fill="#f0fdf4" rx="12"/>
              <text x="350" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#166534">India's Agricultural Calendar — Three Cropping Seasons</text>
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m,i)=>(
                <g key={m}>
                  <rect x={30+i*54} y="40" width="50" height="20" fill={i>=5&&i<=8?'#bbf7d0':i>=9||i<=1?'#bfdbfe':'#fef9c3'} stroke="#e5e7eb" strokeWidth="0.5"/>
                  <text x={55+i*54} y="54" textAnchor="middle" fontSize="8" fontWeight="600" fill="#374151">{m}</text>
                </g>
              ))}
              {[
                {label:'🌾 KHARIF',start:5,end:8,color:'#16a34a',y:75,crops:'Rice · Cotton · Jute · Maize · Groundnut · Bajra · Jowar · Soybean'},
                {label:'❄️ RABI',start:9,end:13,color:'#2563eb',y:130,crops:'Wheat · Mustard · Gram · Barley · Peas · Lentils · Sunflower'},
                {label:'☀️ ZAID',start:2,end:4,color:'#d97706',y:185,crops:'Watermelon · Cucumber · Muskmelon · Vegetables · Summer crops'},
                {label:'🌿 SUGARCANE',start:0,end:11,color:'#7c3aed',y:240,crops:'Perennial crop · UP, Maharashtra · Harvested after 12-18 months · Both seasons'},
              ].map(s=>(
                <g key={s.label}>
                  <rect x={30+s.start*54} y={s.y} width={(Math.min(s.end,11)-s.start+1)*54} height="45" rx="6" fill={s.color} opacity="0.85"/>
                  <text x={30+s.start*54+10} y={s.y+18} fontSize="10" fontWeight="700" fill="white">{s.label}</text>
                  <text x={30+s.start*54+10} y={s.y+32} fontSize="8" fill="white" opacity="0.9">{s.crops}</text>
                </g>
              ))}
            </svg>
          </div>
        )}
        {activeTab==='pyq'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2023 Mains GS-III',q:'What are the challenges faced by India\'s agricultural sector? Discuss the role of technology in addressing them.'},
                {year:'2021 Prelims',q:'Which of the following is NOT a Kharif crop?'},
                {year:'2019 Mains GS-I',q:'Discuss the spatial distribution of rice and wheat production in India and the factors responsible.'},
                {year:'2017 Prelims',q:'Operation Flood was launched to achieve self-sufficiency in which sector?'},
                {year:'2015 Mains GS-III',q:'Critically examine the Green Revolution and its impact on India\'s food security and agricultural ecology.'},
              ].map((p,i)=>(
                <div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{p.year}</span>
                  <div className="text-sm text-gray-700 mt-2">{p.q}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab==='quiz'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            {!quizStarted?(<div className="text-center py-10"><div className="text-5xl mb-4">🌾</div><div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Agriculture</div><div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div><button onClick={()=>setQuizStarted(true)} className="bg-green-700 text-white px-10 py-3 rounded-xl font-medium text-sm">Start Quiz →</button></div>)
            :currentQ<quiz.length?(<div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6"><div className="text-sm text-gray-500">Q {currentQ+1}/{quiz.length}</div><div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-green-600 rounded-full" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div><div className="text-sm font-medium text-green-700">Score: {score}</div></div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">{quiz[currentQ].options.map((opt,i)=>(<button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}} className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-green-400 hover:bg-green-50':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}><span className="font-bold mr-3 text-gray-400">{String.fromCharCode(65+i)}.</span>{opt}{selectedAnswer!==null&&i===quiz[currentQ].correct&&<span className="ml-2 text-green-600">✓</span>}{selectedAnswer===i&&i!==quiz[currentQ].correct&&<span className="ml-2 text-red-600">✗</span>}</button>))}</div>
                {selectedAnswer!==null&&(<><div className={`rounded-xl p-4 mb-5 ${selectedAnswer===quiz[currentQ].correct?'bg-green-50 border border-green-200':'bg-red-50 border border-red-200'}`}><div className={`text-sm font-semibold mb-1 ${selectedAnswer===quiz[currentQ].correct?'text-green-800':'text-red-800'}`}>{selectedAnswer===quiz[currentQ].correct?'✓ Correct!':'✗ Incorrect'}</div><div className="text-sm text-gray-700">{quiz[currentQ].exp}</div></div><button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-green-700 text-white px-6 py-2.5 rounded-xl text-sm">{currentQ<quiz.length-1?'Next →':'Results →'}</button></>)}
              </div>)
            :(<div className="text-center py-10"><div className="text-5xl mb-4">{score>=4?'🏆':'📚'}</div><div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div><div className="flex gap-3 justify-center mt-6"><button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-green-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button><button onClick={()=>setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm">Review Notes</button></div></div>)}
          </div>
        )}
        {activeTab==='predict'&&(<div className="bg-white border border-gray-100 rounded-xl p-5"><div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div><div className="flex flex-col gap-3">{[{q:'PM-KISAN, MSP and farm income — effectiveness of government interventions in ensuring farmer welfare',prob:90},{q:'Climate change and food security — impact on crop yields, shifting cultivation zones',prob:86},{q:'Natural farming and organic agriculture — policy push, Andhra Pradesh model, challenges',prob:80},{q:'Agricultural exports — India\'s performance, barriers, opportunities in global food trade',prob:72}].map((pred,i)=>(<div key={i} className="bg-green-50 border border-green-100 rounded-xl p-4"><div className="flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-green-200 text-green-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div><div className="flex-1"><div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div><div className="flex items-center gap-2"><div className="flex-1 h-2 bg-green-100 rounded-full"><div className="h-2 bg-green-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-green-700">{pred.prob}%</span></div></div></div></div>))}</div></div>)}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/9" className="text-sm text-green-600">← Natural Vegetation</a>
          <div className="text-xs text-gray-400">Topic 10 of 20</div>
          <a href="/subjects/geography/11" className="text-sm text-green-600">Minerals & Energy →</a>
        </div>
      </div>
    </div>
  )
}