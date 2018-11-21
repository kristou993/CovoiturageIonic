import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { annonceservice } from './../../app/service/annonce.service';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the AjoutAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-annonce',
  templateUrl: 'ajout-annonce.html',
})
export class AjoutAnnoncePage {

  annonce:any=[];
  user:any=[];
  details:boolean=false;


  constructor(public navCtrl: NavController,private pipe : DatePipe, public navParams: NavParams,private service : annonceservice,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutAnnoncePage');
  }

  AjoutAnnonce()
  { 
    console.log(this.annonce.test);
      this.storage.get('session').then((val) => {
        
        
        this.user=val[0].id;
        console.log(this.user)
       
        console.log(this.annonce.datepublication);
       
     this.service.AjoutAnnonce({"description":this.annonce.description,"gouvernorat":this.annonce.gouvernorat,"type":this.annonce.type,"prix":this.annonce.prix,"adressedebut":this.annonce.depart,"adressedestination":this.annonce.destination,"gouvernoratdest":this.annonce.gouvernoratdest,"multiville":this.annonce.multiville,"fumeur":this.annonce.fumeur,"clim":this.annonce.clim,"bagage":this.annonce.bagage},this.user,this.annonce.datepublication).subscribe(annonceajout=>{
            this.navCtrl.setRoot(HomePage);

    console.log(annonceajout);
    });
    
  });


   
  }

  Toogledetails()
  {
this.details=!this.details;
  }
 

 


}
