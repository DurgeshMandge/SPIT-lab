// AccordionWithImage.tsx

import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonImg } from '@ionic/react';
import '../style/Accordion.scss'

interface AccordionProps {
  title: string;
  content: string;
  imageSrc: string;
  position: string;
  department: string;
}

const AccordionWithImage: React.FC<AccordionProps> = ({ title, content, imageSrc, position, department, web }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <IonCard className={`accordion-card ${isExpanded ? 'expanded' : ''}`}>
      <IonCardHeader onClick={toggleAccordion}>
        <div className="accordion-icon">
          <div className="centre">
            <IonCardTitle >{position} {title}</IonCardTitle>
            <p><strong>Position:</strong> {position}</p>
            <p><strong>Department:</strong> {department}</p>
          </div>
          <img className='circular-image' src={imageSrc} />
        </div>
      </IonCardHeader>
      {isExpanded && (
        <>
          <IonCardContent>
            <div className="accordion-content centre"><strong>{content}</strong></div>
            <a className='h2Style' href={web} target="_blank" rel="noopener noreferrer">Visit Profile</a>
          </IonCardContent>
        </>
      )}
    </IonCard>
  );
};

export default AccordionWithImage;
