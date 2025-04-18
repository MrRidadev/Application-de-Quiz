import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  question: any[] = [];
  corect_question = 0;
  scour = 0;
  select_inser: string | null = null;
  showNextButton = false;

  constructor() {}

  ngOnInit(): void {
    this.myfunction();
  }

  async myfunction() {
    try {
      const res = await fetch('https://opentdb.com/api.php?amount=10&category=22');
      const data = await res.json();

      this.question = data.results.map((q: any) => {
        const answers = [...q.incorrect_answers];
        const randomIndex = Math.floor(Math.random() * 4);
        answers.splice(randomIndex, 0, q.correct_answer);
        return {
          question: q.question,
          answers,
          correct_answer: q.correct_answer
        };
      });
    } catch (error) {
      console.error('Erreur lors du chargement des questions:', error);
    }
  }

  selectAnswer(answer: string) {
    this.select_inser = answer;
    this.showNextButton = true;
    if (answer === this.question[this.corect_question].correct_answer) {
      this.scour++;
    }
  }

  nextQuestion() {
    this.corect_question++;
    this.select_inser = null;
    this.showNextButton = false;
  }

  getProgress() {
    return ((this.corect_question + 1) / this.question.length) * 100;
  }
}
