import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin.component';
import { NgidTableModule } from '../ngid-table/ngid-table.module';
import { Service } from '../service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'',
        redirectTo:'/admin',
        pathMatch:'full'
      }
    ]
  },

]

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    NgidTableModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AdminComponent],
})
export class AdminModule {
  constructor(injector: Injector) {
    Service.injector = injector;
  }
}
