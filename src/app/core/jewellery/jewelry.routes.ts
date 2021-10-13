import { Routes } from '@angular/router';
import { ADDJewelleryComponent } from './addjewellary/addjewellery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ListJewelleryComponent } from './listjewellery/listjewellery.component';

export const jewelryRoutes: Routes = [{
    path: '', component: LayoutComponent, children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'listjewellery', component: ListJewelleryComponent},
        { path: 'addjewellery', component: ADDJewelleryComponent}
        //{path: 'Users', loadChildren: () => import('../core/users/users.module').then(m => m.UserModule) }
        
    ]
}];
