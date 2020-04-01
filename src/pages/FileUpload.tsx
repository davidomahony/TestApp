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
  IonSlide,
  IonSlides,
  IonCardContent,
  IonCard,
  IonRow,
} from "@ionic/react";

import { removeCircle } from 'ionicons/icons'

import './fileUpload.css';

import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins

type State = {
    selectedPhotos: SelectedImage[]
}

type SelectedImage = {
  identifier: string,
  selectImagePath: string
}

export class FileUpload extends React.Component<{
  selectedImages: SelectedImage[],
   selectedImageRemove: (identifier: string, path: string ) => void
   selectedImagesUpdateAction: (identifier: string, path: string ) => void}, State>{
    constructor(props: any) {
      super(props);

      this.state = {
        selectedPhotos: this.props.selectedImages
      }
    }

  handleChange = (event: any) => {
      let test = URL.createObjectURL(event.target.files[0]);
      this.props.selectedImagesUpdateAction('0', test);
    }

  handlerRemoveImage = (identifier: string, image: string) =>{
    this.props.selectedImageRemove(identifier, image);
  }

  displaySelectedPhotos (files: SelectedImage []){
    let returnedImages = files.map(file => 
        <IonCard className="">
        <IonCardContent>
          <IonRow>
            <IonImg className="importedImages" src={file.selectImagePath}></IonImg>
            <button onClick={() => this.props.selectedImageRemove(file.identifier, file.selectImagePath)} className="hasIcon">
              <IonIcon icon={removeCircle} className="removeIcon"></IonIcon>
            </button>
          </IonRow>
        </IonCardContent>
      </IonCard>
    )
    return returnedImages
  }

  render() {
      return(
          <IonContent>
              {this.displaySelectedPhotos(this.props.selectedImages)}
            <div>
              <input type="file" onChange={this.handleChange}></input>
            </div>
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