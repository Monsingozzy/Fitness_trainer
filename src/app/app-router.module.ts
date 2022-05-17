import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";

const route:Routes=[
    { path:"my-first-angular-app",component:WelcomeComponent },
    { path:"signup",component:SignupComponent },
    { path:"login",component:LoginComponent },
    {path:"training",component:TrainingComponent}

]

@NgModule({

    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[RouterModule]
})
export class AppRouting{}
