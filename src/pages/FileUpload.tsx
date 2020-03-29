import React, { useState, FormEvent } from 'react';
import './Page.css';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonFabButton,
  IonFab,
  IonButton,
  IonIcon,
  IonContent,
} from "@ionic/react";

import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import './Page.css';

import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins

const State = {
    photo: '',
    selectedPhotos: ['','']
}



export class FileUpload extends React.Component{
    state: any = {};
    props: any = {};
    constructor(props: any) {
      super(props);
      this.state = { ...State };
      //defineCustomElements(window)
    }

  openScanner () {
    const data = BarcodeScanner.scan();
    console.log(`Barcode data recieved`);
    };

  async takePicture() {
    const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri
    });
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.setState({
    photo: imageUrl
    })
    }

  render() {
      return(
          <IonContent>
            <h2> FileUpload </h2>
            <IonImg style={{ 'border': '1px solid black', 'minHeight': '100px' }} src={this.state.photo} ></IonImg>
            <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
                <IonButton onClick={() => this.openScanner()}>Scan barcode</IonButton>
            </IonFab>
          </IonContent>
      );
  }
}


export default FileUpload;


// import React, { useState, FormEvent } from 'react';
// import './Page.css';
// import {
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonImg,
//   IonFabButton,
//   IonFab,
//   IonButton,
//   IonIcon,
//   IonContent,
// } from "@ionic/react";

// import { defineCustomElements } from '@ionic/pwa-elements/loader';

// import './Page.css';

// import { Plugins, CameraResultType } from '@capacitor/core';
// const { Camera } = Plugins

// const State = {
//     photo: '',
//     selectedPhotos: ['','']
// }

// export class FileUpload extends React.Component{
//     state: any = {};
//     props: any = {};
//     constructor(props: any) {
//       super(props);
//       this.state = { ...State };
//       defineCustomElements(window)
//     }

//   async takePicture() {
//     const image = await Camera.getPhoto({
//     quality: 90,
//     allowEditing: false,
//     resultType: CameraResultType.Uri
//     });
//     var imageUrl = image.webPath;
//     // Can be set to the src of an image now
//     this.setState({
//     photo: imageUrl
//     })
//     }

//   render() {
//       return(
//           <IonContent>
//             <h2> FileUpload </h2>
//             <IonImg style={{ 'border': '1px solid black', 'minHeight': '100px' }} src={this.state.photo} ></IonImg>
//             <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
//                 <IonFabButton color="primary" onClick={() => this.takePicture()}>
//                 <IonIcon name="add" />
//                 </IonFabButton>
//             </IonFab>
//           </IonContent>
//       );
//   }
// }


// export default FileUpload;