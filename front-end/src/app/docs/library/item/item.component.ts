import { Component, OnInit, OnChanges, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { QuestionService } from 'src/app/services/questions.service';
import { Questions } from 'src/app/model/questions.model';
import { Library } from 'src/app/model/library.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() name: string;
  items: Array<Item> = this.getItems();
  qst: Questions;
  qurr: Questions;
  quest;
  desc;
  search;
  lib = Library;
  q: Questions ={
    "id_qst":null,
    "description":null,
    "lib":null,
    "nbrReponse":null,
    "nomUser":null,
    "qst":null
  };
  
  
  constructor(public dialog: MatDialog, private questionService: QuestionService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.name === 'All') {
      this.items = this.getItems();
    } else {
      this.items = this.getItems().filter(item => item.library === this.name);
    }
    console.log("changes");
  }
  add(){
   
    this.q.qst=this.quest;
    this.q.description = this.desc;
    this.q.nomUser ="admin";
    this.q.nbrReponse=2;
    
    //console.log("test " +this.q);
    this.questionService.addQuestion(this.q).subscribe();
    console.log(this.qst);
    window.location.reload();
  }
  searchqst(){
    
    console.log(this.qst);
    console.log(this.search);

    if(this.search in document.createElement(this.qst.qst))
      {
        console.log("yeeees");
      }

  }

  showModal(name: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "750px";
    dialogConfig.data = { id: 1, qst: '', dedescription: '', library: this.name };
    const dialogRef = this.dialog.open(DialogAddItem, dialogConfig);
    console.log(name);
    dialogRef.afterClosed().subscribe(result => result.qst ? this.pushIt(result) : this.name = this.name);
  }

  pushIt(item: Item): void {
    item.date = this.getDateNow();
    item.user = "admin";
    item.library = this.name;
    item.nbrComments = 0;
    item.nbrVoteOK = 0;
    item.nbrVoteKO = 0;
    this.items.push(item);
    console.log(item);
  }

  getDateNow(): string {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    let date = dd + '/' + mm + '/' + yyyy;
    return date;
  }

  getItems(): Array<Item> {
    let items: Array<Item> = [
      { id: 1, text: 'How can i import informix db ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Informix' }
      , { id: 1, text: 'How can i export an informix db ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Informix' }
      , { id: 1, text: 'How can i reset informix db ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Informix' }
      , { id: 1, text: 'How can i add a chunk to some dbspace in informix db ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Informix' }
      , { id: 1, text: 'How can i add a dbspace in informix ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Informix' }
      , { id: 2, text: 'How can i associate a chunk i associate a chunk with a dbspace ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Oracle' }
      , { id: 2, text: 'How can i associate a chunk i associate a chunk with a dbspace ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Oracle' }
      , { id: 2, text: 'How can i associate a chunk i associate a chunk with a dbspace ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Oracle' }
      , { id: 2, text: 'How can i associate a chunk i associate a chunk with a dbspace ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Oracle' }
      , { id: 2, text: 'How can i associate a chunk i associate a chunk with a dbspace ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Oracle' }
      , { id: 3, text: 'How can i delete a chunk Informix ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Amplitude' }
      , { id: 4, text: 'How can i configure amplitude ?', desc: '', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'Amplitude' }
      , { id: 5, text: 'How can i solve this error ?', desc: 'Error -4398', nbrVoteOK: 4, nbrVoteKO: 2, nbrComments: 3, status, date: Date.now().toString(), user: 'Hamza', library: 'All' }
    ];
    return items;
  }
}

@Component({
  selector: 'dialog-add-item',
  templateUrl: 'dialog-add-item.html'
})
export class DialogAddItem {

  constructor(
    public dialogRef: MatDialogRef<DialogAddItem>,
    @Inject(MAT_DIALOG_DATA) public data: Questions, private questionService: QuestionService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAdd(qst: Questions): void {

    this.questionService.addQuestion(qst);
    console.log("test " + qst);
    this.dialogRef.close();
  }
}

