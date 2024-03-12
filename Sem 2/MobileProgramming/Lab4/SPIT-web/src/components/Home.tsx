import '../style/Home.scss';
import React from 'react';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar, IonMenu, IonMenuToggle, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { IonButtons, IonMenuButton, IonPage } from '@ionic/react';
import HorizontallyScrollableComponent from '../utilites/Scroller';
import TabItems from '../TabItems';

function Home() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem routerLink="/login">
              <IonLabel>Login/Register</IonLabel>
            </IonItem>
            <IonItem routerLink="/placement">
              <IonLabel>Placements</IonLabel>
            </IonItem>
            <IonItem routerLink="/enquiry">
              <IonLabel>Enquiry</IonLabel>
            </IonItem>
            <IonItem routerLink="/about">
              <IonLabel>About</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className='Title'>Sardar Patel Institute of Technology</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen={true} className='centre'>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">S.P.I.T.</IonTitle>
            </IonToolbar>
          </IonHeader>

          <div className="ion-padding">

            <h2 className='h2Style'>Learn to excel</h2>
            <img
              alt="Principal's Message"
              src="https://i.ytimg.com/vi/uGcEHgtnu7A/maxresdefault.jpg"
            />

            <div className='divStyle'>
              <h2 className='h2Style'>Our College's Vision:</h2>
              <p className='pStyle'>At <strong>S.P.I.T</strong>, our vision is to foster a dynamic learning environment that empowers students to become global leaders, critical thinkers, and compassionate contributors to society.</p>
            </div>
            

            <HorizontallyScrollableComponent/>

            <h2 className='h2Style'>College Campus</h2>
            <img
              alt="College Campus"
              src="https://www.campusoption.com/images/colleges/gallery/24_11_17_110206_College.jpg"
            />
            <h4 className='h2Style'>Main Building</h4>
            

  //           {/* ---------------- Horizontally Scrollabe------------- */}

            <div className="horizontally-scrollable">
              <div className="scroll-container">
                <div className='inline'>
                  <img
                    className='scrolImg block'
                    alt="College Campus"
                    src="https://images.shiksha.com/mediadata/images/1551435170phptmId73.png"
                  />
                  <h2 className='h2Style'>Class Rooms</h2>
                </div>
                <div className='inline'>
                  <img
                    className='scrolImg block'
                    alt="College Campus"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIFnbLbCcz-Hsd5RTKpeb6MpmMKxeQ3FFRyhrdy5I73Uu8s_6X0_etVY88iWB8aD3hC8&usqp=CAU"
                  />
                  <h2 className='h2Style'>Conference</h2>
                </div>
                <div className='inline'>
                  <img
                    className='scrolImg block'
                    alt="College Campus"
                    src="https://mca.spit.ac.in/wp-content/uploads/2022/12/20221212_115651-min-1536x1152.jpg"
                  />
                  <h2 className='h2Style'>Computer Labs</h2>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------ End Horizontally Scrollable----------------------- */}
        
        </IonContent>
      </IonPage>
      
    </>
  );
}
export default Home;