import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  // variáveis do cronometro
  tempoDeResposta: number = 45;
  cronometro: any;
  public formCliente: any = FormGroup;
  /* public opcao: any = Opcao */




  //atributos da pergunta
  enunciado: string = "";
  alternativas: string[] = [];
  alternativaSelecionada: number = 0;
  alternativasCorreta: number = 0;
  pontuacao: number = 0;
  contador: number = 0;
  identificador: number = 0;
  //serve para identificar a 1º, 2º, 3º pergunta


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

      if (this.tempoDeResposta == 0) {
        clearInterval(this.cronometro);
      }
    }, 1000);

  }

  alterarPergunta() {
    /*  debugger
   */
    if (this.identificador == 0) {
      this.enunciado = this.perguntas[0].enunciado;
      this.alternativas = this.perguntas[0].alternativas;
      this.alternativasCorreta = this.perguntas[0].alternativaCorreta;
      this.identificador++
    } else {
      this.enunciado = this.perguntas[1].enunciado;
      this.alternativas = this.perguntas[1].alternativas;
      this.alternativasCorreta = this.perguntas[1].alternativaCorreta;
      this.identificador += 2
    }
    if (this.identificador == 3) {
      this.enunciado = this.perguntas[2].enunciado;
      this.alternativas = this.perguntas[2].alternativas;
      this.alternativasCorreta = this.perguntas[2].alternativaCorreta;

    };
    this.contador++
    if (this.contador >= 4) {
      this.contador = this.contador - 1
    }





  }

  selecionarAlternativa(selecionada: number) {
    this.alternativaSelecionada = selecionada

    if (this.alternativaSelecionada == this.alternativasCorreta) {
      this.pontuacao = this.pontuacao + 5
    }
    console.log("alternativaSelecionada: " + this.alternativaSelecionada)
    console.log("alternativa correta: " + this.alternativasCorreta)
    console.log("pontuacao: " + this.pontuacao)
  }

}
