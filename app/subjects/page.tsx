export default function SubjectsPage() {
  const subjects = [
    {
      icon: '⚖️',
      name: 'Polity & Governance',
      paper: 'GS-II',
      topics: 24,
      done: 6,
      color: 'bg-blue-500',
      light: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      link: '/subjects/polity',
      topicList: ['Constitution overview','Preamble','Fundamental Rights','DPSP','Fundamental Duties','Parliament','President & PM','Judiciary','Federalism','Local bodies','Emergency provisions','Amendment procedure','Schedules','Writs','Election Commission','Anti-defection','Money Bill','RTI Act','Lokpal','e-Governance'],
    },
    {
      icon: '🏛️',
      name: 'History — Ancient & Medieval',
      paper: 'GS-I',
      topics: 20,
      done: 2,
      color: 'bg-pink-500',
      light: 'bg-pink-50',
      text: 'text-pink-700',
      border: 'border-pink-200',
      link: '/subjects/history',
      topicList: ['Indus Valley','Vedic period','Jainism & Buddhism','Maurya Empire','Gupta Empire','Sangam period','Chola dynasty','Delhi Sultanate','Mughal Empire','Maratha Empire','Bhakti movement','Sufi movement','Art & architecture','Trade routes'],
    },
    {
      icon: '🇮🇳',
      name: 'Modern History & Freedom',
      paper: 'GS-I',
      topics: 20,
      done: 0,
      color: 'bg-red-500',
      light: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      link: '/subjects/modern-history',
      topicList: ['Advent of Europeans','1857 revolt','INC formation','Moderates vs Extremists','Non-cooperation','Civil Disobedience','Quit India','INA & Bose','Revolutionary movements','Important acts','Partition & Independence'],
    },
    {
      icon: '🌏',
      name: 'Geography',
      paper: 'GS-I',
      topics: 20,
      done: 0,
      color: 'bg-teal-500',
      light: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-200',
      link: '/subjects/geography',
      topicList: ['Physical features','Himalayan ranges','Northern plains','Rivers','Climate & monsoon','Soils','Natural vegetation','Agriculture','Minerals & energy','Industries','World geography'],
    },
    {
      icon: '📊',
      name: 'Economy',
      paper: 'GS-III',
      topics: 20,
      done: 0,
      color: 'bg-amber-500',
      light: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      link: '/subjects/economy',
      topicList: ['National income','Economic growth','Budget & fiscal policy','Monetary policy & RBI','Banking system','Inflation','Balance of payments','Agriculture economics','GST & tax','Poverty & unemployment','FDI & FPI','WTO & trade'],
    },
    {
      icon: '🌿',
      name: 'Environment & Ecology',
      paper: 'GS-III',
      topics: 15,
      done: 0,
      color: 'bg-green-500',
      light: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      link: '/subjects/environment',
      topicList: ['Ecosystem basics','Biodiversity','Climate change','Pollution','Environmental laws','National parks','Biosphere reserves','Wetlands & Ramsar','Forest types','Renewable energy','International conventions','Disaster management'],
    },
    {
      icon: '🔬',
      name: 'Science & Technology',
      paper: 'GS-III',
      topics: 15,
      done: 0,
      color: 'bg-violet-500',
      light: 'bg-violet-50',
      text: 'text-violet-700',
      border: 'border-violet-200',
      link: '/subjects/science',
      topicList: ['Space technology','Defence technology','Nuclear programme','Biotechnology','AI & Robotics','IT & computers','Health technology','Cybersecurity','5G & telecom','Semiconductor policy'],
    },
    {
      icon: '🌍',
      name: 'International Relations',
      paper: 'GS-II',
      topics: 12,
      done: 0,
      color: 'bg-cyan-500',
      light: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      link: '/subjects/ir',
      topicList: ['India foreign policy','India-USA','India-China','India-Pakistan','SAARC','SCO & BRICS','UN & multilateral','G20','Indo-Pacific strategy'],
    },
    {
      icon: '🛡️',
      name: 'Internal Security',
      paper: 'GS-III',
      topics: 10,
      done: 0,
      color: 'bg-orange-500',
      light: 'bg-orange-50',
      text: 'text-orange-700',
      border: 'border-orange-200',
      link: '/subjects/security',
      topicList: ['Terrorism','Left-wing extremism','Border management','Cyber threats','Money laundering','Security forces','Intelligence agencies'],
    },
    {
      icon: '⚡',
      name: 'Ethics, Integrity & Aptitude',
      paper: 'GS-IV',
      topics: 10,
      done: 0,
      color: 'bg-purple-500',
      light: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      link: '/subjects/ethics',
      topicList: ['Ethics basics','Attitude & aptitude','Emotional intelligence','Civil service values','Probity in governance','Corruption','Case studies','Philosophical thinkers'],
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-4 py-5 border-b border-gray-100">
          <div className="text-lg font-semibold text-gray-900">Saarthi IAS</div>
          <div className="text-xs text-gray-400 mt-0.5">Beginner to selection · 2027</div>
        </div>
        <nav className="flex-1 py-3">
          <div className="px-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Overview</div>
          <a href="/" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>Learning path
          </a>
          <div className="px-3 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Study</div>
          <a href="/subjects" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects & notes
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>PYQ bank
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span>Mock tests
          </a>
          <div className="px-3 pt-3 pb-1 text-xs text-gray-400 uppercase tracking-widest">Stay updated</div>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>Current affairs
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>Govt schemes
          </a>
          <a href="/gk" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-pink-400"></span>GK infographics
          </a>
        </nav>
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="text-xs text-gray-400">UPSC CSE 2027</div>
          <div className="text-sm font-medium text-gray-800 mt-0.5">Aspirant · Level 2</div>
          <div className="mt-2 h-1 bg-gray-100 rounded-full">
            <div className="h-1 bg-blue-500 rounded-full w-1/4"></div>
          </div>
          <div className="text-xs text-gray-400 mt-1">28% complete</div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="mb-6">
          <a href="/" className="text-xs text-gray-400 hover:text-gray-600">← Dashboard</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Subjects & Notes</div>
          <div className="text-sm text-gray-500 mt-1">10 subjects · 184+ topics · Notes + PYQs + Predictions on every topic</div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">10</div>
            <div className="text-xs text-gray-400 mt-1">Subjects</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">184+</div>
            <div className="text-xs text-gray-400 mt-1">Total topics</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">8</div>
            <div className="text-xs text-gray-400 mt-1">Topics done</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {subjects.map((subj) => (
            <div key={subj.name} className={`bg-white border rounded-xl overflow-hidden ${subj.border}`}>
              <div className="p-4 flex items-center gap-3">
                <div className="text-2xl">{subj.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-base font-semibold text-gray-900">{subj.name}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${subj.light} ${subj.text} font-medium`}>{subj.paper}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{subj.topics} topics · {subj.done} done</div>
                  <div className="mt-2 h-1 bg-gray-100 rounded-full w-48">
                    <div className={`h-1 rounded-full ${subj.color}`} style={{width:`${Math.round((subj.done/subj.topics)*100)}%`}}></div>
                  </div>
                </div>
                <a href={subj.link} className={`text-xs px-4 py-2 rounded-lg ${subj.light} ${subj.text} font-medium hover:opacity-80`}>
                  Study →
                </a>
              </div>
              <div className="px-4 pb-4 flex flex-wrap gap-1.5">
                {subj.topicList.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
