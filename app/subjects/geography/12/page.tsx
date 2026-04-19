'use client'
import { useState } from 'react'
const mindmap={id:'root',label:'Industries of India',sublabel:'Primary, Secondary, Tertiary',color:'#1e40af',textColor:'#fff',children:[
  {id:'iron',label:'Iron & Steel Industry',sublabel:'Public sector dominant · Jharkhand, WB, Odisha, Karnataka · SAIL, Tata',color:'#374151',textColor:'#fff',children:[
    {id:'i1',label:'Jamshedpur (Tata Steel)',sublabel:'First private steel plant 1907 · Subarnarekha-Kharkai rivers · JH · 10 MT capacity',color:'#f1f5f9',textColor:'#1e293b'},
    {id:'i2',label:'Bhilai, Durgapur, Rourkela',sublabel:'Public sector (SAIL) · Set up with Soviet, British, West German help respectively',color:'#f1f5f9',textColor:'#1e293b'},
    {id:'i3',label:'Raw material factors',sublabel:'Iron ore + Coking coal + Manganese + Limestone + Water + Labour = Steel location',color:'#f1f5f9',textColor:'#1e293b'},
  ]},
  {id:'textile',label:'Textile Industry',sublabel:'Largest employment after agriculture · Cotton, Jute, Silk, Synthetic',color:'#7c3aed',textColor:'#fff',children:[
    {id:'t1',label:'Cotton Textile',sublabel:'Mumbai (Manchester of India) · Ahmedabad (Cottonopolis) · Coimbatore · 1800+ mills',color:'#ede9fe',textColor:'#4c1d95'},
    {id:'t2',label:'Jute Industry',sublabel:'Kolkata (Hooghly river) · West Bengal · World\'s largest jute manufacturer · Golden fibre',color:'#ede9fe',textColor:'#4c1d95'},
    {id:'t3',label:'Silk & Handlooms',sublabel:'Varanasi, Kanchipuram, Mysuru silk · India 2nd largest silk producer · Handloom 45% textile output',color:'#ede9fe',textColor:'#4c1d95'},
  ]},
  {id:'it',label:'IT & Software Industry',sublabel:'Bangalore, Hyderabad, Chennai, Pune · $250bn exports · 50 lakh jobs',color:'#059669',textColor:'#fff',children:[
    {id:'it1',label:'Bangalore — Silicon Valley of India',sublabel:'ISRO, Infosys, Wipro, HAL HQ · Pleasant climate · IISc, IIM · India\'s IT capital',color:'#dcfce7',textColor:'#14532d'},
    {id:'it2',label:'Hyderabad — Cyberabad',sublabel:'HITEC City · Microsoft, Google, Amazon India HQ · NASSCOM hub · AP bifurcation impact',color:'#dcfce7',textColor:'#14532d'},
    {id:'it3',label:'Export contribution',sublabel:'IT-BPM exports $250 billion (2023-24) · 7.5% of India GDP · Largest service export',color:'#dcfce7',textColor:'#14532d'},
  ]},
  {id:'auto',label:'Automobile Industry',sublabel:'3rd largest globally · Chennai, Pune, NCR, Gujarat · 20 lakh crore turnover',color:'#dc2626',textColor:'#fff',children:[
    {id:'au1',label:'Chennai — Detroit of India',sublabel:'Hyundai, Ford, BMW, Renault · 35% India\'s car production · Tamil Nadu largest auto state',color:'#fee2e2',textColor:'#7f1d1d'},
    {id:'au2',label:'Pune & NCR cluster',sublabel:'Tata Motors (Pune) · Hero MotoCorp (Delhi) · Maruti (Gurugram) · 2-wheeler capital',color:'#fee2e2',textColor:'#7f1d1d'},
    {id:'au3',label:'EV transition 2024',sublabel:'PLI scheme for EVs · Tata Nexon EV · Ola Electric scooters · 30% EV target by 2030',color:'#fee2e2',textColor:'#7f1d1d'},
  ]},
  {id:'pharma',label:'Pharma & Chemical',sublabel:'Pharmacy of the World · Hyderabad, Ahmedabad, Mumbai · $50bn exports',color:'#0891b2',textColor:'#fff',children:[
    {id:'ph1',label:'India = Pharmacy of World',sublabel:'20% world generic drugs · 60% world vaccines · Hyderabad largest pharma cluster',color:'#cffafe',textColor:'#164e63'},
    {id:'ph2',label:'Petrochemicals',sublabel:'Reliance (Jamnagar — world\'s largest refinery) · HPCL, BPCL · Gujarat dominant',color:'#cffafe',textColor:'#164e63'},
    {id:'ph3',label:'COVID-19 vaccine role',sublabel:'India supplied 1.5 billion doses globally · Serum Institute, Bharat Biotech · Vaccine Maitri',color:'#cffafe',textColor:'#164e63'},
  ]},
]}
type MNode={id:string;label:string;sublabel:string;color:string;textColor:string;children?:MNode[]}
function MindNode({node,level=0}:{node:MNode;level?:number}){
  const [exp,setExp]=useState(level<2)
  const hasC=node.children&&node.children.length>0
  return(<div className="flex items-start"><button onClick={()=>hasC&&setExp(!exp)} style={{backgroundColor:node.color,color:node.textColor,minWidth:level===0?'220px':'200px',cursor:hasC?'pointer':'default'}} className="flex items-start gap-2 px-3 py-2.5 rounded-xl text-left transition-all hover:opacity-90 shadow-sm"><div className="flex-1"><div style={{fontSize:level===0?'13px':'12px',fontWeight:700,lineHeight:1.3}}>{node.label}</div><div style={{fontSize:'10px',opacity:0.85,marginTop:'3px',lineHeight:1.4}}>{node.sublabel}</div></div>{hasC&&<span style={{fontSize:'10px',opacity:0.7,flexShrink:0}}>{exp?'▼':'▶'}</span>}</button>{hasC&&exp&&(<div className="flex items-start ml-1"><div style={{width:'20px',display:'flex',alignItems:'center',alignSelf:'stretch'}}><div style={{width:'20px',height:'1.5px',backgroundColor:node.color,opacity:0.5}}></div></div><div className="flex flex-col gap-2">{node.children!.map(child=>(<div key={child.id}><MindNode node={child} level={level+1}/></div>))}</div></div>)}</div>)
}
export default function IndustriesPage(){
  const [activeTab,setActiveTab]=useState('notes')
  const [quizStarted,setQuizStarted]=useState(false)
  const [currentQ,setCurrentQ]=useState(0)
  const [selectedAnswer,setSelectedAnswer]=useState<number|null>(null)
  const [score,setScore]=useState(0)
  const quiz=[
    {q:'Which city is known as the "Manchester of India"?',options:['Ahmedabad','Mumbai','Coimbatore','Surat'],correct:1,exp:'Mumbai is called the "Manchester of India" because of its dominance in cotton textile industry. Mumbai has a humid climate (good for cotton spinning), a large port for importing raw cotton and exporting cloth, cheap hydroelectric power from Western Ghats, and a large labor pool.'},
    {q:'The Jamshedpur steel plant was set up by:',options:['SAIL','Tata Iron and Steel Company','Hindustan Steel Ltd','Bhilai Steel Plant'],correct:1,exp:'The Tata Iron and Steel Company (TISCO) set up the Jamshedpur steel plant in 1907 — India\'s first private sector steel plant. J.N. Tata selected the site at the confluence of Subarnarekha and Kharkai rivers for proximity to iron ore, coal and water.'},
    {q:'Which city is called the "Silicon Valley of India"?',options:['Mumbai','Chennai','Hyderabad','Bangalore'],correct:3,exp:'Bangalore (Bengaluru) is called the Silicon Valley of India due to its concentration of IT and software companies. Factors: pleasant climate, presence of ISRO/HAL/IISc, large talent pool from engineering colleges, and early start in IT with Texas Instruments setting up in 1985.'},
    {q:'India is called the "Pharmacy of the World" because:',options:['It has most pharmacists','It supplies 20% world generic drugs and 60% vaccines','It has most pharmaceutical colleges','It produces most raw medicines'],correct:1,exp:'India is called the Pharmacy of the World because it produces about 20% of all generic drugs globally and supplies 60% of the world\'s vaccine requirements. During COVID-19, India supplied over 1.5 billion vaccine doses to 100+ countries under Vaccine Maitri initiative.'},
    {q:'Which is the world\'s largest oil refinery?',options:['Bharat Petroleum Kochi','Reliance Jamnagar refinery','HPCL Vishakhapatnam','IOCL Panipat'],correct:1,exp:'The Reliance Industries refinery at Jamnagar in Gujarat is the world\'s largest oil refinery with a capacity of 1.24 million barrels per day. It is an integrated refining and petrochemical complex and gives India significant strategic advantage in refining capacity.'},
  ]
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 12</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Industries of India</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Iron·Textile·IT·Auto·Pharma</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019, 2016</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'3rd largest',l:'Auto industry globally'},{v:'$250bn',l:'IT exports 2024'},{v:'Pharmacy of World',l:'20% generic drugs'},{v:'Jamnagar',l:'World\'s largest refinery'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'mindmap',label:'🧠 Mind Map'},{id:'visual',label:'📐 Visual'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-slate-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Industries of India</div>
              <p className="text-sm leading-relaxed text-slate-200 mb-4">India has transformed from a predominantly agricultural economy to one with a powerful industrial base. From the coal-and-steel heartland of Jharkhand-Odisha to the IT corridors of Bangalore, from Mumbai's textile mills to Chennai's auto clusters — India's industrial geography reflects its colonial history, natural resource endowment, infrastructure development and policy choices. Understanding industrial location factors is crucial for UPSC.</p>
              <div className="grid grid-cols-4 gap-2">
                {[{v:'Iron & Steel',l:'Jharkhand, WB, KA'},{v:'Textiles',l:'Mumbai, Ahmedabad'},{v:'IT/Software',l:'Bangalore, Hyd'},{v:'Automobiles',l:'Chennai, Pune'}].map(s=>(
                  <div key={s.l} className="bg-slate-700 border border-slate-600 rounded-xl p-2.5 text-center">
                    <div className="text-xs font-bold text-white">{s.v}</div>
                    <div className="text-xs text-slate-300 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-slate-600 rounded-full"></div>
                <div className="text-sm font-bold text-slate-900">Major Industries — Location Factors & Distribution</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {name:'Iron & Steel Industry',color:'bg-gray-600',light:'bg-gray-50',border:'border-gray-300',
                    intro:'Iron and steel is the "mother of all industries" — it forms the foundation for all other manufacturing. India is the 2nd largest steel producer in the world (110 MT in 2023). The industry is clustered in the "Iron Ore-Coal Triangle" of Jharkhand-Odisha-Chhattisgarh.',
                    plants:[
                      {plant:'Jamshedpur (TISCO/Tata Steel)',state:'Jharkhand',setup:'1907 (private)',special:'First steel plant · Subarnarekha-Kharkai rivers · 10 MT capacity'},
                      {plant:'Bhilai Steel Plant',state:'Chhattisgarh',setup:'1959 (Soviet help)',special:'Largest SAIL plant · 7 MT · Near iron ore and coal'},
                      {plant:'Rourkela Steel Plant',state:'Odisha',setup:'1959 (West German)',special:'First public sector plant · Brahmani river · 4.5 MT'},
                      {plant:'Durgapur Steel Plant',state:'West Bengal',setup:'1959 (British)',special:'Damodar river · Raniganj coal nearby · 3 MT'},
                      {plant:'VISL Bhadravati',state:'Karnataka',setup:'1923',special:'Bhadra river · Manganese steel specialty'},
                    ]},
                  {name:'Textile Industry',color:'bg-violet-600',light:'bg-violet-50',border:'border-violet-200',
                    intro:'India\'s textile industry is one of the oldest and largest in the world — employing 45 million people directly (2nd largest employment after agriculture). India is the world\'s 2nd largest producer of textiles and 3rd largest cotton producer.',
                    plants:[
                      {plant:'Mumbai — Manchester of India',state:'Maharashtra',setup:'1850s onwards',special:'Humid climate + port + power + labour = cotton textile capital · 60+ mills historically'},
                      {plant:'Ahmedabad — Cottonopolis of India',state:'Gujarat',setup:'1860s',special:'Near Saurashtra cotton fields · Cheap power · Sabarmati river · Synthetic now dominant'},
                      {plant:'Coimbatore — Manchester of South',state:'Tamil Nadu',setup:'1930s',special:'Near cotton growing areas · Hydropower from W.Ghats · Spinning dominant'},
                      {plant:'Kolkata — Jute Capital',state:'West Bengal',setup:'1855',special:'Hooghly river · 85% of India\'s jute mills within 100km of Kolkata · World\'s largest jute manufacturer'},
                      {plant:'Varanasi, Kanchipuram',state:'UP, Tamil Nadu',setup:'Centuries old',special:'Handloom silk · Protected by GI tags · Artisan economy'},
                    ]},
                ].map(ind=>(
                  <div key={ind.name} className={`border-2 ${ind.border} rounded-2xl overflow-hidden`}>
                    <div className={`${ind.color} text-white px-5 py-3`}><div className="font-bold text-sm text-white">{ind.name}</div></div>
                    <div className={`p-4 ${ind.light}`}>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">{ind.intro}</p>
                      <div className="flex flex-col gap-2">
                        {ind.plants.map(p=>(
                          <div key={p.plant} className="bg-white rounded-xl p-3 border border-gray-100 grid grid-cols-4 gap-2">
                            <div className="font-bold text-xs text-gray-800 col-span-1">{p.plant}</div>
                            <div className="text-xs text-gray-500">{p.state}</div>
                            <div className="text-xs text-gray-500">{p.setup}</div>
                            <div className="text-xs text-gray-600 italic">{p.special}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab==='mindmap'&&(<div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-auto"><div className="text-sm font-semibold text-gray-900 mb-1">Industries Mind Map</div><div className="text-xs text-gray-400 mb-4">Click to expand — 5 industries, 3 nodes each</div><div className="overflow-x-auto pb-6"><MindNode node={mindmap} level={0}/></div></div>)}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">Industrial Clusters Map of India</div>
            <svg viewBox="0 0 700 420" width="100%">
              <rect width="700" height="420" fill="#f0f9ff" rx="12"/>
              <text x="350" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">Major Industrial Clusters — India</text>
              {[
                {x:120,y:80,label:'Ludhiana',industry:'Woolen textiles\nCycle industry\nHosiery',color:'#7c3aed'},
                {x:200,y:120,label:'NCR Delhi',industry:'Electronics\nAutomobiles\nPharma',color:'#2563eb'},
                {x:100,y:200,label:'Jamnagar',industry:'World\'s largest\nrefinery\nPetrochemicals',color:'#d97706'},
                {x:160,y:280,label:'Mumbai',industry:'Manchester of India\nCotton textiles\nFinance\nFilm industry',color:'#dc2626'},
                {x:200,y:340,label:'Pune',industry:'Automobile hub\nTata, Bajaj\nIT corridor',color:'#059669'},
                {x:380,y:140,label:'Jamshedpur',industry:'Tata Steel\nFirst steel plant\n1907',color:'#374151'},
                {x:440,y:180,label:'Durgapur-Bokaro',industry:'Steel plants\nDamodar Valley\nCoal+Iron',color:'#374151'},
                {x:480,y:240,label:'Rourkela',industry:'Steel plant\nOdisha\nGerman help',color:'#374151'},
                {x:400,y:300,label:'Hyderabad',industry:'Cyberabad\nIT-BPM\nPharma cluster',color:'#059669'},
                {x:340,y:360,label:'Bangalore',industry:'Silicon Valley India\nIT·ISRO·HAL\nAerospace',color:'#059669'},
                {x:490,y:360,label:'Chennai',industry:'Detroit of India\nAuto industry\nIT+Textile',color:'#dc2626'},
              ].map(c=>(
                <g key={c.label}>
                  <circle cx={c.x} cy={c.y} r="8" fill={c.color} opacity="0.9"/>
                  <rect x={c.x+12} y={c.y-20} width="130" height={c.industry.split('\n').length*14+20} rx="6" fill="white" stroke={c.color} strokeWidth="1.5" opacity="0.95"/>
                  <text x={c.x+18} y={c.y-6} fontSize="9" fontWeight="700" fill={c.color}>{c.label}</text>
                  {c.industry.split('\n').map((line,i)=>(
                    <text key={line} x={c.x+18} y={c.y+8+i*13} fontSize="8" fill="#374151">{line}</text>
                  ))}
                </g>
              ))}
              <rect x="10" y="340" width="90" height="70" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="55" y="358" textAnchor="middle" fontSize="9" fontWeight="600" fill="#374151">LEGEND</text>
              {[{color:'#374151',label:'Steel'},{color:'#dc2626',label:'Textile/Auto'},{color:'#059669',label:'IT/Software'},{color:'#d97706',label:'Petro/Chemical'}].map((l,i)=>(
                <g key={l.label}>
                  <circle cx="22" cy={372+i*12} r="4" fill={l.color}/>
                  <text x="30" y={376+i*12} fontSize="8" fill="#374151">{l.label}</text>
                </g>
              ))}
            </svg>
          </div>
        )}
        {activeTab==='pyq'&&(<div className="bg-white border border-gray-100 rounded-xl p-5"><div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div><div className="flex flex-col gap-3">{[{year:'2022 Mains GS-I',q:'Explain the factors responsible for the localization of the cotton textile industry in Mumbai and Ahmedabad.'},{year:'2019 Prelims',q:'Which city is known as the Silicon Valley of India?'},{year:'2016 Mains GS-III',q:'Discuss the growth of the IT industry in India and its impact on regional development.'},{year:'2014 Prelims',q:'Which of the following steel plants was established with Soviet assistance?'}].map((p,i)=>(<div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50"><span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{p.year}</span><div className="text-sm text-gray-700 mt-2">{p.q}</div></div>))}</div></div>)}
        {activeTab==='quiz'&&(<div className="bg-white border border-gray-100 rounded-xl p-6">{!quizStarted?(<div className="text-center py-10"><div className="text-5xl mb-4">🏭</div><div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Industries</div><div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div><button onClick={()=>setQuizStarted(true)} className="bg-slate-700 text-white px-10 py-3 rounded-xl font-medium text-sm">Start Quiz →</button></div>):currentQ<quiz.length?(<div className="max-w-2xl mx-auto"><div className="flex items-center gap-3 mb-6"><div className="text-sm text-gray-500">Q {currentQ+1}/{quiz.length}</div><div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-slate-600 rounded-full" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div><div className="text-sm font-medium text-slate-700">Score: {score}</div></div><div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div><div className="flex flex-col gap-3 mb-5">{quiz[currentQ].options.map((opt,i)=>(<button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}} className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-slate-400 hover:bg-slate-50':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}><span className="font-bold mr-3 text-gray-400">{String.fromCharCode(65+i)}.</span>{opt}{selectedAnswer!==null&&i===quiz[currentQ].correct&&<span className="ml-2 text-green-600">✓</span>}{selectedAnswer===i&&i!==quiz[currentQ].correct&&<span className="ml-2 text-red-600">✗</span>}</button>))}</div>{selectedAnswer!==null&&(<><div className={`rounded-xl p-4 mb-5 ${selectedAnswer===quiz[currentQ].correct?'bg-green-50 border border-green-200':'bg-red-50 border border-red-200'}`}><div className={`text-sm font-semibold mb-1 ${selectedAnswer===quiz[currentQ].correct?'text-green-800':'text-red-800'}`}>{selectedAnswer===quiz[currentQ].correct?'✓ Correct!':'✗ Incorrect'}</div><div className="text-sm text-gray-700">{quiz[currentQ].exp}</div></div><button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-slate-700 text-white px-6 py-2.5 rounded-xl text-sm">{currentQ<quiz.length-1?'Next →':'Results →'}</button></>)}</div>):(<div className="text-center py-10"><div className="text-5xl mb-4">{score>=4?'🏆':'📚'}</div><div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div><div className="flex gap-3 justify-center mt-6"><button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-slate-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button><button onClick={()=>setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm">Review Notes</button></div></div>)}</div>)}
        {activeTab==='predict'&&(<div className="bg-white border border-gray-100 rounded-xl p-5"><div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div><div className="flex flex-col gap-3">{[{q:'PLI (Production Linked Incentive) scheme — impact on manufacturing, sectors covered, achievements and challenges',prob:92},{q:'India as Pharmacy of the World — generic drugs, vaccine diplomacy, challenges from China competition',prob:88},{q:'EV transition in India — automobile industry challenges, PLI for EVs, charging infrastructure',prob:84},{q:'IT industry and remote work revolution — India\'s GCC (Global Capability Centres) boom post-COVID',prob:76}].map((pred,i)=>(<div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4"><div className="flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div><div className="flex-1"><div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div><div className="flex items-center gap-2"><div className="flex-1 h-2 bg-slate-100 rounded-full"><div className="h-2 bg-slate-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-slate-700">{pred.prob}%</span></div></div></div></div>))}</div></div>)}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/11" className="text-sm text-green-600">← Minerals & Energy</a>
          <div className="text-xs text-gray-400">Topic 12 of 20</div>
          <a href="/subjects/geography/13" className="text-sm text-green-600">Transport →</a>
        </div>
      </div>
    </div>
  )
}