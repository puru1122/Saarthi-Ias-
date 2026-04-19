'use client'
import { useState } from 'react'

const quizQuestions = [
  { q: 'Which Article is called the "heart and soul" of the Constitution?', options: ['Art. 14', 'Art. 21', 'Art. 32', 'Art. 19'], correct: 2, explanation: 'Art. 32 gives the right to move the Supreme Court for enforcement of Fundamental Rights. Dr. Ambedkar called it the heart and soul of the Constitution.' },
  { q: 'Right to Education (Art. 21A) was added by which Amendment?', options: ['42nd Amendment', '44th Amendment', '86th Amendment', '91st Amendment'], correct: 2, explanation: '86th Constitutional Amendment Act 2002 inserted Art. 21A providing free and compulsory education for children aged 6-14 years.' },
  { q: 'Which Fundamental Rights CANNOT be suspended even during National Emergency?', options: ['Art. 14 and 15', 'Art. 19 and 20', 'Art. 20 and 21', 'Art. 32 and 226'], correct: 2, explanation: 'Art. 20 (protection against conviction) and Art. 21 (right to life) cannot be suspended even during National Emergency under Art. 352.' },
  { q: 'The Basic Structure doctrine was established in which case?', options: ['Maneka Gandhi case', 'Golaknath case', 'Kesavananda Bharati case', 'Minerva Mills case'], correct: 2, explanation: 'Kesavananda Bharati v. State of Kerala (1973) established the Basic Structure doctrine — Parliament can amend the Constitution but cannot destroy its basic structure.' },
  { q: 'Which writ is issued to release a person from illegal detention?', options: ['Mandamus', 'Certiorari', 'Habeas Corpus', 'Quo Warranto'], correct: 2, explanation: 'Habeas Corpus means "produce the body". It is issued to release a person who has been illegally detained. It can be issued against both state and private individuals.' },
]

const mindmapData = {
  id: 'root', label: 'Fundamental Rights', sublabel: 'Part III · Art. 12–35', color: '#2563eb', textColor: '#fff',
  children: [
    { id: 'equality', label: 'Right to Equality', sublabel: 'Art. 14–18', color: '#3b82f6', textColor: '#fff', children: [
      { id: 'eq1', label: 'Art. 14 — Equality before law', sublabel: 'Applies to all persons', color: '#dbeafe', textColor: '#1e40af' },
      { id: 'eq2', label: 'Art. 15 — No discrimination', sublabel: 'Religion, race, caste, sex', color: '#dbeafe', textColor: '#1e40af' },
      { id: 'eq3', label: 'Art. 17 — Untouchability abolished', sublabel: 'Punishable offence', color: '#dbeafe', textColor: '#1e40af' },
    ]},
    { id: 'freedom', label: 'Right to Freedom', sublabel: 'Art. 19–22', color: '#16a34a', textColor: '#fff', children: [
      { id: 'fr1', label: 'Art. 19 — 6 Freedoms', sublabel: 'Speech, movement, profession...', color: '#dcfce7', textColor: '#14532d' },
      { id: 'fr2', label: 'Art. 21 — Right to Life', sublabel: 'Most expanded article', color: '#dcfce7', textColor: '#14532d' },
      { id: 'fr3', label: 'Art. 21A — Right to Education', sublabel: 'Added by 86th Amendment', color: '#dcfce7', textColor: '#14532d' },
    ]},
    { id: 'exploit', label: 'Against Exploitation', sublabel: 'Art. 23–24', color: '#ea580c', textColor: '#fff', children: [
      { id: 'ex1', label: 'Art. 23 — No forced labour', sublabel: 'No trafficking', color: '#ffedd5', textColor: '#7c2d12' },
      { id: 'ex2', label: 'Art. 24 — No child labour', sublabel: 'Below 14 years', color: '#ffedd5', textColor: '#7c2d12' },
    ]},
    { id: 'religion', label: 'Freedom of Religion', sublabel: 'Art. 25–28', color: '#d97706', textColor: '#fff', children: [
      { id: 're1', label: 'Art. 25 — Freedom of conscience', sublabel: 'Practice & propagate', color: '#fef3c7', textColor: '#78350f' },
      { id: 're2', label: 'Art. 26 — Manage religious affairs', sublabel: 'Religious denominations', color: '#fef3c7', textColor: '#78350f' },
    ]},
    { id: 'culture', label: 'Cultural & Educational', sublabel: 'Art. 29–30', color: '#db2777', textColor: '#fff', children: [
      { id: 'cu1', label: 'Art. 29 — Minority interests', sublabel: 'Language & culture', color: '#fce7f3', textColor: '#831843' },
      { id: 'cu2', label: 'Art. 30 — Minority institutions', sublabel: 'Right to establish', color: '#fce7f3', textColor: '#831843' },
    ]},
    { id: 'remedy', label: 'Constitutional Remedies', sublabel: 'Art. 32 — Heart & Soul', color: '#7c3aed', textColor: '#fff', children: [
      { id: 'rm1', label: 'Habeas Corpus', sublabel: 'Illegal detention', color: '#ede9fe', textColor: '#4c1d95' },
      { id: 'rm2', label: 'Mandamus', sublabel: 'Command public duty', color: '#ede9fe', textColor: '#4c1d95' },
      { id: 'rm3', label: 'Certiorari', sublabel: 'Quash illegal orders', color: '#ede9fe', textColor: '#4c1d95' },
      { id: 'rm4', label: 'Prohibition', sublabel: 'Stop exceeding jurisdiction', color: '#ede9fe', textColor: '#4c1d95' },
      { id: 'rm5', label: 'Quo Warranto', sublabel: 'By what authority', color: '#ede9fe', textColor: '#4c1d95' },
    ]},
  ]
}

