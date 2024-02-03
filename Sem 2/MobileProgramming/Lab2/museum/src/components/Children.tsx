// ChildrenArtSection.tsx
import React from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './Children.scss';

const Tab2: React.FC = () => {
  return (
    <IonContent className="children-art-section">
      <div className="container">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Artistic Concepts for Children</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="concept">
              <img src="src\assets\color.png" alt="Color Theory" />
              <p>Color theory</p>
            </div>
            <div className="concept">
              <img src="src\assets\shapes.jpg" alt="Shapes and Forms" />
              <p>Shapes and forms</p>
            </div>
            <div className="concept">
              <img src="src\assets\lines.png" alt="Lines and Patterns" />
              <p>Lines and patterns</p>
            </div>
            {/* Add more artistic concepts as needed */}
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Essential Elements of Art History for Children</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="history-element">
              <img src="src\assets\monalisa.jpg" alt="Famous Artists" />
              <p>'Monalisa' is world famous painting of Leonardo-Da-Vince</p>
            </div>
            <div className="history-element">
              <img src="src\assets\piramid.jpg" alt="Art Movements" />
              <p>Pyramids are most important reigns of egypts</p>
            </div>
            <div className="history-element">
              <img src="src\assets\culture.jpg" alt="Art from Cultures" />
              <p>Dance plays tramendously important role in indian culture</p>
            </div>
            {/* Add more elements of art history as needed */}
          </IonCardContent>
        </IonCard>
      </div>
    </IonContent>
  );
};

export default Tab2;
