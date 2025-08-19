import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - KEEPING UNCHANGED */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/lake-camp-aerial.jpg')", backgroundPosition: "center 30%"}}></div>
        
        <div className="hero-content mt-48">
          <div className="mb-8">
            <img src="/CampSuccess.svg" alt="CampSuccess" className="h-9 md:h-14 lg:h-20 w-auto mx-auto" />
          </div>
          <div className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-white space-y-4">
            <p style={{fontFamily: "'Adobe Clean Serif', serif", fontWeight: 'bold', fontSize: '30px', marginBottom: '2rem'}}>
              An elite weeklong <span className="highlight-yellow">leadership</span>, <span className="highlight-yellow">communication</span>, and <span className="highlight-yellow">life skills academy</span> located at award winning Camp Winadu.
            </p>
            <p style={{fontFamily: "'Adobe Clean Serif', serif", fontWeight: '500', fontSize: '25px', color: 'white'}}>
              No digital distractions. Only game changing experiences.
            </p>
          </div>
          <a 
            href="https://google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-white text-camp-blue font-normal rounded-full border border-black hover:bg-gray-50 transition-colors duration-200"
          >
            Are You Ready to Succeed?
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About CampSuccess Section - MATCHING FIGMA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/aboutcampsuccessbackground.svg')"}}></div>
        <div className="container-custom relative">
          <div className="border-camp-yellow p-8 -ml-16 -mb-8 max-w-6xl relative" style={{borderWidth: '16px'}}>
            <div className="space-y-6 pl-6 pt-6">
              <h2 style={{fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 'bold', fontSize: '45px', color: '#002E99', whiteSpace: 'nowrap'}}>
                ABOUT CAMPSUCCESS
              </h2>
              <div className="space-y-4 text-lg leading-relaxed max-w-xl">
                <p style={{fontFamily: "'Adobe Clean Serif', serif", fontSize: '18px', color: '#001F66', textAlign: 'justify'}}>
                  We are the only camp in the world combining an <span className="highlight-yellow">Ivy League caliber academic curriculum</span> with a classic sleep away camp. Developed and taught by <span className="highlight-yellow">Harvard and Yale</span> trained thought leaders, students thrive (screen free) amidst the breathtaking nature of the Berkshire Mountains.
                </p>
                <p style={{fontFamily: "'Adobe Clean Serif', serif", fontSize: '18px', color: '#001F66', textAlign: 'justify'}}>
                  Through rigorous academic programs and traditional summer camp activities, students build <span className="highlight-yellow">confidence, independence, and communication skills</span> through intensive workshops and outdoor adventures. This transformative leadership training prepares students with a competitive edge at school and beyond. CampSuccess offers an unforgettable opportunity for ambitious young leaders to grow, challenge themselves, and discover their full potential.
                </p>
              </div>
              <Link to="/summer-2025" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                1 or 2 Week Options
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Children talking image as separate overlay */}
        <div className="absolute top-24 right-20 w-[630px] h-[630px] z-10">
          <img 
            src="/children talking.svg" 
            alt="Children talking" 
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* CampSuccess Is Ideal For - MATCHING FIGMA */}
      <section className="py-32 bg-camp-blue relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{backgroundImage: "url('/campsuccessforimage.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl font-bold mb-6" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
             
            </h2>
            <p className="text-white text-lg max-w-4xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif"}}></p>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div className="bg-white overflow-hidden shadow-lg border border-camp-yellow" style={{borderWidth: '2px'}}>
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('/ambitiousmiddleschoolers.svg')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-camp-blue mb-4" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>AMBITIOUS MIDDLE SCHOOLERS</h3>
                <p className="text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif", fontSize: '18px'}}>Includes students who are rising 6th graders to rising 9th graders.</p>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-lg border border-camp-yellow" style={{borderWidth: '2px'}}>
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('/applicantorrecentapplicants.svg')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-camp-blue mb-4" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>APPLICANTS OR RECENT ADMITS</h3>
                <p className="text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif", fontSize: '18px'}}>Junior or Senior Boarding school students seeking a competitive advantage.</p>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-lg border border-camp-yellow" style={{borderWidth: '2px'}}>
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('/studentswhoarelookingfor.svg')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-camp-blue mb-4" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>STUDENTS WHO ARE LOOKING FOR A</h3>
                <p className="text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif", fontSize: '18px'}}>healthy, high-growth summer alternative or complement to traditional academies.</p>
              </div>
            </div>
          </div>
        </div>

