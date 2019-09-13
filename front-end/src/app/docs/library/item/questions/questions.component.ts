import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { Questions } from 'src/app/model/questions.model';
import { Reponse } from 'src/app/model/reponse.model';
import { QuestionService } from 'src/app/services/questions.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input() items: Array<Item>;
  showComment: boolean = false;
  public question: Array<Questions>;
  public reponse: Array<Reponse>;
  rep1;
  rep: Reponse = {
    "id_rep": null,
    "text": null,
    "file": null,
    "user": "admin",
    "qst": null
  };
  constructor(private qstService: QuestionService, private reponseService: ReponseService) { }

  ngOnInit() {

    this.qstService.get_Questions().subscribe((data: Questions[]) => {
      this.question = data
      console.log(data);

    });
   this.reponseService.get_Reponse().subscribe((d: Reponse[]) => { this.reponse = d });
  }

  onShowComments(qst1: Questions) {

    console.log("test onShowComments");
    console.log(this.reponse);
    console.log("id question : "+qst1.id_qst);

    
    //for (let i = 0; i < Object.keys(this.reponse).length; i++) {
      
      //console.log("test for");
      //let t = this.reponse[i].qst.split("question/");
      //console.log("split "+t[1]);
      //if(qst1 == Number(this.reponse[i].qst)){
      //console.log("test reponse : "+i);
      //}
    //}
    this.showComment = true;
  }

  recup_id(id: number) {
    this.rep.qst = "http://localhost:8080/api/questions/" + id;
    console.log("id is : " + id)
  }

  deletedst(qst : Questions){

this.qstService.deleteQuestion(qst).subscribe();
    
    window.location.reload();

}
  add_rep() {

    this.rep.text = this.rep1;
    console.log(this.rep);
    this.reponseService.addReponse(this.rep).subscribe();
    console.log(this.rep);
  

  }
}