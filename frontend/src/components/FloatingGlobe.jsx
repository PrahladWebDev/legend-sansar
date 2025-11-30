import React from 'react';
import './FloatingGlobe.css';

const FloatingGlobe = () => {
  return (
    <div className="floating-globe-container">
      <div className="floating-globe">
        <div className="globe-icon">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="globe-svg"
          >
            {/* Continents simplified */}
            <circle cx="50" cy="50" r="40" fill="url(#globeGradient)" />
            <defs>
              <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: '#7C3AED', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 0.4 }} />
              </radialGradient>
            </defs>
            {/* Simplified landmasses */}
            <path
              d="M25 30 Q20 40 25 50 Q30 60 25 70 M35 25 Q40 35 45 45 Q50 55 45 65"
              stroke="#1E40AF"
              strokeWidth="2"
              fill="none"
              className="landmass"
            />
            <path
              d="M55 20 Q65 30 70 45 Q75 60 70 75 M80 35 Q85 50 80 65"
              stroke="#1E40AF"
              strokeWidth="2"
              fill="none"
              className="landmass"
            />
            <path
              d="M30 80 Q40 70 50 75 Q60 70 70 80"
              stroke="#1E40AF"
              strokeWidth="2"
              fill="none"
              className="landmass"
            />
            {/* Equator */}
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#FCD34D"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
              className="equator"
            />
            {/* Orbit rings */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#FCD34D"
              strokeWidth="1"
              fill="none"
              className="orbit-ring"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
        <div className="globe-glow"></div>
      </div>
    </div>
  );
};

export default FloatingGlobe;
