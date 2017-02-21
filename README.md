# baseIonic

This is a templete with some ommon codes for general aplications, this include general function of Firebase

## Prerequisites

* Ionic CLI Version: >2.2.1   
* Ionic App Lib Version: >2.2.0    
* Cordova CLI: >6.5.0  
* Node Version: >v7.3.0
* Create a proyect in [Firebase](https://firebase.google.com/)
* Create a app in [Facebook](https://developers.facebook.com/) developers
* Create a count in [Ionic Cloud](https://ionic.io/cloud)


## Instalation

1.  Clone repository
	``` bash
	$ git clone https://github.com/IWite/baseIonic.git
	```
2. Install dependencies
	``` bash
	$ npm install
	```
3. Add plugin of Facebook with the credentials of your app in Facebook developers
	```bash
	$ ionic plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
	``` 

4. Install platform
	``` bash
	$ ionic platform add android
	$ ionic platform add ios
	```

5. initialize the app in ionic cloud
	``` bash
	$ ionic io init
	```

## Configuration

1. go to `./src/app/environment.ts` and push your firebase data config of developer and/or productions
```typescript
const config_dev = {
	firebaseConfig: {
		apiKey: '',
		authDomain: '',
		databaseURL: '',
		storageBucket: '',
		messagingSenderId: ''
	}
}
```


generate doc 
npm run docs