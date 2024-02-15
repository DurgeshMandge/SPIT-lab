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
  web: string;
}

const FacultyDisplay: React.FC = () => {
  // Sample faculty data
  const faculty: FacultyMember[] = [
    { id: 1, name: 'Kalbande', position: 'Professor', department: 'Computer Science', imageUrl: 'https://cse.spit.ac.in/assets/faculty/dr-dhananjay-kalbande.jpg', content: "adlfkjsdlfaksjdflakjflsdkfj" ,web:"https://cse.spit.ac.in/#/faculty/dr-dhananjay-kalbande"},
    { id: 4, name: 'Pooja Raundale', position: 'Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg', content: "dkjfsldkfjalsdfkjasldfj" , web:"https://mca.spit.ac.in/index.php/pooja-raundale/"},
    { id: 2, name: 'Pallavi Thakur', position: 'Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PT-150x150.png', content:"ldjfa;slkdjfa;sdkfdll", web:"https://mca.spit.ac.in/index.php/pallavi-thakur/"},
    { id: 3, name: 'Harshil Kanakia', position: 'Assistant Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png', content: "dkjfsldkfjalsdfkjasldfj" , web:"https://mca.spit.ac.in/index.php/prof-harshil-kanakia/"},
    { id: 3, name: 'Nikhita Mangaonkar', position: 'Assistant Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/NM.jpg', content: "dkjfsldkfjalsdfkjasldfj" , web: "https://mca.spit.ac.in/index.php/nikhita-mangaonkar/"},
    { id: 3, name: 'Aarti Karande', position: 'Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/index.php/aarti-karande/', content: "dkjfsldkfjalsdfkjasldfj", web:"https://mca.spit.ac.in/index.php/aarti-karande/" },
  ];

  return (
    faculty.map(fac=>
      <AccordionWithImage title={fac.name} content={fac.content} imageSrc={fac.imageUrl} position={fac.position} department={fac.department} web={fac.web}/>
    )
  );
};

export default FacultyDisplay;
