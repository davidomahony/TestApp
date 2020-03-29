import React, { useState, FormEvent } from 'react';
import './Page.css';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonCard,
  IonFooter,
  IonPage,
  IonCardContent,
  IonMenuButton,
  IonSlide,
  IonSlides,
  IonText
} from "@ionic/react";

import './Page.css';

type State = {

}

export class Home extends React.Component<{}, State> {
    constructor(props: any) {
      super(props);
  
      this.state = {

      }
  }
  render() {
      return(
          <IonContent>
              <h2> Home </h2>
          </IonContent>
      );
  }
}


export default Home;