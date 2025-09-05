import React from 'react';

const ExecutiveFunctioning = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[293px] flex items-end justify-start px-16 z-20" style={{ paddingBottom: '30px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/hero executive functioning.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white text-7xl font-bold mb-8 uppercase flex flex-col gap-2" style={{fontFamily: "'Getafe', sans-serif"}}>
              <span>executive</span>
              <span>functioning</span>
            </h1>
          </div>
        </div>
      </section>

      {/* What is Executive Functioning Section */}
            <section className="py-28 bg-white relative">
        {/* Background Icon */}
        <div className="absolute left-0 top-0 z-0" style={{ marginLeft: '0px', marginTop: '-450px' }}>
          <img src="/the icon what is sad.svg" alt="Background Pattern" className="w-[400px]" />
        </div>
                    <div className="container-custom relative z-10" style={{ maxWidth: '90%' }}>
          <div style={{ marginLeft: '-25px', width: '102%' }}>
            <h2 className="text-5xl font-bold text-camp-blue uppercase mb-8" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              What is <span className="text-camp-yellow">Executive Functioning?</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
              <p>
                You may have heard a school counsellor, or another parent talk about "Executive Functioning" and how so many of our kids struggle with that skill today. Basically, executive functioning is problem solving, coping, and common sense ways to solve small problems and overcome easy challenges. Other words for that skill are, "proactive" and “initiative." Sadly, the modern world has stunted so many of these skills that are necessary for success, especially in the "real world" outside the four walls of school.
              </p>
              <p>
                The good news is these skills, and the success mindset that enable them are teachable and learnable. We like our students to strive for what we call a <span className="font-bold text-camp-yellow">"Champion's Mindset".</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Example Section */}
      <section className="pt-16 pb-32 bg-camp-blue relative" style={{ height: '1005px', width: '1728px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{backgroundImage: "url('/convesation similar backgournd real.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white uppercase mb-8" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              HOW MANY OF US HAVE HAD A <span className="text-camp-yellow">CONVERSATION SIMILAR TO THIS</span>
            </h2>
            
            <div className="p-8">
              <div className="space-y-6 text-lg text-white leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                <p><span className="text-camp-yellow font-bold">Mom: </span>Maybe we should go for a bike ride?</p>
                
                <p><span className="text-camp-yellow font-bold">Teenager: </span>But my tires are flat.</p>
                
                <p><span className="text-camp-yellow font-bold">Mom: </span>Ok, what do we do when a tire is flat?</p>
                
                <p><span className="text-camp-yellow font-bold">Teenager: </span>Pump it. But I don't know where the pump is.</p>
                
                <p><span className="text-camp-yellow font-bold">Mom: </span>Ok, what do we do when we can't find something?</p>
                
                <p><span className="text-camp-yellow font-bold">Teenager: </span>Look for it, but I don't know where to look.</p>
                
                <p><span className="text-camp-yellow font-bold">Mom: </span>Well, let's look where it's most likely to be; maybe in the garage by the bikes, or in the toolkit, or the supply drawer?</p>
                
                <p><span className="text-camp-yellow font-bold">Teenager: </span>But I don't know where to ride …</p>
                
                <p><span className="text-camp-yellow font-bold">Mom: </span>Remember we went though the woods by the middle school, last time? It was fun.</p>
                
                <p><span className="text-camp-yellow font-bold">Teenager: </span>But I'm not sure how to get there …</p>
                
                <p><span className="text-camp-yellow font-bold">Mom: </span>Ok, let's look at a map and learn that route, it's easy and close by.</p>
                
                <p><span className="text-camp-yellow font-bold">Teenager: </span>I don't know where a map is … (Hundreds of maps of the neighborhood are available with one stroke on their phone, which they've been staring into all morning …)</p>
             
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="border-camp-yellow p-12 text-center max-w-4xl mx-auto" style={{borderWidth: '16px'}}>
            <h2 className="text-5xl font-bold text-camp-blue mb-4" style={{fontFamily: "'Getafe', sans-serif"}}>
              Ready to <span className="text-camp-yellow">start achieving?</span>
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

export default ExecutiveFunctioning; 
