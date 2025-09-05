import React from 'react';

const MeetAcademicTeam = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[293px] flex items-end justify-start px-16" style={{ paddingBottom: '30px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/meet academic teambg.svg')"}}></div>
        <div className="relative z-10 container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white text-7xl font-bold mb-8 uppercase" style={{fontFamily: "'Getafe', sans-serif"}}>
              meet the academic team
            </h1>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-32 bg-white">
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
                  src="/susaincain1.svg" 
                  alt="Susan Cain" 
                  className="w-full max-w-[420px] object-contain relative z-10"
                />
              </div>
              <div className="space-y-6 -ml-36 mr-[-50px]">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  SUSAN CAIN
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Academic Advisor Board Member
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Susan Cain is an honors graduate of Princeton University and Harvard Law School and the author of two #1 New York Times bestsellers: Quiet: The Power of Introverts in a World That Can't Stop Talking and Bittersweet, an Oprah Book Club pick. Quiet, translated into 40 languages, spent seven years on the NYT bestseller list and was named the #1 book of the year by Fast Company. Her TED Talk, with over 40 million views, is one of Bill Gates' all-time favorites.
                  </p>
                  <p>
                    A globally sought-after speaker, Susan has delivered keynotes for Google, Pixar, Amazon, West Point, and more. She hosts the bestselling Audible series A Quiet Life in Seven Steps and the Quiet Life online community. Named LinkedIn's 6th Top Influencer worldwide, she co-curates the Next Big Idea Book Club with Malcolm Gladwell, Adam Grant, and Dan Pink, donating proceeds to children's literacy programs. Her work has appeared in The New York Times, The Atlantic, and The Wall Street Journal, among others, and she has been honored with numerous awards for leadership and communication excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Peter Keum */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="space-y-6 ml-4 mr-[-150px] mt-16">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  PETER KEUM
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Academic Advisor Board Member
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Peter is an honors graduate of Harvard College, where his magna cum laude thesis in Economics, Ethnicity and Occupational Choice, explored Asian-American students' academic and career decisions. He also holds an MBA from the Wharton School at the University of Pennsylvania.
                  </p>
                  <p>
                    A digital media entrepreneur, Peter co-founded Admaru Network, a leading multicultural ad tech company connecting global brands with key Asian-American demographic segments. He began his career as a management consultant at Booz Allen Hamilton, specializing in telecom and media. Peter has served on the boards of the Mirae Foundation, which supports the largest Korean-American undergraduate conference (KASCON), and the NY Nanum Foundation, a prominent community service organization.
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
                  src="/susaincain1.svg" 
                  alt="Peter Keum" 
                  className="w-full max-w-[420px] object-contain mr-[-50px] relative z-10"
                />
              </div>
            </div>

            {/* Jeff Kaplan */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="relative">
                <img 
                  src="/realjeffrectnagle.svg"
                  alt="Background Rectangle"
                  className="absolute top-[-48px] left-16 w-full max-w-[300px] object-contain z-0"
                />
                <img 
                  src="/susaincain1.svg" 
                  alt="Jeff Kaplan" 
                  className="w-full max-w-[420px] object-contain relative z-10"
                />
              </div>
              <div className="space-y-6 -ml-36 mr-[-50px] mt-16">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  JEFF KAPLAN
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Academic Advisor Board Member
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Jeff is an honors graduate of Yale College and Harvard Law School. Currently a senior executive at the venture-backed tech company Carto, he has held leadership roles at several innovative software startups.
                  </p>
                  <p>
                    A Fulbright Scholar in Malaysia, Jeff has decades of experience living and working in East Asia with the UN, the World Bank, and in the private sector. Fluent in multiple ASEAN languages, he began his career as a law clerk for a federal judge before transitioning to corporate law and later to the tech industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Tom Sugiura */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="space-y-6 ml-4 mr-[-150px] mt-16">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  TOM SUGIURA
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Academic Advisor Board Member
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Tom is an Honors graduate of Harvard College and received an MBA from the Yale School of Management. He brings a diverse set of work experiences, spanning efforts on behalf of the homeless and low-income communities in the Tenderloin neighborhood of San Francisco, to a two decade career as an equity derivatives trader on Wall Street. Tom has long served as a Harvard College alumni interviewer.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-end">
                <img 
                  src="/realjeffrectnagle.svg"
                  alt="Background Rectangle"
                  className="absolute top-[-48px] left-[410px] w-full max-w-[300px] object-contain z-0"
                />
                <img 
                  src="/susaincain1.svg" 
                  alt="Tom Sugiura" 
                  className="w-full max-w-[420px] object-contain mr-[-50px] relative z-10"
                />
              </div>
            </div>

            {/* Kenneth Cain */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="relative">
                <img 
                  src="/susanrectangle.svg"
                  alt="Background Rectangle"
                  className="absolute top-[-40px] left-36 w-full max-w-[300px] object-contain z-0"
                />
                <img 
                  src="/kennethcain.svg" 
                  alt="Kenneth Cain" 
                  className="w-full max-w-[420px] object-contain relative z-10"
                />
              </div>
              <div className="space-y-6 -ml-36 mr-[-50px] mt-12">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  KENNETH CAIN
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Director of Education and co-founder of Camp Success.
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Kenneth Cain is an honors graduate of Harvard Law School and Wesleyan University, where he was an award winning scholar-athlete, before embarking on a distinguished career spanning law, international diplomacy, and business. He served as a Fulbright Scholar in Sri Lanka and India, and as a Fellow at the Council on Foreign Relations in NYC. Kenneth served in global UN Peacekeeping Operations, with deployments in Cambodia, Somalia, Rwanda, and Cambodia. His bestselling book on peacekeeping is being adapted for film with Russell Crowe’s “Fear of God Productions” and for stage with Cate Blanchett.
                  </p>
                  <p>
                    Kenneth has appeared on CNN, FOX, BBC, and written for The New York Times, The Wall Street Journal, and GQ, including a National Magazine Award Nomination. He has held senior roles in several startups and in private equity, lectured at Columbia and NYU, and taught leadership and communication skills worldwide. He served for many years as a Harvard  College admissions alumni interviewer.
                  </p>
                </div>
              </div>
            </div>

            {/* Jim Fyfe */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="space-y-6 ml-4 mr-[-150px] mt-8">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  JIM FYFE
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Instructor
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Jim Fyfe is a 25-year veteran of television, film, and Broadway, having worked on productions such as The X Files, Law & Order, and The Late Show with Stephen Colbert. Mr. Fyfe has produced appearances by Presidential candidates, A-list film and music stars, leading directors and bestselling authors. He has written for "Biography," "Exhale with Candice Bergen" and "Night After Night" on Comedy Central. Jim has taught on-camera technique, acting, and improvisation, and coached speakers and presenters from business, journalism and medicine for many years - Jim had a "breakthrough" moment when he customized an intensive public speaking coaching approach with Susan Cain before her record-breaking TED Talk. He now coaches a long list of prominent actors and speakers before major public speaking appearances, including a long list of prominent TED speakers. Jim pioneered many of the techniques taught in our Leadership and Communications Boot Camp and has taught the curriculum with rave reviews in China, India and New York.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-end">
                <img 
                  src="/susanrectangle.svg"
                  alt="Background Rectangle"
                  className="absolute top-40 left-[420px] w-full max-w-[300px] object-contain z-0"
                />
                <img 
                  src="/fyfey.svg" 
                  alt="Jim Fyfe" 
                  className="w-full max-w-[420px] object-contain mr-[-50px] relative z-10"
                />
              </div>
            </div>

            {/* Brendan Cahill */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="relative">
                <img 
                  src="/susanrectangle.svg"
                  alt="Background Rectangle"
                  className="absolute top-20 left-36 w-full max-w-[300px] object-contain z-0"
                />
                <img 
                  src="/bcdtofu.svg" 
                  alt="Branden Cahill" 
                  className="w-full max-w-[420px] object-contain relative z-10"
                />
              </div>
              <div className="space-y-6 -ml-36 mr-[-50px] mt-16">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  BRENDaN CAHILL
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Instructor
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Brendan Cahill is a history teacher at Choate Rosemary Hall in Wallingford Connecticut, one of the world’s most prestigious boarding schools. He is also a nationally recognized football coach specializing in elite pre-Ivy League athletes, with nearly a decade of experience helping students gain admission to top-tier universities, and has guided student-athletes to offers from elite programs, including Michigan, Duke, Vanderbilt, Harvard, Yale, Princeton, Dartmouth, Brown, Columbia, Cornell, Williams, Amherst, Tufts, UChicago, Johns Hopkins, Georgetown, Bowdoin, Middlebury, and more. His expertise lies in fostering the skills, discipline, and mindset required for success both in academics and athletics.
                  </p>
                </div>
              </div>
            </div>

            {/* Julia Tonelli */}
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="space-y-6 ml-4 mr-[-150px] mt-16">
                <h2 className="text-5xl font-bold text-camp-blue" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
                  JULIA TONELLI
                </h2>
                <p className="text-xl font-bold text-camp-yellow" style={{fontFamily: "'Adobe Clean Serif', serif"}}>
                  Instructor
                </p>
                <div className="space-y-2 text-lg text-camp-blue leading-relaxed" style={{fontFamily: "'Adobe Clean Serif', serif", textAlign: 'justify'}}>
                  <p>
                    Julia Tonelli is a dedicated language educator with a deep passion for teaching middle and high school students. Since becoming an accredited teacher in 2012, she has been shaping young minds at a top-rated public school in New York State, where she develops curriculum and teaches students at all proficiency levels—from beginners to college-level learners. Julia holds an MA in Adolescent Education and Italian Literature from City University of NY, Hunter College, and Bachelor's degrees in English, Rhetoric and Global Culture, as well as Italian Language & Literature from SUNY Binghamton. Committed to ongoing professional growth, Julia continually enhances her teaching by taking pedagogy courses and integrating the latest instructional methods into her classroom.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-end">
                <img 
                  src="/susanrectangle.svg"
                  alt="Background Rectangle"
                  className="absolute top-12 left-[430px] w-full max-w-[300px] object-contain z-0"
                />
                <img 
                  src="/bcdtofu.svg" 
                  alt="Julia Tonelli" 
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
              Ready to <span className="text-camp-yellow">succeed?</span>
            </h2>
            <p className="text-xl text-white mb-8" style={{fontFamily: "'PP Neue Montreal', sans-serif"}}>
              Champions don't wait.
            </p>
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

export default MeetAcademicTeam; 
