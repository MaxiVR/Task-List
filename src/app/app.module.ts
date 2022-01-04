import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskComponent } from './components/task/task.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule  } from '@angular/material-moment-adapter'
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule, } from '@angular-material-components/datetime-picker';



const appRoutes: Routes = [
  {path:'', component: TaskComponent},
  {path:'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TaskComponent,
    TasksItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMomentDateModule,
    MatInputModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
