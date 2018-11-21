import { RegisterPage } from './../register/register';
import { MyannoncesPage } from './../myannonces/myannonces';
import { AjoutAnnoncePage } from './../Ajout-annonce/Ajout-annonce';
import { HomePage } from './../home/home';
import { loginservice } from './../../app/service/login.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   
  user:any=[];
  session:any=[];
  

  constructor(public navCtrl: NavController,private storage: Storage, public navParams: NavParams,private service : loginservice,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logForm()
  {
   
    this.service.Login({"username":this.user.username,"password":this.user.password}).subscribe(loggeduser=>{
     if (loggeduser.username=="") 
      {
        let alert = this.alertCtrl.create({
      title: 'Authentifcation a échoué',
      subTitle: 'Veuillez vérifier vos paramètres ',
      buttons: ['OK']
    });
    alert.present();
       
      }
      else
        {
              

         
          this.storage.set('session',loggeduser);
          this.navCtrl.setRoot(HomePage);
          
        }

    });
    
  }

  register()
  {
    this.navCtrl.push(RegisterPage);
  }

}
