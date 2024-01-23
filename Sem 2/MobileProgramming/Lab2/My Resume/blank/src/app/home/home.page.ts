import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonAvatar,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent ,IonCheckbox} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonAvatar, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonCheckbox],
})
export class HomePage {
  constructor() {}
}
