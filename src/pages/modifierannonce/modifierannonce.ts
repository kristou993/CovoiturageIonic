import { ProfilPage } from './../profil/profil';
import { MyannoncesPage } from './../myannonces/myannonces';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { annonceservice } from './../../app/service/annonce.service';

/**
 * Generated class for the ModifierannoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifierannonce',
  templateUrl: 'modifierannonce.html',
})
export class ModifierannoncePage {
  annonce:any;
  details:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private service : annonceservice,public alertCtrl: AlertController) {
          this.annonce = navParams.get('item');
          console.log(this.annonce);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierannoncePage');
  }
ModifierAnnonce()
{
  console.log(this.annonce.titre);
   this.service.modifierannonce({"titre":this.annonce.titre,"description":this.annonce.description,"gouvernorat":this.annonce.gouvernorat,"type":this.annonce.type,"prix":this.annonce.prix,"adressedebut":this.annonce.adressedebut,"adressedestination":this.annonce.adressedestination,"gouvernoratdest":this.annonce.gouvernoratdest,"multiville":this.annonce.multiville,"fumeur":this.annonce.fumeur,"clim":this.annonce.clim,"bagage":this.annonce.bagage},this.annonce.id,this.annonce.datepublication).subscribe(annoncemodifé=>{
     let alert = this.alertCtrl.create({
      title: 'Modification',
      subTitle: 'Modification effectué avec succès',
      buttons: ['OK']
    });
    alert.present();
              this.navCtrl.setRoot(ProfilPage);
    });

}

  Toogledetails()
  {
this.details=!this.details;
  }
}
