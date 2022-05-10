import { MatButtonModule } from '@angular/material/button';
import { NgModule } from "@angular/core";
import { MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
    imports:[MatSliderModule,
             MatButtonModule,
             MatIconModule,
             MatFormFieldModule,
             MatInputModule,
             MatDatepickerModule,
             MatNativeDateModule,
             MatCheckboxModule
            
             
            ],
    exports:[MatSliderModule,
             MatButtonModule,
             MatIconModule,
             MatFormFieldModule,
             MatInputModule,
             MatDatepickerModule,
             MatNativeDateModule,
             MatCheckboxModule
            ]
    
})


export class MaterialModule{}