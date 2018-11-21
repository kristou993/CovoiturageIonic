import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  @Input()
  Annonce: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing,private screenshot: Screenshot,public alertCtrl: AlertController) {
      this.Annonce = navParams.get('item');
      console.log(this.Annonce.user.id);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

    facebook()
  {


     this.screenshot.URI(80).then(res => {
           this.socialSharing.shareViaFacebook("",res.URI,"Multiservice.tn").then(res=>{
                 let alert = this.alertCtrl.create({
      title: 'succès!',
      subTitle: 'Screenshot creée',
      buttons: ['OK']
    });
    alert.present();

           })

  }).catch(err => {
       let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'error ',
      buttons: ['OK']
    });
    alert.present();
  });

  }

  Instagram()
  {

       this.screenshot.URI(80).then(res => {
           this.socialSharing.shareViaInstagram("",res.URI).then(res=>{
                 let alert = this.alertCtrl.create({
      title: 'succès!',
      subTitle: 'Screenshot creée',
      buttons: ['OK']
    });
    alert.present();

           })

  }).catch(err => {
       let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'error ',
      buttons: ['OK']
    });
    alert.present();
  });

  }

}
