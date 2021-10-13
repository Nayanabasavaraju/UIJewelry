import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
// import { ListJewelleryComponent } from '../core/jewellery/listjewellery/listjewellery.component'
// import { ADDJewelleryComponent } from '../core/jewellery/addjewellary/addjewellery.component'
// import { DashboardComponent } from '../base/dashboard/dashboard.component';
export const appRoutes: Routes = [{
    path: '', component: LayoutComponent, children: [
        // { path: 'dashboard', component: DashboardComponent },
        // { path: 'listjewellery', component: ListJewelleryComponent},
        // { path: 'addjewellery', component: ADDJewelleryComponent}
        //{path: 'Users', loadChildren: () => import('../core/users/users.module').then(m => m.UserModule) }
    ]
}];
