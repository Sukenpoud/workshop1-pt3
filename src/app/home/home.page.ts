import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initialize } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myQuestions = {
    "one": [
      {
        "question": "Who invented JavaScript?",
        "answers": {
          "a": "Douglas Crockford",
          "b": "Sheryl Sandberg",
          "c": "Brendan Eich"
        },
        "correctAnswer": "c"
      }
    ],
    "two": [
      {
        "question": "Which one of these is a JavaScript package manager?",
        "answers": {
          "a": "Node.js",
          "b": "TypeScript",
          "c": "npm"
        },
        "correctAnswer": "c"
      }
    ],
    "three": [
      {
        "question": "Which tool can you use to ensure code quality?",
        "answers": {
          "a": "Angular",
          "b": "jQuery",
          "c": "ESLint"
        },
        "correctAnswer": "c"
      }
    ]
  };

  quizContainer = document.getElementById('quiz');
  resultsContainer = document.getElementById('results');
  submitButton = document.getElementById('submit');
  numCorrect: number;
  msgErr ="";

  constructor(
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}
   
  logout() {
    this.afAuth.signOut();
  }

  showResults(){

    this.numCorrect = 0;
    var input1 = (<HTMLInputElement>document.querySelector('input[name=questionone]:checked')).value;
    var input2 = (<HTMLInputElement>document.querySelector('input[name=questiontwo]:checked')).value;
    var input3 = (<HTMLInputElement>document.querySelector('input[name=questionthree]:checked')).value; 

    if ( input1 && input1 === "c" ) {
      this.numCorrect++;
    } 
    if ( input2 && input2 === "c" ) {
      this.numCorrect++;
    } 
    if ( input2 && input3 === "c" ) {
      this.numCorrect++;
    }
  }

  
  
}