// PlacementsStats.tsx

import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { trophyOutline } from 'ionicons/icons';
import './Placements.scss'; // Import SCSS file for styles

const Placements: React.FC = () => {
  const [placementsData, setPlacementsData] = useState<any[]>([]); // Assuming data structure

  useEffect(() => {
    const sampleData = [
      { year: '2021', placements: 150,mca:40, extc:40, cse:70 , elite:23,superDream:20},
      { year: '2020', placements: 140 ,mca:40, extc:50, cse:60, elit:23,superDream:20},
      { year: '2019', placements: 130,mca:50, extc:10, cse:70 , elit:23,superDream:20},
      // Add more data as needed
    ];
    setPlacementsData(sampleData);
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="placements-page">
          <div className="placements-container">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={trophyOutline} /> Placements Statistics
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="placements-stats">
                  {placementsData.map((item, index) => (
                    <div key={index} className="placement-item">
                      <h2>{item.year}</h2>
                      <p>{item.placements} Placements</p>
                      <p>MCA : {item.mca}     Elites: {item.elite}</p>
                      <p>EXTC : {item.extc}        SuperDream: {item.superDream}</p>
                      <p>CSE : {item.cse}</p>
                      <br />
                    </div>
                  ))}
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Placements;
