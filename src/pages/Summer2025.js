import React from 'react';
import { Link } from 'react-router-dom';

const Summer2025 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[293px] flex items-end justify-start px-16" style={{ paddingBottom: '30px' }}>
        <div className="absolute inset-0 bg-cover bg-center z-20" style={{backgroundImage: "url('/summer course hero bg.svg')"}}></div>
        <div className="relative z-30 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white text-7xl font-bold mb-8 uppercase flex flex-col gap-2" style={{fontFamily: "'Getafe', sans-serif"}}>
              <span>summer 2025</span>
              <span>sessions now open</span>
            </h1>
          </div>
        </div>
      </section>

      {/* One Week Program Section */}
      <section className="pt-32 bg-white relative">
        {/* Background Icon */}
        <div className="absolute left-0 top-0" style={{ marginLeft: '0px', marginTop: '-560px' }}>
          <img src="/one week program icon.svg" alt="Background Pattern" className="w-[600px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative" style={{ marginLeft: '-50px', marginTop: '-30px' }}>
              <img 
                src="/oneweekprogramimage.svg" 
                alt="One week program" 
                className="w-[98%]"
              />
            </div>
            
            <div className="space-y-6" style={{ marginLeft: '30px', marginRight: '-25px' }}>
              <h2 className="text-5xl font-bold text-camp-blue uppercase" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                <span className="text-camp-yellow">ONE WEEK</span> PROGRAM
              </h2>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  Our intensive one-week program offers a concentrated experience designed to maximize learning and growth with a short time commitment. Students dive deep into our core curriculum of confident public speaking, leadership, and communication skills while experiencing the full range of our academic, athletic and outdoor electives.
                </p>
                <p>
                  This program is perfect for students who want to experience the CampSuccess difference, ‘a taste of summer camp and a taste of boarding school’ - but have limited time available.
                </p>
              </div>
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
        </div>
      </section>

      {/* Two Week Program Section */}
      <section className="py-32 bg-white relative">
        {/* Bottom Right Icon */}
                  <div className="absolute right-0 bottom-0 z-0" style={{ marginRight: '-400px', marginBottom: '-180px' }}>
          <img src="/the real real two week.svg" alt="Two Week Program Icon" className="w-[800px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6" style={{ marginLeft: '-25px', marginRight: '30px' }}>
              <h2 className="text-5xl font-bold text-camp-blue uppercase" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                <span className="text-camp-yellow">TWO WEEK</span> PROGRAM
              </h2>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  Our comprehensive two-week program provides the optimal balance of intensive learning and immersive camp experience. Students have more time to develop deep friendships, master advanced skills, and fully engage with all aspects of our curriculum.
                </p>
                <p>
                  This extended program allows for more in-depth exploration of electives, additional practice sessions, and the opportunity to participate in more special events and competitions. Students emerge with enhanced confidence, stronger leadership abilities, and lasting connections with peers from around the world.
                </p>
              </div>
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
            
            <div className="relative">
              <img 
                src="/two week program image.svg" 
                alt="Two week program" 
                className="w-[105%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Typical Day */}
      <section className="py-20 bg-camp-blue relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/curioust ptypcal day bg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: "'Getafe', sans-serif"}}>
              CURIOUS TO WHAT A <span className="text-camp-yellow">TYPICAL DAY</span> LOOKS LIKE?
            </h2>
            <Link to="/daily-schedule" className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white border border-white font-medium rounded-[20px] transition-colors duration-200 hover:bg-white/10">
              Learn More
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Summer2025; 
