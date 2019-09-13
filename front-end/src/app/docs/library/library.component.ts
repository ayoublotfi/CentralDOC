import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Library } from 'src/app/model/library.model';
import { ItemService } from 'src/app/services/item.service';
import { QuestionService } from 'src/app/services/questions.service';
import { Questions } from 'src/app/model/questions.model';

export interface DialogData {
  name: string;
}



@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  /* public libraries = ['Informix', 'Oracle', 'Amplitude', 'Genero','Linux','TFJ','Angular','ReactJs','All']; */
  public libraries : Array<Library>;
  public qst : Array<Questions>;
  public qst1 : Array<Questions>;

  selectedLibrary:string ='All';
  name: string ="";
  editlib;
  libr: Library;
  
 
  constructor(public dialog: MatDialog,private questionService:QuestionService,private snackBar: MatSnackBar,private itemService: ItemService,private router: Router) { }

  ngOnInit() {
    this.itemService.get_libraries().subscribe((d: Library[])=>{
      this.libraries = d;
      console.log(d);
    });
    
  }

  onChoose(lib:Library): void {
    //this.router.navigateByUrl("");
    this.selectedLibrary = lib.name;
   // this.itemService.get_libraries().subscribe((d: Library[])=>{
     // this.libraries = d;
    //});
    this.questionService.get_Questions().subscribe((data:Questions[])=>{
      this.qst=data;
    
    });
     let loop =Object.keys(this.qst);
     
     for(let i of loop){
       console.log("id is : "+this.qst[i].id_lib);
      if(lib.id_lib == this.qst[i].id_lib)
      {
        console.log("1");
        this.qst1.push(this.qst[i]);
      } 
     }
    console.log("on choose");

    console.log(this.qst1);

  }

  openDialog(): void {
    //create dialog config
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="350px";
    dialogConfig.data= {name: this.name};
    //open dialog
    const dialogRef = this.dialog.open(DialogAddLibrary, dialogConfig);
    //after close dialog
    dialogRef.afterClosed().subscribe(result => this.addToLibraries(result));
  }
 

  updatelib(lib:Library):void{

    lib=this.libr;
    lib.name=this.editlib;
      this.itemService.updateLibrary(lib).subscribe();     
      console.log(lib);
      //window.location.reload();
    }
  addToLibraries(name: string):void {
    if(name.length ==0)
      this.snackBar.open('Error : Name of library cannot be empty', 'Got it', { duration: 3000 });
    else{
      let lib = new Library();
      lib.name=name;
      this.itemService.addLibrary(lib)
      .subscribe(lib => {
        this.libraries.push(lib);
      });     
      window.location.reload();
      this.snackBar.open('Library ' + name + ' Added successfuly', 'Got it', { duration: 3000 });
    }
  }
  deletelib(lib : Library){
    this.itemService.deleteLibrary(lib).subscribe();
    window.location.reload();

    console.log(lib);
}
aff(lib:Library)
{
   this.libr=lib;
   this.name = lib.name;
  
}
}

@Component({
  selector: 'dialog-add-library',
  templateUrl: 'dialog-add-library.html'
})
export class DialogAddLibrary {

  constructor(public dialogRef: MatDialogRef<DialogAddLibrary>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAdd(name: string){
    console.log(name);
    this.dialogRef.close(name);
  }
}

