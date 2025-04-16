import { Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'categorie',
        component:CategorieComponent
    }
];
