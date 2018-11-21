import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { annonceservice } from './../../app/service/annonce.service';
/**
 * Generated class for the RecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {

   annonce:any=[];
   listeannonce:any=[];
   Search:boolean=true;
   Detail:boolean=false;
   result:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private service : annonceservice) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }


  recherche()
  {
 this.service.recherche(this.annonce.gouvernorat,this.annonce.gouvernoratdest,this.annonce.depart,this.annonce.destination,this.annonce.datepublication).subscribe(annonce=>this.listeannonce=annonce);
this.Search=false;
console.log(this.listeannonce.length)
  }

  itemTapped(event, item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  Toogledetails()
  {
this.Detail=!this.Detail;
  }
}
