import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/appmaterial.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { dataService } from 'src/app/base/services/jewelry.service';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [LoginComponent],
  providers: [dataService]
})
export class LoginModule { }
