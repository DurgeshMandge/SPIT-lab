import React, { useRef } from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import '../style/GoalsAccordion.scss';

const GoalsAccordion: React.FC = () => {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  const toggleAccordion = () => {
    if (!accordionGroup.current) {
      return;
    }
    const nativeEl = accordionGroup.current;

    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };

  return (
    <>
      <IonAccordionGroup ref={accordionGroup}>
        <IonAccordion value="first" className='padding'>
          <IonItem slot="header" color="light">
            <IonLabel className='centre1'>Our Goals</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Provide high quality education in engineering and technology promoting the Indian Values and Ethos that will prepare 
            the participants to lead lives of personal integrity and civic responsibility in a global society.
          </div>
        </IonAccordion>
        <IonAccordion value="second" className='padding'>
          <IonItem slot="header" color="light">
            <IonLabel className='centre1'>Our Vision</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Keeping in view the growing and changing needs of Industry and society, we at S.P.I.T. are committed to creating an 
            environment which will raise the intellectual and moral standards of our students. Our endeavor is to strive for the 
            overall development of students, thereby enabling them to accept challenges.
          </div>
        </IonAccordion>
        <IonAccordion value="third" className='padding'>
          <IonItem slot="header" color="light">
            <IonLabel className='centre1'>Inspiration</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Every day, we embark on a journey together—one filled with challenges, triumphs, and endless opportunities. It's a 
            journey that requires courage, resilience, and unwavering determination. But in the face of adversity, we stand tall, 
            united by a common purpose: to inspire, to empower, and to ignite the flame of knowledge within each and every 
            individual.
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
}

export default GoalsAccordion;
