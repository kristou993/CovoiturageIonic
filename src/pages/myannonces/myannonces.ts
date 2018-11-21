import { ModifierannoncePage } from './../modifierannonce/modifierannonce';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { annonceservice } from './../../app/service/annonce.service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MyannoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myannonces',
  templateUrl: 'myannonces.html',
})
export class MyannoncesPage {

 Annonces:any[];
  user:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service : annonceservice,private storage: Storage) {
      this.storage.get('session').then((val) => {
        
        
        this.user=val[0].id;
        console.log("user session numéro "+this.user)
       this.service.Annonceuser(val[0].id).subscribe(annoce=>this.Annonces=annoce);
       

   
    });
     
    


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyannoncesPage');
  }

  Supprimer(a)
  {
     this.service.deleteAnnonce(a.id).subscribe(resp=>{

    let index = this.Annonces.indexOf(a);
    this.Annonces.splice(index,1);
  })
  }
 
  modifier(item) {
    this.navCtrl.push(ModifierannoncePage, {
      item: item
    });
  }

}
