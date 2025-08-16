import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
      
      <div className="relative z-10 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Logo */}
            <div className="mb-6 md:mb-0 -ml-24">
              <img 
                src="/OPLOGOFINAL.svg" 
                alt="Logo" 
                className="h-20 w-auto"
              />
            </div>

            {/* Content */}
            <div className="md:ml-32">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <a 
                  href="https://google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-camp-blue text-white text-base font-semibold rounded-[25px] transition-all duration-200 hover:bg-camp-blue/90 hover:scale-105"
                >
                  Enroll Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <Link 
                  to="/additional-resources" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-camp-blue text-white text-base font-semibold rounded-[25px] transition-all duration-200 hover:bg-camp-blue/90 hover:scale-105"
                >
                  Additional Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 