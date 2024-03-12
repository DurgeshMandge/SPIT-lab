import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonToast, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Login.scss'; // Import SCSS file for styles

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleLogin = () => {
    // Here you can add your login logic
    // For demonstration purposes, let's just show a toast message
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="login-container">
          <IonGrid>
            <IonRow className="ion-align-items-center ion-justify-content-center">
              <IonCol size="10" size-md="6" size-lg="4">
                <form className='input-container'>
                  <IonInput
                    value={username}
                    placeholder="Username"
                    onIonChange={(e: any) => setUsername(e.target.value)}
                    clearInput
                    className="ion-margin-bottom"
                  />
                  <IonInput
                    type="password"
                    value={password}
                    placeholder="Password"
                    onIonChange={(e: any) => setPassword(e.target.value)}
                    clearInput
                    className="ion-margin-bottom"
                  />
                  <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
                </form>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful!"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