type MindmapNode = { id: string; label: string; sublabel: string; color: string; textColor: string; children?: MindmapNode[] }

function MindmapNodeComponent({ node, level = 0 }: { node: MindmapNode; level?: number }) {
  const [expanded, setExpanded] = useState(level === 0)
  const hasChildren = node.children && node.children.length > 0
  return (
    <div className="flex items-start gap-0">
      <div className="flex flex-col items-center">
        <button onClick={() => hasChildren && setExpanded(!expanded)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: node.color, color: node.textColor, minWidth: level === 0 ? '200px' : '180px', cursor: hasChildren ? 'pointer' : 'default' }}>
          <div>
            <div style={{ fontSize: level === 0 ? '13px' : '12px', fontWeight: 600 }}>{node.label}</div>
            <div style={{ fontSize: '10px', opacity: 0.85, marginTop: '1px' }}>{node.sublabel}</div>
          </div>
          {hasChildren && <span style={{ marginLeft: 'auto', fontSize: '10px', opacity: 0.8 }}>{expanded ? '▼' : '▶'}</span>}
        </button>
      </div>
      {hasChildren && expanded && (
        <div className="flex items-start">
          <div style={{ width: '24px', alignSelf: 'stretch', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '24px', height: '1.5px', backgroundColor: node.color, opacity: 0.4 }}></div>
          </div>
          <div className="flex flex-col gap-2">
            {node.children!.map(child => (
              <div key={child.id} className="flex items-center">
                <MindmapNodeComponent node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function FundamentalRightsPage() {
  const [activeTab, setActiveTab] = useState('notes')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

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
          <div className="text-sm font-medium text-gray-800 mt-0.5">Aspirant · Level 2</div>
          <div className="mt-2 h-1 bg-gray-100 rounded-full"><div className="h-1 bg-blue-500 rounded-full w-1/4"></div></div>
          <div className="text-xs text-gray-400 mt-1">28% complete</div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <a href="/subjects/polity" className="text-xs text-gray-400 hover:text-gray-600">← Polity & Governance</a>
          <div className="flex items-center justify-between mt-2">
            <div className="text-2xl font-semibold text-gray-900">Fundamental Rights</div>
            <button onClick={() => setDone(!done)}
              className={`text-xs px-4 py-2 rounded-lg font-medium transition-all ${done ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-green-50 hover:text-green-700'}`}>
              {done ? '✓ Completed' : 'Mark as done'}
            </button>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">Intermediate</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Articles 12–35</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: Every year</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-5">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">Part III</div><div className="text-xs text-gray-400 mt-1">Constitution</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">6 categories</div><div className="text-xs text-gray-400 mt-1">Types of FRs</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">14 PYQs</div><div className="text-xs text-gray-400 mt-1">In 20 years</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">5 writs</div><div className="text-xs text-gray-400 mt-1">Under Art. 32</div></div>
        </div>

        <div className="flex gap-2 mb-5 flex-wrap">
          {[{id:'notes',label:'📝 Notes'},{id:'mindmap',label:'🗺️ Mind Map'},{id:'pyq',label:'📋 PYQs'},{id:'quiz',label:'🎯 Quiz'},{id:'predict',label:'⭐ Predict'}].map(tab => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id); setQuizStarted(false); setCurrentQ(0); setSelectedAnswer(null); setScore(0); }}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'notes' && (
          <div className="flex flex-col gap-5">

            {/* INTRO HERO CARD */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-2">Part III · Articles 12–35</div>
              <div className="text-2xl font-bold mb-3">Fundamental Rights</div>
              <p className="text-sm leading-relaxed opacity-90 mb-4">
                Fundamental Rights are the <strong>cornerstone of Indian democracy</strong> — basic rights guaranteed to every citizen that the state cannot take away. They are called "fundamental" not just because they are important, but because they are <strong>justiciable</strong> — meaning courts can enforce them and strike down any law that violates them.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[{label:'Enshrined in', val:'Part III'},{label:'Total articles', val:'Art. 12–35'},{label:'Nature', val:'Justiciable'}].map(s => (
                  <div key={s.label} className="bg-white bg-opacity-20 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold">{s.val}</div>
                    <div className="text-xs opacity-70 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT ARE FRs */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-blue-500 rounded-full"></div>
                <div className="text-sm font-bold text-blue-900">Understanding Fundamental Rights — The Foundation</div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  The idea of Fundamental Rights was inspired by the <strong>Bill of Rights of the USA</strong>. The framers of our Constitution felt that just having a government is not enough — citizens need protection from the government itself. This is why Fundamental Rights are primarily <strong>negative obligations on the state</strong> — they tell the state what it <em>cannot</em> do to its citizens.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-green-800 mb-2">✅ What makes them FUNDAMENTAL</div>
                    <ul className="flex flex-col gap-1.5">
                      {['Guaranteed by the Constitution itself — not ordinary law','Enforceable by courts — justiciable in nature','Cannot be taken away by ordinary legislation','Supreme Court is their ultimate guardian','Part of the Basic Structure — cannot be abolished'].map(p => (
                        <li key={p} className="text-xs text-gray-700 flex gap-2"><span className="text-green-500 shrink-0 mt-0.5">→</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-red-800 mb-2">❌ What they are NOT</div>
                    <ul className="flex flex-col gap-1.5">
                      {['Not absolute — subject to reasonable restrictions','Not available in all situations — emergency can suspend some','Not free from judicial interpretation — courts define scope','Not automatically available — must be claimed','Not same for citizens and non-citizens in all cases'].map(p => (
                        <li key={p} className="text-xs text-gray-700 flex gap-2"><span className="text-red-400 shrink-0 mt-0.5">→</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                  <div className="text-xs font-bold text-yellow-800 mb-1">💡 Article 13 — The Guardian of FRs</div>
                  <p className="text-sm text-gray-700 leading-relaxed">Article 13 is the most important protective provision. It declares that any law (pre-constitutional or post-constitutional) that is <strong>inconsistent with or in derogation of Fundamental Rights</strong> shall be void to the extent of its inconsistency. This is called <strong>"void ab initio"</strong> — void from the very beginning. This is the legal basis for judicial review of legislation in India.</p>
                </div>
              </div>
            </div>

            {/* 6 CATEGORIES DEEP DIVE */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-violet-50 border-b border-violet-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-violet-500 rounded-full"></div>
                <div className="text-sm font-bold text-violet-900">The 6 Categories — Deep Dive</div>
              </div>
              <div className="p-5 flex flex-col gap-4">

                <div className="border-2 border-blue-200 rounded-2xl overflow-hidden">
                  <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
                    <div className="font-bold text-sm">1. Right to Equality</div>
                    <div className="text-xs bg-blue-500 px-2 py-0.5 rounded-full">Articles 14–18</div>
                  </div>
                  <div className="p-4 bg-blue-50">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">The Right to Equality is the most fundamental of all rights — without equality, no other right can be meaningful. It ensures that the state treats everyone equally before the law and does not discriminate arbitrarily.</p>
                    <div className="flex flex-col gap-2">
                      {[
                        {art:'Art. 14', title:'Equality before law & Equal protection of law', detail:'Two distinct concepts borrowed from different legal traditions. Equality before law (British concept) = no man is above law. Equal protection of law (American concept) = equal treatment in equal circumstances. The doctrine of "reasonable classification" allows the state to treat different classes differently if the classification has a rational basis and nexus with the object.'},
                        {art:'Art. 15', title:'Prohibition of discrimination', detail:'State cannot discriminate on grounds of religion, race, caste, sex or place of birth. But positive discrimination (reservations for SC/ST/OBC/women) IS allowed under Art. 15(3), (4), (5). The 103rd Amendment added Art. 15(6) for EWS reservation.'},
                        {art:'Art. 16', title:'Equality of opportunity in public employment', detail:'Every citizen has equal opportunity for jobs under the state. Allows reservations for backward classes (Art. 16(4)), SC/ST (Art. 16(4A) for promotions). Parliament can prescribe residence as a condition for certain state government jobs.'},
                        {art:'Art. 17', title:'Abolition of untouchability', detail:'Untouchability is abolished and its practice in any form is forbidden. The word "untouchability" is not defined in the Constitution. Protected by Protection of Civil Rights Act 1955 and SC/ST (Prevention of Atrocities) Act 1989.'},
                        {art:'Art. 18', title:'Abolition of titles', detail:'State shall not confer any title (except military or academic distinctions). No citizen shall accept a title from any foreign state. Bharat Ratna and Padma awards are NOT titles — SC ruled they do not violate Art. 18.'},
                      ].map(a => (
                        <div key={a.art} className="bg-white rounded-xl p-3 border border-blue-100">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{a.art}</span>
                            <span className="text-xs font-semibold text-gray-800">{a.title}</span>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">{a.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-2 border-green-200 rounded-2xl overflow-hidden">
                  <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-between">
                    <div className="font-bold text-sm">2. Right to Freedom</div>
                    <div className="text-xs bg-green-500 px-2 py-0.5 rounded-full">Articles 19–22</div>
                  </div>
                  <div className="p-4 bg-green-50">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">The Right to Freedom is the heart of a liberal democracy. It guarantees six essential freedoms under Article 19, and the most important of all rights — the right to life and personal liberty — under Article 21, which the Supreme Court has expanded enormously through judicial interpretation.</p>
                    <div className="bg-white rounded-xl p-4 border border-green-100 mb-3">
                      <div className="text-xs font-bold text-green-800 mb-2">Article 19 — 6 Freedoms (Only for citizens)</div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          {sub:'19(1)(a)', right:'Freedom of speech and expression', restriction:'Sovereignty, integrity, security, friendly relations with foreign states, public order, decency, morality, contempt of court, defamation, incitement to offence'},
                          {sub:'19(1)(b)', right:'Freedom to assemble peacefully (without arms)', restriction:'Sovereignty, integrity, public order'},
                          {sub:'19(1)(c)', right:'Freedom to form associations or unions', restriction:'Sovereignty, integrity, public order, morality'},
                          {sub:'19(1)(d)', right:'Freedom to move freely throughout India', restriction:'General public interest, interests of SC/ST'},
                          {sub:'19(1)(e)', right:'Freedom to reside and settle in any part of India', restriction:'General public interest, interests of SC/ST'},
                          {sub:'19(1)(g)', right:'Freedom to practice any profession or trade', restriction:'Public interest, professional qualifications'},
                        ].map(f => (
                          <div key={f.sub} className="bg-green-50 rounded-lg p-2.5 border border-green-100">
                            <div className="text-xs font-bold text-green-700 mb-1">{f.sub} — {f.right}</div>
                            <div className="text-xs text-gray-500"><span className="font-medium">Restriction: </span>{f.restriction}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-green-100">
                      <div className="text-xs font-bold text-green-800 mb-2">Article 21 — Right to Life and Personal Liberty</div>
                      <p className="text-xs text-gray-700 leading-relaxed mb-2">Article 21 states: "No person shall be deprived of his life or personal liberty except according to procedure established by law." Initially interpreted narrowly (A.K. Gopalan case 1950), it was dramatically expanded in <strong>Maneka Gandhi (1978)</strong> to mean the procedure must be <strong>just, fair and reasonable</strong>.</p>
                      <div className="text-xs font-bold text-gray-700 mb-2">Rights flowing from Art. 21 (through judicial interpretation):</div>
                      <div className="flex flex-wrap gap-1.5">
                        {['Right to privacy (Puttaswamy 2017)','Right to livelihood','Right to health','Right to education (now Art. 21A)','Right to shelter','Right to a clean environment','Right to speedy trial','Right against handcuffing','Right to legal aid','Right to die with dignity','Right against solitary confinement','Right to compensation for wrongful arrest'].map(r => (
                          <span key={r} className="text-xs bg-green-50 text-green-800 border border-green-200 px-2 py-0.5 rounded-full">{r}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-orange-200 rounded-2xl overflow-hidden">
                  <div className="bg-orange-500 text-white px-4 py-3 flex items-center justify-between">
                    <div className="font-bold text-sm">3. Right against Exploitation</div>
                    <div className="text-xs bg-orange-400 px-2 py-0.5 rounded-full">Articles 23–24</div>
                  </div>
                  <div className="p-4 bg-orange-50">
                    <div className="flex flex-col gap-3">
                      <div className="bg-white rounded-xl p-3 border border-orange-100">
                        <div className="text-xs font-bold text-orange-700 mb-1">Art. 23 — Prohibition of trafficking and forced labour</div>
                        <p className="text-xs text-gray-700 leading-relaxed">Traffic in human beings, begar (forced unpaid labour) and other similar forms of forced labour are prohibited. Violation is punishable as an offence. This right is available to both citizens AND non-citizens. The state CAN impose compulsory service for public purposes (like military service) but cannot discriminate on grounds of religion, race, caste or class.</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-orange-100">
                        <div className="text-xs font-bold text-orange-700 mb-1">Art. 24 — Prohibition of employment of children in factories</div>
                        <p className="text-xs text-gray-700 leading-relaxed">No child below the age of <strong>14 years</strong> shall be employed in any factory, mine or other hazardous employment. The Child Labour (Prohibition and Regulation) Amendment Act 2016 extended this to a total ban on employment of children below 14 years and restricted employment of 14-18 year olds in hazardous occupations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-amber-200 rounded-2xl overflow-hidden">
                  <div className="bg-amber-500 text-white px-4 py-3 flex items-center justify-between">
                    <div className="font-bold text-sm">4. Right to Freedom of Religion</div>
                    <div className="text-xs bg-amber-400 px-2 py-0.5 rounded-full">Articles 25–28</div>
                  </div>
                  <div className="p-4 bg-amber-50">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">India follows <strong>positive secularism</strong> — the state gives equal respect to all religions, unlike negative secularism (separation of church and state as in the USA). These articles protect the individual's right to religion as well as the community's right to manage religious affairs.</p>
                    <div className="flex flex-col gap-2">
                      {[
                        {art:'Art. 25', detail:'Freedom of conscience and free profession, practice and propagation of religion. Subject to public order, morality and health. State can regulate secular activities of religious bodies.'},
                        {art:'Art. 26', detail:'Freedom to manage religious affairs. Every religious denomination has right to: establish and maintain religious institutions, manage its own affairs in matters of religion, own property, administer property.'},
                        {art:'Art. 27', detail:'No person shall be compelled to pay taxes for promotion of any religion. But can collect fees for secular administration of religious institutions.'},
                        {art:'Art. 28', detail:'No religious instruction in state-funded institutions. Institutions managed by religious bodies but aided by state can give optional religious instruction.'},
                      ].map(a => (
                        <div key={a.art} className="bg-white rounded-xl p-3 border border-amber-100">
                          <span className="text-xs font-bold text-amber-700">{a.art}</span>
                          <p className="text-xs text-gray-700 mt-1 leading-relaxed">{a.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-2 border-pink-200 rounded-2xl overflow-hidden">
                  <div className="bg-pink-600 text-white px-4 py-3 flex items-center justify-between">
                    <div className="font-bold text-sm">5. Cultural & Educational Rights</div>
                    <div className="text-xs bg-pink-500 px-2 py-0.5 rounded-full">Articles 29–30</div>
                  </div>
                  <div className="p-4 bg-pink-50">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">These rights protect the cultural and educational interests of minorities — both linguistic and religious. They ensure that minorities can preserve their distinct identity in a diverse country like India.</p>
                    <div className="flex flex-col gap-2">
                      <div className="bg-white rounded-xl p-3 border border-pink-100">
                        <div className="text-xs font-bold text-pink-700 mb-1">Art. 29 — Protection of interests of minorities</div>
                        <p className="text-xs text-gray-700 leading-relaxed">Any section of citizens having a distinct language, script or culture shall have the right to conserve it. No citizen shall be denied admission into any educational institution maintained or aided by the state on grounds of religion, race, caste, language.</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-pink-100">
                        <div className="text-xs font-bold text-pink-700 mb-1">Art. 30 — Right of minorities to establish institutions</div>
                        <p className="text-xs text-gray-700 leading-relaxed">All minorities (religious or linguistic) have the right to establish and administer educational institutions of their choice. The state cannot discriminate against minority institutions in granting aid. This right is <strong>absolute</strong> — not subject to reasonable restrictions like Art. 19 freedoms.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-purple-200 rounded-2xl overflow-hidden">
                  <div className="bg-purple-700 text-white px-4 py-3 flex items-center justify-between">
                    <div className="font-bold text-sm">6. Right to Constitutional Remedies</div>
                    <div className="text-xs bg-purple-600 px-2 py-0.5 rounded-full">Article 32 — Heart & Soul</div>
                  </div>
                  <div className="p-4 bg-purple-50">
                    <div className="bg-purple-100 border border-purple-200 rounded-xl p-4 mb-3">
                      <p className="text-sm text-purple-900 leading-relaxed font-medium">"If I was asked to name any particular article in this Constitution as the most important — an article without which this Constitution would be a nullity — I could not refer to any other article except this one. It is the very soul of the Constitution and the very heart of it."</p>
                      <p className="text-xs text-purple-700 mt-2">— Dr. B.R. Ambedkar on Article 32</p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">Article 32 is itself a Fundamental Right — the right to enforce other Fundamental Rights. It cannot be suspended except during a National Emergency (Art. 352). Dr. Ambedkar called it the most important article because without it, all other FRs would be meaningless — you'd have rights on paper but no way to enforce them.</p>
                    <div className="text-xs font-bold text-gray-700 mb-2">5 Writs under Art. 32 (and Art. 226 for HC):</div>
                    <div className="flex flex-col gap-2">
                      {[
                        {writ:'Habeas Corpus', latin:'"Produce the body"', use:'Release from illegal detention. Most widely used. Can be issued against state AND private individuals.'},
                        {writ:'Mandamus', latin:'"We command"', use:'Command a public authority to perform its legal duty. Cannot be issued against President, Governor or private individuals.'},
                        {writ:'Certiorari', latin:'"To be certified"', use:'Quash order of inferior court/tribunal exceeding jurisdiction. Post-decisional (after the order).'},
                        {writ:'Prohibition', latin:'"To forbid"', use:'Prevent inferior court from exceeding jurisdiction. Pre-decisional (before the order).'},
                        {writ:'Quo Warranto', latin:'"By what authority"', use:'Enquire into legality of person holding public office. Only for substantive public offices.'},
                      ].map(w => (
                        <div key={w.writ} className="bg-white rounded-xl p-3 border border-purple-100 flex gap-3">
                          <div className="shrink-0">
                            <div className="text-xs font-bold text-purple-700">{w.writ}</div>
                            <div className="text-xs text-purple-400 italic">{w.latin}</div>
                          </div>
                          <div className="text-xs text-gray-600 leading-relaxed">{w.use}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* LANDMARK CASES */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-amber-50 border-b border-amber-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-amber-500 rounded-full"></div>
                <div className="text-sm font-bold text-amber-900">Landmark Cases — Must Know for UPSC</div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                {[
                  {case:'A.K. Gopalan v. State of Madras (1950)', significance:'First major FR case. SC took narrow view of Art. 21 — "procedure established by law" means any procedure, not necessarily just or fair. This was later overruled.', impact:'Established that FRs are separate watertight compartments — each FR operates independently.'},
                  {case:'Kesavananda Bharati v. State of Kerala (1973)', significance:'13-judge bench. Most important constitutional case ever. Established Basic Structure doctrine. Parliament can amend FRs but cannot destroy the basic structure of the Constitution.', impact:'Changed the entire relationship between Parliament and the Supreme Court. FRs are now protected by the Basic Structure doctrine.'},
                  {case:'Maneka Gandhi v. Union of India (1978)', significance:'Overruled A.K. Gopalan. Art. 21 must be read with Arts. 14 and 19. Procedure must be "just, fair and reasonable" — not merely any procedure prescribed by law.', impact:'Dramatically expanded scope of Art. 21. Launched the era of expansive interpretation of FRs.'},
                  {case:'Minerva Mills v. Union of India (1980)', significance:'SC struck down part of 42nd Amendment that gave DPSPs absolute primacy over FRs. Reaffirmed that balance between FRs and DPSPs is part of Basic Structure.', impact:'Harmony between FRs and DPSPs is constitutionally mandated — neither can completely override the other.'},
                  {case:'K.S. Puttaswamy v. Union of India (2017)', significance:'9-judge bench. Unanimously held that Right to Privacy is a Fundamental Right under Art. 21. Overruled M.P. Sharma (1954) and Kharak Singh (1962).', impact:'Massive implications for Aadhaar, surveillance, data protection. Led to Digital Personal Data Protection Act 2023.'},
                ].map(c => (
                  <div key={c.case} className="border border-amber-100 rounded-xl overflow-hidden">
                    <div className="bg-amber-50 px-4 py-2">
                      <div className="text-xs font-bold text-amber-900">{c.case}</div>
                    </div>
                    <div className="p-3 grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs font-semibold text-gray-600 mb-1">What was decided</div>
                        <p className="text-xs text-gray-700 leading-relaxed">{c.significance}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-600 mb-1">Impact & importance</div>
                        <p className="text-xs text-gray-700 leading-relaxed">{c.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EXAM READY */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-red-500 rounded-full"></div>
                <div className="text-sm font-bold text-red-900">Exam-Ready Comparisons & Distinctions</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                {[
                  {title:'FRs vs DPSPs', points:['FRs — Part III, justiciable, negative obligations on state','DPSPs — Part IV, non-justiciable, positive obligations on state','FRs can be restricted to implement DPSPs (Art. 31C)','SC said balance between both is part of Basic Structure','Neither can completely override the other (Minerva Mills)']},
                  {title:'Art. 32 vs Art. 226', points:['Art. 32 — Supreme Court only, only for FR violations','Art. 226 — High Court, for any legal right (wider)','Art. 32 is itself a FR, cannot be suspended except by Art. 352','HC has discretion to refuse writ, SC must issue if FR violated','SC under Art. 32 has narrower but stronger jurisdiction']},
                  {title:'FRs during Emergency', points:['Art. 352 (National Emergency) — Art. 19 freedoms suspended','Art. 20 (protection against conviction) — NEVER suspended','Art. 21 (right to life) — NEVER suspended','Art. 359 — President can suspend enforcement of FRs by order','44th Amendment — made Art. 20 & 21 non-suspendable even by Art. 359']},
                  {title:'FRs — Citizens vs All Persons', points:['Available to ALL persons: Arts. 14, 20, 21, 22, 23, 24, 25, 26, 27, 28','Available ONLY to citizens: Arts. 15, 16, 19, 29, 30','Foreigners cannot claim Art. 19 freedoms','Foreigners cannot claim cultural & educational rights','Art. 21 available even to foreign prisoners in India']},
                ].map(d => (
                  <div key={d.title} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-red-400 rounded-full"></span>{d.title}
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {d.points.map(p => (
                        <li key={p} className="text-xs text-gray-700 flex gap-2 leading-relaxed">
                          <span className="text-red-400 shrink-0 mt-0.5">•</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CURRENT AFFAIRS */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-5 bg-teal-500 rounded-full"></div>
                <div className="text-sm font-bold text-teal-900">Current Affairs Links — Connect to 2027</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  {event:'Electoral bonds judgment (Feb 2024)', fr:'Art. 19(1)(a) — Right to information', detail:'SC struck down electoral bonds scheme. Held that voters have right to know about political funding under Art. 19(1)(a). Anonymity of donors vs voters\' right to information.', tag:'High probability 2027'},
                  {event:'K.S. Puttaswamy & DPDP Act 2023', fr:'Art. 21 — Right to Privacy', detail:'Digital Personal Data Protection Act 2023 enacted following the Puttaswamy judgment. Regulates processing of digital personal data. Important for AI, surveillance, data broker issues.', tag:'High probability 2027'},
                  {event:'PM Vidyalaxmi scheme (2024)', fr:'Art. 21A — Right to Education', detail:'Education loans with full interest subsidy for students from families with income below Rs. 8 lakh. Directly implements Art. 21A right to education at higher education level.', tag:'Scheme link'},
                  {event:'CAA implementation (2024)', fr:'Art. 14 & 15 — Equality', detail:'Citizenship Amendment Act 2019 implemented. Critics argue it discriminates based on religion (violating Art. 14 & 15). Govt argues it is a special provision for persecuted minorities — reasonable classification.', tag:'Controversial'},
                ].map(c => (
                  <div key={c.event} className="border border-teal-100 rounded-xl p-3 bg-teal-50">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-xs font-bold text-teal-800">{c.event}</div>
                      <span className="text-xs bg-teal-200 text-teal-800 px-2 py-0.5 rounded-full shrink-0 font-medium">{c.tag}</span>
                    </div>
                    <div className="text-xs text-blue-700 font-medium mb-1">{c.fr}</div>
                    <p className="text-xs text-gray-700 leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeTab === 'mindmap' && (
          <div className="bg-white border border-gray-100 rounded-xl p-6 overflow-auto">
            <div className="text-sm text-gray-500 mb-6">Click any node to expand · Click again to collapse</div>
            <div className="overflow-x-auto pb-4">
              <MindmapNodeComponent node={mindmapData} level={0} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4">
              <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-xs text-gray-500">Guardian</div><div className="text-xs font-semibold text-gray-800 mt-1">Art. 13 — void ab initio</div></div>
              <div className="bg-red-50 rounded-xl p-3 text-center"><div className="text-xs text-gray-500">Cannot be suspended</div><div className="text-xs font-semibold text-gray-800 mt-1">Art. 20 & 21 always protected</div></div>
              <div className="bg-purple-50 rounded-xl p-3 text-center"><div className="text-xs text-gray-500">Enforcer</div><div className="text-xs font-semibold text-gray-800 mt-1">Art. 32 — SC writs</div></div>
            </div>
          </div>
        )}

        {activeTab === 'pyq' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-4">Previous Year Questions — 20 years</div>
            <div className="flex flex-col gap-3">
              {[
                {year:'2023 Prelims', q:'Which Article was described as the "heart and soul" of the Constitution by Dr. Ambedkar?'},
                {year:'2022 Mains GS-II', q:'Examine how Art. 21 has evolved through judicial interpretation to include the right to privacy.'},
                {year:'2021 Prelims', q:'Art. 20 and 21 cannot be suspended even during National Emergency. Explain.'},
                {year:'2020 Mains GS-II', q:'Discuss the significance of the Puttaswamy judgment for digital privacy rights in India.'},
                {year:'2019 Prelims', q:'Which of the following writs can be issued against private bodies?'},
                {year:'2018 Mains GS-II', q:'Discuss the Basic Structure doctrine. How has it protected Fundamental Rights?'},
                {year:'2016 Prelims', q:'Right to Education under Art. 21A was added by which Constitutional Amendment?'},
                {year:'2014 Mains GS-II', q:'Examine the scope of Art. 21 in light of Maneka Gandhi case.'},
              ].map((pyq, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-all">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{pyq.year}</span>
                  <div className="text-sm text-gray-700 leading-relaxed mt-2">{pyq.q}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            {!quizStarted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎯</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Quiz — Fundamental Rights</div>
                <div className="text-sm text-gray-500 mb-2">5 UPSC-style questions</div>
                <div className="text-xs text-gray-400 mb-8">Select the correct option · See explanation instantly</div>
                <button onClick={() => setQuizStarted(true)} className="bg-blue-600 text-white px-10 py-3 rounded-xl font-medium text-sm hover:bg-blue-700 transition-all">Start Quiz →</button>
              </div>
            ) : currentQ < quizQuestions.length ? (
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-sm text-gray-500 shrink-0">Q {currentQ + 1}/{quizQuestions.length}</div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-blue-500 rounded-full transition-all duration-300" style={{width:`${(currentQ/quizQuestions.length)*100}%`}}></div></div>
                  <div className="text-sm font-medium text-green-600 shrink-0">Score: {score}</div>
                </div>
                <div className="text-base font-semibold text-gray-900 mb-5 leading-relaxed">{quizQuestions[currentQ].q}</div>
                <div className="flex flex-col gap-3 mb-5">
                  {quizQuestions[currentQ].options.map((opt, i) => (
                    <button key={i} onClick={() => { if (selectedAnswer === null) { setSelectedAnswer(i); if (i === quizQuestions[currentQ].correct) setScore(s => s + 1) } }}
                      className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAnswer === null ? 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer' : i === quizQuestions[currentQ].correct ? 'border-green-400 bg-green-50 text-green-800' : i === selectedAnswer ? 'border-red-400 bg-red-50 text-red-800' : 'border-gray-100 bg-gray-50 text-gray-400'}`}>
                      <span className="font-bold mr-3 text-gray-400">{String.fromCharCode(65+i)}.</span>{opt}
                      {selectedAnswer !== null && i === quizQuestions[currentQ].correct && <span className="ml-2 text-green-600">✓</span>}
                      {selectedAnswer === i && i !== quizQuestions[currentQ].correct && <span className="ml-2 text-red-600">✗</span>}
                    </button>
                  ))}
                </div>
                {selectedAnswer !== null && (
                  <>
                    <div className={`rounded-xl p-4 mb-5 ${selectedAnswer === quizQuestions[currentQ].correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                      <div className={`text-sm font-semibold mb-1 ${selectedAnswer === quizQuestions[currentQ].correct ? 'text-green-800' : 'text-red-800'}`}>{selectedAnswer === quizQuestions[currentQ].correct ? '✓ Correct!' : '✗ Incorrect'}</div>
                      <div className="text-sm text-gray-700 leading-relaxed">{quizQuestions[currentQ].explanation}</div>
                    </div>
                    <button onClick={() => { setCurrentQ(q => q+1); setSelectedAnswer(null); }} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all">
                      {currentQ < quizQuestions.length - 1 ? 'Next Question →' : 'See Results →'}
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">{score >= 4 ? '🏆' : score >= 3 ? '👍' : '📚'}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">You scored {score} / {quizQuestions.length}</div>
                <div className="text-sm text-gray-500 mb-8">{score === 5 ? 'Perfect! Excellent preparation!' : score >= 3 ? 'Good effort! Review the notes and try again.' : 'Keep studying! Read the notes carefully and retry.'}</div>
                <div className="flex gap-3 justify-center">
                  <button onClick={() => { setQuizStarted(false); setCurrentQ(0); setSelectedAnswer(null); setScore(0); }} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-blue-700">Try Again</button>
                  <button onClick={() => setActiveTab('notes')} className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium text-sm hover:bg-gray-200">Review Notes</button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'predict' && (
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-base font-semibold text-gray-900 mb-1">Predicted questions for UPSC 2027</div>
            <div className="text-xs text-gray-500 mb-5">Based on 20-year PYQ pattern analysis</div>
            <div className="flex flex-col gap-3">
              {[
                {q:'Technology and Right to Privacy (Art. 21) — AI surveillance, facial recognition and digital rights in India', prob:88},
                {q:'Electoral bonds judgment — Art. 19 right to information vs donor anonymity in political funding', prob:82},
                {q:'Basic Structure doctrine and limits on Parliamentary power to amend Fundamental Rights', prob:74},
                {q:'Art. 32 vs Art. 226 — scope, difference and which is more powerful', prob:68},
                {q:'Fundamental Rights available to foreigners — which ones and the constitutional rationale', prob:62},
              ].map((pred, i) => (
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i+1}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-800 leading-relaxed mb-2">{pred.q}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-amber-100 rounded-full"><div className="h-2 bg-amber-400 rounded-full" style={{width:`${pred.prob}%`}}></div></div>
                        <span className="text-xs font-bold text-amber-700">{pred.prob}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
              <div className="text-sm font-semibold text-blue-900 mb-1">🤖 AI-powered predictions coming soon</div>
              <div className="text-xs text-blue-600">When Claude API is connected — predictions personalised to your weak areas</div>
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/polity/2" className="text-sm text-blue-600 hover:text-blue-700">← Preamble</a>
          <div className="text-xs text-gray-400">Topic 3 of 20</div>
          <a href="/subjects/polity/4" className="text-sm text-blue-600 hover:text-blue-700">DPSP →</a>
        </div>
      </div>
    </div>
  )
}