import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the DeconnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deconnexion',
  templateUrl: 'deconnexion.html',
})
export class DeconnexionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
this.navCtrl.setRoot(LoginPage);
this.storage.clear();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeconnexionPage');
  }

}
