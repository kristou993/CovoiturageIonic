import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class loginservice {



  constructor(private http:Http)  {
  
   }
  
 Login(user)
 {
    
    return this.http.post("http://localhost/Covoiturage/web/app_dev.php/api/login",user).map(resp=>resp.json());


 }
  register(user)

  {
        return this.http.post("http://localhost/Covoiturage/web/app_dev.php/api/register",user).map(resp=>resp.json());

  }


 

}
