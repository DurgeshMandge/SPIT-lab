import React from 'react';
import '../style/GoalsVision.scss'
import GoalsAccordion from '../utilites/GoalsAccordion';

const GoalsAndVision: React.FC = () => {
  return (
    <div className="goals-vision">
      <h1 className='centre'>Goals and Vision</h1>
      <GoalsAccordion/>
    </div>
  );
};

export default GoalsAndVision;
