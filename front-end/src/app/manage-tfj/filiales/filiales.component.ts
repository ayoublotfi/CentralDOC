import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { Filiale } from 'src/app/model/filiale.model';
import { FilialesService } from '../../services/filiales.service';

@Component({
  selector: 'app-filiales',
  templateUrl: './filiales.component.html',
  styleUrls: ['./filiales.component.scss']
})
export class FilialesComponent {
  
  constructor(public snackBar: MatSnackBar,private filialesService:FilialesService){}

  loading = true;
  dataSource = new MatTableDataSource<Filiale>();
  displayedColumns = [ 'name', 'typeDb'];
  selected: Filiale ;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.filialesService.get_filiales().subscribe((d: Filiale[])=>{
        this.dataSource.data = d;
        this.selected=d[0];
      });
    }, 500);
  }

  onClick(name: string){
    this.selected = this.dataSource.data.filter(function(el){ return el.name === name;})[0];
    console.log(this.selected);
  }
}
