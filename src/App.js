import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurProgram from './pages/OurProgram';
import AcademicProgram from './pages/AcademicProgram';
import AthleticProgram from './pages/AthleticProgram';
import DailySchedule from './pages/DailySchedule';
import OurFacility from './pages/OurFacility';
import Summer2025 from './pages/Summer2025';
import ExecutiveFunctioning from './pages/ExecutiveFunctioning';
import MeetAcademicTeam from './pages/MeetAcademicTeam';
import MeetCampTeam from './pages/MeetCampTeam';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-program" element={<OurProgram />} />
            <Route path="/academic-program" element={<AcademicProgram />} />
            <Route path="/athletic-program" element={<AthleticProgram />} />
            <Route path="/daily-schedule" element={<DailySchedule />} />
            <Route path="/our-facility" element={<OurFacility />} />
            <Route path="/summer-2025" element={<Summer2025 />} />
            <Route path="/executive-functioning" element={<ExecutiveFunctioning />} />
            <Route path="/meet-academic-team" element={<MeetAcademicTeam />} />
            <Route path="/meet-camp-team" element={<MeetCampTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
