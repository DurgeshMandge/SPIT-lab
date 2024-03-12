import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { calendar, disc, home, paperPlane, people } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";
import Tab5 from "./pages/Tab5";

const TabItems: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonTabs >
            <IonRouterOutlet>
                <Route exact path="/tab1">
                    <Tab1 />
                </Route>
                <Route exact path="/tab2">
                    <Tab2 />
                </Route>
                <Route path="/tab3">
                    <Tab3 />
                </Route>
                <Route path="/tab4">
                    <Tab4 />
                </Route>
                <Route path="/tab5">
                    <Tab5 />
                </Route>
                <Route exact path="/">
                    <Redirect to="/tab1" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                    <IonIcon aria-hidden="true" icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon aria-hidden="true" icon={people} />
                    <IonLabel>Faculties</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon aria-hidden="true" icon={disc} />
                    <IonLabel>Goals and Vision</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/tab4">
                    <IonIcon aria-hidden="true" icon={calendar} />
                    <IonLabel>Upcoming Events</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab5" href="/tab5">
                    <IonIcon aria-hidden="true" icon={paperPlane} />
                    <IonLabel>FeedBack Form</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
    </IonApp>
);

export default TabItems;