import { RecherchePage } from './../pages/recherche/recherche';
import { DeconnexionPage } from './../pages/deconnexion/deconnexion';
import { RegisterPage } from './../pages/register/register';
import { ReclamationPage } from './../pages/reclamation/reclamation';
import { ProfilPage } from './../pages/profil/profil';
import { MyannoncesPage } from './../pages/myannonces/myannonces';
import { loginservice } from './service/login.service';
import { DetailsPage } from './../pages/details/details';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { annonceservice} from'./service/annonce.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { LoginPage } from '../pages/login/login';
import { AjoutAnnoncePage } from '../pages/Ajout-annonce/Ajout-annonce';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';
import { ModifierannoncePage } from './../pages/modifierannonce/modifierannonce';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    LoginPage,
    AjoutAnnoncePage,
    MyannoncesPage,
    ModifierannoncePage,
    ProfilPage,
    ReclamationPage,
    RegisterPage,
    DeconnexionPage,
    RecherchePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    GooglePlacesAutocompleteComponentModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    LoginPage,
    AjoutAnnoncePage,
    MyannoncesPage,
    ModifierannoncePage,
    ProfilPage,
    ReclamationPage,
    RegisterPage,
    DeconnexionPage,
    RecherchePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    annonceservice,
    SocialSharing,
    Screenshot,
    loginservice,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
