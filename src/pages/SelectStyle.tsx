import React, { useState, FormEvent } from 'react';
import './Page.css';
import {
  IonContent,
  IonCard,
  IonImg,
  IonCardContent,
  IonSlide,
  IonSlides,
  IonText
} from "@ionic/react";

import './Page.css';

import StyleOne from "./../Photos/boldIcon.svg";
import StyleTwo from "./../Photos/cleanIcon.svg";
import StyleThree from "./../Photos/everIcon.svg";

type SelectedImage = {
  identifier: string,
  selectImagePath: string
}

type State = {
    activeStyle: string,
    selectedPhotos: SelectedImage[]
}

export class SelectStyle extends React.Component<{selectedImages: SelectedImage[]}, State>{
    constructor(props: any) {
      super(props);
  
      this.state = {
        activeStyle: 'StyleOne',
        selectedPhotos: this.props.selectedImages
      }
  }

  UpdateActiveStyle(style: any): void {
    this.setState({activeStyle: style});
}

SelectedStylePicker (style: string){
  if (style === "StyleOne"){
    return StyleOne;
  }
  else if (style === "StyleTwo"){
    return StyleTwo;
  }
  else if (style === "StyleThree"){
    return StyleThree;
  }
}

  styleNames = ['StyleOne', 'StyleTwo', 'StyleThree']; 

  createPreviewForSelectedPhotos (photos: SelectedImage[]){
    let previews = photos.map(photo => 
    <IonCard className="borderImage">
      <IonCardContent>
      <div className="div">
        <img src={this.SelectedStylePicker(this.state.activeStyle)} className="first"/>
        <IonImg  src={photo.selectImagePath} className="second" ></IonImg>
      </div>
      </IonCardContent>
    </IonCard>
    )
    return previews
  }

  render() {
      return(
        <IonContent>
          <IonSlides class="sliderCard">
        {this.styleNames.map(style => <IonSlide className="SliderCard">
          <button color="red" onClick={() => this.UpdateActiveStyle(style)}>
            <IonCard>
              <IonCardContent>
                <img className="SliderCardImage" src={style === "StyleOne" ? 
                StyleOne : style === "StyleTwo" ?
                StyleTwo : StyleThree} alt="" ></img>
              </IonCardContent>
            </IonCard>
          </button>
        </IonSlide>)}
      </IonSlides>
      <IonText color="secondary">
          <h1 className="StyleText">{this.state.activeStyle}</h1>
      </IonText> 
        {this.createPreviewForSelectedPhotos(this.props.selectedImages)}
      </IonContent>
      );
  }
}


export default SelectStyle;