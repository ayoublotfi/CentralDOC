import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilialesService {

  baseUrl: string = 'http://localhost:8080';

  constructor(private httpClient : HttpClient) {}
  
  get_filiales(){
    return this.httpClient.get(this.baseUrl + '/filiales');
  }

}
