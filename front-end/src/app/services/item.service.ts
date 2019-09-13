import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Library } from '../model/library.model';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = 'http://localhost:8080/api';

  
  
 
  constructor(private httpClient : HttpClient) {}
  
  get_libraries(){
    return this.httpClient.get(this.baseUrl + '/libraries/');
  }

  addLibrary (lib: Library): Observable<Library> {
     
    return this.httpClient.post<Library>(this.baseUrl+'/libraries',lib);
  }
  deleteLibrary(lib: Library){
    return this.httpClient.delete(this.baseUrl+'/libraries/'+lib.id_lib);
}

updateLibrary(lib : Library): Observable<Library>{
  
  return this.httpClient.put<Library>(this.baseUrl+'/libraries/'+lib.id_lib,lib);
  
}
}
