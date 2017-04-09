# BaseIonic

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
	$ ionic plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication" --save
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
1. Set the config variables of firebase in `env/dev.json` and `env/prod.json` (Don't change the key `firebase_config`)
```json
{
  "firebase_config": {
    "apiKey": "",
    "authDomain": "",
    "databaseURL": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": ""
  }
}
```

## Environments
This project have two json where is possible to add variables to use in production or development environment.

To use diferents environtmens use `--prod` for production and not put nothing for development
``` bash
$ ionic serve
$ ionic serve --prod
```

Add `ENV.data` varible in your component to use the environmet variable
```typescript

...
declare const ENV;
...

constructor() {
    console.log(ENV.data)
}
```

## Unit Test
Now is possible to run unit test in ionic 2
```
$ npm test
```
All dependencies to create and run unit test were installed, you only need to create de unit test file:

[Create unit test](https://www.joshmorony.com/how-to-unit-test-an-ionic-2-application/)


## Documentation
For generate a file with web page documentation run:
```
$ npm run docs
```