import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  nickname: string = "";
  acessKey: string = "157";

  constructor() { }

  ngOnInit(): void {

  }

  login(campoValue: string) {
    this.nickname = campoValue;
    // console.log(this.nickname, this.acessKey);

    //logica redirecionamento dos guri
    if (this.nickname == "" || this.nickname == undefined || this.nickname == null) {
      console.log("algo de errado n esta certo");
    }
    else if (this.nickname == this.acessKey) {
      console.log("entrou autor");
    }
    else if (this.nickname != null) {
      console.log("entrou jogador");
    }

    
  }
}
