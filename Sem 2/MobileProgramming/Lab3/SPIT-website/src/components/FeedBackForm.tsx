import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonAlert, IonRange } from '@ionic/react';
import '../style/FeedBack.scss'

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic email format validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // You can implement your logic to handle the form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    console.log('Suggestion:', suggestion);
    console.log('Rating:', rating);
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
    setSuggestion('');
    setRating(0);
    setShowAlert(true);
  };

  // Function to validate email format
  const validateEmail = (email: string): boolean => {
    // Simple regex for email validation
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // Function to check if all required fields are filled
  const checkFormValidity = () => {
    return name.trim() !== '' && email.trim() !== '' && feedback.trim() !== '';
  };

  // Function to handle changes in form fields
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'feedback') setFeedback(value);
    if (name === 'suggestion') setSuggestion(value);

    setFormValid(checkFormValidity());
  };

  // Function to handle rating change
  const handleRatingChange = (e: any) => {
    setRating(parseInt(e.target.value, 10));
  };

  return (
    <div className="feedback-form">
      <form onSubmit={handleFormSubmit}>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            type="text"
            name="name"
            value={name}
            onIonChange={handleInputChange}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            name="email"
            value={email}
            onIonChange={handleInputChange}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Feedback</IonLabel>
          <IonTextarea
            name="feedback"
            value={feedback}
            onIonChange={handleInputChange}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel>Rating: {rating}</IonLabel>
          <IonRange
            min={0}
            max={5}
            step={1}
            snaps={true}
            value={rating}
            onIonChange={handleRatingChange}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Suggestion</IonLabel>
          <IonTextarea
            name="suggestion"
            value={suggestion}
            onIonChange={handleInputChange}
          />
        </IonItem>
        <IonButton type="submit" expand="block" disabled={!formValid}>Submit Feedback</IonButton>
      </form>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Feedback Submitted'}
        message={'Thank you for your feedback!'}
        buttons={['OK']}
      />
    </div>
  );
};

export default FeedbackForm;
