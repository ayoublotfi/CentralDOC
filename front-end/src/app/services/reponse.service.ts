import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reponse } from '../model/reponse.model';


@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  baseUrl: string = 'http://localhost:8080/api';

  private log(reponse: string) {
  }
  
 
  constructor(private httpClient : HttpClient) {}
  
  get_Reponse(){
    return this.httpClient.get(this.baseUrl+"/reponses");
  }

  addReponse (rep: Reponse): Observable<Reponse> {
     
    return this.httpClient.post<Reponse>(this.baseUrl+"/reponses",rep);
  }
  deleteReponse(rep: Reponse){
    return this.httpClient.delete(this.baseUrl+'/'+rep.id_rep);
}

updateReponse(rep : Reponse): Observable<Reponse>{
  
  return this.httpClient.put<Reponse>(this.baseUrl+'/'+rep.id_rep,rep);
  
}
}
