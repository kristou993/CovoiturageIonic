import { RecherchePage } from './../pages/recherche/recherche';
import { DeconnexionPage } from './../pages/deconnexion/deconnexion';
import { ReclamationPage } from './../pages/reclamation/reclamation';
import { ProfilPage } from './../pages/profil/profil';
import { ModifierannoncePage } from './../pages/modifierannonce/modifierannonce';
import { MyannoncesPage } from './../pages/myannonces/myannonces';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AjoutAnnoncePage } from '../pages/Ajout-annonce/Ajout-annonce';








@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any,icon:string}>;
 

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Accueil', component: HomePage,icon:'home'},
      {title:'Chercher un covoiturage ',component:RecherchePage,icon:'search'},
      {title:'Nouveau covoiturage',component:AjoutAnnoncePage,icon:'create'},
      {title:'Nouvelle réclamation ',component:ReclamationPage,icon:'create'},
      {title:'Informations ',component:ProfilPage,icon:'person'},
      {title:'Déconnexion ',component:DeconnexionPage,icon:'trending-down'}
      
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
