import React, { useState } from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonRadioGroup, IonRadio, IonItemDivider } from '@ionic/react';
import './FeedBackForm.scss';

const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [recommendation, setRecommendation] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(recommendation === "yes"){
        alert("Thank you " +  name + " for recommending us and giving good points rating");
    }else{
        alert("Thank you " + name + " for feedback we will definately improve");
    }
    console.log('Form submitted!');
    console.log('Rating:', rating);
    console.log('Recommendation:', recommendation);
    console.log('name:', name);
  };

  return (
    <IonContent className="ion-padding black">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="ion-text-center">Museum Feedback Form</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <form id="feedbackForm" onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput type="text" name="name" value={name} onIonChange={e=>setName(e.target.value)} required></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" name="email" required></IonInput>
            </IonItem>
            <IonItemDivider>Rate your experience</IonItemDivider>
            <IonRadioGroup value={rating} onIonChange={e => setRating(e.detail.value)}>
              <IonItem>
                <IonLabel>Excellent</IonLabel>
                <IonRadio slot="start" value={5} />
              </IonItem>
              <IonItem>
                <IonLabel>Good</IonLabel>
                <IonRadio slot="start" value={4} />
              </IonItem>
              <IonItem>
                <IonLabel>Average</IonLabel>
                <IonRadio slot="start" value={3} />
              </IonItem>
            </IonRadioGroup>
            <IonItemDivider>Would you recommend us?</IonItemDivider>
            <IonRadioGroup value={recommendation} onIonChange={e => setRecommendation(e.detail.value)}>
              <IonItem>
                <IonLabel>Yes</IonLabel>
                <IonRadio slot="start" value="yes" />
              </IonItem>
              <IonItem>
                <IonLabel>No</IonLabel>
                <IonRadio slot="start" value="no" />
              </IonItem>
            </IonRadioGroup>
            <IonItem>
              <IonLabel position="floating">Feedback</IonLabel>
              <IonTextarea name="feedback" required></IonTextarea>
            </IonItem>
            <IonButton expand="block" type="submit">Submit</IonButton>
          </form>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default FeedbackForm;
