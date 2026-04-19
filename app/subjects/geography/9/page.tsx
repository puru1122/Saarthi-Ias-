'use client'
import { useState } from 'react'

const mindmap = {
  id:'root',label:'Natural Vegetation India',sublabel:'6 types · 33% forest cover target',color:'#166534',textColor:'#fff',
  children:[
    {id:'tropical',label:'Tropical Rainforest',sublabel:'Western Ghats · NE India · >200cm rain · Evergreen · Mahogany, Ebony, Rosewood',color:'#15803d',textColor:'#fff',
      children:[
        {id:'t1',label:'Tropical Wet Evergreen',sublabel:'Kerala, Karnataka W.Ghats · Assam · >250cm rain · 3 canopy layers · Teak, Rosewood, Bamboo',color:'#dcfce7',textColor:'#14532d'},
        {id:'t2',label:'Tropical Semi-Evergreen',sublabel:'Between wet & moist deciduous · 200-250cm rain · Some trees shed leaves briefly',color:'#dcfce7',textColor:'#14532d'},
        {id:'t3',label:'Biodiversity Hotspots',sublabel:'Western Ghats + Sri Lanka · Eastern Himalayas · Among world\'s 36 hotspots',color:'#dcfce7',textColor:'#14532d'},
      ]},
    {id:'deciduous',label:'Tropical Deciduous',sublabel:'Most widespread · 100-200cm rain · Teak, Sal dominant · MP, Maharashtra, UP',color:'#16a34a',textColor:'#fff',
      children:[
        {id:'d1',label:'Moist Deciduous',sublabel:'100-200cm rain · Teak dominant · MP, Maharashtra, AP · Good timber value',color:'#bbf7d0',textColor:'#14532d'},
        {id:'d2',label:'Dry Deciduous',sublabel:'75-100cm rain · Sal, Tendu, Mahua · UP, Rajasthan, Deccan · Open canopy',color:'#bbf7d0',textColor:'#14532d'},
        {id:'d3',label:'Teak — National Tree Commercial',sublabel:'India world\'s largest teak producer · Kerala, MP, Maharashtra · Termite resistant',color:'#bbf7d0',textColor:'#14532d'},
      ]},
    {id:'mangroves',label:'Mangrove Forests',sublabel:'Coastal · Tidal · Salt-tolerant · Sundarbans largest · Cyclone barrier',color:'#0891b2',textColor:'#fff',
      children:[
        {id:'m1',label:'Sundarbans (WB + Bangladesh)',sublabel:'World\'s largest mangrove · UNESCO WH · Royal Bengal Tiger · Sundari tree',color:'#cffafe',textColor:'#164e63'},
        {id:'m2',label:'Other mangroves',sublabel:'Bhitarkanika (Odisha) · Andaman · Mahanadi delta · Godavari-Krishna delta',color:'#cffafe',textColor:'#164e63'},
        {id:'m3',label:'Ecological role',sublabel:'Cyclone barrier · Nursery for fish · Carbon sink · Erosion prevention',color:'#cffafe',textColor:'#164e63'},
      ]},
    {id:'montane',label:'Montane Forests',sublabel:'Himalayas · Altitude zones · Temperate · Alpine',color:'#7c3aed',textColor:'#fff',
      children:[
        {id:'mo1',label:'Tropical (up to 1000m)',sublabel:'Terai · Dense · Sal dominant · Dudhwa, Corbett',color:'#ede9fe',textColor:'#4c1d95'},
        {id:'mo2',label:'Temperate (1000-3000m)',sublabel:'Oaks, Chestnuts, Rhododendron · Deodars at higher altitudes',color:'#ede9fe',textColor:'#4c1d95'},
        {id:'mo3',label:'Alpine (3000m+)',sublabel:'Sparse · Silver fir, Juniper · Grazing meadows (Bugyals) · Merges into tundra',color:'#ede9fe',textColor:'#4c1d95'},
      ]},
    {id:'thorn',label:'Thorn & Scrub Forests',sublabel:'Rajasthan, Gujarat · <75cm rain · Khejri (state tree RJ) · Cactus, Acacia',color:'#d97706',textColor:'#fff',
      children:[
        {id:'th1',label:'Tropical Thorn Forest',sublabel:'Rajasthan, Gujarat, Punjab, Haryana · Babul, Ber, Khejri, Cactus',color:'#fef3c7',textColor:'#78350f'},
        {id:'th2',label:'Khejri tree significance',sublabel:'Rajasthan state tree · Bishnoi community protects it · Fodder + nitrogen fixation',color:'#fef3c7',textColor:'#78350f'},
        {id:'th3',label:'Adaptations',sublabel:'Deep roots · Waxy leaves · Small leaves · Thick bark · Water storage stems',color:'#fef3c7',textColor:'#78350f'},
      ]},
  ]
}

