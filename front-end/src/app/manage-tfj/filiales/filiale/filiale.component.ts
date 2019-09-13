import { Component, OnInit,OnChanges ,Input } from '@angular/core';
import { Filiale } from 'src/app/model/filiale.model';
import { Host } from 'src/app/model/host.model';
import { HostsService } from '../../../services/hosts.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-filiale',
  templateUrl: './filiale.component.html',
  styleUrls: ['./filiale.component.scss','./../../../shared/css/shared.component.scss']
})
export class FilialeComponent implements OnInit,OnChanges {

  @Input() selectedFiliale: Filiale;
  hosts:Array<Host>;
  loading = true;
  numberREF: number;
  numberTEST: number;
  constructor(private hostsService: HostsService,private snack: MatSnackBar) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  ngOnChanges():void{
    this.loading= true;
    setTimeout(() => {
      let name =this.selectedFiliale.name;
      this.hostsService.get_hosts(name).subscribe((d: Host[])=>{
        this.hosts = d;
        this.loading= false;
        this.snack.open('   Filiale '+name+' Loaded & contains '+this.hosts.length+' hosts', 'Close', { duration: 2000 });
      });
    }, 1000);
    console.log("changes");
  }

}
