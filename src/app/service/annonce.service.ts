import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class annonceservice {



  constructor(private http:Http)  {
  
   }
  
  Annonce()
  {
   
  return this.http.get("http://localhost/Covoiturage/web/app_dev.php/api/annonceall").map(resp=>resp.json());

  }
 deleteAnnonce(idannonce)
  {
return this.http.delete("http://localhost/Covoiturage/web/app_dev.php/api/delete/"+idannonce);
  }
 GetAnnonceParGouvernorat(gouvernorat)
 {
     return this.http.get("http://localhost/Covoiturage/web/app_dev.php/api/annoncesearch/"+gouvernorat).map(resp=>resp.json());


 }
     AnnonceDemande()
  {
   
  return this.http.get("http://localhost/Covoiturage/web/app_dev.php/api/annoncedemande").map(resp=>resp.json());

  }

  AnnonceOffre()
  {
   
  return this.http.get("http://localhost/Covoiturage/web/app_dev.php/api/annonceoffre").map(resp=>resp.json());

  }
 AjoutAnnonce(annonce,iduser,date)
 {
    
    return this.http.post("http://localhost/Covoiturage/web/app_dev.php/api/annonces/"+iduser+"/"+date,annonce).map(resp=>resp.json());


 }

    Annonceuser(iduser)
  {
   
  return this.http.get("http://localhost/Covoiturage/web/app_dev.php/api/annonceuser/"+iduser).map(resp=>resp.json());

  }

  modifierannonce(annonce,iduser,date)
  {
        return this.http.put("http://localhost/Covoiturage/web/app_dev.php/api/modifierannonce/"+iduser+"/"+date,annonce,annonce).map(resp=>resp.json());

  }

  reclamation(reclamation,iduser)
  {
        return this.http.post("http://localhost/Covoiturage/web/app_dev.php/api/reclamation/"+iduser,reclamation).map(resp=>resp.json());

  }

  recherche(gouvernoratdep,gouvernoratdest,adrdep,adrdest,date)
  {
         return this.http.get("http://localhost/Covoiturage/web/app_dev.php/api/rechercheavance/"+gouvernoratdep+"/"+gouvernoratdest+"/"+adrdep+"/"+adrdest+"/"+date).map(resp=>resp.json());

  }

 

}
