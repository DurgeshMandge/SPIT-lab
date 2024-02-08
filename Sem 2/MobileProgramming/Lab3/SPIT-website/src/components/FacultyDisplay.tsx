import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import "../style/Faculty.scss";
import Card from '../utilites/Card';


// Interface to define the shape of faculty member data
export interface FacultyMember {
  id: number;
  name: string;
  position: string;
  department: string;
  imageUrl: string;
}

const FacultyDisplay: React.FC = () => {
  // Sample faculty data
  const faculty: FacultyMember[] = [
    { id: 1, name: 'John Doe', position: 'Professor', department: 'Computer Science', imageUrl: 'https://cse.spit.ac.in/assets/faculty/dr-dhananjay-kalbande.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Associate Professor', department: 'Mathematics', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg' },
    { id: 3, name: 'Alice Johnson', position: 'Assistant Professor', department: 'Physics', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PT-150x150.png' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Faculty Display</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {faculty.map((member) => (
            <Card {...member}></Card>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default FacultyDisplay;
