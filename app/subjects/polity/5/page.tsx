export default function FundamentalDutiesPage() {
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
          <div className="text-2xl font-semibold text-gray-900 mt-2">Fundamental Duties</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">GS-II</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Beginner</span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Article 51A</span>
            <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">PYQ: 2021, 2018, 2015</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">11 duties</div>
            <div className="text-xs text-gray-400 mt-1">Total</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">42nd Amendment</div>
            <div className="text-xs text-gray-400 mt-1">Added 10 duties 1976</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
            <div className="text-xl font-medium text-gray-900">86th Amendment</div>
            <div className="text-xs text-gray-400 mt-1">Added 11th duty 2002</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
                What are Fundamental Duties?
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Fundamental Duties are the moral obligations of all citizens to help promote a spirit of patriotism and to uphold the unity of India. They are contained in <strong>Article 51A, Part IV-A</strong> of the Constitution. They were added by the <strong>42nd Constitutional Amendment Act, 1976</strong> on the recommendation of the <strong>Swaran Singh Committee</strong>.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg mb-3">
                <p className="text-sm text-blue-800"><strong>Key point:</strong> Fundamental Duties are borrowed from the <strong>Constitution of USSR</strong>. They are non-justiciable — courts cannot enforce them directly.</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Originally there were 10 duties in 1976. The <strong>11th duty</strong> was added by the <strong>86th Amendment Act, 2002</strong> — to provide opportunities for education to children between 6 to 14 years.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-500 rounded-full inline-block"></span>
                All 11 Fundamental Duties
              </div>
              <div className="flex flex-col gap-2">
                {[
                  {num:'a', duty:'Abide by the Constitution and respect the National Flag and National Anthem'},
                  {num:'b', duty:'Cherish and follow the noble ideals of the national struggle for freedom'},
                  {num:'c', duty:'Uphold and protect the sovereignty, unity and integrity of India'},
                  {num:'d', duty:'Defend the country and render national service when called upon'},
                  {num:'e', duty:'Promote harmony and spirit of common brotherhood amongst all people of India'},
                  {num:'f', duty:'Value and preserve the rich heritage of our composite culture'},
                  {num:'g', duty:'Protect and improve the natural environment including forests, lakes, rivers and wildlife'},
                  {num:'h', duty:'Develop the scientific temper, humanism and the spirit of inquiry and reform'},
                  {num:'i', duty:'Safeguard public property and abjure violence'},
                  {num:'j', duty:'Strive towards excellence in all spheres of individual and collective activity'},
                  {num:'k', duty:'Provide opportunities for education to children between 6 and 14 years — Added by 86th Amendment 2002'},
                ].map((d) => (
                  <div key={d.num} className={`flex gap-3 p-3 rounded-lg ${d.num === 'k' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                    <div className={`text-xs font-bold shrink-0 w-5 ${d.num === 'k' ? 'text-green-700' : 'text-blue-600'}`}>({d.num})</div>
                    <div className={`text-xs leading-relaxed ${d.num === 'k' ? 'text-green-800' : 'text-gray-600'}`}>{d.duty}</div>
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
                  {q:'Are FDs justiciable?', a:'No — courts cannot directly enforce them. But Parliament can legislate to enforce them.'},
                  {q:'Available to whom?', a:'Only to citizens — not to foreigners. Unlike some FRs which apply to all persons.'},
                  {q:'Verma Committee 1999', a:'Identified legal provisions implementing FDs. Found several laws giving effect to duties.'},
                  {q:'FDs vs FRs', a:'FRs are rights against the state. FDs are obligations of citizens. Both are complementary.'},
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
                <div className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Fundamental Duties</div>
                <div className="w-px h-2 bg-gray-300"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  {[
                    {label:'Article', detail:'51A, Part IV-A', color:'bg-blue-50 text-blue-700 border-blue-200'},
                    {label:'Added by', detail:'42nd Amendment 1976', color:'bg-purple-50 text-purple-700 border-purple-200'},
                    {label:'Committee', detail:'Swaran Singh', color:'bg-amber-50 text-amber-700 border-amber-200'},
                    {label:'Source', detail:'USSR Constitution', color:'bg-red-50 text-red-700 border-red-200'},
                    {label:'Total duties', detail:'11 total', color:'bg-green-50 text-green-700 border-green-200'},
                    {label:'11th duty', detail:'86th Amendment 2002', color:'bg-teal-50 text-teal-700 border-teal-200'},
                    {label:'Nature', detail:'Non-justiciable', color:'bg-gray-50 text-gray-700 border-gray-200'},
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
                  {year:'2021 Prelims', q:'Which Amendment Act added Fundamental Duties to the Indian Constitution?'},
                  {year:'2018 Mains GS-II', q:'Discuss the significance of Fundamental Duties. Are they mere moral obligations or do they have legal force?'},
                  {year:'2015 Prelims', q:'Which of the following is NOT a Fundamental Duty under Article 51A?'},
                  {year:'2013 Prelims', q:'The 11th Fundamental Duty was added by which Constitutional Amendment?'},
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
                  {q:'Duty to protect environment — Art. 51A(g) and judicial enforcement', prob:80},
                  {q:'Scientific temper duty — relevance in age of misinformation', prob:72},
                  {q:'Relationship between FDs and FRs — complementary or conflicting', prob:65},
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
          <a href="/subjects/polity/4" className="text-sm text-blue-600 hover:text-blue-700">← DPSP</a>
          <div className="text-xs text-gray-400">Topic 5 of 20</div>
          <a href="/subjects/polity/6" className="text-sm text-blue-600 hover:text-blue-700">Parliament →</a>
        </div>
      </div>
    </div>
  )
}