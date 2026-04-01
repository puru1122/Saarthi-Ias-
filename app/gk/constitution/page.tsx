export default function ConstitutionPage() {
  const articles = [
    {num:'Art. 12–35', title:'Fundamental Rights', desc:'Part III · Justiciable · Enforceable by courts', paper:'GS-II', pyq:'Every year'},
    {num:'Art. 13', title:'Guardian of FRs', desc:'Any law violating Part III is void ab initio', paper:'GS-II', pyq:'2023, 2021, 2019'},
    {num:'Art. 14', title:'Right to Equality', desc:'Equality before law · Equal protection of laws', paper:'GS-II', pyq:'2022, 2020'},
    {num:'Art. 19', title:'Right to Freedom', desc:'6 freedoms · Speech, movement, profession, assembly', paper:'GS-II', pyq:'2023, 2021, 2018'},
    {num:'Art. 21', title:'Right to Life', desc:'Most expanded article · Includes right to privacy, dignity', paper:'GS-II', pyq:'2023, 2022, 2020'},
    {num:'Art. 21A', title:'Right to Education', desc:'86th Amendment 2002 · Free education 6–14 years', paper:'GS-II', pyq:'2021, 2018'},
    {num:'Art. 32', title:'Right to Remedies', desc:'Heart and soul of Constitution — Dr. Ambedkar · 5 writs', paper:'GS-II', pyq:'2023, 2020, 2018'},
    {num:'Art. 36–51', title:'DPSP', desc:'Part IV · Non-justiciable · Welfare state principles', paper:'GS-II', pyq:'2022, 2019, 2016'},
    {num:'Art. 51A', title:'Fundamental Duties', desc:'11 duties · Added by 42nd Amendment 1976', paper:'GS-II', pyq:'2021, 2018, 2015'},
    {num:'Art. 74', title:'Council of Ministers', desc:'Aid and advise President · PM is head · Collective responsibility', paper:'GS-II', pyq:'2022, 2019'},
    {num:'Art. 110', title:'Money Bill', desc:'Certified by Speaker · Only in Lok Sabha · No Rajya Sabha veto', paper:'GS-II', pyq:'2023, 2020'},
    {num:'Art. 352–360', title:'Emergency Provisions', desc:'3 types: National, State, Financial', paper:'GS-II', pyq:'2022, 2019, 2016'},
  ]

  const writs = [
    {name:'Habeas Corpus', meaning:'Produce the body', use:'Against illegal detention · Most famous writ', against:'State and private bodies'},
    {name:'Mandamus', meaning:'We command', use:'Public duty must be performed · Cannot issue against President', against:'Public authorities'},
    {name:'Certiorari', meaning:'To be certified', use:'Quash illegal orders of inferior courts · Post-decisional', against:'Inferior courts'},
    {name:'Prohibition', meaning:'To forbid', use:'Stop inferior court exceeding jurisdiction · Pre-decisional', against:'Inferior courts'},
    {name:'Quo Warranto', meaning:'By what authority', use:'Against illegal holding of public office', against:'Public offices'},
  ]

  const amendments = [
    {num:'1st (1951)', title:'9th Schedule added · Land reforms protected'},
    {num:'42nd (1976)', title:'Mini constitution · Socialist, Secular added · Fundamental Duties'},
    {num:'44th (1978)', title:'Right to property removed from FR → legal right'},
    {num:'52nd (1985)', title:'Anti-defection law · 10th Schedule added'},
    {num:'61st (1988)', title:'Voting age reduced from 21 to 18 years'},
    {num:'73rd (1992)', title:'Panchayati Raj · Part IX · 11th Schedule'},
    {num:'86th (2002)', title:'Right to Education · Article 21A added'},
    {num:'101st (2016)', title:'GST · Article 246A added'},
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
          <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>Subjects and notes
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
          <a href="/gk" className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 border-l-2 border-blue-600 font-medium">
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
          <a href="/gk" className="text-xs text-gray-400 hover:text-gray-600">← GK Infographics</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Constitution Basics</div>
          <div className="text-sm text-gray-500 mt-1">Key articles · 5 writs · Important amendments · All UPSC tagged</div>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">448</div>
            <div className="text-xs text-gray-400 mt-1">Total articles</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">25</div>
            <div className="text-xs text-gray-400 mt-1">Parts</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">12</div>
            <div className="text-xs text-gray-400 mt-1">Schedules</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-medium text-gray-900">106</div>
            <div className="text-xs text-gray-400 mt-1">Amendments</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-base font-semibold text-gray-900 mb-3">Must-know articles</div>
          <div className="flex flex-col gap-3">
            {articles.map((a) => (
              <div key={a.num} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4">
                <div className="bg-violet-50 text-violet-700 text-xs font-medium px-2 py-1 rounded-lg shrink-0 mt-0.5">{a.num}</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">{a.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{a.desc}</div>
                </div>
                <div className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded-lg shrink-0">PYQ: {a.pyq}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="text-base font-semibold text-gray-900 mb-3">5 types of writs</div>
          <div className="flex flex-col gap-3">
            {writs.map((w) => (
              <div key={w.name} className="bg-white border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-sm font-semibold text-gray-900">{w.name}</div>
                  <div className="text-xs text-gray-400 italic">{w.meaning}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-xs text-gray-500"><span className="text-gray-400">Use: </span>{w.use}</div>
                  <div className="text-xs text-gray-500"><span className="text-gray-400">Against: </span>{w.against}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="text-base font-semibold text-gray-900 mb-3">Key amendments</div>
          <div className="grid grid-cols-2 gap-3">
            {amendments.map((am) => (
              <div key={am.num} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-3">
                <div className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-lg shrink-0 h-fit">{am.num}</div>
                <div className="text-xs text-gray-600">{am.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-violet-900">Test yourself on Constitution</div>
            <div className="text-xs text-violet-600 mt-1">10 PYQ-based questions · Instant answers</div>
          </div>
          <a href="/gk" className="bg-violet-600 text-white text-sm px-4 py-2 rounded-lg">
            Start quiz
          </a>
        </div>
      </div>
    </div>
  )
}