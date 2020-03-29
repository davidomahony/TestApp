import React, { useState, FormEvent } from 'react';

import StyleOne from "./../StyleOne.jpg";
import StyleTwo from "./../StyleTwo.jpg";
import StyleThree from "./../StyleThree.jpg";

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
  IonText,
  IonRow
} from "@ionic/react";
import { type } from 'os';
import SelectStyle from './SelectStyle';
import Home from './Home';
import FileUpload from './FileUpload';
import Finish from './Finish';

type State = {
    activePage: string,
    applicationPages: string[]
}

export class MainPage extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      activePage: "Home",
      applicationPages: ['Home', 'PhotoPicker', 'SelectStyle', 'Finish']
    }
}


UpdateActiveStyle(style: any)
{
    this.setState({activePage: style})
}

Navigate(goForward: boolean): void {
  var index = this.state.applicationPages.indexOf(this.state.activePage);
  var pageToNavigateTo = goForward? index + 1 : index - 1
  let page = this.state.applicationPages[pageToNavigateTo]
  this.setState({activePage: page});
}

 render() {
    return(
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
          <IonButton onClick={() => this.Navigate(false)}> Back </IonButton>
          <IonTitle> {this.state.activePage}</IonTitle>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonFooter>
        <IonButton expand="block" onClick={() => this.Navigate(true)}> Continue </IonButton>
      </IonFooter>
      <IonContent>
        {
          this.state.activePage === 'Home' ?
          <Home></Home> : this.state.activePage === 'PhotoPicker' ?
           <FileUpload></FileUpload> : this.state.activePage === 'SelectStyle' ?
           <SelectStyle availableStyle={['StyleOne', 'StyleTwo', 'StyleThree']}></SelectStyle> : this.state.activePage === 'Finish' ? 
           <Finish></Finish> : "No page man"
        }
      </IonContent>
    </IonPage>
    )
 }
}

export default MainPage;
