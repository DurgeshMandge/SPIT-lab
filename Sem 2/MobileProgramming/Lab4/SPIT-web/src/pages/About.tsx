import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './About.scss'; // Import SCSS file for styles

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="about-container">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to</IonCardSubtitle>
              <IonCardTitle>Sardar Patel Institute of Technology</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Sardar Patel Institute of Technology (SPIT), established in 2005, is one of the leading engineering colleges in India.</p>
              <p>Located in Mumbai, Maharashtra, SPIT offers undergraduate and postgraduate programs in various disciplines including Computer Engineering, Electronics Engineering, Information Technology, and more.</p>
              <p>Our mission is to provide quality education, foster research and innovation, and develop skilled professionals who contribute to society.</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
