import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { annonceservice } from './../../app/service/annonce.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Annonces:any[];


  constructor(public navCtrl: NavController,private service : annonceservice,private storage: Storage) {
         this.service.Annonce().subscribe(annonce=>this.Annonces=annonce);
    

       

  }
 getItems(ev: any) {
   
    const val = ev.target.value;
    if (val && val.trim() != '')
      {
 this.service.GetAnnonceParGouvernorat(val).subscribe(annonce=>this.Annonces=annonce);
      }
     else
          {
            
            this.service.Annonce().subscribe(annonce=>this.Annonces=annonce);
          }
  }

   itemTapped(event, item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  filtreOffres()
  {
             this.service.AnnonceOffre().subscribe(annonce=>this.Annonces=annonce);

  }

  filtreDemandes()
  {
                     this.service.AnnonceDemande().subscribe(annonce=>this.Annonces=annonce);

  }
       
 

}
