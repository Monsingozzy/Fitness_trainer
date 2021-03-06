import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
@Output() trainingstarted=new EventEmitter<void>();
  constructor() { }
  ngOnInit(): void {
  }
  onStartTraining(){
    this.trainingstarted.emit();
  }
}
