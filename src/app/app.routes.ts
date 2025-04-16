import { Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { HomeComponent } from './home/home.component';
import { QuizzComponent } from './quizz/quizz.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'categorie',
        component:CategorieComponent
    },
    {
        path: 'quizz',
        component:QuizzComponent
    }
];
