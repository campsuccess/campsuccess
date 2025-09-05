import React from 'react';

const MeetCampTeam = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[293px] flex items-end justify-start px-16" style={{ paddingBottom: '30px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/meet academic teambg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white text-7xl font-bold mb-8 uppercase" style={{fontFamily: "'Getafe', sans-serif"}}>
              meet the camp team
            </h1>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="pt-16 pb-40 bg-white">
        <div className="container-custom">
          <div className="space-y-32">
            {/* Susan Cain */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="relative">
                <img 
                  src="/susanrectangle.svg"
                  alt="Background Rectangle"
                  className="absolute top-40 left-36 w-full max-w-[300px] object-contain z-0"
                />
                <img 
                  src="/isaaaa.svg" 
                  alt="Susan Cain" 
                  className="w-full max-w-[420px] object-contain relative z-10"
                />
              </div>
              <div className="space-y-6 -ml-36 mr-[-50px] mt-20">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  ISABELLE VAN ZYL
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Director of Enrollment & External Affairs
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    As a former collegiate athlete at the University of Dayton, Isabelle has honed a strong set of skills that drive our operations and enrollment. With previous experience in Admissions at a premier private co-educational day and boarding school for grades 8-12/PG in Boston, Isabelle played a key role in guiding students through the enrollment process and supporting them throughout their academic journey. Isabelle has experiencing working with families and students from around the globe and fostering a diverse, inclusive community. Isabelle's expertise lies in helping students transition into a thriving academic environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Peter Keum */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="space-y-6 ml-4 mr-[-150px] mt-16">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  WILLIEM VAN ZYL
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Director of Program Development & Camper Engagement
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Willem graduated from Springfield College with a degree in Physical Education and a minor in Coaching. After starting his career as the Head of the Physical Education Department at a therapeutic school program for students aged 8-18, he went on to become the Assistant Dean of Students at a private day and boarding school in Boston. With six summers of camp experience, Willem excels at creating supportive environments where students feel comfortable, valued, and free to express their true selves.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-end">
                <img 
                  src="/susanrectangle.svg"
                  alt="Background Rectangle"
                  className="absolute top-40 left-60 w-full max-w-[300px] object-contain z-0"
                />
                <img 
                  src="/peeeeee.svg" 
                  alt="Peter Keum" 
                  className="w-full max-w-[420px] object-contain mr-[-50px] relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-camp-blue relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{backgroundImage: "url('/brobrobro.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: "'Getafe', sans-serif"}}>
              Are You Ready to <span className="text-camp-yellow">succeed?</span>
            </h2>
            <a 
              href="https://google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white font-medium rounded-[20px] transition-colors duration-200 border-2 border-white"
            >
              Enroll Now
              <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetCampTeam; 
