'use client'
import { useState } from 'react'
const mindmap={id:'root',label:'Industries of India',sublabel:'Primary · Secondary · Tertiary',color:'#1e40af',textColor:'#fff',children:[
  {id:'iron',label:'Iron & Steel Industry',sublabel:'Base of industrialization · Jharkhand, WB, Odisha · Public + Private sector',color:'#1d4ed8',textColor:'#fff',children:[
    {id:'is1',label:'SAIL Plants',sublabel:'Bhilai (CG) · Bokaro (JH) · Rourkela (Odisha) · Durgapur (WB) · Burnpur · All public sector',color:'#dbeafe',textColor:'#1e40af'},
    {id:'is2',label:'Private Steel',sublabel:'Tata Steel (Jamshedpur) · JSW (Bellary, Karnataka) · JSPL · ArcelorMittal Nippon',color:'#dbeafe',textColor:'#1e40af'},
    {id:'is3',label:'Location factors',sublabel:'Near coal (raw material) + iron ore + water + transport · Damodar Valley ideal',color:'#dbeafe',textColor:'#1e40af'},
  ]},
  {id:'textile',label:'Textile Industry',sublabel:'Largest employer · Cotton, Jute, Silk, Synthetic · Mumbai, Ahmedabad, Coimbatore',color:'#7c3aed',textColor:'#fff',children:[
    {id:'t1',label:'Cotton Textile',sublabel:'Mumbai (Manchester of India) · Ahmedabad · Coimbatore · Largest industrial employer',color:'#ede9fe',textColor:'#4c1d95'},
    {id:'t2',label:'Jute Industry',sublabel:'West Bengal (Hugli river belt) · Kolkata surrounds · Declining due to synthetics',color:'#ede9fe',textColor:'#4c1d95'},
    {id:'t3',label:'Silk & Handloom',sublabel:'Varanasi (Banarasi) · Kanchipuram · Assam (Muga silk) · Mysore silk',color:'#ede9fe',textColor:'#4c1d95'},
  ]},
  {id:'it',label:'IT & Pharma Industry',sublabel:'Knowledge economy · Bangalore · Hyderabad · India pharmacy of world',color:'#059669',textColor:'#fff',children:[
    {id:'it1',label:'IT/Software (Bangalore)',sublabel:'Silicon Valley of India · Whitefield, Electronic City · Infosys, Wipro, TCS HQ',color:'#dcfce7',textColor:'#065f46'},
    {id:'it2',label:'Pharma (Hyderabad)',sublabel:'Pharma City · India = 60% world generic drugs · Dr Reddy\'s, Sun Pharma, Cipla',color:'#dcfce7',textColor:'#065f46'},
    {id:'it3',label:'Sunrise industries',sublabel:'EV manufacturing · Defence production · Space economy · Semiconductor fabrication',color:'#dcfce7',textColor:'#065f46'},
  ]},
  {id:'auto',label:'Automobile Industry',sublabel:'3rd largest globally · Chennai (Detroit of Asia) · Pune · Gurugram',color:'#d97706',textColor:'#fff',children:[
    {id:'a1',label:'Chennai cluster',sublabel:'"Detroit of Asia" · Hyundai, Ford, Renault-Nissan · Tamil Nadu 35% auto production',color:'#fef3c7',textColor:'#78350f'},
    {id:'a2',label:'Pune & Gurugram',sublabel:'Pune: Bajaj, Mercedes · Gurugram: Maruti Suzuki, Hero MotoCorp · NCR auto hub',color:'#fef3c7',textColor:'#78350f'},
    {id:'a3',label:'EV transition',sublabel:'PLI scheme for EVs · Tata, MG, BYD leading · Charging infrastructure challenge',color:'#fef3c7',textColor:'#78350f'},
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
export default function IndustriesPage(){
  const [activeTab,setActiveTab]=useState('notes')
  const [quizStarted,setQuizStarted]=useState(false)
  const [currentQ,setCurrentQ]=useState(0)
  const [selectedAnswer,setSelectedAnswer]=useState<number|null>(null)
  const [score,setScore]=useState(0)
  const quiz=[
    {q:'Jamshedpur is famous for which industry?',options:['Cotton textile','Iron and steel','Petroleum refining','Information technology'],correct:1,exp:'Jamshedpur (Jharkhand) is home to Tata Steel — India\'s first and one of the largest private steel plants. It was established by Jamsetji Tata in 1907. Location factors: proximity to iron ore (Singhbhum), coal (Jharia), limestone and water from Subarnarekha river.'},
    {q:'Which city is called the "Manchester of India"?',options:['Ahmedabad','Mumbai','Coimbatore','Surat'],correct:1,exp:'Mumbai is called the "Manchester of India" because of its large cotton textile industry. Mumbai\'s development as a cotton textile hub was due to: proximity to cotton-growing Deccan, port for importing machinery and exporting goods, humid climate (helps spinning), and availability of capital.'},
    {q:'India produces approximately what percentage of the world\'s generic medicines?',options:['20%','40%','60%','80%'],correct:2,exp:'India produces about 60% of the world\'s generic medicines and vaccines — earning the title "Pharmacy of the World." Hyderabad (Pharma City), Ahmedabad, Mumbai and Baddi (HP) are major pharma hubs. India supplied COVID-19 vaccines to 150+ countries through COVAX.'},
    {q:'Which city is called the "Silicon Valley of India"?',options:['Hyderabad','Pune','Bangalore (Bengaluru)','Chennai'],correct:2,exp:'Bengaluru (Bangalore) is called the Silicon Valley of India because of its concentration of IT companies, startups and software exports. It hosts Infosys, Wipro, TCS HQs, and Electronic City and Whitefield as major IT parks. India\'s IT exports exceed $250 billion annually.'},
    {q:'The Bhilai Steel Plant is located in which state?',options:['Jharkhand','Odisha','Chhattisgarh','West Bengal'],correct:2,exp:'The Bhilai Steel Plant is located in Chhattisgarh — it was the first steel plant built with Soviet assistance after independence (1959). Bhilai is a SAIL (Steel Authority of India Limited) plant. Chhattisgarh has abundant iron ore, coal and limestone — all raw materials for steel.'},
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
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Steel · Textile · IT · Auto</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018, 2015</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'3rd largest',l:'Auto industry globally'},{v:'60% world',l:'Generic medicines'},{v:'$250 bn+',l:'IT exports annually'},{v:'Tata Steel',l:'1907 first private steel'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'mindmap',label:'🧠 Mind Map'},{id:'visual',label:'📐 Visual'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-blue-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Industries of India</div>
              <p className="text-sm leading-relaxed text-blue-100 mb-4">India's industrial landscape has transformed dramatically since independence. From a predominantly agrarian economy, India has built world-class industries in steel, textiles, pharmaceuticals, automobiles and IT. India is now the world's 5th largest economy and aspiring to become a $5 trillion economy by 2025-26 and a developed nation by 2047 (Viksit Bharat). Understanding industrial geography — location factors, clusters and value chains — is critical for UPSC.</p>
              <div className="grid grid-cols-4 gap-2">
                {[{v:'Iron & Steel',l:'Heavy industry base'},{v:'Textiles',l:'Largest employer'},{v:'IT/Software',l:'$250bn+ exports'},{v:'Pharma',l:'60% world generics'},{v:'Automobile',l:'3rd largest globally'},{v:'Cement',l:'2nd largest producer'},{v:'Defence',l:'Make in India push'},{v:'Space',l:'ISRO commercializing'}].map(s=>(
                  <div key={s.v} className="bg-blue-700 border border-blue-600 rounded-lg p-2 text-center">
                    <div className="text-xs font-bold text-white">{s.v}</div>
                    <div className="text-xs text-blue-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-blue-600 rounded-full"></div>
                <div className="text-sm font-bold text-blue-900">Major Industries — Location, Significance & Challenges</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {name:'Iron & Steel Industry',icon:'🔩',color:'bg-gray-50 border-gray-300',tc:'text-gray-900',
                    why:'Base metal for all other industries — called the "mother of all industries." India is world\'s 2nd largest steel producer (2024).',
                    plants:[
                      {plant:'Bhilai Steel Plant',state:'Chhattisgarh',type:'SAIL (Public)·Soviet aided·1959·Bhilai is now called Steel City of India'},
                      {plant:'Bokaro Steel Plant',state:'Jharkhand',type:'SAIL (Public)·Soviet aided·1964·Largest integrated steel plant in India'},
                      {plant:'Rourkela Steel Plant',state:'Odisha',type:'SAIL (Public)·German aided·1959·First public sector steel plant'},
                      {plant:'Durgapur Steel Plant',state:'West Bengal',type:'SAIL (Public)·British aided·1959·Damodar Valley location'},
                      {plant:'Tata Steel Jamshedpur',state:'Jharkhand',type:'Private·1907·First steel plant in India·Oldest'},
                      {plant:'JSW Steel Bellary',state:'Karnataka',type:'Private·Near iron ore mines·2nd largest private steel'},
                    ],
                    locationFactors:'Coal (Jharia, Bokaro) + Iron ore (Singhbhum, Keonjhar) + Water (Damodar, Subarnarekha) + Limestone + Labour + Transport',
                    challenge:'High cost of coking coal (imported from Australia) · Environmental pollution · Competition from cheaper Chinese steel'},
                  {name:'Cotton Textile Industry',icon:'🧵',color:'bg-purple-50 border-purple-200',tc:'text-purple-900',
                    why:'Oldest and largest industry in India — employs 45 million people (2nd largest employer after agriculture). India world\'s 2nd largest exporter of textiles.',
                    plants:[
                      {plant:'Mumbai',state:'Maharashtra',type:'"Manchester of India"·Cotton port·Finance capital·Humid climate for spinning'},
                      {plant:'Ahmedabad',state:'Gujarat',type:'"Manchester of East"·Second largest centre·Near cotton fields of Saurashtra'},
                      {plant:'Coimbatore',state:'Tamil Nadu',type:'"Manchester of South India"·Spinning hub·Good power supply'},
                      {plant:'Surat',state:'Gujarat',type:'Diamond cutting + Synthetic textile hub·World largest diamond cutting centre'},
                      {plant:'Ludhiana',state:'Punjab',type:'Woollen textile hub·Hosiery capital of India·Winter garments'},
                      {plant:'Varanasi/Kanchipuram',state:'UP/Tamil Nadu',type:'Silk weaving·Handloom·GI-tagged products·Cultural textile heritage'},
                    ],
                    locationFactors:'Proximity to cotton fields · Port for import/export · Humid climate · Labour · Capital (Mumbai) · Water',
                    challenge:'Competition from Bangladesh and Vietnam · Power shortages · Old machinery · China competition · Declining mill culture'},
                  {name:'Information Technology Industry',icon:'💻',color:'bg-green-50 border-green-200',tc:'text-green-900',
                    why:'India\'s biggest foreign exchange earner — IT-BPM exports of $250+ billion (2023-24). Employs 5.4 million people directly. India has 3rd largest startup ecosystem globally.',
                    plants:[
                      {plant:'Bengaluru',state:'Karnataka',type:'"Silicon Valley of India"·Infosys, Wipro, TCS, HAL·Electronic City, Whitefield IT parks'},
                      {plant:'Hyderabad',state:'Telangana',type:'"Cyberabad"·Microsoft, Amazon, Google India HQs·HITEC City·Also pharma hub'},
                      {plant:'Pune',state:'Maharashtra',type:'IT + Auto hub·Infosys, Cognizant·MBA capital·Defense research (DRDO)'},
                      {plant:'Chennai',state:'Tamil Nadu',type:'IT + Automobile·"Detroit of Asia"·Zoho India HQ·Tidel Park IT hub'},
                      {plant:'NCR (Noida/Gurugram)',state:'Delhi NCR',type:'Biggest BPO hub·Gurugram=Fortune 500 India offices·Startup hub'},
                      {plant:'Mumbai',state:'Maharashtra',type:'BFSI + IT·Financial technology·Media & entertainment IT'},
                    ],
                    locationFactors:'English-speaking technical talent · IITs and IIMs nearby · Good infrastructure · Business-friendly policies · Time zone advantage for US market',
                    challenge:'Global slowdown affecting IT hiring · AI disruption of BPO jobs · Tier-2 city talent shortage · Visa restrictions for H1-B workers in USA'},
                ].map(ind=>(
                  <div key={ind.name} className={`border-2 ${ind.color} rounded-2xl overflow-hidden`}>
                    <div className="bg-white px-5 py-3 border-b border-gray-100 flex items-center gap-2">
                      <span className="text-xl">{ind.icon}</span>
                      <div className={`text-sm font-bold ${ind.tc}`}>{ind.name}</div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{ind.why}</p>
                      <div className="text-xs font-bold text-gray-700 mb-2">Major Centres</div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {ind.plants.map(p=>(
                          <div key={p.plant} className="bg-white border border-gray-100 rounded-lg p-2">
                            <div className="text-xs font-semibold text-gray-800">{p.plant} ({p.state})</div>
                            <div className="text-xs text-gray-500 mt-0.5">{p.type}</div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded-xl p-3">
                          <div className="text-xs font-bold text-blue-800 mb-1">Location factors</div>
                          <p className="text-xs text-gray-700">{ind.locationFactors}</p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-3">
                          <div className="text-xs font-bold text-red-800 mb-1">Challenges</div>
                          <p className="text-xs text-gray-700">{ind.challenge}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab==='mindmap'&&(<div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-auto"><div className="text-sm font-semibold text-gray-900 mb-1">Industries Mind Map</div><div className="text-xs text-gray-400 mb-5">Click to expand</div><div className="overflow-x-auto pb-6"><MindNode node={mindmap} level={0}/></div></div>)}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">Industrial Clusters of India — Schematic Map</div>
            <svg viewBox="0 0 700 450" width="100%">
              <rect width="700" height="450" fill="#f0f9ff" rx="12"/>
              {[
                {x:80,y:60,label:'🔩 Steel Belt',detail:'Jamshedpur · Bokaro · Bhilai · Rourkela · Durgapur',color:'#374151',fill:'#f3f4f6'},
                {x:350,y:60,label:'💻 IT Corridor',detail:'Bengaluru · Hyderabad · Pune · Chennai · NCR',color:'#1d4ed8',fill:'#dbeafe'},
                {x:580,y:60,label:'🧵 Textile Hub',detail:'Mumbai · Ahmedabad · Coimbatore · Surat · Ludhiana',color:'#7c3aed',fill:'#ede9fe'},
                {x:80,y:180,label:'🚗 Auto Cluster',detail:'Chennai (Detroit of Asia) · Pune · Gurugram · Ahmedabad',color:'#d97706',fill:'#fef3c7'},
                {x:350,y:180,label:'💊 Pharma Hub',detail:'Hyderabad · Ahmedabad · Mumbai · Baddi (HP) · Pune',color:'#059669',fill:'#dcfce7'},
                {x:580,y:180,label:'💎 Diamond Cut',detail:'Surat (Gujarat) cuts 90% world diamonds · Jaipur gems',color:'#db2777',fill:'#fce7f3'},
                {x:80,y:300,label:'🚀 Space & Defence',detail:'Bengaluru (ISRO HQ) · Hyderabad (DRDO) · Pune · Chennai',color:'#0891b2',fill:'#cffafe'},
                {x:350,y:300,label:'⚡ Renewable Energy',detail:'Rajasthan (Solar) · Tamil Nadu (Wind) · Gujarat · Karnataka',color:'#15803d',fill:'#dcfce7'},
                {x:580,y:300,label:'🛢️ Petroleum',detail:'Mumbai High · Gujarat (Jamnagar largest refinery) · Assam',color:'#dc2626',fill:'#fee2e2'},
              ].map(c=>(
                <g key={c.label}>
                  <rect x={c.x} y={c.y} width="200" height="100" rx="10" fill={c.fill} stroke={c.color} strokeWidth="2"/>
                  <text x={c.x+100} y={c.y+28} textAnchor="middle" fontSize="11" fontWeight="700" fill={c.color}>{c.label}</text>
                  <text x={c.x+10} y={c.y+50} fontSize="8" fill="#374151">{c.detail.split(' · ').slice(0,2).join(' · ')}</text>
                  <text x={c.x+10} y={c.y+64} fontSize="8" fill="#374151">{c.detail.split(' · ').slice(2).join(' · ')}</text>
                </g>
              ))}
              <rect x="100" y="410" width="500" height="30" rx="6" fill="#1e40af" opacity="0.9"/>
              <text x="350" y="430" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">Make in India · PLI Schemes · Industrial Corridors (DMIC, CBIC, AKIC) transforming manufacturing geography</text>
            </svg>
          </div>
        )}
        {activeTab==='pyq'&&(<div className="bg-white border border-gray-100 rounded-xl p-5"><div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div><div className="flex flex-col gap-3">{[{year:'2021 Prelims',q:'Which city is known as the "Detroit of Asia" due to its automobile industry?'},{year:'2019 Mains GS-III',q:'Discuss the significance of the pharmaceutical industry in India. Why is India called the "Pharmacy of the World"?'},{year:'2018 Prelims',q:'The Bhilai Steel Plant was established with the assistance of which country?'},{year:'2015 Prelims',q:'Mumbai is called the "Manchester of India" due to which industry?'},{year:'2013 Mains GS-I',q:'Discuss the factors responsible for the location of iron and steel industries in India.'}].map((p,i)=>(<div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50"><span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{p.year}</span><div className="text-sm text-gray-700 mt-2">{p.q}</div></div>))}</div></div>)}
        {activeTab==='quiz'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            {!quizStarted?(<div className="text-center py-10"><div className="text-5xl mb-4">🏭</div><div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Industries</div><div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div><button onClick={()=>setQuizStarted(true)} className="bg-blue-700 text-white px-10 py-3 rounded-xl font-medium text-sm">Start Quiz →</button></div>)
            :currentQ<quiz.length?(<div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6"><div className="text-sm text-gray-500">Q {currentQ+1}/{quiz.length}</div><div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-blue-600 rounded-full" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div><div className="text-sm font-medium text-blue-700">Score: {score}</div></div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">{quiz[currentQ].options.map((opt,i)=>(<button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}} className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}><span className="font-bold mr-3 text-gray-400">{String.fromCharCode(65+i)}.</span>{opt}{selectedAnswer!==null&&i===quiz[currentQ].correct&&<span className="ml-2 text-green-600">✓</span>}{selectedAnswer===i&&i!==quiz[currentQ].correct&&<span className="ml-2 text-red-600">✗</span>}</button>))}</div>
                {selectedAnswer!==null&&(<><div className={`rounded-xl p-4 mb-5 ${selectedAnswer===quiz[currentQ].correct?'bg-green-50 border border-green-200':'bg-red-50 border border-red-200'}`}><div className={`text-sm font-semibold mb-1 ${selectedAnswer===quiz[currentQ].correct?'text-green-800':'text-red-800'}`}>{selectedAnswer===quiz[currentQ].correct?'✓ Correct!':'✗ Incorrect'}</div><div className="text-sm text-gray-700">{quiz[currentQ].exp}</div></div><button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm">{currentQ<quiz.length-1?'Next →':'Results →'}</button></>)}
              </div>)
            :(<div className="text-center py-10"><div className="text-5xl mb-4">{score>=4?'🏆':'📚'}</div><div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div><div className="flex gap-3 justify-center mt-6"><button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-blue-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button><button onClick={()=>setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm">Review Notes</button></div></div>)}
          </div>
        )}
        {activeTab==='predict'&&(<div className="bg-white border border-gray-100 rounded-xl p-5"><div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div><div className="flex flex-col gap-3">{[{q:'PLI (Production Linked Incentive) schemes — impact on manufacturing, sectors covered and achievements',prob:90},{q:'Make in India and Viksit Bharat — semiconductor manufacturing, EV ecosystem and defence exports',prob:87},{q:'IT industry and AI disruption — impact on jobs, India\'s reskilling challenge',prob:82},{q:'Industrial corridors — DMIC and other corridors — transforming industrial geography of India',prob:75}].map((pred,i)=>(<div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-4"><div className="flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div><div className="flex-1"><div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div><div className="flex items-center gap-2"><div className="flex-1 h-2 bg-blue-100 rounded-full"><div className="h-2 bg-blue-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-blue-700">{pred.prob}%</span></div></div></div></div>))}</div></div>)}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/11" className="text-sm text-green-600">← Minerals & Energy</a>
          <div className="text-xs text-gray-400">Topic 12 of 20</div>
          <a href="/subjects/geography/13" className="text-sm text-green-600">Transport →</a>
        </div>
      </div>
    </div>
  )
}