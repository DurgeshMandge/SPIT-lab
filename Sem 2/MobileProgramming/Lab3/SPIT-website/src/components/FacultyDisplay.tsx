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
    { id: 1, name: 'Kalbande', position: 'Professor', department: 'Computer Science', imageUrl: 'https://cse.spit.ac.in/assets/faculty/dr-dhananjay-kalbande.jpg', content: "Research work Title : Skin Image Analysis Software to recognize skin diseases:- A clinical study to recognize skin diseases at the early stage.Principal Investigator and Guide: Dr.Uday Khopkar,Professor & Head, Dept.of Dermatology,Seth G.S.Medical College and KEM Hospital.Co-Investigators : Dr.Dhananjay Kalbande,Dr.Mithali JageResults of the Investigation are approved from Institutional Ethics Committee(IEC Committee) ,Seth G.S.Medical College & KEM Hospital.Status : Completed" ,web:"https://cse.spit.ac.in/#/faculty/dr-dhananjay-kalbande"},
    { id: 4, name: 'Pooja Raundale', position: 'Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg', content: "Education    PH.D. (Comp. Sci. & Tech) SNDT Women’s University    M.SC. (Computer Sci.)-UDCS North Maharashtra University    B.Sc.(Comp Sci) North Maharashtra University" , web:"https://mca.spit.ac.in/index.php/pooja-raundale/"},
    { id: 2, name: 'Pallavi Thakur', position: 'Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PT-150x150.png', content:"Education    M.E. IT    B.E. IT    Roles and Responsibilities        Time Table Co-ordinator    SWC Co-oridnator    Miniproject Co-oridnator    Feedback Co-oridnator", web:"https://mca.spit.ac.in/index.php/pallavi-thakur/"},
    { id: 3, name: 'Harshil Kanakia', position: 'Assistant Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png', content: "Education    Executive PG in Data Science (IIIT Bangalore)    M. E. Comps (SPIT)    B. E. Comps (SPIT)" , web:"https://mca.spit.ac.in/index.php/prof-harshil-kanakia/"},
    { id: 3, name: 'Nikhita Mangaonkar', position: 'Assistant Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/NM.jpg', content: "Education    M.C.A    B.C.A" , web: "https://mca.spit.ac.in/index.php/nikhita-mangaonkar/"},
    { id: 3, name: 'Aarti Karande', position: 'Professor', department: 'MCA', imageUrl: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/aarti.png', content: "Education Ph.D (Computer engineering from S.P.I.T.)    M.Tech (Computer Engineering from VJTI)    B.E. (Computer Engineering from SAKEC)", web:"https://mca.spit.ac.in/index.php/aarti-karande/" },
  ];

  return (
    faculty.map(fac=>
      <AccordionWithImage title={fac.name} content={fac.content} imageSrc={fac.imageUrl} position={fac.position} department={fac.department} web={fac.web}/>
    )
  );
};

export default FacultyDisplay;
