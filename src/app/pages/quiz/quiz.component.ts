import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  // variáveis do cronometro
  tempoDeResposta: number = 45;
  cronometro: any;

  //atributos da pergunta
  enunciado: string = "";
  alternativas: string[] = [];
  alternativasCorreta: number = 0;
  identificador: number = 0; //serve para identificar a 1º, 2º, 3º pergunta


  // variáveis das perguntas
  perguntas: any[] = [
      {
        id: 1,
        enunciado: 'Quanto é 2+2?',
        alternativas: ['2', '4', '1', '1.000', '5'],
        alternativaCorreta: 2
    },
    {
      id: 2,
      enunciado: 'O que é uma tainha?',
      alternativas: ['Urso', 'Leão', 'Passáro', 'Avaião', 'Pexie'],
      alternativaCorreta: 5
  },
  {
      id: 3,
      enunciado: 'O que é bananeira?',
      alternativas: ['A', 'B', 'C', 'D', 'E'],
      alternativaCorreta: 3
  }
  ];

  constructor() {
  }

  ngOnInit() {
    this.getcronometro();
    this.alterarPergunta();
  }

  getcronometro() {

    this.cronometro = setInterval(() => {
      this.tempoDeResposta = this.tempoDeResposta - 1;

      if(this.tempoDeResposta == 0) {
        clearInterval(this.cronometro);
      }
    }, 1000);
  }

  alterarPergunta() {
    this.enunciado = this.perguntas[0].enunciado;

    // for(let i = 0; i <= 3; i++) {
    //   this.perguntas;
    //   if(this.identificador == i){
    //     this.enunciado = this.perguntas[i].enunciado;
    //   };
    //   this.identificador ++;
    // }
  }

  selecionarAlternativa() {
    
  }

}