{/* Why Camp Winadu Section - MATCHING FIGMA */}
<section className="py-32 relative">
  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/whycampwinadubackground.svg')"}}></div>
  
  <div className="container-custom relative">
    <div className="relative">
      {/* Yellow border box container */}
      <div 
        className="absolute border-[#FAC402] border-[15px] border-solid p-8 min-h-[500px] bg-white"
        style={{
          left: '275px',
          right: '-70px',
          bottom: '-75px',
          top: '0'
        }}
      >
      </div>

      {/* Content container */}
      <div className="relative flex flex-col lg:flex-row gap-11 items-center z-10">
        {/* Image Section */}
        <div className="relative shrink-0 w-full lg:w-[600px] h-[340px]" style={{ marginLeft: '-70px', marginTop: '65px', marginRight: '50px'}}>
          <iframe
            title="Camp Winadu Video"
            src="https://player.vimeo.com/video/169913298?color=ffffff&title=0&byline=0&portrait=0"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              border: '2px solid #003DCC',
              boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)'
            }}
          ></iframe>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-3 pt-16">
          <h2 className="text-[45px] font-bold text-[#002E99] leading-none mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
            WHY CAMP WINADU?
          </h2>
          <h3 className="text-[20px] font-bold text-[#001F66] leading-none mb-2" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
            Traditional Summer Camp Activities Promote Physical & Psychological Well-Being
          </h3>
          <p className="text-[18px] text-[#001F66] text-justify leading-tight tracking-[0.36px] mb-2" style={{fontFamily: "'Adobe Clean Serif', serif", lineHeight: '1.3'}}>
            Camp Winadu has earned its reputation as one of the premier summer camps in the nation. Winadu is known for its beautiful facilities and elite leadership coaching. Just 2.5 hours from New York and Boston, we are recognized for our commitment to developing character in a healthy, active, screen-free environment. Set against the natural beauty of the Berkshire Mountains and the stunning shores of Lake Onota, we recently received the prestigious CampGroup Excellence Award. Our campers return year after year, generation after generation, creating lasting friendships and memories that span a lifetime.
          </p>
          <Link to="/our-facility" className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#002E99] text-white font-medium rounded-full transition-colors duration-200 border border-[#003DCC] w-fit" style={{fontFamily: "'PP Neue Montreal', sans-serif", fontSize: '16px', letterSpacing: '0.32px'}}>
            Virtual Tour
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* The CampSuccess Program Section - MATCHING FIGMA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/thecampsuccessprogrambackground.svg')"}}></div>
                  <div className="relative z-10">
            <div className="max-w-3xl" style={{ marginLeft: '65px' }}>
            <div className="space-y-6 text-white">
                              <h2 className="text-4xl font-bold" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                THE CAMPSUCCESS PROGRAM
              </h2>
              <h3 className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                Academic Rigor Meets Sports Camp Excellence
              </h3>
              <div className="space-y-4 text-lg leading-relaxed max-w-2xl" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  Too many middle school students around the world boast excellent academic credentials but lack the essential life skills that predict long-term success. Our program is designed to equip students with the tools they need—but are rarely taught in school—to excel in elite American academic environments. Every aspect of our curriculum is thoughtfully crafted by <span className="font-black text-camp-yellow">Ivy League trained educators</span> to prepare students for success both academically and interpersonally. By blending rigorous academic workshops with the energy and camaraderie of a top-tier sports summer camp, we foster leadership, confidence, independence, and critical life skills -- a combination found nowhere else.
                </p>
                <p>
                  CampSuccess @ Winadu prepares students to <span className="font-black text-camp-yellow"> compete, succeed, and thrive—academically, socially, and beyond. </span>
                </p>
              </div>
              <a 
                href="https://google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-camp-dark-blue font-medium rounded-[20px] transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - MATCHING FIGMA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="border-camp-yellow p-12 text-center max-w-4xl mx-auto" style={{borderWidth: '16px'}}>
            <h2 className="text-5xl font-bold text-camp-blue mb-3" style={{fontFamily: "'Getafe', sans-serif"}}>
              ARE YOU READY TO <span className="text-camp-yellow">SUCCEED?</span>
            </h2>
            <p className="text-xl text-camp-blue mb-6" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
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

export default HomePage; 
