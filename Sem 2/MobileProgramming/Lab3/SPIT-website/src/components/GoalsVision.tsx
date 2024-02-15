// GoalsAndVision.tsx

import React from 'react';
import '../style/GoalsVision.scss'

const GoalsAndVision: React.FC = () => {
  return (
    <div className="goals-vision">
      <h2 className='centre'>Goals and Vision</h2>
      <div className="goal">
        <h3 className='centre'>Our Goals</h3>
        <p>
            Provide high quality education in engineering and technology promoting the Indian Values and Ethos that will prepare 
            the participants to lead lives of personal integrity and civic responsibility in a global society.
        </p>
      </div>
      <div className="vision">
        <h3 className='centre'>Our Vision</h3>
        <p>
            Keeping in view the growing and changing needs of Industry and society, we at S.P.I.T. are committed to creating an 
            environment which will raise the intellectual and moral standards of our students. Our endeavor is to strive for the 
            overall development of students, thereby enabling them to accept challenges.
        </p>
      </div>
    </div>
  );
};

export default GoalsAndVision;
