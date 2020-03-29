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

import StyleOne from "./../StyleOne.jpg";
import StyleTwo from "./../StyleTwo.jpg";
import StyleThree from "./../StyleThree.jpg";

type State = {
    activeStyle: 'StyleOne',
    availableStyle: []
}

export class SelectStyle extends React.Component<{availableStyle: any}, State> {
    constructor(props: any) {
      super(props);
  
      this.state = {
        activeStyle: 'StyleOne',
        availableStyle: this.props.availableStyle
      }
  }

  UpdateActiveStyle(style: any): void {
    this.setState({activeStyle: style});
}

  styleNames = ['StyleOne', 'StyleTwo', 'StyleThree']; 
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
        <img src={this.state.activeStyle === "StyleOne" ? 
                StyleOne : this.state.activeStyle === "StyleTwo" ?
                StyleTwo : StyleThree} alt="" ></img>
          </IonContent>
      );
  }
}


export default SelectStyle;