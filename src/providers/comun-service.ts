// -----------------------------------------------------------------
// Componentes
// -----------------------------------------------------------------
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { LoadingController, Loading } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import 'rxjs/add/operator/map';
// -----------------------------------------------------------------
// Plug-in
// -----------------------------------------------------------------
import { Camera } from 'ionic-native';



@Injectable()
export class ComunService {
    // -----------------------------------------------------------------
    // Atributos
    // -----------------------------------------------------------------


    // -----------------------------------------------------------------
    // Constructor
    // -----------------------------------------------------------------
    constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController) { }

    // -----------------------------------------------------------------
    // Metodos
    // -----------------------------------------------------------------


    /**
    * show a native menssage in Ionic 
    * @param {string} title
    * @param {string} msg
    * @memberOf UnregisteredPage
    */
    showAlert(title: string, msg: string) {
        let alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: ["Aceptar"]
        })
        alert.present()
    }


	/**
	 * Show a native loading popup in ionic 
	 * @param {string} msg
	 * @returns {Loading} isntancia de la ventana de cargando
	 * @memberOf ComunService
	 */
    showLoad(msg: string): Loading {
        let loader = this.loadingCtrl.create({
            content: msg,
        });
        return loader
    }

    /**
     * Take a picture and return base 64 image
     * @returns {Promise<any>}
     * @memberOf UserBack
     */
    takePhoto(): Promise<any> {
        return new Promise((resul, err) => {
            let cameraOptions = {
                sourceType: Camera.PictureSourceType.CAMERA,
                destinationType: Camera.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 1000,
                targetHeight: 1000,
                encodingType: Camera.EncodingType.JPEG,
                correctOrientation: true
            }
            Camera.getPicture(cameraOptions).then((imageData) => {
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                resul(base64Image)
            }, (error) => {
                err(error)
            });
        })
    }

    /**
     * Covert a imga 64 to a blob
     * @param {string} dataURI string of img 64
     * @returns {Blob}
     * @memberOf ComunService
     */
    dataURItoBlob(dataURI: string): Blob {
        var arr = dataURI.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }


    /**
     * Get image from camara or galery
     * @returns {Promise<any>} 
     * @memberOf ComunService
     */
    getImageCamaraOrGalery():Promise<any> {
        return new Promise((data,err) => {
            let actionSheet = this.actionSheetCtrl.create({
                title: '¿Desde dónde deseas agregar la foto?',
                buttons: [
                    {
                        text: 'Cámara',
                        handler: () => {
                            this.takePhoto().then(dat => data(dat)).catch(error => err(err))
                        }
                    }, {
                        text: 'Galería',
                        handler: () => {
                            this.goToGaleria().then(dat => data(dat)).catch(error => err(err))
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            err('Cancel')
                        }
                    }
                ]
            });
            actionSheet.present();
        })

    }
    
    /**
     * Get imgae from galery
     * @returns {Promise<any>}
     * @memberOf ComunService
     */
    goToGaleria(): Promise<any> {
        return new Promise((data,error) => {
            let cameraOptions = {
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: Camera.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 1000,
                targetHeight: 1000,
                encodingType: Camera.EncodingType.JPEG,
                correctOrientation: true
            }
            Camera.getPicture(cameraOptions).then((imageData) => {
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                data(base64Image)
            }, (err) => { 
                error(err)
            });
        })

    }
}
