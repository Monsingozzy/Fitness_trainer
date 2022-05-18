import { StopTrainingComponent } from './stop-training.component';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() TrainingStop=new EventEmitter();
  process=0;
  timer:any;
  constructor(private dailog:MatDialog) { }

  ngOnInit(): void {
    // this.timer=setInterval(()=>{
    //   this.process=this.process+1;
    //   if(this.process>=100){
    //     clearInterval(this.timer)
    //   }

    // },1000)
    this.Starttimer();
  }
  Starttimer(){
    this.timer=setInterval(()=>{
      this.process=this.process+1;
      if(this.process>=100){
        clearInterval(this.timer)
      }
    },1000)
  }
  Stoptimer(){
    clearInterval(this.timer);
    const dailogRef=this.dailog.open(StopTrainingComponent,{
      data:{
      process:this.process
      }
    });
    dailogRef.afterClosed().subscribe(result=>{
      if(result){
        this.TrainingStop.emit();
      }else{
        this.Starttimer();
      }
    });
  }
}
