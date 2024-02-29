// FeedbackForm.tsx
import "../style/FeedBack.scss"
import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonAlert } from '@ionic/react';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic email format validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
    setSuggestion('');
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

  return (
    <div className="feedback-form" style={{ backgroundImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}>
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
