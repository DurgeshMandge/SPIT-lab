import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import "../style/Faculty.scss";
import Card from '../utilites/Card';
import AccordionWithImage from '../utilites/Accordion';


// Interface to define the shape of faculty member data
export interface FacultyMember {
  id: number;
  name: string;
  position: string;
  department: string;
  imageUrl: string;
  content: string;
}

const FacultyDisplay: React.FC = () => {
  // Sample faculty data
  const faculty: FacultyMember[] = [
    { id: 1, name: 'John Doe', position: 'Professor', department: 'Computer Science', imageUrl: 'https://cse.spit.ac.in/assets/faculty/dr-dhananjay-kalbande.jpg', content: "adlfkjsdlfaksjdflakjflsdkfj" },
    { id: 2, name: 'Jane Smith', position: 'Associate Professor', department: 'Mathematics', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg', content:"ldjfa;slkdjfa;sdkfdll"},
    { id: 3, name: 'Alice Johnson', position: 'Assistant Professor', department: 'Physics', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PT-150x150.png', content: "dkjfsldkfjalsdfkjasldfj" }
  ];

  return (
    faculty.map(fac=>
      <AccordionWithImage title={fac.name} content={fac.content} imageSrc={fac.imageUrl} position={fac.position} department={fac.department} />
    )
  );
};

export default FacultyDisplay;
