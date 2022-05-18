import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
maxdate: Date;

  constructor() { }

  ngOnInit(): void {

    this.maxdate=new Date();
    this.maxdate.setFullYear(this.maxdate.getFullYear()-18)
  }
//   onsubmit(form:NgForm){
//     console.log(form.value.Username);
//   }
}
