  import '../style/Home.scss';
  import React from 'react';
  import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
  import HorizontallyScrollableComponent from '../utilites/Scroller';

  function Home() {
    return (
      <>
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonTitle className='Title'>Sardar Patel Institute of Technology</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen={true}>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">S.P.I.T.</IonTitle>
            </IonToolbar>
          </IonHeader>

          <div className="ion-padding">
            {/* <h1>Principal</h1> */}

            <h2 className='h2Style'>Learn to excel</h2>
            <img
              alt="rhino standing near grass"
              src="https://i.ytimg.com/vi/uGcEHgtnu7A/maxresdefault.jpg"
            />
            <div className='divStyle'>
              <h2 className='h2Style'>Our College's Vision:</h2>
              <p className='pStyle'>At <strong>S.P.I.T</strong>, our vision is to foster a dynamic learning environment that empowers students to become global leaders, critical thinkers, and compassionate contributors to society.</p>
            </div>
            <HorizontallyScrollableComponent/>
          </div>
        </IonContent>
      </>
    );
  }
  export default Home;
