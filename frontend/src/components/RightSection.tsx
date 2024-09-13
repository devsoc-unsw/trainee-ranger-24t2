import React from 'react';
import './RightSection.css';

// dummy data
const tripData = [
  { id: 1, from: 'Townhall Station', via: 'Froyo', to: 'Coogee Beach' },
  { id: 2, from: 'Townhall Station', via: 'Froyo', to: 'Coogee Beach' },
  { id: 3, from: 'Townhall Station', via: 'Froyo', to: 'Coogee Beach' },
  { id: 4, from: 'Townhall Station', via: 'Froyo', to: 'Coogee Beach' },
];

const RightSection: React.FC = () => {
  return (
    <div className="right-section">
      <h2>Your Last 4 Trips</h2>
      <div className="trip-cards">
        {tripData.map((trip) => (
          <div key={trip.id} className="trip-card">
            <p><strong>{trip.from}</strong></p>
            <p>{trip.via}</p>
            <p>.........</p>
            <p><strong>{trip.to}</strong></p>
            <button className="reuse-trip">Reuse Trip</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSection;
