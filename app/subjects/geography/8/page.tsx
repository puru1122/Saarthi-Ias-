'use client'
import { useState } from 'react'

const mindmap = {
  id:'root',label:'Soils of India',sublabel:'8 major types · ICAR classification',color:'#92400e',textColor:'#fff',
  children:[
    {id:'alluvial',label:'Alluvial Soil',sublabel:'Most widespread · 40% of land · Ganga plains · Khadar & Bhangar',color:'#d97706',textColor:'#fff',
      children:[
        {id:'a1',label:'Khadar (New alluvium)',sublabel:'Flood plains · Very fertile · Renewed annually by floods',color:'#fef3c7',textColor:'#78350f'},
        {id:'a2',label:'Bhangar (Old alluvium)',sublabel:'Above flood level · Kankar nodules · Less fertile than Khadar',color:'#fef3c7',textColor:'#78350f'},
        {id:'a3',label:'Crops: Rice, wheat, sugarcane',sublabel:'Punjab, Haryana, UP, Bihar, West Bengal',color:'#fef3c7',textColor:'#78350f'},
      ]},
    {id:'black',label:'Black Soil (Regur)',sublabel:'Deccan Trap · Cotton soil · Self-ploughing · Maharashtra, MP',color:'#1f2937',textColor:'#fff',
      children:[
        {id:'b1',label:'Formation from Deccan basalt',sublabel:'Volcanic origin · 65 million years old · Maharashtra, MP, Gujarat',color:'#374151',textColor:'#d1d5db'},
        {id:'b2',label:'Self-ploughing property',sublabel:'Swells when wet, cracks when dry · No need for deep ploughing',color:'#374151',textColor:'#d1d5db'},
        {id:'b3',label:'Crops: Cotton, soybean, wheat',sublabel:'Also called Black Cotton Soil · Vidarbha, Marathwada most famous',color:'#374151',textColor:'#d1d5db'},
      ]},
    {id:'red',label:'Red & Yellow Soil',sublabel:'Iron oxide colour · Odisha, AP, Tamil Nadu · Poor fertility',color:'#dc2626',textColor:'#fff',
      children:[
        {id:'r1',label:'Red due to iron oxide (Fe₂O₃)',sublabel:'Yellow when hydrated · Crystalline & metamorphic rocks',color:'#fee2e2',textColor:'#7f1d1d'},
        {id:'r2',label:'Low fertility · Porous & coarse',sublabel:'Low nitrogen, phosphorus, humus content',color:'#fee2e2',textColor:'#7f1d1d'},
        {id:'r3',label:'Crops: Groundnut, millets, pulses',sublabel:'Also cotton, wheat with irrigation · Odisha, Tamil Nadu, AP',color:'#fee2e2',textColor:'#7f1d1d'},
      ]},
    {id:'laterite',label:'Laterite Soil',sublabel:'High rainfall leaching · Kerala, Karnataka · Brick-like',color:'#b45309',textColor:'#fff',
      children:[
        {id:'l1',label:'Formed by intense leaching',sublabel:'Heavy rainfall washes away silica · Iron & aluminium remain',color:'#fef3c7',textColor:'#92400e'},
        {id:'l2',label:'Used as building material',sublabel:'Soft when cut, hardens on exposure to air · Laterite = Latin for brick',color:'#fef3c7',textColor:'#92400e'},
        {id:'l3',label:'Crops: Tea, coffee, cashew',sublabel:'Kerala, Karnataka, Odisha, Assam, Meghalaya',color:'#fef3c7',textColor:'#92400e'},
      ]},
    {id:'arid',label:'Arid/Desert Soil',sublabel:'Rajasthan, Gujarat · Sandy · Low humus · Salt deposits',color:'#f59e0b',textColor:'#fff',
      children:[
        {id:'d1',label:'Sandy, coarse texture',sublabel:'Low water retention · Very low organic matter',color:'#fef3c7',textColor:'#78350f'},
        {id:'d2',label:'Salt deposits in lower layers',sublabel:'Soils are alkaline · Kankar layers restrict water movement',color:'#fef3c7',textColor:'#78350f'},
        {id:'d3',label:'Crops: Bajra, guar, drought-resistant',sublabel:'With Indira Gandhi Canal irrigation → wheat, cotton now grown',color:'#fef3c7',textColor:'#78350f'},
      ]},
    {id:'forest',label:'Forest & Mountain Soil',sublabel:'Himalayas, NE India · Humus rich · Tea, coffee, spices',color:'#166534',textColor:'#fff',
      children:[
        {id:'f1',label:'Thin layer, humus-rich',sublabel:'Formed from forest litter decomposition · Acidic in nature',color:'#dcfce7',textColor:'#14532d'},
        {id:'f2',label:'Varies with altitude',sublabel:'Alpine meadow soils above 3000m · Brown forest soils lower down',color:'#dcfce7',textColor:'#14532d'},
        {id:'f3',label:'Crops: Tea, coffee, spices, fruits',sublabel:'Assam tea · Coorg coffee · Himachal apple · Darjeeling tea',color:'#dcfce7',textColor:'#14532d'},
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
        style={{backgroundColor:node.color,color:node.textColor,minWidth:level===0?'220px':level===1?'200px':'200px',cursor:hasC?'pointer':'default'}}
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
              <div key={child.id} className="flex items-center">
                <MindNode node={child} level={level+1}/>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function SoilsPage(){
  const [activeTab,setActiveTab]=useState('notes')
  const [quizStarted,setQuizStarted]=useState(false)
  const [currentQ,setCurrentQ]=useState(0)
  const [selectedAnswer,setSelectedAnswer]=useState<number|null>(null)
  const [score,setScore]=useState(0)
  const quiz=[
    {q:'Which soil is known as "self-ploughing" soil?',options:['Alluvial soil','Black cotton soil (Regur)','Laterite soil','Red soil'],correct:1,exp:'Black cotton soil (Regur) is called self-ploughing because it swells and becomes sticky when wet and develops deep cracks when dry. This natural cracking process mixes the upper and lower layers — acting like ploughing. It is rich in lime, iron, magnesia and alumina.'},
    {q:'Laterite soil is mainly found in which regions of India?',options:['Punjab and Haryana','Rajasthan and Gujarat','Kerala, Karnataka, Odisha, Assam','UP and Bihar'],correct:2,exp:'Laterite soil is found in regions of high rainfall and high temperature — Western Ghats (Kerala, Karnataka), Odisha, Assam and Meghalaya. Heavy rainfall leaches away silica, leaving iron and aluminium oxides. The name comes from the Latin word "later" meaning brick.'},
    {q:'Which soil covers the largest area in India?',options:['Black soil','Red soil','Alluvial soil','Forest soil'],correct:2,exp:'Alluvial soil covers about 40% of India\'s total land area — making it the most widespread soil type. It is found in the entire Northern Plains (Punjab, Haryana, UP, Bihar, WB) and coastal plains. It is formed by Himalayan river deposition and is India\'s most fertile soil.'},
    {q:'The red colour of Red soil is due to:',options:['Presence of nitrogen','Iron oxide (Fe₂O₃)','Volcanic basalt','Calcium carbonate'],correct:1,exp:'Red soil gets its colour from the presence of iron oxide (Fe₂O₃). When iron present in crystalline and metamorphic rocks weathers and oxidizes, it gives the soil a red colour. When hydrated (waterlogged), it turns yellow — hence called "Red and Yellow soil."'},
    {q:'Which soil is best suited for cotton cultivation?',options:['Alluvial soil','Laterite soil','Black soil (Regur)','Red soil'],correct:2,exp:'Black cotton soil (Regur) is best for cotton because it has high clay content (60-80%), retains moisture very well (even in dry season), and is rich in calcium, potassium and magnesium — nutrients cotton needs. It also self-ploughs, aerating the soil naturally.'},
  ]
  return(
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100"><div className="text-lg font-semibold text-gray-900">Saarthi IAS</div><div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div></div>
        <nav className="flex-1 py-3">
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard</a>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium"><span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes</a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100"><div className="text-xs text-gray-400">UPSC CSE 2027</div><div className="text-sm font-medium text-gray-800 mt-0.5">Geography · Topic 8</div></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/geography" className="text-xs text-gray-400">← Geography</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Soils of India</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">GS-I</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">8 major types</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2019, 2016</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[{v:'8 types',l:'Major soil types'},{v:'Alluvial',l:'Most widespread 40%'},{v:'Regur',l:'Best for cotton'},{v:'Laterite',l:'Brick-like · Kerala'}].map(s=>(
            <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div className="text-lg font-semibold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'mindmap',label:'🧠 Mind Map'},{id:'visual',label:'🗺️ Visual'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab=>(
            <button key={tab.id} onClick={()=>{setActiveTab(tab.id);setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab===tab.id?'bg-amber-700 text-white':'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{tab.label}</button>
          ))}
        </div>

        {activeTab==='notes'&&(
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-amber-800 to-yellow-900 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-200 mb-2">GS-I · Indian Geography</div>
              <div className="text-2xl font-bold text-white mb-3">Soils of India — Foundation of Agriculture</div>
              <p className="text-sm leading-relaxed text-amber-100 mb-4">Soil is the most precious natural resource — the foundation of India's agricultural economy. India has an extraordinary diversity of soil types because of its varied geology, climate, relief and vegetation. The Indian Council of Agricultural Research (ICAR) has classified Indian soils into 8 major types. Understanding soil distribution, properties and suitable crops is critical for UPSC — it links geography to agriculture, environment and economy.</p>
              <div className="grid grid-cols-4 gap-2">
                {[{v:'Alluvial',l:'40% area'},{v:'Black',l:'Deccan'},{v:'Red',l:'Peninsula'},{v:'Laterite',l:'W.Ghats'},{v:'Arid',l:'Rajasthan'},{v:'Forest',l:'Himalayas'},{v:'Saline',l:'Coastal'},{v:'Peaty',l:'Sundarbans'}].map(s=>(
                  <div key={s.l} className="bg-amber-700 border border-amber-600 rounded-lg p-2 text-center">
                    <div className="text-xs font-bold text-white">{s.v}</div>
                    <div className="text-xs text-amber-200 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-amber-50 border-b border-amber-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-amber-600 rounded-full"></div>
                <div className="text-sm font-bold text-amber-900">8 Major Soil Types — Complete Analysis</div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {[
                  {num:'01',name:'Alluvial Soil',color:'bg-amber-600',light:'bg-amber-50',border:'border-amber-200',tc:'text-amber-900',
                    coverage:'~15 lakh sq km · 40% of India\'s total land area',distribution:'Entire Northern Plains (Punjab, Haryana, UP, Bihar, WB), Brahmaputra valley, coastal plains of east and west coast',
                    formation:'Deposited by rivers — Himalayan rivers (Ganga, Indus, Brahmaputra) have carried sediments from mountains to plains over millions of years',
                    properties:['Two types: Khadar (new, more fertile) and Bhangar (old, less fertile)','Rich in potash — deficient in nitrogen and phosphorus','Khadar renewed every year during floods — hence most fertile','Sandy to loamy texture — good water retention','Contains Kankar nodules (calcium carbonate) in Bhangar'],
                    crops:'Rice, wheat, sugarcane, cotton, pulses, oilseeds — most diverse crop growing soil',
                    upscTip:'Alluvial soil is the backbone of India\'s food security — it produces most of the country\'s wheat and rice. Punjab\'s Green Revolution success was built on this soil.'},
                  {num:'02',name:'Black Soil (Regur / Black Cotton Soil)',color:'bg-gray-800',light:'bg-gray-50',border:'border-gray-300',tc:'text-gray-900',
                    coverage:'~5.46 lakh sq km · Mainly Deccan Plateau',distribution:'Maharashtra (Vidarbha, Marathwada), MP, Gujarat, Karnataka, Telangana, AP',
                    formation:'Formed from weathering of volcanic basalt (Deccan Traps) — lava flows from 65 million years ago. High clay content from basalt minerals.',
                    properties:['Self-ploughing — swells when wet, cracks when dry (shrink-swell property)','High water retention — stays moist even in dry season','Rich in calcium carbonate, magnesium, potash, lime','Deficient in nitrogen, phosphorus, organic matter','Depth varies from 30cm (shallow) to 200cm (deep black soil)'],
                    crops:'Cotton (best crop), soybean, wheat, groundnut, jowar, sugarcane',
                    upscTip:'Black soil\'s self-ploughing property is its unique identification feature. The deep cracks (up to 1m) develop in summer — these are dangerous for buildings and roads in Deccan.'},
                  {num:'03',name:'Red & Yellow Soil',color:'bg-red-600',light:'bg-red-50',border:'border-red-200',tc:'text-red-900',
                    coverage:'~3.51 lakh sq km',distribution:'Eastern MP, Chhattisgarh, Odisha, Telangana, AP, Tamil Nadu, Karnataka',
                    formation:'Formed from crystalline and metamorphic rocks (granite, gneiss, schist) under good drainage conditions. Iron content gives red colour.',
                    properties:['Red when dry (iron oxide Fe₂O₃), yellow when waterlogged (hydrated iron oxide)','Porous, coarse-grained — poor water retention','Low fertility — poor in nitrogen, phosphorus, lime, humus','Acidic in nature','Good drainage but requires irrigation and fertilizers'],
                    crops:'Groundnut, millets (jowar, bajra), pulses, tobacco, cotton with irrigation',
                    upscTip:'Red soil is the second most widespread soil type. Despite low natural fertility, with fertilizers and irrigation it can be productive. Groundnut belt of India is on red soil.'},
                  {num:'04',name:'Laterite Soil',color:'bg-orange-700',light:'bg-orange-50',border:'border-orange-200',tc:'text-orange-900',
                    coverage:'~1.26 lakh sq km',distribution:'Western Ghats (Kerala, Karnataka, Goa, coastal Maharashtra), Odisha, Assam, Meghalaya, Tamil Nadu hills',
                    formation:'Formed in high rainfall (2000mm+) high temperature conditions. Intense leaching removes silica and other nutrients. Iron and aluminium oxides remain — giving brick-like texture.',
                    properties:['Extremely infertile — nutrients leached away by heavy rain','Highly acidic (pH 4-6)','Hardens on exposure to air and sun — used as building material','Rich in iron and aluminium oxides','Name from Latin "later" = brick — literally a brick soil'],
                    crops:'Tea, coffee, cashew, coconut, rubber — all acidic soil tolerant crops. NOT suitable for normal food crops.',
                    upscTip:'The key to remembering laterite: 1) Heavy rain + high temp = laterite formation 2) Name means "brick" 3) Used as actual building material in Kerala, Karnataka 4) Tea and coffee grow on it.'},
                  {num:'05',name:'Arid / Desert Soil',color:'bg-yellow-600',light:'bg-yellow-50',border:'border-yellow-200',tc:'text-yellow-900',
                    coverage:'~1.42 lakh sq km',distribution:'Rajasthan (mainly west of Aravalli), Gujarat (Rann of Kutch), southern Punjab and Haryana',
                    formation:'Formed in areas with very low rainfall (<200mm) and high evaporation. Wind action (aeolian processes) plays a major role.',
                    properties:['Sandy texture — extremely poor water retention','Very low organic matter and humus','Alkaline pH — salt deposits in lower layers (due to capillary action bringing salts to surface)','Kankar layers at shallow depths restrict root growth','Low soluble salts in upper layers — washed down by rare rains'],
                    crops:'Bajra, guar, moth bean, drought-resistant varieties. With Indira Gandhi Canal irrigation: wheat, cotton, mustard now grown.',
                    upscTip:'Indira Gandhi Canal (670 km) revolutionized arid soil agriculture in western Rajasthan — transformed barren desert into productive farmland. But also caused waterlogging and salinity problems in some areas.'},
                  {num:'06',name:'Forest & Mountain Soil',color:'bg-green-700',light:'bg-green-50',border:'border-green-200',tc:'text-green-900',
                    coverage:'Himalayan states and NE India',distribution:'J&K, HP, Uttarakhand, Sikkim, Arunachal, Assam, Meghalaya, Nagaland',
                    formation:'Formed from accumulation of organic matter from forest litter. Composition varies greatly with altitude — from rich humus soils at lower altitudes to thin rocky soils at high altitude.',
                    properties:['Rich in humus at lower altitudes — decreases with altitude','Acidic in nature — from organic acids in forest litter','Thin layer — erosion prone especially on slopes','Below 1500m: Fertile brown forest soils','Above 3000m: Alpine meadow soils — thin, rocky'],
                    crops:'Tea (Assam, Darjeeling), coffee (Coorg), spices (cardamom, pepper), apples (Himachal), potatoes at higher altitudes',
                    upscTip:'Assam tea grows on forest/laterite mix soil. Darjeeling tea (world famous) grows on mountain forest soil at 2000-2500m elevation — unique flavor from altitude and soil combination.'},
                  {num:'07',name:'Saline & Alkaline Soil',color:'bg-cyan-700',light:'bg-cyan-50',border:'border-cyan-200',tc:'text-cyan-900',
                    coverage:'Arid and semi-arid regions, coastal areas',distribution:'Punjab, Haryana, UP (usar land), Rajasthan, coastal Gujarat, coastal areas',
                    formation:'Excessive irrigation without drainage causes water table to rise → salts deposited. Also formed in areas of high evaporation where salts accumulate in top layers. Coastal areas: sea water intrusion.',
                    properties:['High salt content — toxic to most crops','Called Reh (white alkali) or Usar in North India','pH > 8.5 in alkaline soils','Requires reclamation before cultivation — gypsum treatment, leaching','Coastal saline soils: mangrove forests grow here'],
                    crops:'After reclamation: paddy, barley. Salt-tolerant plants: Suaeda, Salicornia, mangroves on coastal areas',
                    upscTip:'Soil degradation due to excessive irrigation causing waterlogging and salinity is a major problem in Punjab Green Revolution area. ~6.73 million hectares of soil affected by salinity/alkalinity in India.'},
                  {num:'08',name:'Peaty & Marshy Soil',color:'bg-emerald-700',light:'bg-emerald-50',border:'border-emerald-200',tc:'text-emerald-900',
                    coverage:'Limited area · coastal wetlands and swamps',distribution:'Kerala (Kuttanad), West Bengal (Sundarbans), Odisha coast, Bihar (north), Uttarakhand (terai)',
                    formation:'Formed in areas of high humidity and heavy rainfall with poor drainage. Large amounts of dead organic matter accumulate under waterlogged anaerobic conditions → peat formation.',
                    properties:['Very high organic matter — 10-40% (unlike other soils)','Highly acidic (pH 3.5-5.5)','Waterlogged — anaerobic conditions','Dark brown to black colour from organic matter','Poor in mineral nutrients despite high organic matter'],
                    crops:'Rice (paddy) mainly · Kuttanad (Kerala) is unique — rice cultivated BELOW sea level on peaty soil',
                    upscTip:'Kuttanad in Kerala is the only place in India where farming is done below sea level — on peaty, marshy soil reclaimed from backwaters. Called the "rice bowl of Kerala."'},
                ].map(s=>(
                  <div key={s.num} className={`border-2 ${s.border} rounded-2xl overflow-hidden`}>
                    <div className={`${s.color} text-white px-5 py-3 flex items-center gap-3`}>
                      <div className="text-3xl font-black text-white opacity-30">{s.num}</div>
                      <div>
                        <div className="font-bold text-sm text-white">{s.name}</div>
                        <div className="text-xs text-white opacity-80">{s.coverage}</div>
                      </div>
                    </div>
                    <div className={`p-4 ${s.light}`}>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <div className="text-xs font-semibold text-gray-600 mb-1">Distribution</div>
                          <p className="text-xs text-gray-700">{s.distribution}</p>
                          <div className="text-xs font-semibold text-gray-600 mb-1 mt-2">Formation</div>
                          <p className="text-xs text-gray-700 leading-relaxed">{s.formation}</p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-600 mb-1">Key Properties</div>
                          <ul className="flex flex-col gap-1">
                            {s.properties.map(p=><li key={p} className="text-xs text-gray-600 flex gap-1.5"><span className="text-green-500 shrink-0">✓</span>{p}</li>)}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white border border-gray-100 rounded-xl p-3">
                          <div className="text-xs font-bold text-gray-700 mb-1">🌾 Best crops</div>
                          <p className="text-xs text-gray-600">{s.crops}</p>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                          <div className="text-xs font-bold text-yellow-800 mb-1">💡 UPSC Tip</div>
                          <p className="text-xs text-gray-700 leading-relaxed">{s.upscTip}</p>
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
            <div className="text-sm font-semibold text-gray-900 mb-1">Soils of India — Interactive Mind Map</div>
            <div className="text-xs text-gray-400 mb-5">Click any node to expand · Each soil type has 3 detailed child nodes</div>
            <div className="overflow-x-auto pb-6">
              <MindNode node={mindmap} level={0}/>
            </div>
          </div>
        )}

        {activeTab==='visual'&&(
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">Soil Distribution Map of India — Schematic</div>
            <div className="text-xs text-gray-400 mb-4">Approximate geographic distribution of major soil types</div>
            <svg viewBox="0 0 700 520" width="100%">
              <rect width="700" height="520" fill="#f8fafc" rx="12"/>
              {/* Northern Plains - Alluvial */}
              <rect x="80" y="60" width="480" height="100" rx="10" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
              <text x="320" y="100" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">ALLUVIAL SOIL</text>
              <text x="320" y="116" textAnchor="middle" fontSize="9" fill="#b45309">Northern Plains: Punjab · Haryana · UP · Bihar · West Bengal · Brahmaputra Valley</text>
              <text x="320" y="130" textAnchor="middle" fontSize="9" fill="#b45309">40% of India · Most fertile · Khadar & Bhangar types · Rice, wheat, sugarcane</text>
              {/* Thar - Arid */}
              <rect x="20" y="180" width="130" height="120" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
              <text x="85" y="225" textAnchor="middle" fontSize="10" fontWeight="700" fill="#713f12">ARID</text>
              <text x="85" y="240" textAnchor="middle" fontSize="10" fontWeight="700" fill="#713f12">SOIL</text>
              <text x="85" y="256" textAnchor="middle" fontSize="8" fill="#92400e">Rajasthan</text>
              <text x="85" y="268" textAnchor="middle" fontSize="8" fill="#92400e">Gujarat</text>
              <text x="85" y="280" textAnchor="middle" fontSize="8" fill="#92400e">Sandy · &lt;200mm rain</text>
              {/* Black Soil - Deccan */}
              <rect x="160" y="180" width="250" height="130" rx="10" fill="#d1d5db" stroke="#374151" strokeWidth="2"/>
              <text x="285" y="230" textAnchor="middle" fontSize="12" fontWeight="700" fill="#111827">BLACK SOIL (REGUR)</text>
              <text x="285" y="246" textAnchor="middle" fontSize="9" fill="#374151">Maharashtra · MP · Gujarat · Karnataka</text>
              <text x="285" y="260" textAnchor="middle" fontSize="9" fill="#374151">Volcanic basalt origin · Cotton best crop</text>
              <text x="285" y="274" textAnchor="middle" fontSize="9" fill="#374151">Self-ploughing · High clay content</text>
              {/* Red Soil */}
              <rect x="420" y="180" width="200" height="120" rx="10" fill="#fecaca" stroke="#dc2626" strokeWidth="2"/>
              <text x="520" y="225" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7f1d1d">RED & YELLOW</text>
              <text x="520" y="240" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7f1d1d">SOIL</text>
              <text x="520" y="256" textAnchor="middle" fontSize="8" fill="#991b1b">Odisha · Chhattisgarh</text>
              <text x="520" y="268" textAnchor="middle" fontSize="8" fill="#991b1b">AP · Tamil Nadu · Karnataka</text>
              <text x="520" y="280" textAnchor="middle" fontSize="8" fill="#991b1b">Iron oxide colour</text>
              {/* Western Ghats - Laterite */}
              <rect x="20" y="320" width="110" height="120" rx="10" fill="#fed7aa" stroke="#ea580c" strokeWidth="2"/>
              <text x="75" y="368" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7c2d12">LATERITE</text>
              <text x="75" y="382" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7c2d12">SOIL</text>
              <text x="75" y="398" textAnchor="middle" fontSize="8" fill="#9a3412">W.Ghats</text>
              <text x="75" y="412" textAnchor="middle" fontSize="8" fill="#9a3412">Kerala·Karnataka</text>
              <text x="75" y="424" textAnchor="middle" fontSize="8" fill="#9a3412">Tea·Coffee</text>
              {/* South - Red Soil continues */}
              <rect x="140" y="320" width="430" height="100" rx="10" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5"/>
              <text x="355" y="355" textAnchor="middle" fontSize="11" fontWeight="600" fill="#7f1d1d">RED SOIL (Southern Deccan)</text>
              <text x="355" y="371" textAnchor="middle" fontSize="8" fill="#991b1b">AP · Telangana · Karnataka · Tamil Nadu · Odisha · Chhattisgarh</text>
              <text x="355" y="385" textAnchor="middle" fontSize="8" fill="#991b1b">Groundnut · Millets · Pulses · Cotton (with irrigation)</text>
              {/* Forest Soil */}
              <rect x="560" y="60" width="130" height="200" rx="10" fill="#dcfce7" stroke="#166534" strokeWidth="2"/>
              <text x="625" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill="#14532d">FOREST &</text>
              <text x="625" y="145" textAnchor="middle" fontSize="10" fontWeight="700" fill="#14532d">MOUNTAIN</text>
              <text x="625" y="160" textAnchor="middle" fontSize="10" fontWeight="700" fill="#14532d">SOIL</text>
              <text x="625" y="180" textAnchor="middle" fontSize="8" fill="#166534">Himalayas</text>
              <text x="625" y="193" textAnchor="middle" fontSize="8" fill="#166534">NE India</text>
              <text x="625" y="206" textAnchor="middle" fontSize="8" fill="#166534">Tea · Coffee</text>
              <text x="625" y="219" textAnchor="middle" fontSize="8" fill="#166534">Apples · Spices</text>
              {/* Coastal */}
              <rect x="140" y="430" width="430" height="60" rx="8" fill="#cffafe" stroke="#0891b2" strokeWidth="1.5"/>
              <text x="355" y="455" textAnchor="middle" fontSize="10" fontWeight="600" fill="#164e63">COASTAL: Saline (Gujarat, Odisha) · Peaty/Marshy (Kerala Kuttanad, Sundarbans WB)</text>
              <text x="355" y="472" textAnchor="middle" fontSize="8" fill="#0e7490">Mangroves on saline soils · Rice cultivation below sea level in Kuttanad (Peaty soil)</text>
              {/* Legend */}
              <rect x="20" y="460" width="110" height="50" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="75" y="478" textAnchor="middle" fontSize="8" fontWeight="600" fill="#374151">LEGEND</text>
              <text x="75" y="493" textAnchor="middle" fontSize="7" fill="#6b7280">Approx. distribution</text>
              <text x="75" y="506" textAnchor="middle" fontSize="7" fill="#6b7280">Not to scale</text>
            </svg>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[
                {name:'Alluvial',color:'bg-amber-100 border-amber-300',note:'Most fertile · 40% area · N.Plains'},
                {name:'Black (Regur)',color:'bg-gray-200 border-gray-400',note:'Cotton soil · Self-ploughing · Deccan'},
                {name:'Red & Yellow',color:'bg-red-100 border-red-300',note:'Iron oxide · S.Deccan · Groundnut'},
                {name:'Laterite',color:'bg-orange-100 border-orange-300',note:'Brick soil · W.Ghats · Tea/Coffee'},
              ].map(l=>(
                <div key={l.name} className={`border-2 ${l.color} rounded-xl p-3`}>
                  <div className="text-xs font-bold text-gray-800">{l.name}</div>
                  <div className="text-xs text-gray-600 mt-1">{l.note}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==='pyq'&&(
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2022 Prelims',q:'With reference to black cotton soil, which of the following statements is correct? It swells when dry and shrinks when wet.'},
                {year:'2019 Prelims',q:'Laterite soils are mostly found in which of the following regions of India?'},
                {year:'2016 Prelims',q:'Which soil is best suited for cotton cultivation in India?'},
                {year:'2014 Mains GS-I',q:'Discuss the distribution and properties of major soil types in India. How do they determine agricultural patterns?'},
                {year:'2012 Prelims',q:'The self-ploughing property of which soil is due to its high clay content and shrink-swell nature?'},
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
                <div className="text-5xl mb-4">🌱</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Soils of India</div>
                <div className="text-sm text-gray-500 mb-8">5 UPSC-style questions · Instant explanations</div>
                <button onClick={()=>setQuizStarted(true)} className="bg-amber-700 text-white px-10 py-3 rounded-xl font-medium text-sm">Start Quiz →</button>
              </div>
            ):currentQ<quiz.length?(
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500">Q {currentQ+1}/{quiz.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-amber-600 rounded-full" style={{width:`${(currentQ/quiz.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-amber-700">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5">{quiz[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quiz[currentQ].options.map((opt,i)=>(
                    <button key={i} onClick={()=>{if(selectedAnswer===null){setSelectedAnswer(i);if(i===quiz[currentQ].correct)setScore(s=>s+1)}}}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer===null?'border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50':i===quiz[currentQ].correct?'border-green-400 bg-green-50 text-green-800':i===selectedAnswer?'border-red-400 bg-red-50 text-red-800':'border-gray-100 bg-gray-50 text-gray-400'}`}>
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
                    <button onClick={()=>{setCurrentQ(q=>q+1);setSelectedAnswer(null);}} className="bg-amber-700 text-white px-6 py-2.5 rounded-xl text-sm">{currentQ<quiz.length-1?'Next →':'Results →'}</button>
                  </>
                )}
              </div>
            ):(
              <div className="text-center py-10">
                <div className="text-5xl mb-4">{score>=4?'🏆':'📚'}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Score: {score}/{quiz.length}</div>
                <div className="flex gap-3 justify-center mt-6">
                  <button onClick={()=>{setQuizStarted(false);setCurrentQ(0);setSelectedAnswer(null);setScore(0);}} className="bg-amber-700 text-white px-8 py-3 rounded-xl font-medium text-sm">Try Again</button>
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
                {q:'Soil degradation in India — causes (waterlogging, salinity, erosion), extent and remediation measures',prob:88},
                {q:'Black cotton soil of Deccan — formation, properties and agricultural significance with reference to soybean revolution in Maharashtra',prob:82},
                {q:'Laterite soil and its unique properties — why acidic crops (tea, coffee) grow well on it',prob:75},
                {q:'Land degradation and desertification — India\'s commitments under UNCCD and national land restoration targets',prob:70},
              ].map((pred,i)=>(
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-amber-100 rounded-full"><div className="h-2 bg-amber-500 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                        <span className="text-xs font-bold text-amber-700">{pred.prob}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/geography/7" className="text-sm text-green-600">← Climate & Monsoon</a>
          <div className="text-xs text-gray-400">Topic 8 of 20</div>
          <a href="/subjects/geography/9" className="text-sm text-green-600">Natural Vegetation →</a>
        </div>
      </div>
    </div>
  )
}