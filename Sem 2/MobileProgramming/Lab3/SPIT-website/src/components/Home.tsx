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

            <img
              alt="College Campus"
              src="https://images.shiksha.com/mediadata/images/1551435170phptmId73.png"
            />
            <h4 className='h2Style'>Class Room</h4>

            <img
              alt="College Campus"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIFnbLbCcz-Hsd5RTKpeb6MpmMKxeQ3FFRyhrdy5I73Uu8s_6X0_etVY88iWB8aD3hC8&usqp=CAU"
            />
            <h4 className='h2Style'>Conference</h4>

          </div>
        </IonContent>
      </>
    );
  }
  export default Home;
