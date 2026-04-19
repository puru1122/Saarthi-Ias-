'use client'
import { useState } from 'react'
const mindmap={id:'root',label:'Minerals & Energy',sublabel:'Non-renewable vs Renewable',color:'#1e40af',textColor:'#fff',children:[
  {id:'metallic',label:'Metallic Minerals',sublabel:'Iron ore, Copper, Bauxite, Manganese, Gold',color:'#1d4ed8',textColor:'#fff',children:[
    {id:'m1',label:'Iron Ore',sublabel:'Jharkhand, Odisha, Chhattisgarh · Magnetite & Haematite · Singhbhum belt · 8% world reserves',color:'#dbeafe',textColor:'#1e40af'},
    {id:'m2',label:'Copper & Bauxite',sublabel:'Copper: Singhbhum (JH), Khetri (RJ) · Bauxite: Odisha, JH · Aluminium ore',color:'#dbeafe',textColor:'#1e40af'},
    {id:'m3',label:'Manganese & Gold',sublabel:'Manganese: Odisha, Karnataka · Gold: Kolar (KA), Hutti (KA) · India 4th manganese producer',color:'#dbeafe',textColor:'#1e40af'},
  ]},
  {id:'nonmetallic',label:'Non-Metallic Minerals',sublabel:'Mica, Limestone, Coal · Industrial minerals',color:'#0891b2',textColor:'#fff',children:[
    {id:'nm1',label:'Mica',sublabel:'India 80% world production · Jharkhand, Rajasthan, AP · Electrical insulation · Cosmetics',color:'#cffafe',textColor:'#164e63'},
    {id:'nm2',label:'Coal',sublabel:'Gondwana coal 98% reserves · Damodar Valley, Mahanadi · Jharia (largest coalfield)',color:'#cffafe',textColor:'#164e63'},
    {id:'nm3',label:'Limestone',sublabel:'Cement industry raw material · MP, Rajasthan, Gujarat · India 2nd largest cement producer',color:'#cffafe',textColor:'#164e63'},
  ]},
  {id:'conventional',label:'Conventional Energy',sublabel:'Coal, Petroleum, Natural Gas · Non-renewable',color:'#dc2626',textColor:'#fff',children:[
    {id:'ce1',label:'Coal Power 50%',sublabel:'India 4th largest coal reserves · 3rd largest producer · Coal India Ltd · Jharkhand, Odisha',color:'#fee2e2',textColor:'#7f1d1d'},
    {id:'ce2',label:'Petroleum & Gas',sublabel:'Mumbai High (offshore) · Bombay basin · Rajasthan · Krishna-Godavari basin (KG-D6)',color:'#fee2e2',textColor:'#7f1d1d'},
    {id:'ce3',label:'Nuclear Energy',sublabel:'Uranium: Jaduguda (JH) · 23 reactors · NPCIL · Kudankulam · 3% of electricity',color:'#fee2e2',textColor:'#7f1d1d'},
  ]},
  {id:'renewable',label:'Renewable Energy',sublabel:'Solar, Wind, Hydro · 500 GW target 2030',color:'#15803d',textColor:'#fff',children:[
    {id:'re1',label:'Solar Power',sublabel:'India 4th largest capacity · Rajasthan, Gujarat, AP · Pavagada, Rewa · 166 GW installed 2024',color:'#dcfce7',textColor:'#14532d'},
    {id:'re2',label:'Wind Energy',sublabel:'India 4th wind capacity · Tamil Nadu, Gujarat, Rajasthan · Muppandal wind farm · 44 GW capacity',color:'#dcfce7',textColor:'#14532d'},
    {id:'re3',label:'Hydropower',sublabel:'India 5th largest · Bhakra Nangal, Tehri, Hirakud · NE India potential · 47 GW capacity',color:'#dcfce7',textColor:'#14532d'},
  ]},
]}
type MNode={id:string;label:string;sublabel:string;color:string;textColor:string;children?:MNode[]}
function MindNode({node,level=0}:{node:MNode;level?:number}){
  const [exp,setExp]=useState(level<2)
  const hasC=node.children&&node.children.length>0
  return(<div className="flex items-start"><button onClick={()=>hasC&&setExp(!exp)} style={{backgroundColor:node.color,color:node.textColor,minWidth:level===0?'220px':'200px',cursor:hasC?'pointer':'default'}} className="flex items-start gap-2 px-3 py-2.5 rounded-xl text-left transition-all hover:opacity-90 shadow-sm"><div className="flex-1"><div style={{fontSize:level===0?'13px':'12px',fontWeight:700,lineHeight:1.3}}>{node.label}</div><div style={{fontSize:'10px',opacity:0.85,marginTop:'3px',lineHeight:1.4}}>{node.sublabel}</div></div>{hasC&&<span style={{fontSize:'10px',opacity:0.7,flexShrink:0}}>{exp?'▼':'▶'}</span>}</button>{hasC&&exp&&(<div className="flex items-start ml-1"><div style={{width:'20px',display:'flex',alignItems:'center',alignSelf:'stretch'}}><div style={{width:'20px',height:'1.5px',backgroundColor:node.color,opacity:0.5}}></div></div><div className="flex flex-col gap-2">{node.children!.map(child=>(<div key={child.id}><MindNode node={child} level={level+1}/></div>))}</div></div>)}</div>)
}
export default function MineralsPage(){
  const [activeTab,setActiveTab]=useState('notes')
  const [quizStarted,setQuizStarted]=useState(false)
  const [currentQ,setCurrentQ]=useState(0)
  const [selectedAnswer,setSelectedAnswer]=useState<number|null>(null)
  const [score,setScore]=useState(0)
  const quiz=[
    {q:'Jharia coalfield is located in which state?',options:['Odisha','West Bengal','Jharkhand','Chhattisgarh'],correct:2,exp:'Jharia coalfield in Jharkhand is the largest coalfield in India and the only source of prime coking coal. It has been continuously burning underground for over 100 years — causing massive environmental and human displacement issues.'},
    {q:'India produces approximately 80% of the world\'s supply of which mineral?',options:['Iron ore','Copper','Mica','Manganese'],correct:2,exp:'India produces about 80% of the world\'s mica — making it by far the world\'s largest mica producer. Mica is found in Jharkhand, Rajasthan and Andhra Pradesh. It is used in electrical insulation, electronics and cosmetics.'},
    {q:'Mumbai High is associated with:',options:['Iron ore mining','Offshore petroleum production','Wind energy','Coal mining'],correct:1,exp:'Mumbai High (also called Bombay High) is India\'s largest offshore oil field, located in the Arabian Sea about 160 km northwest of Mumbai. It accounts for a significant portion of India\'s domestic crude oil production. Operated by ONGC.'},
    {q:'India\'s renewable energy target for 2030 is:',options:['250 GW','350 GW','500 GW','175 GW'],correct:2,exp:'India has set an ambitious target of 500 GW of non-fossil fuel electricity generation capacity by 2030 — as part of its NDC (Nationally Determined Contribution) under the Paris Agreement. Solar and wind are the main drivers of this target.'},
    {q:'The Kolar Gold Fields (KGF) are located in which state?',options:['Rajasthan','Jharkhand','Karnataka','Tamil Nadu'],correct:2,exp:'Kolar Gold Fields (KGF) are located in Karnataka. They were once among the world\'s deepest gold mines (3.2 km depth). The mines were officially closed in 2001 due to high production costs and depletion of reserves. The KGF story was made famous by the Bollywood film KGF.'},
  ]
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 11</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Minerals & Energy Resources</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Metallic · Non-metallic · Energy</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2020, 2018</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'4th largest',l:'Coal reserves'},{v:'80%',l:'World mica supply'},{v:'500 GW',l:'RE target 2030'},{v:'KG-D6',l:'Largest gas field'}].map(s=>(
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
            <div className="bg-gradient-to-br from-blue-800 to-slate-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Minerals & Energy Resources of India</div>
              <p className="text-sm leading-relaxed text-blue-100 mb-4">India is richly endowed with both mineral and energy resources. The Peninsular Plateau — formed from ancient Gondwana rock — is the treasure house of India's minerals. Jharkhand, Odisha, Chhattisgarh and MP together form the mineral heartland. Meanwhile, India is rapidly transforming its energy sector — moving from coal dependence to becoming a global renewable energy powerhouse with 500 GW target by 2030.</p>
              <div className="grid grid-cols-4 gap-2">
                {[{v:'Iron Ore',l:'4th world producer'},{v:'Coal',l:'4th largest reserves'},{v:'Mica',l:'80% world supply'},{v:'Solar',l:'4th largest capacity'}].map(s=>(
                  <div key={s.l} className="bg-blue-700 border border-blue-600 rounded-xl p-2.5 text-center">
                    <div className="text-xs font-bold text-white">{s.v}</div>
                    <div className="text-xs text-blue-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-blue-600 rounded-full"></div>
                <div className="text-sm font-bold text-blue-900">Major Mineral Belts of India</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                {[
                  {mineral:'Iron Ore',color:'bg-red-50 border-red-200',tc:'text-red-900',
                    reserves:'India has 8% of world\'s iron ore reserves — 4th largest producer',
                    distribution:['Jharkhand: Singhbhum district (Noamundi, Barajamda) — high grade haematite','Odisha: Keonjhar, Sundergarh, Mayurbhanj — largest reserves','Chhattisgarh: Dantewada, Bailadila — export quality ore','Goa: Pirna, Sirigao — declining due to SC mining bans','Karnataka: Bellary-Hospet-Sandur belt — high grade'],
                    grades:'Haematite (70% Fe) and Magnetite (72% Fe) — both found in India',
                    issue:'India exports iron ore but also needs to import for POSCO, Arcelor plants — paradox of mineral wealth'},
                  {mineral:'Coal',color:'bg-gray-50 border-gray-200',tc:'text-gray-900',
                    reserves:'India 4th largest coal reserves globally · 98% is Gondwana coal (300 million years old)',
                    distribution:['Jharia (JH): Largest coalfield · Only coking coal source · Underground fires for 100 years','Raniganj (WB): Oldest coalfield · Damodar Valley · 18% reserves','Bokaro (JH): Coking coal · Near Bokaro Steel Plant','Talcher (Odisha): Largest single coalfield · Mahanadi basin','Singrauli (MP-UP border): Super thermal power stations · National Energy Park'],
                    grades:'Anthracite (best) → Bituminous → Lignite → Peat — India has mainly bituminous',
                    issue:'India imports 200 MT+ coal annually despite large reserves — quality mismatch, washery shortage'},
                  {mineral:'Petroleum & Natural Gas',color:'bg-amber-50 border-amber-200',tc:'text-amber-900',
                    reserves:'India meets only 15-20% of oil demand domestically — major import dependency',
                    distribution:['Mumbai High: Largest offshore oilfield · Arabian Sea · ONGC operated','Digboi (Assam): Asia\'s oldest oil refinery (1866) · Still producing','Ankleshwar (Gujarat): Major onshore oil field','KG Basin (AP-TN): Krishna-Godavari · Reliance D6 block · Major gas reserves','Rajasthan: Barmer-Sanchore basin · Cairn India (Vedanta) · Significant onshore oil'],
                    grades:'India: 0.3% world oil reserves · imports 85% oil needs from Middle East, Russia',
                    issue:'Energy security — diversifying oil sources, strategic reserves, electric vehicles transition'},
                  {mineral:'Renewable Energy 2024',color:'bg-green-50 border-green-200',tc:'text-green-900',
                    reserves:'India 4th largest renewable energy capacity globally · 190 GW installed (2024)',
                    distribution:['Solar: Rajasthan (Bhadla largest solar park) · Gujarat · AP (Pavagada) · TN · 166 GW','Wind: Tamil Nadu (Muppandal) · Gujarat (Kutch) · Rajasthan · Maharashtra · 44 GW','Hydro: HP (Bhakra Nangal) · Uttarakhand (Tehri) · NE India potential · 47 GW','Biomass: UP, Maharashtra · Biogas plants · 10 GW','Tidal: Gulf of Kutch, Gulf of Khambhat potential — not yet developed'],
                    grades:'Target: 500 GW non-fossil by 2030 · Currently 190 GW · Needs massive acceleration',
                    issue:'Grid integration, storage, land acquisition, wildlife impacts are key challenges'},
                ].map(m=>(
                  <div key={m.mineral} className={`border-2 ${m.color} rounded-xl p-4`}>
                    <div className={`text-sm font-bold ${m.tc} mb-2`}>{m.mineral}</div>
                    <p className="text-xs text-gray-600 italic mb-2">{m.reserves}</p>
                    <div className="text-xs font-semibold text-gray-700 mb-1">Key locations:</div>
                    <ul className="flex flex-col gap-1 mb-2">
                      {m.distribution.map(d=><li key={d} className="text-xs text-gray-600 flex gap-1.5"><span className="text-green-500 shrink-0">✓</span>{d}</li>)}
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                      <div className="text-xs font-bold text-yellow-800">Issue/Challenge</div>
                      <div className="text-xs text-gray-700 mt-0.5">{m.issue}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab==='mindmap'&&(<div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-auto"><div className="text-sm font-semibold text-gray-900 mb-1">Minerals & Energy Mind Map</div><div className="text-xs text-gray-400 mb-4">Click to expand each branch</div><div className="overflow-x-auto pb-6"><MindNode node={mindmap} level={0}/></div></div>)}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-4">India's Energy Mix — Present vs 2030 Target</div>
            <svg viewBox="0 0 700 320" width="100%">
              <rect width="700" height="320" fill="#f8fafc" rx="12"/>
              <text x="175" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#374151">Present Energy Mix (2024)</text>
              <text x="525" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#374151">Target Energy Mix (2030)</text>
              {[
                {label:'Coal',pct:50,color:'#374151',x:20,y:40,w:160},
                {label:'Hydro',pct:12,color:'#2563eb',x:20,y:110,w:38},
                {label:'Solar',pct:17,color:'#f59e0b',x:20,y:150,w:54},
                {label:'Wind',pct:10,color:'#06b6d4',x:20,y:210,w:32},
                {label:'Nuclear',pct:3,color:'#7c3aed',x:20,y:250,w:10},
                {label:'Others',pct:8,color:'#6b7280',x:20,y:274,w:26},
              ].map(b=>(
                <g key={b.label}>
                  <rect x={b.x} y={b.y} width={b.w} height="30" rx="4" fill={b.color}/>
                  <text x={b.x+b.w+8} y={b.y+20} fontSize="10" fill={b.color} fontWeight="600">{b.label} {b.pct}%</text>
                </g>
              ))}
              {[
                {label:'Coal',pct:30,color:'#374151',x:370,y:40,w:96},
                {label:'Solar',pct:35,color:'#f59e0b',x:370,y:90,w:112},
                {label:'Wind',pct:20,color:'#06b6d4',x:370,y:140,w:64},
                {label:'Hydro',pct:10,color:'#2563eb',x:370,y:190,w:32},
                {label:'Nuclear',pct:5,color:'#7c3aed',x:370,y:240,w:16},
              ].map(b=>(
                <g key={b.label}>
                  <rect x={b.x} y={b.y} width={b.w} height="34" rx="4" fill={b.color}/>
                  <text x={b.x+b.w+8} y={b.y+22} fontSize="10" fill={b.color} fontWeight="600">{b.label} {b.pct}%</text>
                </g>
              ))}
              <line x1="350" y1="30" x2="350" y2="310" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="5,3"/>
              <text x="350" y="310" textAnchor="middle" fontSize="9" fill="#6b7280">500 GW target = 70% non-fossil energy by 2030</text>
            </svg>
          </div>
        )}
        {activeTab==='pyq'&&(<div className="bg-white border border-gray-100 rounded-xl p-5"><div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div><div className="flex flex-col gap-3">{[{year:'2022 Prelims',q:'Which of the following coalfields is the only source of prime coking coal in India?'},{year:'2020 Mains GS-I',q:'Discuss India\'s energy security challenges and the role of renewable energy in addressing them.'},{year:'2018 Prelims',q:'Mumbai High is associated with which type of resource?'},{year:'2016 Mains GS-III',q:'Critically examine India\'s progress towards achieving its renewable energy targets.'},{year:'2014 Prelims',q:'India produces the largest quantity of which of the following minerals in the world?'}].map((p,i)=>(<div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50"><span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{p.year}</span><div className="text-sm text-gray-700 mt-2">{p.q}</div></div>))}</div></div>)}
        {activeTab==='quiz'&&(<div className="bg-white border border-gray-100 rounded-xl p-6">{!quizStarted?(<div className="text-center py-10"><div className="text-5xl mb-4">⛏️</div><div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Minerals & Energy</div><div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div><button onClick={()=>setQuizStarted(true)} className="bg-blue-700 text-white px-10 py-3 rounded-xl font-medium text-sm">Start Quiz →</button></div>):currentQ<quiz.length?(<div className="max-w-2xl mx-auto"><div className="flex items-center gap-3 mb-6"><div className="text-sm text-gray-500">Q {currentQ+1}/{quiz.length}</div><div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-blue-600 rounded-full" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div><div className="text-sm font-medium text-blue-700">Score: {score}</div></div><div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div><div className="flex flex-col gap-3 mb-5">{quiz[currentQ].options.map((opt,i)=>(<button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}} className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}><span className="font-bold mr-3 text-gray-400">{String.fromCharCode(65+i)}.</span>{opt}{selectedAnswer!==null&&i===quiz[currentQ].correct&&<span className="ml-2 text-green-600">✓</span>}{selectedAnswer===i&&i!==quiz[currentQ].correct&&<span className="ml-2 text-red-600">✗</span>}</button>))}</div>{selectedAnswer!==null&&(<><div className={`rounded-xl p-4 mb-5 ${selectedAnswer===quiz[currentQ].correct?'bg-green-50 border border-green-200':'bg-red-50 border border-red-200'}`}><div className={`text-sm font-semibold mb-1 ${selectedAnswer===quiz[currentQ].correct?'text-green-800':'text-red-800'}`}>{selectedAnswer===quiz[currentQ].correct?'✓ Correct!':'✗ Incorrect'}</div><div className="text-sm text-gray-700">{quiz[currentQ].exp}</div></div><button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm">{currentQ<quiz.length-1?'Next →':'Results →'}</button></>)}</div>):(<div className="text-center py-10"><div className="text-5xl mb-4">{score>=4?'🏆':'📚'}</div><div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div><div className="flex gap-3 justify-center mt-6"><button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-blue-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button><button onClick={()=>setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm">Review Notes</button></div></div>)}</div>)}
        {activeTab==='predict'&&(<div className="bg-white border border-gray-100 rounded-xl p-5"><div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div><div className="flex flex-col gap-3">{[{q:'Critical minerals — lithium, cobalt, REE — India\'s strategy for EV revolution and energy transition',prob:92},{q:'Coal transition — just transition for coal mining communities, Jharkhand, Odisha coal workers',prob:85},{q:'India\'s renewable energy achievement vs target — gaps, challenges, grid integration',prob:82},{q:'Mining laws and tribal rights — Forest Rights Act, PESA and mining in scheduled areas',prob:75}].map((pred,i)=>(<div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-4"><div className="flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div><div className="flex-1"><div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div><div className="flex items-center gap-2"><div className="flex-1 h-2 bg-blue-100 rounded-full"><div className="h-2 bg-blue-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div><span className="text-xs font-bold text-blue-700">{pred.prob}%</span></div></div></div></div>))}</div></div>)}
        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/10" className="text-sm text-green-600">← Agriculture</a>
          <div className="text-xs text-gray-400">Topic 11 of 20</div>
          <a href="/subjects/geography/12" className="text-sm text-green-600">Industries →</a>
        </div>
      </div>
    </div>
  )
}