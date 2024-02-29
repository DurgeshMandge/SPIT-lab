import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/Home';
import './Tab3.css';
import GoalsAndVision from '../components/GoalsVision';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goals and Vision</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GoalsAndVision/>
      </IonContent>
    </IonPage>
    // <IonPage>
    //   <GoalsAndVision/>
    // </IonPage>
  );
};

export default Tab3;
