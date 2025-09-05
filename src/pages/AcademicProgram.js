import React from 'react';
import { Link } from 'react-router-dom';

const AcademicProgram = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[675px] w-[1801px]" style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/academicprogramherobg.svg')"}}></div>
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <div className="text-center" style={{ width: '1000px' }}>
            <h1 className="text-white text-7xl font-bold mb-8 uppercase" style={{fontFamily: "'Getafe', sans-serif"}}>
              academic electives
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white font-medium rounded-[20px] border border-white mb-8">
              In Addition to Required Core Course
            </div>
            <p className="text-white text-xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif", width: '120%', marginLeft: '-10%'}}>
              Developed by <span className="font-bold text-camp-yellow">Harvard and Yale-trained experts,</span> our proprietary content and teaching techniques are grounded in decades of success teaching ambitious across the globe. Our Academic Electives help prepare students to meet every challenge -- <span className="font-bold text-camp-yellow">in the classroom and beyond.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Counseling Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/admissionscounselingbg.svg')"}}></div>
        <div className="container-custom relative">
          {/* Image on the left */}
          <div className="absolute left-0" style={{ marginLeft: '-45px', top: '50%', transform: 'translateY(-50%)' }}>
            <img src="/admissionscounselingimage.svg" alt="Admissions Counseling" className="w-[632px]" />
          </div>

          <div className="max-w-2xl ml-auto" style={{ marginRight: '-60px' }}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                I. ADMISSIONS COUNSELING
              </h2>
              <h3 className="text-xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                Camper's Choice Electives
              </h3>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p className="italic">
                  Want to get in? Take our Elite Admissions Strategy seminar.
                </p>
                <p>
                  Go behind the scenes of <span className="font-bold text-camp-yellow">how top boarding schools and colleges choose students.</span>
                </p>
                <p>
                  This highly sought-after seminar is taught by Kenneth Cain, Harvard Law honors graduate and long-time Harvard alumni admissions interviewer, and Brendan Cahill, world history teacher at Choate Rosemary Hall, one of the most prestigious boarding schools in the world.
                </p>
                <p>
                  This intensive workshop provides students with a <span className="font-bold text-camp-yellow">strategic understanding of how elite U.S. institutions evaluate applicants</span>—not just to gain admission, but to succeed once they're there. We teach what matters beyond grades and test scores: leadership, curiosity, and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Functioning Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/executivefunctioningbg.svg')"}}></div>
                          <div className="relative z-10 container-custom">
          {/* Image on the right */}
          <div className="absolute right-0" style={{ marginRight: '-90px', top: '48%', transform: 'translateY(-50%)' }}>
            <img src="/executivefunctioningimage.svg" alt="Executive Functioning"className="w-[640px]" />
          </div>

          <div className="max-w-2xl" style={{ marginLeft: '-25px' }}>
            <div className="space-y-6 text-white">
              <h2 className="text-5xl font-bold" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                II. EXECUTIVE FUNCTIONING: <span className="text-camp-yellow">THE HIGH PERFORMANCE MINDSET</span>
              </h2>
              <h3 className="text-xl font-bold" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                Camper's Choice Electives
              </h3>
              <div className="space-y-4 text-lg leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p className="italic">
                  We call it, "The Champion's Mindset." How elite athletes and military leaders succeed.
                </p>
                <p>
                  This course introduces students to the <span className="font-bold text-camp-yellow">high-performance mental frameworks</span> used by <span className="font-bold text-camp-yellow">top athletes, entrepreneurs, and military leaders</span> to perform under pressure. With coaching, practice drills, and guest speakers, students learn how to stay focused, take initiative, and execute consistently at a high level. We teach students how to be proactive, productive, and resilient—every day, not just when it is easy.
                </p>
              </div>
              <Link to="/executive-functioning" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-camp-dark-blue font-medium rounded-[20px] transition-colors duration-200">
                What is Executive Functioning?
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Future of Work Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/ai & future bg.svg')"}}></div>
                  <div className="container-custom relative">
            {/* Image on the left */}
            <div className="absolute left-0" style={{ marginLeft: '-45px', top: '50%', transform: 'translateY(-50%)' }}>
              <img src="/future & ai image.svg" alt="Future & AI" className="w-[632px]" />
            </div>

            <div className="max-w-2xl ml-auto" style={{ marginRight: '-30px' }}>
              <div className="space-y-6 max-w-3xl">
              <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif", width: '120%'}}>
                III. <span className="text-camp-yellow">AI</span> & THE <span className="text-camp-yellow">FUTURE OF EDUCATION</span>
              </h2>
              <h3 className="text-xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif", width: '120%'}}>
                Camper's Choice
              </h3>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify', width: '103%'}}>
                <p>
                  AI is changing the career landscape in dramatic ways we are only beginning to understand - which will, in turn, dramatically change academic prep priorities for sophisticated families.
                </p>
                <p>
                  This elective offers an introduction to the AI skills students will need to compete, as well as a reinforcing the skills that will become even more important in the future that AI cant reproduce: <span className="font-bold text-camp-yellow">judgment, emotional intelligence, communication, creativity, and leadership.</span> Students will also explore how to use AI tools ethically and strategically to amplify, not replace, their own abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Advisory Board Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/academic advisory board bg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              ACADEMIC ADVISORY BOARD
            </h2>
            <p className="text-white text-lg max-w-4xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
              Our Leadership and Communications Boot Camp curriculum has undergone meticulous development for over a decade, guided by a <span className="font-bold text-camp-yellow">Blue Ribbon panel of experts from Kenneth and Susan Cain's Advisory Board.</span> We are excited to announce that several Advisory Board members will be offering additional training sessions to students this summer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-16">
            <div className="bg-white overflow-hidden shadow-lg border-2 border-camp-yellow" style={{ maxWidth: '250px' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>SUSAN CAIN</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Board Member</p>
                <Link to="/meet-susan" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Susan
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-lg border-2 border-camp-yellow" style={{ maxWidth: '250px' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>PETER KEUM</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Board Member</p>
                <Link to="/meet-peter" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Peter
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-lg border-2 border-camp-yellow" style={{ maxWidth: '250px' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>JEFF KAPLAN</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Board Member</p>
                <Link to="/meet-jeff" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Jeff
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-lg border-2 border-camp-yellow" style={{ maxWidth: '250px' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>TOM SUGIURA</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Board Member</p>
                <Link to="/meet-tom" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Tom
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Our Instructors Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-camp-blue mb-6" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              OUR INSTRUCTORS
            </h2>
            <p className="text-lg text-camp-blue max-w-4xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
              Our expert instructors bring decades of experience from Harvard, Yale, and other prestigious institutions to provide students with world-class leadership and communication training.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-16">
            <div className="bg-white overflow-hidden border-2 border-camp-yellow" style={{ maxWidth: '250px', boxShadow: '4px 4px 18px rgba(0, 0, 0, 0.2)' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>KENNETH CAIN</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Director of Leadership Education</p>
                <Link to="/meet-kenneth" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Kenneth
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden border-2 border-camp-yellow" style={{ maxWidth: '250px', boxShadow: '4px 4px 18px rgba(0, 0, 0, 0.2)' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>JIM FYFE</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Assistant Instructor</p>
                <Link to="/meet-jim" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Jim
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden border-2 border-camp-yellow" style={{ maxWidth: '250px', boxShadow: '4px 4px 18px rgba(0, 0, 0, 0.2)' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>BRENDEN CAHILL</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Assistant Instructor</p>
                <Link to="/meet-brenden" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Brenden
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden border-2 border-camp-yellow" style={{ maxWidth: '250px', boxShadow: '4px 4px 18px rgba(0, 0, 0, 0.2)' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>JULIA TONELLI</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif"}}>Assistant Instructor</p>
                <Link to="/meet-julia" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Julia
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athletic Program CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/athletics program cta section bg.svg')"}}></div>
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/cta image.svg" 
                alt="Athletic program" 
                className="w-[632px]"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                CURIOUS ABOUT OUR <span className="text-camp-yellow">ATHLETIC PROGRAM?</span>
              </h2>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  In addition to the CampSuccess core course, we offer athletic electives that campers can choose from. Partnering with Winadu's expert coaches, we seek to encourage campers to lead not only a fun, but healthier life through sports recreation and adventure.
                </p>
              </div>
              <Link to="/athletic-program" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="border-camp-yellow p-16 text-center max-w-4xl mx-auto" style={{borderWidth: '16px'}}>
            <h2 className="text-5xl font-bold text-camp-blue mb-4" style={{fontFamily: "'Getafe', sans-serif"}}>
              Ready to <span className="text-camp-yellow">start achieving?</span>
            </h2>
            <p className="text-xl text-camp-blue mb-8" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              Champions don't wait.
            </p>
            <a 
              href="https://google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" 
              style={{backgroundColor: '#002E99'}}
            >
              Enroll Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicProgram; 
