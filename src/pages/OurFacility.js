import React from 'react';

const OurFacility = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[673px] flex items-end justify-start" style={{ width: '1799px', position: 'relative', left: '50%', transform: 'translateX(-50%)', paddingBottom: '50px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/ourfacilityherobg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white text-7xl font-bold mb-8 uppercase" style={{fontFamily: "'Getafe', sans-serif"}}>
              our facility
            </h1>
            <p className="text-white text-lg max-w-4xl mx-auto" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
              Discover a <span className="font-bold text-camp-yellow">first-class educational environment</span> in the heart of the Berkshire Mountains, one of the premier summer camp destinations in the country. Here, stunning natural surroundings meet top-tier facilities to create a setting designed not just for learning, but for <span className="font-bold text-camp-yellow">meaningful social connection and lasting personal growth.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/ok this is it bg.svg')"}}></div>
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between">
            {/* Image on the left */}
            <div className="flex-shrink-0" style={{ marginLeft: '-20px', marginTop: '-30px' }}>
              <img src="/our location image.svg" alt="Our Location" className="w-[632px]" />
            </div>
            
            {/* Text content */}
            <div className="max-w-xl ml-16">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-camp-blue uppercase" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  OUR <span className="text-camp-yellow">LOCATION</span>
                </h2>
                <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Nestled in the scenic <span className="font-bold text-camp-yellow">Berkshire Mountains of Massachusetts</span>, Camp Success offers the perfect backdrop for personal development, leadership training, and outdoor adventure. Conveniently located just <span className="font-bold text-camp-yellow">2.5 hours from both New York City and Boston, our campus is ideally situated near many top boarding and prep schools.</span> Set on the picturesque shores of Lake Onota, our 400-acre campus features state-of-the-art amenities including basketball courts, an indoor gymnasium, a theater, and a spacious dining hall. This unique combination of nature and modern infrastructure supports every aspect of the student experience—academic, physical, and social.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lodging Section */}
            <section className="pb-32 bg-white relative">
        {/* Bottom Left Icon */}
                  <div className="absolute left-0 bottom-0" style={{ marginLeft: '-200px', marginBottom: '-700px' }}>
          <img src="/final icon lodging.svg" alt="Lodging Icon" className="w-[800px]" />
        </div>
        {/* Yellow Rectangle Background */}
                                      <div className="absolute right-0 top-0" style={{ marginRight: '225px', marginTop: '-25px' }}>
            <img src="/yellowrectbg.svg" alt="Background Pattern" className="w-[340px]" />
          </div>
                      {/* Lodging Image Overlay */}
          <div className="absolute right-0 top-0" style={{ marginRight: '78px', marginTop: '10px' }}>
              <img src="/lodging image 1.svg" alt="Lodging" className="w-[630px]" />
            </div>
            {/* Second Lodging Image */}
            <div className="absolute right-0 top-0" style={{ marginRight: '78px', marginTop: '300px' }}>
              <img src="/lodging image 2.svg" alt="Lodging" className="w-[630px]" />
            </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl" style={{ marginLeft: '-30px', marginRight: '670px' }}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-camp-blue uppercase" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                LODGING
              </h2>
              <div className="space-y-4 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                <p>
                  Students enjoy comfortable and <span className="font-bold text-camp-yellow">modern summer camp housing</span>, living alongside 8-10 peers of similar age, supervised by 2-3 dedicated cabin staff. Each camper has their own bed and designated space for personal belongings, with bathrooms conveniently located inside the cabins. This community living experience <span className="font-bold text-camp-yellow">fosters personal growth, collaboration, and lasting friendships</span>, allowing students to learn valuable social skills and embrace a sense of belonging in a supportive environment.
                </p>
                <p className="font-bold" style={{ marginTop: '40px' }}>
                  Campers thrive on our 400-acre campus including:
                </p>
                <ul className="space-y-1 text-lg text-camp-blue" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  <li>• 14 Tennis Courts</li>
                  <li>• 9 Basketball Courts</li>
                  <li>• 5 Soccer Fields and 5 Baseball Fields</li>
                  <li>• 3 Volleyball Courts and 3 Pickleball Courts</li>
                  <li>• A Beautiful Freshwater lake</li>
                  <li>• Canoeing, paddle boarding, kayaking and sailing</li>
                  <li>• 2 Swimming Pools, Aqua Park, Outdoor Education Course</li>
                  <li>• A Creative Arts Complex</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-24 pb-32 bg-camp-blue relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/healther lifestyle lodging image bg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: "'Getafe', sans-serif"}}>
              Ready to <span className="text-camp-yellow">lead a healthier lifestyle?</span>
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

export default OurFacility; 
