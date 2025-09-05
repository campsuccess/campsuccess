import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AthleticProgram = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[673px] flex items-end justify-start px-16" style={{ paddingBottom: '50px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/athletic program hero bg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white text-7xl font-bold mb-6 uppercase" style={{fontFamily: "'Getafe', sans-serif"}}>
              athletic electives
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white font-medium rounded-[20px] border border-white mb-6">
              In Addition to Required Core Course
            </div>
            <p className="text-white text-lg mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif", maxWidth: '800px'}}>
              CCamp Winadu's expert coaching staff has delivered generations of happy campers a comprehensive athletics and outdoor adventure program that <span className="font-bold text-camp-yellow">builds strength, confidence, and leadership through competition and structured play - always screen free!</span>
            </p>
          </div>
        </div>
      </section>

      {/* About The Athletics Section */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/final final better be.svg')"}}></div>
        <div className="container-custom relative">
          {/* Image on the left */}
          <div className="absolute left-0" style={{ marginLeft: '-45px', top: '50%', transform: 'translateY(-50%)' }}>
            <img src="/about the athletics image.svg" alt="About The Athletics" className="w-[632px]" />
          </div>
          <div className="max-w-2xl ml-auto" style={{ marginRight: '-60px' }}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                SPORTS PROGRAM
              </h2>
              <h3 className="text-xl font-bold" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                Camper's Choice Electives
              </h3>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  With decades of experience coaching middle schoolers, our team emphasizes growth through challenge, developing both individual technique and team collaboration.
                </p>
                <p>
                 Students participate in a wide range of elective sports of their choosing, including soccer, basketball, baseball, golf, volleyball, and tennis. These activities foster physical coordination and resilience while teaching the habits of effective teammates: <span className="font-bold text-camp-yellow">communication, discipline, and hard work.</span> Whether competing individually or working towards a shared goal, students gain a sense of belonging through skill development, effort, and camaraderie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Adventure Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/outdoor adventure bg.svg')"}}></div>
        <div className="relative z-10 container-custom">
                      <div className="grid md:grid-cols-2 gap-4 items-center">
              <div className="space-y-6 text-white" style={{ marginLeft: '-35px', width: '110%' }}>
                <h2 className="text-5xl font-bold" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  OUTDOOR ADVENTURE
                </h2>
              <h3 className="text-xl font-bold" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                Camper's Choice Electives
              </h3>
              <div className="space-y-4 text-lg leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  CampSuccess's Outdoor Adventure Program allows campers to <span className="font-bold text-camp-yellow">build confidence as they conquer zip lines, climbing walls and hiking trails</span>, transforming outdoor challenges into opportunities for decision making and teamwork in the natural world, essential skills for leading with confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white font-medium rounded-[20px] border border-white">
                  Zip Line
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white font-medium rounded-[20px] border border-white">
                  Climbing Wall
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white font-medium rounded-[20px] border border-white">
                  Outdoor Pursuits
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white font-medium rounded-[20px] border border-white">
                  Hiking
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white font-medium rounded-[20px] border border-white">
                  Adventure Education
                </div>
              </div>
            </div>
            
            <div className="relative" style={{ transform: 'translateX(60px)' }}>
              <img 
                src="/outdoor adventure image.svg" 
                alt="Outdoor adventure" 
                className="w-[632px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waterfront Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/WATERFRONT PLZPLZPLZ BG.svg')"}}></div>
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/waterfront image.svg" 
                alt="Waterfront activities" 
                className="w-[632px]"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                WATERFRONT
              </h2>
              <h3 className="text-xl font-bold text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                Camper's Choice ELectives
              </h3>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  Dive into our Waterfront and Pool program, where every splash in the pool, gust of the sail, and paddle stroke in kayaking challenges you to take (safe) risks and learn to control your environment. Experience Aqua Park thrills that <span className="font-bold text-camp-yellow">transform playful adventure into lessons in teamwork and courage.</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-camp-blue font-medium rounded-[20px] border border-camp-blue">
                  Pool
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-camp-blue font-medium rounded-[20px] border border-camp-blue">
                  Sailing
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-camp-blue font-medium rounded-[20px] border border-camp-blue">
                  Kayaking
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-camp-blue font-medium rounded-[20px] border border-camp-blue">
                  Aqua Park
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-camp-blue font-medium rounded-[20px] border border-camp-blue">
                  SUP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Camp Team Section */}
      <section className="pb-11 pt-16 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/camp team bg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              MEET OUR <span className="text-camp-yellow">CAMP TEAM</span>
            </h2>
            <p className="text-white text-lg max-w-4xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
              Introducing our <span className="font-bold text-camp-yellow">expert coaches from Camp Winadu.</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-0 max-w-3xl mx-auto place-items-center">
            <div className="bg-white overflow-hidden shadow-lg border-2 border-camp-yellow mx-auto" style={{ maxWidth: '250px', width: '100%', height: '400px' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>ISABELLE VAN ZYL</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif", minHeight: '48px', overflow: 'hidden'}}>Director of Enrollment & External Affairs</p>
                <Link to="/meet-isabelle" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Isabelle
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-lg border-2 border-camp-yellow mx-auto" style={{ maxWidth: '250px', width: '100%', height: '400px' }}>
              <div className="h-52 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="pb-6 pt-2 px-6 text-center">
                <h3 className="text-xl font-bold text-camp-blue mb-2" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>WILLIEM VAN ZYL</h3>
                <p className="text-camp-yellow font-bold mb-4" style={{fontFamily: "'Adobe Clean Serif', serif", minHeight: '48px', overflow: 'hidden'}}>Director of Program Development & Camper Engagement</p>
                <Link to="/meet-williem" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Meet Williem
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Friday Night Lights Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/real friday night lights bg.svg')"}}></div>
        <div className="container-custom relative">
          <div className="text-center" style={{ marginBottom: '0rem' }}>
            <h2 className="text-5xl font-bold text-camp-blue mb-8" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              FRIDAY NIGHT LIGHTS
            </h2>
            <p className="text-lg text-camp-blue max-w-4xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
              Watch <span className="font-bold text-camp-yellow">Camp Winadu's Friday Night Lights video series</span> to witness the magic that comes alive every day at Winadu.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Video Carousel */}
            <div className="relative h-[512px] flex items-center justify-center overflow-hidden">
              {/* Left Video (Blurred) */}
              <div className="absolute left-0 transform -translate-x-1/4">
                <div className="relative transition-all duration-700" style={{ filter: 'grayscale(100%) blur(2px)', opacity: '0.5' }}>
                  <div className="w-[400px] overflow-hidden transform transition-all duration-700 ease-in-out hover:scale-105">
                    <div className="border-2 border-camp-yellow">
                      <iframe
                        title="Left Video"
                        src={`https://player.vimeo.com/video/${currentSlide === 0 ? '1104616927' : currentSlide === 1 ? '1108746121' : '1106617852'}?background=1`}
                        className="w-full aspect-video"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Video */}
              <div className="relative z-10">
                <div className="transform scale-110 transition-all duration-700">
                  <div className="w-[700px] overflow-hidden transform transition-all duration-700 ease-in-out hover:scale-105">
                    <div className="border-2 border-camp-yellow">
                      <iframe
                        title="Center Video"
                        src={`https://player.vimeo.com/video/${currentSlide === 0 ? '1108746121' : currentSlide === 1 ? '1106617852' : '1104616927'}`}
                        className="w-full aspect-video"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Video (Blurred) */}
              <div className="absolute right-0 transform translate-x-1/4">
                <div className="relative transition-all duration-700" style={{ filter: 'grayscale(100%) blur(2px)', opacity: '0.5' }}>
                  <div className="w-[400px] overflow-hidden transform transition-all duration-700 ease-in-out hover:scale-105">
                    <div className="border-2 border-camp-yellow">
                      <iframe
                        title="Right Video"
                        src={`https://player.vimeo.com/video/${currentSlide === 0 ? '1106617852' : currentSlide === 1 ? '1104616927' : '1108746121'}?background=1`}
                        className="w-full aspect-video"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
              >
                <svg className="w-6 h-6 text-camp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
              >
                <svg className="w-6 h-6 text-camp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-camp-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="border-camp-yellow p-12 text-center max-w-4xl mx-auto" style={{borderWidth: '16px'}}>
            <h2 className="text-5xl font-bold text-camp-blue mb-3" style={{fontFamily: "'Getafe', sans-serif"}}>
              Ready to <span className="text-camp-yellow">start achieving?</span>
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

export default AthleticProgram; 
