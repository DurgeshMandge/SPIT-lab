import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/Home';
import './Tab2.css';
import Faculty from '../components/FacultyDisplay';
import FacultyDisplay from '../components/FacultyDisplay';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Faculties</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <FacultyDisplay></FacultyDisplay>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
