import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategorieComponent } from "./categorie/categorie.component";
import { QuizzComponent } from "./quizz/quizz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategorieComponent, QuizzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Application_de_Quiz';
}