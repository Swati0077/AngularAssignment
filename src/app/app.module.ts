import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'userdata' , component: UsersComponent },
  { path: 'updateData/:id' , component: UpdateFormComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
