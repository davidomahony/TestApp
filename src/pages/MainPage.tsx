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
  IonRow,
  IonIcon
} from "@ionic/react";
import { type } from 'os';
import SelectStyle from './SelectStyle';
import Home from './Home';
import FileUpload from './FileUpload';
import Finish from './Finish';

import { cartOutline, arrowBack } from 'ionicons/icons'

type SelectedImage = {
  identifier: string,
  selectImagePath: string
}

type State = {
    activePage: string,
    applicationPages: string[],
    selectedStyle: string,
    selectedImages: SelectedImage[],
    imageViewPorts: string // not too sure what type yet,
    numberOfImages: number
}

export class MainPage extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      activePage: "Home",
      applicationPages: ['Home', 'FileUpload', 'SelectStyle', 'Finish'],
      selectedStyle: 'StyleOne',
      selectedImages: [],
      imageViewPorts: 'dont no man',
      numberOfImages: 0
    }
}

SelectedStyleUpdate = (newStyle: string) => {
  this.setState({selectedStyle: newStyle})
}

ImagesSelectedUpdate(identifier: string, newImage: string){
  let count = this.state.numberOfImages;
  let newSelectedImages = this.state.selectedImages;
  count++;
  this.setState({numberOfImages: count})
  newSelectedImages.push({identifier: `${count}`, selectImagePath: newImage})
  this.setState({selectedImages: newSelectedImages})
}

RemoveSelectedImage(identifier: string, newImage: string){
  let newSelectedImages = this.state.selectedImages.filter(item => item.identifier !== identifier);
  this.setState({selectedImages: newSelectedImages})
}

ImageViewportUpdate(style: any)
{
    //this.setState({activePage: style})
}

Navigate(goForward: boolean): void {
  var index = this.state.applicationPages.indexOf(this.state.activePage);
  var pageToNavigateTo = goForward? index + 1 : index - 1
  let page = this.state.applicationPages[pageToNavigateTo]
  this.setState({activePage: page});
}

ActivePageContent(currentState: string) {
  if (this.state.activePage === 'Home'){
    return <Home></Home>
  }
  else if (this.state.activePage === 'FileUpload') {
    var functionForImageUpdated = this.ImagesSelectedUpdate.bind(this)
    var functionForImageRemove = this.RemoveSelectedImage.bind(this)
    return <FileUpload selectedImages={this.state.selectedImages} selectedImageRemove={functionForImageRemove} selectedImagesUpdateAction={functionForImageUpdated}></FileUpload> 
  }
  else if (this.state.activePage === 'SelectStyle') {
    return <SelectStyle selectedImages={this.state.selectedImages}></SelectStyle>
  }
  else if (this.state.activePage === 'Finish') {
    return <Finish></Finish>
  }
}

 render() {
    return(
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonRow>
              <IonButton onClick={() => this.Navigate(false)}>
                <IonIcon className="backArrow" src={arrowBack}></IonIcon>
              </IonButton>
              <IonTitle> {this.state.activePage}</IonTitle>
              <IonTitle> {this.state.selectedImages.length}</IonTitle>
              <IonIcon src={cartOutline} className="cart"/>
            </IonRow>
          </IonToolbar>
        </IonHeader>
      <IonContent>
        {
          this.ActivePageContent(this.state.activePage)
        }
      </IonContent>
      <IonFooter>
        <IonButton expand="block" onClick={() => this.Navigate(true)}> Continue </IonButton>
      </IonFooter>
    </IonPage>
    )
 }
}

export default MainPage;
