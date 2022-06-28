import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';


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


  //atributos globais do array de perguntas e próxima pergunta
  enunciado: string = "";
  alternativas: string[] = [];
  alternativaSelecionada: string = "";
  alternativasCorreta: string = "";
  pontuacao: number = 0;
  contador: number = 0;
  cabecalho: string = "";
  botao: string = "";

  // variáveis das perguntas
  perguntas: any[] = [
    {
      id: 1,
      enunciado: 'Quanto é 2+2?',
      alternativas: ['2', '4', '1', '1.000', '5'],
      alternativaCorreta: 'B'
    },
    {
      id: 2,
      enunciado: 'O que é uma tainha?',
      alternativas: ['Urso', 'Leão', 'Passáro', 'Avaião', 'Pexie'],
      alternativaCorreta: 'E'
    },
    {
      id: 3,
      enunciado: 'O que é bananeira?',
      alternativas: ['A', 'B', 'C', 'D', 'E'],
      alternativaCorreta: 'C'
    }
  ];

  // váriáveis cabeçalho e botão de próxima pergunta
  proximaPergunta: any[] = [
    {
      id: 1,
      cabecalho: 'Primeira Pergunta',
      botao: 'Próxima Pergunta'
    },
    {
      id: 2,
      cabecalho: 'Segunda Pergunta',
      botao: 'Próxima Pergunta'
    },
    {
      id: 3,
      cabecalho: 'Terceira Pergunta',
      botao: 'Finalizar Quiz'
    }
  ];


  constructor(private route: Router, 
              private service: QuizService) {

  }


  ngOnInit() {
    // this.service.getPerguntas().subscribe(perguntas => {
    //   this.perguntas.push(perguntas);
    // });
    this.getcronometro();
    this.alterarPergunta();
  }


  getcronometro() {

    this.cronometro = setInterval(() => {
      this.tempoDeResposta = this.tempoDeResposta - 1;

      if (this.tempoDeResposta == 0) {
        clearInterval(this.cronometro);
          this.route.navigateByUrl("/ranking" + this.pontuacao);
      }
    }, 1000);

  }


  alterarPergunta() {
    
    this.contador++;  
    
    if (this.contador == 1) {
      this.enunciado = this.perguntas[0].enunciado;
      this.alternativas = this.perguntas[0].alternativas;
      this.alternativasCorreta = this.perguntas[0].alternativaCorreta;
      this.cabecalho = this.proximaPergunta[0].cabecalho;
      this.botao = this.proximaPergunta[0].botao
    }

    this.calcularPontuacao()

    if (this.contador == 2) {
      this.enunciado = this.perguntas[1].enunciado;
      this.alternativas = this.perguntas[1].alternativas;
      this.alternativasCorreta = this.perguntas[1].alternativaCorreta;
      this.cabecalho = this.proximaPergunta[1].cabecalho;
      this.botao = this.proximaPergunta[1].botao
    }

    if (this.contador == 3) {
      this.enunciado = this.perguntas[2].enunciado;
      this.alternativas = this.perguntas[2].alternativas;
      this.alternativasCorreta = this.perguntas[2].alternativaCorreta;
      this.cabecalho = this.proximaPergunta[2].cabecalho;
      this.botao = this.proximaPergunta[2].botao
    } else {
      this.route.navigateByUrl("/ranking" + this.pontuacao);
    }

    if (this.contador >= 4) {
      this.contador = this.contador - 1;
      alert("Encerrou o jogo");
    }

  }


  selecionarAlternativa(selecionada: string) {
    this.alternativaSelecionada = selecionada
  }


  calcularPontuacao() {
  
    if (this.alternativaSelecionada == this.alternativasCorreta) {
      this.pontuacao += 5;
    }
    console.log("alternativaSelecionada: " + this.alternativaSelecionada)
    console.log("alternativa correta: " + this.alternativasCorreta)
    console.log("pontuacao: " + this.pontuacao)
  }

}
