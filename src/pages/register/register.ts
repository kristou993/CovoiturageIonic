import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { loginservice } from './../../app/service/login.service';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    user:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service : loginservice,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Register()
  {
    
    this.service.register({"username":this.user.username,"password":this.user.password,"telephone":this.user.telephone,"gouvernorat":this.user.gouvernorat,"email":this.user.email}).subscribe(user=>
    {
         let alert = this.alertCtrl.create({
      title: 'Inscription',
      subTitle: 'Compte Crée ',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(LoginPage)

    })

  }
}
