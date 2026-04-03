export default function PreamblePage() {
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

      <div className="flex-1 p-6 max-w-5xl">
        <div className="mb-4">
          <a href="/subjects/polity" className="text-xs text-gray-400 hover:text-gray-600">← Polity & Governance</a>
          <div className="text-2xl font-semibold text-gray-900 mt-2">Preamble</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2022, 2020, 2017</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">42nd Amendment</div><div className="text-xs text-gray-400 mt-1">Modified Preamble</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">1976</div><div className="text-xs text-gray-400 mt-1">Year of amendment</div></div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center"><div className="text-xl font-medium text-gray-900">USA</div><div className="text-xs text-gray-400 mt-1">Concept borrowed from</div></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-blue-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                The Preamble — Full Text
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-900 leading-relaxed italic border border-blue-100">
                "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a <strong>SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC</strong> and to secure to all its citizens:
                <br/><br/>
                <strong>JUSTICE</strong>, social, economic and political;
                <br/>
                <strong>LIBERTY</strong> of thought, expression, belief, faith and worship;
                <br/>
                <strong>EQUALITY</strong> of status and of opportunity; and to promote among them all
                <br/>
                <strong>FRATERNITY</strong> assuring the dignity of the individual and the unity and integrity of the Nation;
                <br/><br/>
                IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION."
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-violet-500 rounded-full inline-block"></span>
                Key words explained
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {word:'Sovereign', meaning:'India is independent — not under any foreign power. Can make its own laws and foreign policy.', color:'bg-blue-50 border-blue-200', tcolor:'text-blue-800'},
                  {word:'Socialist', meaning:'Added by 42nd Amendment 1976. Means democratic socialism — mixed economy. Not communist socialism.', color:'bg-green-50 border-green-200', tcolor:'text-green-800'},
                  {word:'Secular', meaning:'Added by 42nd Amendment 1976. No state religion. State treats all religions equally. India is positive secularism (supports all religions) not negative secularism (ignores religion).', color:'bg-amber-50 border-amber-200', tcolor:'text-amber-800'},
                  {word:'Democratic', meaning:'Government of, by and for the people. Representatives elected by people. Universal adult franchise.', color:'bg-purple-50 border-purple-200', tcolor:'text-purple-800'},
                  {word:'Republic', meaning:'Head of state (President) is elected, not hereditary. No monarchy.', color:'bg-pink-50 border-pink-200', tcolor:'text-pink-800'},
                  {word:'Justice', meaning:'Social (no discrimination), Economic (fair distribution), Political (equal political rights).', color:'bg-orange-50 border-orange-200', tcolor:'text-orange-800'},
                  {word:'Liberty', meaning:'Freedom of thought, expression, belief, faith and worship. Not absolute — subject to reasonable restrictions.', color:'bg-teal-50 border-teal-200', tcolor:'text-teal-800'},
                  {word:'Equality', meaning:'Equal status and equal opportunity for all citizens. No privilege for any section.', color:'bg-red-50 border-red-200', tcolor:'text-red-800'},
                  {word:'Fraternity', meaning:'Brotherhood among all citizens. Ensures dignity of individual and unity & integrity of nation.', color:'bg-indigo-50 border-indigo-200', tcolor:'text-indigo-800'},
                ].map((k) => (
                  <div key={k.word} className={`border rounded-xl p-3 ${k.color}`}>
                    <div className={`text-sm font-semibold mb-1 ${k.tcolor}`}>{k.word}</div>
                    <div className="text-xs text-gray-600">{k.meaning}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500 rounded-full inline-block"></span>
                Important distinctions for UPSC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {q:'Is Preamble part of Constitution?', a:'Yes — Supreme Court held in Kesavananda Bharati (1973) that Preamble is part of the Constitution and can be amended under Art. 368.'},
                  {q:'Can Preamble be amended?', a:'Yes — but cannot destroy Basic Structure. 42nd Amendment added Socialist, Secular and Integrity.'},
                  {q:'Is Preamble justiciable?', a:'No — Preamble is not enforceable in courts. But it is used to interpret the Constitution.'},
                  {q:'Original vs Amended', a:'Original had: Sovereign Democratic Republic. 42nd Amendment 1976 added: Socialist, Secular, and Integrity.'},
                ].map((d) => (
                  <div key={d.q} className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                    <div className="text-xs font-semibold text-amber-800 mb-1">{d.q}</div>
                    <div className="text-xs text-gray-600">{d.a}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Mind map</div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Preamble</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'Sovereign', detail:'Independent', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Socialist', detail:'Added 1976', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'Secular', detail:'Added 1976', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Democratic', detail:'By the people', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Republic', detail:'Elected head', color:'bg-pink-50 text-pink-700 border-pink-200'},
                    {label:'Justice', detail:'Social, Economic, Political', color:'bg-orange-50 text-orange-700 border-orange-200'},
                    {label:'Liberty', detail:'5 freedoms', color:'bg-teal-50 text-teal-700 border-teal-200'},
                    {label:'Equality', detail:'Status & opportunity', color:'bg-red-50 text-red-700 border-red-200'},
                    {label:'Fraternity', detail:'Unity & dignity', color:'bg-indigo-50 text-indigo-700 border-indigo-200'},
                  ].map((n) => (
                    <div key={n.label} className={`border rounded-lg p-2 flex justify-between items-center ${n.color}`}>
                      <div className="text-xs font-medium">{n.label}</div>
                      <div className="text-xs opacity-70">{n.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3">Previous year questions</div>
              <div className="flex flex-col gap-2">
                {[
                  {year:'2022 Prelims', q:'Which two words were added to the Preamble by the 42nd Constitutional Amendment?'},
                  {year:'2020 Mains GS-II', q:'The Preamble is the soul of the Constitution. Discuss its significance and amendability.'},
                  {year:'2017 Prelims', q:'Consider the Preamble of India. Which of the following is NOT mentioned in the Preamble?'},
                  {year:'2015 Prelims', q:'In the context of the Preamble, what does the term "secular" mean for India?'},
                ].map((pyq) => (
                  <div key={pyq.year} className="border border-gray-100 rounded-lg p-2.5">
                    <div className="text-xs font-medium text-amber-700 mb-1">{pyq.year}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{pyq.q}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-amber-200 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-1">
                <span className="text-amber-500">★</span> Predicted for 2027
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {q:'Secularism in Indian Constitution vs Western secularism — differences', prob:82},
                  {q:'Can Preamble be used to interpret fundamental rights — judicial view', prob:75},
                  {q:'Fraternity — importance in current context of social divisions', prob:68},
                ].map((pred) => (
                  <div key={pred.q} className="bg-amber-50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-700 leading-relaxed mb-1.5">{pred.q}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-amber-100 rounded-full">
                        <div className="h-1 bg-amber-400 rounded-full" style={{width:`${pred.prob}%`}}></div>
                      </div>
                      <span className="text-xs text-amber-700 font-medium">{pred.prob}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4">
          <a href="/subjects/polity/1" className="text-sm text-blue-600 hover:text-blue-700">← Constitution Overview</a>
          <div className="text-xs text-gray-400">Topic 2 of 20</div>
          <a href="/subjects/polity/3" className="text-sm text-blue-600 hover:text-blue-700">Fundamental Rights →</a>
        </div>
      </div>
    </div>
  )
}

