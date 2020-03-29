import { IonButtons, IonFooter, IonButton, IonContent, IonHeader, IonMenuButton, IonRow, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonGrid, IonSlides, IonSlide, IonCard, IonCardContent, IonText } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { list } from 'ionicons/icons';


const Page: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {

  const styleNames = ["One", "Two", "Three"];
  let activeStyle = "One";

  const StyleButtonClick = async () => {
    activeStyle = "Two";    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{match.params.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonFooter>
        <IonButton expand="block"> Continue </IonButton>
      </IonFooter>
      <IonContent>
        <IonSlides>
          {styleNames.map(style => <IonSlide>
            <button color="red" onClick={StyleButtonClick}>
              <IonCard>
                <IonCardContent>
                  {style}
                </IonCardContent>
              </IonCard>
            </button>
          </IonSlide>)}
        </IonSlides>
          <IonText color="red"> {"Active style ->" + activeStyle } </IonText>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ match.params.name }</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Test" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Page;
