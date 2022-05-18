import { Component, Inject } from "@angular/core";
import {MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
  selector :'app-stop-training',
  template :`<p mat-dialog-title>Are you sure?</p>
   <p mat-dialog-title>You already completed {{passedData.process}}%</p>
    <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Yes</button>
        <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>`
})
export class StopTrainingComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public passedData:any){}
}
