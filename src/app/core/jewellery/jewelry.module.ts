import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/appmaterial.module';
import { ADDJewelleryComponent } from './addjewellary/addjewellery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { jewelryRoutes } from './jewelry.routes';
import { LayoutComponent } from './layout/layout.component';
import { ListJewelleryComponent } from './listjewellery/listjewellery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { dataService } from 'src/app/base/services/jewelry.service';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
// import { CoreModule } from '../core/core.module'; 

@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AppMaterialModule,
        RouterModule.forChild(jewelryRoutes),
        HttpClientModule,
    ],
    declarations:[LayoutComponent,DashboardComponent,ListJewelleryComponent,ADDJewelleryComponent],
    providers:[dataService],
    schemas : [ CUSTOM_ELEMENTS_SCHEMA]
})

export class JewelryModule {

}