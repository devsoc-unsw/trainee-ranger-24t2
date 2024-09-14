import React from 'react';
import './LeftSection.css';
import walkingGif from '../images/walking2.gif';
import { useNavigate } from 'react-router-dom';


const LeftSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="left-section">
     <div className="trek-image">
        <img src={walkingGif} alt="Trekking animation" className="walking-gif" />
      </div>
      <button className="start-trekking" onClick={() => navigate('/location')}>Start Trekking</button>

      <div className="achievements">
        <h2>Achievements</h2>
        <div className="achievement-circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
