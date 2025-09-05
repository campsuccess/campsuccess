import React from 'react';

const DailySchedule = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[673px] flex items-end justify-start px-16" style={{ paddingBottom: '70px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/daily schedule bg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white text-7xl font-bold mb-4 uppercase" style={{fontFamily: "'Getafe', sans-serif"}}>
              daily schedule
            </h1>
          </div>
        </div>
      </section>

      {/* A Typical Day Section */}
            <section className="pb-0 pt-20 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/bobbychange to this.svg')"}}></div>
          <div className="container-custom relative">
            {/* Image on the right */}
            <div className="absolute right-0" style={{ marginRight: '-50px', top: '50%', transform: 'translateY(-50%)' }}>
              <img src="/a typical day image.svg" alt="A Typical Day" className="w-[632px]" />
            </div>
          <div className="max-w-2xl" style={{ marginLeft: '-25px', width: '52%' }}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-camp-blue uppercase" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                A TYPICAL DAY
              </h2>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  Our signature daily schedule blends <span className="font-bold text-camp-yellow">academic challenge with the physical and social benefits of traditional summer camp life</span>. Students participate in leadership workshops, admissions strategy coaching, and communication training—skills not typically taught in school, yet essential for long-term success. These sessions are balanced with sports, and lakefront activities, all in a spectacular, screen-free setting.
                </p>
                <p>
                  Each day offers opportunities to <span className="font-bold text-camp-yellow">take risks, build friendships, and discover new strengths</span>. You won't find this best-in-class combination anywhere else.
                </p>
                <p>
                  The first 2.5 hours of each morning are dedicated to our keystone academic coursework: confident public speaking for leadership, creative expression, critical writing and analytic thought. Before lunch and afternoon offers campers a series of academic “electives,” as well as sports and waterfront "electives" to choose from. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Timeline Section */}
      <section className="py-32 bg-white relative">
        {/* Pattern 1 */}
        <div className="absolute left-0 top-0" style={{ marginTop: '-350px' }}>
          <img src="/daily schedule pattern 1.svg" alt="Daily Schedule Pattern" className="w-[420px]" />
        </div>
        {/* Pattern 2 */}
        <div className="absolute right-0 bottom-0" style={{ marginBottom: '-100px' }}>
          <img src="/dailyscheduleicon2.svg" alt="Daily Schedule Icon" className="w-[520px]" />
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-camp-blue uppercase mb-8" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              DAILY SCHEDULE
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Time Column */}
              <div className="space-y-8">
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>8:00 AM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>8:30 AM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>9:00 AM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>9:15 AM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>11:45 AM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>12:45 PM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>1:30 PM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>2:30 PM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>3:30 PM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>6:30 PM</h3>
                </div>
                <div className="bg-camp-yellow px-8 py-5 w-48">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>7:45 PM</h3>
                </div>
              </div>

              {/* Activity Column */}
              <div className="lg:col-span-2 space-y-8 -ml-28">
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Wake up</h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Breakfast</h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Morning Line-Up</h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                    Confident Communication and Leadership Course
                  </h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                    Period 1: <span className="font-normal">Athletics or Academic Electives (Camper's Choice)</span>
                  </h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Lunch</h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Rest Hall</h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                    Period 2: <span className="font-normal">Athletics or Academic Electives (Camper's Choice)</span>
                  </h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                    Period 3: <span className="font-normal">Athletics or Academic Electives (Camper's Choice)</span>
                  </h3>
                </div>
                <div className="flex items-center py-5">
                  <h3 className="text-3xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Dinner</h3>
                </div>
                <div className="py-5">
                  <h3 className="text-3xl font-bold text-camp-blue mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Evening Programs</h3>
                  <ul className="list-disc list-inside space-y-2 text-3xl text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                    <li>Bonfires (s'mores!)</li>
                    <li>Talent Shows</li>
                    <li>Icebreakers</li>
                    <li>Ice Cream Socials</li>
                    <li>Special Events, and more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-camp-blue relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/ready to make new friendsbg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: "'Getafe', sans-serif"}}>
              Ready to <span className="text-camp-yellow">make new friends?</span>
            </h2>
            <a 
              href="https://google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white border border-white font-medium rounded-[20px] transition-colors duration-200 hover:bg-white/10"
            >
              Enroll Now
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailySchedule; 
