import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import UpcomingEvent from '../components/UpcomingEvent';


const Tab4: React.FC = () => {
  return (
    <IonPage className='tab'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Upcoming Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Upcomming Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        <UpcomingEvent></UpcomingEvent>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
