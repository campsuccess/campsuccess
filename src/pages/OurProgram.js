import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OurProgram = () => {
  const [openSections, setOpenSections] = useState({
    intro: false,
    storytelling: false,
    ted: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[673px] flex items-end justify-center" style={{ paddingBottom: '50px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/ourprogrambackground.svg')"}}></div>
        <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-[639px]">
          <h1 
            className="text-[75px] text-white uppercase font-bold leading-none"
            style={{fontFamily: "'Getafe', sans-serif"}}
          >
            Our Program
          </h1>
          <p 
            className="text-[20px] text-white leading-normal"
            style={{fontFamily: "'Adobe Clean Serif', serif"}}
          >
            Academic Rigor meets Sports Camp Excellence.
          </p>
        </div>
      </section>

      {/* About The Curriculum --> Required Academics Section */}
      <section className="py-48 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/aboutthecurriculumbg.svg')"}}></div>
        <div className="container-custom relative">
          {/* Image on the left */}
          <div className="absolute left-0" style={{ marginLeft: '-45px', top: '50%', transform: 'translateY(-50%)' }}>
            <img src="/aboutthecurriculumimage.svg" alt="About the Curriculum" className="w-[632px]" />
          </div>
          
          {/* Text content - keeping original position */}
          <div className="max-w-2xl ml-auto" style={{ marginRight: '-80px' }}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                Required Academics
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify', width: '85%'}}>
                <p className="text-[#002E99]">
                  CampSuccess offers a required, core Public Speaking course developed by Harvard and Yale-trained experts designed to inspire confidence, creativity, critical thinking, and effective communication. Through rigorous workshops, skill drills, and public speaking tournaments, students develop leadership tools that set them apart -- ready to meet every challenge in the classroom and beyond.
                </p>
                <p className="text-[#002E99]">
                  Students will learn: Confident Public Speaking for Impact. Leadership, Independence, & Initiative. Critical Thinking & Analytical Writing. Curiosity & Creative Self-Expression. Interview & Communication Skills  (Spoken English  coaching available for international students who want to improve English skills).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Speaking Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/publicspeakingbg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 text-white">
              <h2 className="text-4xl font-bold" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                <span className="text-camp-yellow">CONFIDENT PUBLIC SPEAKING</span> FOR INFLUENCE AND IMPACT
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white font-medium rounded-[20px] border border-white">
                Required for all campers
              </div>
              <div className="space-y-4 text-lg leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  Leadership begins with learning how to form your own convictions and communicating them with clarity and impact. We've successfully taught these skills for over a decade, from Seoul to San Diego, Beijing to Boston, New Delhi to New Jersey. Our public speaking course integrates <span className="font-bold text-camp-yellow">critical writing, persuasive thinking, and confident delivery</span>. Students engage in drills and creative expression exercises, culminating in a formal presentation, competition, and awards ceremony.
                </p>
                <p className="font-bold text-camp-yellow">
                  Taught by Kenneth Cain, CampSuccess co-founder, Jim Fyfe and Julia Tonelli. Our proprietary content and teaching techniques are grounded in decades of success across the globe.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/publicspeakingrealimage.svg" 
                alt="Public speaking" 
                style={{
                  display: 'block',
                  border: '2px solid var(--camp-yellow)',
                  lineHeight: 0,
                  fontSize: 0
                }}
              />
            </div>
          </div>

          {/* Curriculum Details */}
          <div className="mb-16">
            <p className="text-camp-yellow text-lg font-bold mb-8" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'left'}}>
              Here's a sample curriculum from our Public Speaking component. We guarantee students will see noticeable improvements in both communication skills and personal confidence immediately.
            </p>
          </div>

          {/* Curriculum Sections */}
          <div className="space-y-8">
            {/* Section I */}
            <div className="p-6">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('intro')}
              >
                <h3 className="text-camp-yellow text-2xl font-bold" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  I. Intro to Public Speaking: Participatory Skills Training
                </h3>
                <svg className={`w-6 h-6 text-camp-yellow transition-transform ${openSections.intro ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {openSections.intro && (
                <div className="mt-6 space-y-4 text-white" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 1: Developing Confidence & Creativity: Leadership for Middle Schoolers</p>
                    <p className="text-lg">Goal: Introduce how creative self-expression leads to personal and academic success. Begin practice drills and foundational skills training.</p>
                  </div>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 2: Building Communication Foundations</p>
                    <p className="text-lg">Goal: Develop core speaking skills through interactive exercises and peer feedback sessions.</p>
                  </div>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 3: Advanced Presentation Techniques</p>
                    <p className="text-lg">Goal: Master advanced delivery methods and audience engagement strategies.</p>
                  </div>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 4: Learn to Express Yourself, Ask, “Why?”</p>
                    <p className="text-lg">Goal: Push self-expression further using introspective “why?” prompts, building clarity and courage through individual and group critique.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Section II */}
            <div className="p-6">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('storytelling')}
              >
                <h3 className="text-camp-yellow text-2xl font-bold" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  II. Storytelling—How to Use Familiar Storytelling Skills
                </h3>
                <svg className={`w-6 h-6 text-camp-yellow transition-transform ${openSections.storytelling ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {openSections.storytelling && (
                <div className="mt-6 space-y-4 text-white" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 5: Crash Course in "Narrative" for Public Speaking</p>
                    <p className="text-lg">Students explore the 7 Fundamental Storytelling Techniques:</p>
                    <ul className="list-disc pl-8 text-lg space-y-2">
                      <li>Physical setting, time and place</li>
                      <li>Character development</li>
                      <li>Take us on "Journey"</li>
                      <li>Stakes</li>
                      <li>Story Arc</li>
                      <li>Voice & Point of View</li>
                      <li>Show-Don't-Tell: using all senses</li>
                    </ul>
                  </div>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 6: Improvisation: Nervousness, Spontaneity & Humor</p>
                    <p className="text-lg">Goal: Integrate confident expression with spontaneous delivery, using humor and improvisation.</p>
                  </div>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 7: Advanced Storytelling Exercises: TED Talk Prep</p>
                    <p className="text-lg">Goal: Prepare for final project by applying advanced storytelling and delivery techniques, including The Power of the Pause™ and other speaking tools.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Section III */}
            <div className="p-6">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('ted')}
              >
                <h3 className="text-camp-yellow text-2xl font-bold" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  III. TED-Style Talk
                </h3>
                <svg className={`w-6 h-6 text-camp-yellow transition-transform ${openSections.ted ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {openSections.ted && (
                <div className="mt-6 space-y-4 text-white" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 8: Final Preparation: TED-Style Talk Dress Rehearsal</p>
                    <p className="text-lg">Goal: Conduct a full run-through of student speeches, with peer feedback and final coaching.</p>
                  </div>
                  <div className="pl-8">
                    <p className="font-bold mb-2">Module 9: Concluding Class: Formal TED-style Talk</p>
                    <p className="text-lg">Goal: Deliver a polished, confident, and fully developed three-minute TED-style speech on a topic of the student's choosing, using story structure, clarity, and personal conviction.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Electives Section */}
      <section className="relative h-[1024px] py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/electivesbg.svg')"}}></div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-camp-blue mb-8" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              EXPLORE OUR <span className="text-camp-yellow">ELECTIVES</span>
            </h2>
            <p className="text-lg text-camp-blue max-w-6xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
              In addition to the CampSuccess core public speaking course, we offer “camper’s choice” academic electives in Elite Admissions Counseling, AI, and High Performance Executive Functioning.  In combination with academic excellence, Camp Winadu is famous for it’s long list of “camper’s choice” healthy, fun, and competitive sports, adventure and water front electives.
            </p>
          </div>
          
                     <div className="grid md:grid-cols-2 gap-36 max-w-4xl mx-auto">
            <div className="bg-white overflow-hidden border-2 border-camp-yellow" style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="h-72 bg-cover bg-center" style={{backgroundImage: "url('/academicprogramboximage.svg')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-camp-blue mb-4" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>ACADEMIC ELECTIVES</h3>
                <Link to="/academic-program" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden border-2 border-camp-yellow" style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="h-72 bg-cover bg-center" style={{backgroundImage: "url('/athleticsprogramboximage.svg')"}}></div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-camp-blue mb-4" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>ATHLETIC ELECTIVES</h3>
                <Link to="/athletic-program" className="inline-flex items-center gap-2 px-4 py-2 text-white font-medium rounded-[20px] transition-colors duration-200" style={{backgroundColor: '#002E99'}}>
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Elective Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/worshipelectivebg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-5xl mx-auto px-8">
            <h2 className="text-5xl font-bold text-white mb-6" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              Additional WORSHIP ELECTIVE
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
              Designed for <span className="font-bold text-camp-yellow">Christian students seeking spiritual growth</span>, this elective offers a space for worship and reflection in partnership with Chodae Church. Through <span className="font-bold text-camp-yellow">music, scripture, and community</span>, campers explore how faith can guide their values, actions, and influence in a changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="border-camp-yellow p-12 text-center max-w-4xl mx-auto" style={{borderWidth: '16px'}}>
            <h2 className="text-5xl font-bold text-camp-blue mb-3" style={{fontFamily: "'Getafe', sans-serif"}}>
              Are You Ready to <span className="text-camp-yellow">COMPETE with CONFIDENCE?</span>
            </h2>
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

export default OurProgram; 
