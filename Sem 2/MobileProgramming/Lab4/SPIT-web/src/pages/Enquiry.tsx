import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonToast, IonGrid, IonRow, IonCol, IonPage } from '@ionic/react';
import './Enquiry.scss'; // Import SCSS file for styles

const Enquiry: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleEnquirySubmit = () => {
    // Here you can add your enquiry submission logic
    // For demonstration purposes, let's just show a toast message
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonContent className="enquiry-page">
        <IonGrid className="ion-padding">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6">
              <div className="form-container">
                <h2>Send Enquiry</h2>
                <form onSubmit={handleEnquirySubmit}>
                  <IonInput
                    value={name}
                    placeholder="Your Name"
                    onIonChange={(e: any) => setName(e.target.value)}
                    required
                  />
                  <IonInput
                    type="email"
                    value={email}
                    placeholder="Your Email"
                    onIonChange={(e: any) => setEmail(e.target.value)}
                    required
                  />
                  <IonInput
                    value={message}
                    placeholder="Your Message"
                    onIonChange={(e: any) => setMessage(e.target.value)}
                    required
                  />
                  <IonButton type="submit" expand="block">Submit</IonButton>
                </form>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Enquiry submitted successfully!"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Enquiry;