type MNode={id:string;label:string;sublabel:string;color:string;textColor:string;children?:MNode[]}
function MindNode({node,level=0}:{node:MNode;level?:number}){
  const [exp,setExp]=useState(level<2)
  const hasC=node.children&&node.children.length>0
  return(
    <div className="flex items-start">
      <button onClick={()=>hasC&&setExp(!exp)}
        style={{backgroundColor:node.color,color:node.textColor,minWidth:level===0?'220px':'200px',cursor:hasC?'pointer':'default'}}
        className="flex items-start gap-2 px-3 py-2.5 rounded-xl text-left transition-all hover:opacity-90 shadow-sm">
        <div className="flex-1">
          <div style={{fontSize:level===0?'13px':'12px',fontWeight:700,lineHeight:1.3}}>{node.label}</div>
          <div style={{fontSize:'10px',opacity:0.85,marginTop:'3px',lineHeight:1.4}}>{node.sublabel}</div>
        </div>
        {hasC&&<span style={{fontSize:'10px',opacity:0.7,flexShrink:0}}>{exp?'▼':'▶'}</span>}
      </button>
      {hasC&&exp&&(
        <div className="flex items-start ml-1">
          <div style={{width:'20px',display:'flex',alignItems:'center',alignSelf:'stretch'}}>
            <div style={{width:'20px',height:'1.5px',backgroundColor:node.color,opacity:0.5}}></div>
          </div>
          <div className="flex flex-col gap-2">
            {node.children!.map(child=>(
              <div key={child.id}><MindNode node={child} level={level+1}/></div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function VegetationPage(){
  const [activeTab,setActiveTab]=useState('notes')
  const [quizStarted,setQuizStarted]=useState(false)
  const [currentQ,setCurrentQ]=useState(0)
  const [selectedAnswer,setSelectedAnswer]=useState<number|null>(null)
  const [score,setScore]=useState(0)
  const quiz=[
    {q:'The Sundarbans mangrove forest is named after which tree?',options:['Sundari (Heritiera fomes)','Sal tree','Teak tree','Mangrove palm'],correct:0,exp:'Sundarbans is named after the Sundari tree (Heritiera fomes) — the dominant mangrove species in this delta. The Sundarbans spans West Bengal (India) and Bangladesh and is the world\'s largest mangrove forest and a UNESCO World Heritage Site.'},
    {q:'Which type of forest is most widespread in India?',options:['Tropical evergreen','Tropical deciduous','Mangrove','Montane'],correct:1,exp:'Tropical deciduous forests are the most widespread forest type in India — covering most of the peninsular plateau and large parts of the Northern Plains fringes. They are divided into moist deciduous (100-200cm rain) and dry deciduous (75-100cm rain).'},
    {q:'India\'s forest cover target under National Forest Policy 1988 is:',options:['25% of total area','33% of total area','40% of total area','20% of total area'],correct:1,exp:'The National Forest Policy 1988 set a target of maintaining 33% of India\'s total geographical area under forest and tree cover. Currently (FSI 2023) India has about 21.71% forest cover and 2.89% tree cover = total 24.6%.'},
    {q:'Which of the following forests are found in the Western Ghats?',options:['Tropical thorn forests','Tropical wet evergreen forests','Temperate deciduous forests','Desert scrub'],correct:1,exp:'Tropical wet evergreen forests are found in the Western Ghats — receiving over 200-250cm annual rainfall. These are India\'s richest forests in terms of biodiversity. The Western Ghats is one of the world\'s 36 biodiversity hotspots.'},
    {q:'Mangrove forests are important because:',options:['They produce valuable timber','They act as cyclone barriers and nurseries for fish','They are sources of medicinal plants','They are used for paper production'],correct:1,exp:'Mangrove forests serve multiple critical ecological functions: 1) They act as natural barriers against cyclones and tsunami waves — reducing their impact on coastal areas 2) They are nurseries for fish, shrimp and crabs 3) They prevent coastal erosion 4) They are highly efficient carbon sinks.'},
  ]
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 9</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Natural Vegetation & Forests</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">5 major forest types</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2020, 2017</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'21.71%',l:'Forest cover India'},{v:'33%',l:'NFP 1988 target'},{v:'Sundarbans',l:'Largest mangrove'},{v:'2 hotspots',l:'W.Ghats + E.Himalayas'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'mindmap',label:'🧠 Mind Map'},{id:'visual',label:'🗺️ Visual'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-green-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>
        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-green-800 to-emerald-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-green-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Natural Vegetation of India</div>
              <p className="text-sm leading-relaxed text-green-100 mb-4">India is one of the world's 17 megadiverse countries — home to 8% of global biodiversity despite having only 2.4% of land area. The extraordinary variety of India's vegetation — from tropical rainforests to alpine meadows, from mangroves to desert scrub — is a direct result of its diverse climate, soil, topography and rainfall patterns. India has two of the world's 36 biodiversity hotspots: the Western Ghats and the Eastern Himalayas.</p>
              <div className="grid grid-cols-3 gap-3">
                {[{v:'Tropical Rainforest',l:'W.Ghats · NE India'},{v:'Tropical Deciduous',l:'Most widespread'},{v:'Mangroves',l:'Sundarbans · Bhitarkanika'},{v:'Montane',l:'Himalayan altitudinal zones'},{v:'Thorn & Scrub',l:'Rajasthan · Gujarat'},{v:'Alpine',l:'Above 3,500m'}].map(s=>(
                  <div key={s.l} className="bg-green-700 border border-green-600 rounded-xl p-2.5 text-center">
                    <div className="text-xs font-bold text-white">{s.v}</div>
                    <div className="text-xs text-green-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-green-600 rounded-full"></div>
                <div className="text-sm font-bold text-green-900">Major Forest Types — Rainfall-Based Classification</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {name:'Tropical Wet Evergreen Forest',rain:'>200cm',color:'bg-emerald-600',light:'bg-emerald-50',border:'border-emerald-200',tc:'text-emerald-900',
                    location:'Western Ghats (Kerala, Karnataka, Goa), Andaman & Nicobar, NE India (Assam, Meghalaya)',
                    desc:'India\'s richest forests — dense, multi-layered canopy, trees never shed all leaves simultaneously. Three distinct canopy layers (emergent → main canopy → understorey). Exceptional biodiversity.',
                    trees:['Mahogany, Ebony, Rosewood (valuable timber)','Bamboo (not a tree — largest grass)','Ferns, orchids, moss — epiphytes abundant','Rubber, Cinchona — commercial plantations'],
                    features:'High humidity (>80%), >200cm rain, temperature 20-30°C year round, thick humus layer, buttress roots common',
                    upsc:'Western Ghats alone has 5,000+ plant species, 139 mammal species, 508 bird species. UNESCO World Heritage Site (2012).'},
                  {name:'Tropical Moist Deciduous Forest',rain:'100-200cm',color:'bg-green-600',light:'bg-green-50',border:'border-green-200',tc:'text-green-900',
                    location:'Eastern slopes of W.Ghats, Deccan plateau, foothills of Himalayas, Odisha, Jharkhand, Chhattisgarh',
                    desc:'Most commercially valuable forests of India. Trees shed leaves in dry season (Feb-May). Single canopy layer. Teak is the dominant and most valuable species.',
                    trees:['Teak (Tectona grandis) — most valuable · termite resistant','Sal (Shorea robusta) — hard, durable · used in construction','Bamboo, Sandalwood, Rosewood, Amla','Mahua — flowers eaten, oil extracted, liquor made'],
                    features:'Summer deciduous, good light penetration, grass understory, good timber forest',
                    upsc:'India is the world\'s largest producer of teak. Teak forests of Kerala, MP are world famous. JFM (Joint Forest Management) widely practiced here.'},
                  {name:'Tropical Dry Deciduous Forest',rain:'75-100cm',color:'bg-lime-600',light:'bg-lime-50',border:'border-lime-200',tc:'text-lime-900',
                    location:'Large parts of Peninsular India, UP, Bihar, Rajasthan (eastern), Haryana, Punjab',
                    desc:'Open forests — well-spaced trees with grass in between. Long dry season. Trees shed leaves for longer period. Very susceptible to fire. Major source of fuelwood and fodder.',
                    trees:['Sal, Tendu (Diospyros melanoxylon) — tendu leaves for bidi making','Mahua, Palash (flame of forest), Amaltas','Khair — for chewing tobacco (katha)','Babul, Neem in drier areas'],
                    features:'Open canopy, grass prominent, fire-prone, degraded in many areas due to human pressure',
                    upsc:'Tendu leaf collection supports livelihoods of millions of tribals in MP, Odisha, Chhattisgarh. Nationalized in many states. Rs. 3,000-4,000 crore annual trade.'},
                  {name:'Mangrove Forests',rain:'Coastal · Tidal',color:'bg-teal-600',light:'bg-teal-50',border:'border-teal-200',tc:'text-teal-900',
                    location:'Sundarbans (WB), Bhitarkanika (Odisha), Godavari-Krishna delta (AP), Andaman & Nicobar, Gulf of Kutch (Gujarat)',
                    desc:'Salt-tolerant forests in tidal zones. Trees have aerial roots (pneumatophores) to breathe in waterlogged soil. Highly productive ecosystems — called "nurseries of the sea."',
                    trees:['Sundari (Heritiera fomes) — gives Sundarbans its name','Rhizophora (stilt roots) — most common genus globally','Avicennia (pneumatophores — pencil roots upward)','Nypa palm — found in Sundarbans'],
                    features:'Stilt roots, pneumatophores, salt-secreting leaves, viviparous seeds (germinate on tree), dense prop roots',
                    upsc:'India\'s mangrove cover: 4,992 sq km (FSI 2021). Sundarbans alone = 4,000 sq km. Bhitarkanika (Odisha) is 2nd largest. Mangroves reduced cyclone Amphan\'s (2020) impact on WB coast.'},
                  {name:'Montane / Himalayan Forests',rain:'Varies with altitude',color:'bg-violet-600',light:'bg-violet-50',border:'border-violet-200',tc:'text-violet-900',
                    location:'Entire Himalayan belt from J&K to Arunachal, NE India hills',
                    desc:'Forests change with altitude in the Himalayas — a journey from tropical foothills to alpine meadows. Each zone has distinct tree species, climate and ecology. This vertical zonation mirrors the latitudinal zonation from equator to poles.',
                    trees:['Below 1000m: Sal, Teak, bamboo (tropical)','1000-2000m: Oaks, Chestnuts, Magnolia (subtropical)','2000-3000m: Deodars, Pines, Rhododendron (temperate)','3000-4000m: Silver fir, Spruce, Alpine birch','Above 4000m: Alpine meadows (bugyals), sparse Juniper'],
                    features:'Altitudinal zonation, Bugyals (alpine meadows) used for summer grazing, dense biodiversity gradient',
                    upsc:'Bugyals are alpine meadows in Uttarakhand used by pastoral communities (Van Gujjars, Gaddis) for seasonal grazing. Threatened by climate change and tourism pressure.'},
                ].map(f=>(
                  <div key={f.name} className={`border-2 ${f.border} rounded-2xl overflow-hidden`}>
                    <div className={`${f.color} text-white px-5 py-3 flex items-center justify-between`}>
                      <div className="font-bold text-sm text-white">{f.name}</div>
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-white">{f.rain} rain</span>
                    </div>
                    <div className={`p-4 ${f.light}`}>
                      <p className="text-xs text-gray-600 mb-2"><span className="font-semibold">Location: </span>{f.location}</p>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{f.desc}</p>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-white rounded-xl p-3 border border-gray-100">
                          <div className="text-xs font-bold text-gray-700 mb-2">Key trees</div>
                          <ul className="flex flex-col gap-1">
                            {f.trees.map(t=><li key={t} className="text-xs text-gray-600 flex gap-1.5"><span className="text-green-500 shrink-0">🌿</span>{t}</li>)}
                          </ul>
                        </div>
                        <div>
                          <div className="bg-white rounded-xl p-3 border border-gray-100 mb-2">
                            <div className="text-xs font-bold text-gray-700 mb-1">Key features</div>
                            <p className="text-xs text-gray-600">{f.features}</p>
                          </div>
                          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                            <div className="text-xs font-bold text-yellow-800 mb-1">💡 UPSC</div>
                            <p className="text-xs text-gray-700 leading-relaxed">{f.upsc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab==='mindmap'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-auto">
            <div className="text-sm font-semibold text-gray-900 mb-1">Natural Vegetation — Interactive Mind Map</div>
            <div className="text-xs text-gray-400 mb-5">Click any node to expand · 5 forest types with 3 child nodes each</div>
            <div className="overflow-x-auto pb-6"><MindNode node={mindmap} level={0}/></div>
          </div>
        )}
        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Rainfall-Vegetation Relationship Diagram</div>
            <svg viewBox="0 0 700 400" width="100%">
              <rect width="700" height="400" fill="#f0fdf4" rx="12"/>
              <text x="350" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#166534">Rainfall → Vegetation Type (Left to Right = Decreasing Rainfall)</text>
              {[
                {x:20,w:120,fill:'#064e3b',label:'Tropical Wet\nEvergreen',rain:'>200cm',trees:'Mahogany\nEbony\nBamboo',example:'W.Ghats\nNE India'},
                {x:155,w:120,fill:'#166534',label:'Moist\nDeciduous',rain:'100-200cm',trees:'Teak\nSal\nSandalwood',example:'MP\nMaharashtra'},
                {x:290,w:120,fill:'#15803d',label:'Dry\nDeciduous',rain:'75-100cm',trees:'Sal\nTendu\nMahua',example:'UP\nBihar'},
                {x:425,w:120,fill:'#ca8a04',label:'Thorn &\nScrub',rain:'25-75cm',trees:'Babul\nAcacia\nKhejri',example:'Rajasthan\nGujarat'},
                {x:560,w:120,fill:'#92400e',label:'Desert\nVegetation',rain:'<25cm',trees:'Cactus\nSucculents\nDrought trees',example:'Thar\nDesert'},
              ].map(v=>(
                <g key={v.label}>
                  <rect x={v.x} y="50" width={v.w} height="200" rx="8" fill={v.fill} opacity="0.9"/>
                  <text x={v.x+v.w/2} y="75" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">{v.label.split('\n').map((l,i)=>(
                    <tspan key={i} x={v.x+v.w/2} dy={i===0?0:14}>{l}</tspan>
                  ))}</text>
                  <text x={v.x+v.w/2} y="115" textAnchor="middle" fontSize="9" fill="#fef9c3">{v.rain}</text>
                  {v.trees.split('\n').map((t,i)=>(
                    <text key={t} x={v.x+v.w/2} y={140+i*18} textAnchor="middle" fontSize="8" fill="white">🌿 {t}</text>
                  ))}
                  {v.example.split('\n').map((e,i)=>(
                    <text key={e} x={v.x+v.w/2} y={210+i*14} textAnchor="middle" fontSize="8" fill="#bbf7d0">{e}</text>
                  ))}
                </g>
              ))}
              <rect x="20" y="265" width="660" height="50" rx="8" fill="#0c4a6e" opacity="0.9"/>
              <text x="350" y="287" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">MANGROVES — Special Coastal Forest (Not rainfall-based)</text>
              <text x="350" y="303" textAnchor="middle" fontSize="9" fill="#bae6fd">Tidal zone · Salt tolerant · Sundarbans (WB) · Bhitarkanika (Odisha) · Cyclone barrier · Fish nursery</text>
              <rect x="20" y="325" width="660" height="50" rx="8" fill="#4c1d95" opacity="0.9"/>
              <text x="350" y="347" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">MONTANE FORESTS — Altitude-based zonation in Himalayas</text>
              <text x="350" y="363" textAnchor="middle" fontSize="9" fill="#ddd6fe">Tropical (below 1000m) → Subtropical (1000-2000m) → Temperate (2000-3000m) → Alpine (above 3000m)</text>
            </svg>
          </div>
        )}
        {activeTab==='pyq'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2022 Prelims',q:'With reference to mangrove forests in India, which of the following statements is correct?'},
                {year:'2020 Mains GS-I',q:'Discuss the significance of mangrove forests for coastal communities and disaster risk reduction in India.'},
                {year:'2019 Prelims',q:'The Western Ghats is recognized as one of the global biodiversity hotspots. What does the term "biodiversity hotspot" mean?'},
                {year:'2017 Prelims',q:'Which of the following is the dominant tree species in the tropical moist deciduous forests of India?'},
                {year:'2015 Mains GS-I',q:'Explain the altitudinal zonation of vegetation in the Himalayas with examples.'},
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
            {!quizStarted?(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🌿</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Natural Vegetation</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-green-700 text-white px-10 py-3 rounded-xl font-medium text-sm">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-green-600 rounded-full" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-green-700">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quiz[currentQ].options.map((opt,i)=>(
                    <button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-green-400 hover:bg-green-50':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}>
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
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-green-700 text-white px-6 py-2.5 rounded-xl text-sm">{currentQ<quiz.length-1?'Next →':'Results →'}</button>
                  </>
                )}
              </div>
            ):(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">{score>=4?'🏆':'📚'}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div>
                <div className="flex gap-3 justify-center mt-6">
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-green-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button>
                  <button onClick={()=>setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm">Review Notes</button>
                </div>
              </div>
            )}
          </div>
        )}
        {activeTab==='predict'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Predicted for UPSC 2027</div>
            <div className="flex flex-col gap-3">
              {[
                {q:'Mangrove conservation — India\'s mangrove cover increase, MISHTI scheme 2023 and role in climate adaptation',prob:90},
                {q:'Western Ghats Ecologically Sensitive Areas — Kasturirangan report implementation challenges',prob:85},
                {q:'Deforestation in India — causes, Forest (Conservation) Amendment Act 2023 controversy',prob:82},
                {q:'Biodiversity hotspots — Western Ghats and Eastern Himalayas — threats from development projects',prob:75},
              ].map((pred,i)=>(
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-green-200 text-green-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
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
          <a href="/subjects/geography/8" className="text-sm text-green-600">← Soils of India</a>
          <div className="text-xs text-gray-400">Topic 9 of 20</div>
          <a href="/subjects/geography/10" className="text-sm text-green-600">Agriculture →</a>
        </div>
      </div>
    </div>
  )
}