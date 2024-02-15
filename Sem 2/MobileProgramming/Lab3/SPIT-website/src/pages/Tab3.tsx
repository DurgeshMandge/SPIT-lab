import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/Home';
import './Tab3.css';
import GoalsAndVision from '../components/GoalsVision';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <GoalsAndVision/>
    </IonPage>
  );
};

export default Tab3;
