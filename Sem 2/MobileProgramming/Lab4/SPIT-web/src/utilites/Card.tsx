import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { FacultyMember } from '../components/FacultyDisplay';

function Card(faculty:FacultyMember) {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src={faculty.imageUrl} />
      <IonCardHeader>
        <IonCardTitle>{faculty.name}</IonCardTitle>
        <IonCardSubtitle>{faculty.position}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  );
}
export default Card;