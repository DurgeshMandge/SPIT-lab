import React, { useRef } from 'react';
import '../style/GoalsVision.scss';
import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from '@ionic/react';
function GoalsAccordion() {
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
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel className='blue'>Our Goals</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Provide high quality education in engineering and technology promoting the Indian Values and Ethos that will prepare 
            the participants to lead lives of personal integrity and civic responsibility in a global society.
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>Our Vision</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Keeping in view the growing and changing needs of Industry and society, we at S.P.I.T. are committed to creating an 
            environment which will raise the intellectual and moral standards of our students. Our endeavor is to strive for the 
            overall development of students, thereby enabling them to accept challenges.
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>Inspiration</IonLabel>
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