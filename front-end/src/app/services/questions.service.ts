import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../model/library.model';
import { Questions } from '../model/questions.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl: string = 'http://localhost:8080/api';

  private log(questions: string) {
  }
  
 
  constructor(private httpClient : HttpClient) {}
  
  get_Questions(){
    return this.httpClient.get(this.baseUrl+"/questions");
  }

  addQuestion (qsti: Questions): Observable<Questions> {
     
    return this.httpClient.post<Questions>(this.baseUrl+"/questions",qsti);
  }
  deleteQuestion(qst: Questions){
    return this.httpClient.delete(this.baseUrl+'/questions/'+qst.id_qst);
}

updateQuestion(qst : Questions): Observable<Questions>{
  
  return this.httpClient.put<Questions>(this.baseUrl+'/'+qst.id_qst,qst);
  
}
}
