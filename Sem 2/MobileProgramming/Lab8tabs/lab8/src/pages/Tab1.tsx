import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { useCamera} from "";

const Tab1: React.FC = () => {
  const { photo, takePhoto } = useCamera();

  const handleTakePhoto = async () => {
    const image = await takePhoto();
    console.log('Photo taken:', image);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={handleTakePhoto}>Take Photo</IonButton>
        {photo && <img src={photo.webPath} alt="Captured" />}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
