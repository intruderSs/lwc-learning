import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {}
    correctAnswer = 0;
    isSubmitted = false;

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

   myQuestions = [
    {
        id: 'question1',
        question: 'Which one is not a template loop',
        answers: {
            a: 'for:Each',
            b: 'iterator',
            c: 'map:loop'
        },
        correctAns: 'c'
    },
    {
        id: 'question2',
        question: 'Which of the file is invalid in LWC Compnent folder',
        answers: {
            a: 'svg',
            b: 'apex',
            c: '.js'
        },
        correctAns: 'b'
    },
    {
        id: 'question3',
        question: 'Which of the following is not a directive',
        answers: {
            a: 'for:Each',
            b: 'if:true',
            c: '@track'
        },
        correctAns: 'c'
    }
   ]

   get isScoredFull() {
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswer? 'slds-text-color_success': 'slds-text-color_error'}`
   }

   changeHandler () {
    console.log(event.target.name);
    console.log(event.target.value);
    const {name,value} = event.target;
    this.selected = {...this.selected, [name]: value}
   }

   submitHandler(event) {
       event.preventDefault();
       let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAns);
       this.correctAnswer = correct.length;
       console.log('Correct Answer', this.correctAnswer);
       this.isSubmitted = true;
   }

   resetHandler() {
         this.selected = {};
         this.correctAnswer = 0;
         this.isSubmitted = false;
   }

}