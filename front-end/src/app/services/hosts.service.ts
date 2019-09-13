import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HostsService {

  baseUrl: string = 'http://localhost:8080';

  constructor(private httpClient : HttpClient) {}
  
  get_hosts(name: string){
    return this.httpClient.get(this.baseUrl + '/filiales/'+name);
  }

}
