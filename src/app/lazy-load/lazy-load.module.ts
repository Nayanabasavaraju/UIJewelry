import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

//import { AuthModule } from '../auth/auth.module';

const routes: Routes = [   
    {path: 'jewelry',  loadChildren: () => import('.././core/jewellery/jewelry.module').then(m => m.JewelryModule)},
    //{path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    {path: 'login', loadChildren: () => import('./Login/login.module').then(m => m.LoginModule)},
    //{path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},

    {path: '**', redirectTo: 'login'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class LazyLoadModule { }
