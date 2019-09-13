import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatTableDataSource,  MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Host } from 'src/app/model/host.model';

export interface DialogData {
  ip: string;
}
@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent implements OnInit {

  @Input() dataSource = new MatTableDataSource<Host>();
  displayedColumns = ['hostname', 'ip', 'filiale','type','operations'];
  loading = true;

  constructor(public snack: MatSnackBar,public dialog: MatDialog) {}

  ngOnInit(): void {
    setTimeout(() => { this.loading = false; }, 1000);
  }

  beforeTFJ(ip: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, { data: {ip: ip} });
    dialogRef.afterClosed().subscribe(result => {
      this.loading=true;
      setTimeout(() => { this.loading = false; }, 1000);
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./hosts.component.scss']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}