import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Define path mappings to categories
  const pathToCategory = {
    '/our-program': 'what-we-offer',
    '/academic-program': 'what-we-offer',
    '/athletic-program': 'what-we-offer',
    '/daily-schedule': 'about',
    '/executive-functioning': 'about',
    '/meet-academic-team': 'about',
    '/meet-camp-team': 'about',
    '/our-facility': 'about',
    '/summer-2025': 'open-courses',
    '/contact': 'contact'
  };

  // Get current category based on path
  const currentCategory = pathToCategory[location.pathname];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`text-black sticky top-0 z-50 shadow-sm transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`} 
      style={{backgroundColor: '#FAFCFF'}}
    >
      <div className="container-custom pl-0 pr-4">
        <div className="flex items-center justify-between py-9">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-20 pr-2">
            <img src="/logo.png" alt="CampSuccess Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-16">
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 font-bold transition-colors ${
                  currentCategory === 'what-we-offer' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`} 
                style={{fontFamily: "'PP Neue Montreal', sans-serif", fontSize: '20px'}}
              >
                <span>WHAT WE OFFER</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/our-program" className="block px-4 py-2 text-camp-bright-blue hover:bg-gray-100">Our Program</Link>
                <Link to="/academic-program" className="block px-4 py-2 text-camp-bright-blue hover:bg-gray-100">Academic Program</Link>
                <Link to="/athletic-program" className="block px-4 py-2 text-camp-bright-blue hover:bg-gray-100">Athletic Program</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 font-bold transition-colors ${
                  currentCategory === 'about' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`} 
                style={{fontFamily: "'PP Neue Montreal', sans-serif", fontSize: '20px'}}
              >
                <span>ABOUT</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/daily-schedule" className="block px-4 py-2 text-camp-bright-blue hover:bg-gray-100">Daily Schedule</Link>
                <Link to="/executive-functioning" className="block px-4 py-2 text-camp-bright-blue hover:bg-gray-100">Executive Functioning</Link>
                <Link to="/meet-academic-team" className="block px-4 py-2 text-camp-bright-blue hover:bg-gray-100">Academic Team</Link>
                <Link to="/meet-camp-team" className="block px-4 py-2 text-camp-bright-blue hover:bg-gray-100">Camp Team</Link>
                <Link to="/our-facility" className="block px-4 py-2 text-camp-bright-blue hover:bg-gray-100">Our Facility</Link>
              </div>
            </div>
            
            <Link 
              to="/summer-2025" 
              className={`font-bold transition-colors ${
                currentCategory === 'open-courses' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
              }`}
              style={{fontFamily: "'PP Neue Montreal', sans-serif", fontSize: '20px'}}
            >
              OPEN COURSES
            </Link>
            
            <Link 
              to="/contact" 
              className={`font-bold transition-colors ${
                currentCategory === 'contact' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
              }`}
              style={{fontFamily: "'PP Neue Montreal', sans-serif", fontSize: '20px'}}
            >
              CONTACT US
            </Link>
          </nav>

          {/* CTA Button */}
          <a 
            href="https://google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enroll -mr-24 px-8 py-4" 
            style={{backgroundColor: '#003DCC', borderRadius: '9999px', border: '2px solid black'}}
          >
            Enroll Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/our-program" 
                className={`font-medium transition-colors ${
                  location.pathname === '/our-program' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Our Program
              </Link>
              <Link 
                to="/academic-program" 
                className={`font-medium transition-colors ${
                  location.pathname === '/academic-program' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Academic Program
              </Link>
              <Link 
                to="/athletic-program" 
                className={`font-medium transition-colors ${
                  location.pathname === '/athletic-program' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Athletic Program
              </Link>
              <Link 
                to="/daily-schedule" 
                className={`font-medium transition-colors ${
                  location.pathname === '/daily-schedule' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Daily Schedule
              </Link>
              <Link 
                to="/executive-functioning" 
                className={`font-medium transition-colors ${
                  location.pathname === '/executive-functioning' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Executive Functioning
              </Link>
              <Link 
                to="/meet-academic-team" 
                className={`font-medium transition-colors ${
                  location.pathname === '/meet-academic-team' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Academic Team
              </Link>
              <Link 
                to="/meet-camp-team" 
                className={`font-medium transition-colors ${
                  location.pathname === '/meet-camp-team' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Camp Team
              </Link>
              <Link 
                to="/our-facility" 
                className={`font-medium transition-colors ${
                  location.pathname === '/our-facility' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Our Facility
              </Link>
              <Link 
                to="/summer-2025" 
                className={`font-medium transition-colors ${
                  location.pathname === '/summer-2025' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Open Courses
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${
                  location.pathname === '/contact' ? 'text-camp-bright-blue' : 'text-black hover:text-camp-bright-blue'
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 