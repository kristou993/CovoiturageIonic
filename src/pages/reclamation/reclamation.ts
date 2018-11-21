import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { annonceservice } from './../../app/service/annonce.service';
import { Storage } from '@ionic/storage';
import { HomePage } from './../home/home';

/**
 * Generated class for the ReclamationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reclamation',
  templateUrl: 'reclamation.html',
})
export class ReclamationPage {

  annonce:any=[];
  user:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service : annonceservice,private storage: Storage) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReclamationPage');
  }

    AjoutReclamation()
  { 
      this.storage.get('session').then((val) => {
        
        
        this.user=val[0].id;
        console.log(this.user)
       
     this.service.reclamation({"titre":this.annonce.titre,"description":this.annonce.description,"gouvernorat":this.annonce.gouvernorat},this.user).subscribe(annonceajout=>{
              this.navCtrl.setRoot(HomePage);

    console.log(annonceajout);
    });
    
  });

}
}
