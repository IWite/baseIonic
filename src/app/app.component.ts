// -----------------------------------------------------------------
// Components
// -----------------------------------------------------------------
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
// -----------------------------------------------------------------
// Pages
// -----------------------------------------------------------------
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
// -----------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------
import * as firebase from 'firebase';

declare const ENV;



@Component({
	templateUrl: 'app.html'
})
export class MyApp {

	// -----------------------------------------------------------------
	// Atributos
	// -----------------------------------------------------------------

	@ViewChild(Nav) nav: Nav;

	rootPage: any = Page1;

	pages: Array<{ title: string, component: any }>;

	// -----------------------------------------------------------------
	// Atributos
	// -----------------------------------------------------------------
	constructor(public platform: Platform) {
		this.initializeApp();
		// inicializa el servicio de firebase
		firebase.initializeApp(ENV.data.firebase_config)
		// Estructura para navegar entre páginas
		this.pages = [
			{ title: 'Page One', component: Page1 },
			{ title: 'Page Two', component: Page2 }
		];
	}

	// -----------------------------------------------------------------
	// Metodos
	// -----------------------------------------------------------------

	/**
	 * Function that generate logic where device is ready
	 * @memberOf MyApp
	 */
	initializeApp() {
		this.platform.ready().then(() => {
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	/**
	 * Open a page of navigate
	 * @param {any} page
	 * @memberOf MyApp
	 */
	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

	/**
	 * Check state of user 
	 * @memberOf MyApp
	 */
	userSatate() {
		firebase.auth().onAuthStateChanged(((user: firebase.User) => {
			if(user){
				// User logIn
			}
			else{
				// User logOut
			}
		}))
	}
}
