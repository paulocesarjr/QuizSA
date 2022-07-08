import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  //atributos globais do array de perguntas e próxima pergunta
  nickname: string = "";
  enunciado: string = "";
  alternativaA: string = "";
  alternativaB: string = "";
  alternativaC: string = "";
  alternativaD: string = "";
  alternativaE: string = "";
  alternativaSelecionada: string = "";
  alternativasCorreta: string = "";
  pontuacao: number = 0;
  contarPerguntas: number = 0;
  contador: number = 1;
  cabecalho: string = "";
  botao: string = "";

  // variáveis das perguntas
  perguntas: any = [];

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

  constructor(private router: Router,
    private service: QuizService,
    private route: ActivatedRoute) {
      this.nickname = "testefinal";
      // this.nickname = this.route.snapshot.params["quiz"];
     }

  ngOnInit() {
    this.service.getPerguntas().subscribe((res: any) => {
      this.perguntas = res.perguntas;
      this.enunciado = res.perguntas[0].enunciado;
      this.alternativaA = res.perguntas[0].alternativa_a;
      this.alternativaB = res.perguntas[0].alternativa_b;
      this.alternativaC = res.perguntas[0].alternativa_c;
      this.alternativaD = res.perguntas[0].alternativa_d;
      this.alternativaE = res.perguntas[0].alternativa_e;
      this.alternativasCorreta = res.perguntas[0].alternativa_correta;
    }, error => {
      console.log(error);
    });
    this.getcronometro();
    this.alterarEstadoDoBotao();
  }

  getcronometro() {
    this.cronometro = setInterval(() => {
      this.tempoDeResposta = this.tempoDeResposta - 1;
      if (this.tempoDeResposta == 0) {
        clearInterval(this.cronometro);
        alert('Redirecionando para a tela de ranking');
        // this.route.navigateByUrl("/ranking" + this.pontuacao);
      }
    }, 1000);
  }

  alterarEstadoDoBotao() {
    this.contarPerguntas++;
    if (this.contador == 1) {
      this.cabecalho = this.proximaPergunta[0].cabecalho;
      this.botao = this.proximaPergunta[0].botao
    }
    if (this.contador == 2) {
      this.cabecalho = this.proximaPergunta[1].cabecalho;
      this.botao = this.proximaPergunta[1].botao
    }
    if (this.contador == 3) {
      this.cabecalho = this.proximaPergunta[2].cabecalho;
      this.botao = this.proximaPergunta[2].botao
    }
  }

  alterarPergunta() {
    this.contador++;
    this.calcularPontuacao();
    if (this.contador == 2) {
      this.enunciado = this.perguntas[1].enunciado;
      this.alternativaA = this.perguntas[1].alternativa_a;
      this.alternativaB = this.perguntas[1].alternativa_b;
      this.alternativaC = this.perguntas[1].alternativa_c;
      this.alternativaD = this.perguntas[1].alternativa_d;
      this.alternativaE = this.perguntas[1].alternativa_e;
      this.alternativasCorreta = this.perguntas[1].alternativa_correta;
      this.alterarEstadoDoBotao();
    } else if (this.contador == 3) {
        this.enunciado = this.perguntas[2].enunciado;
        this.alternativaA = this.perguntas[2].alternativa_a;
        this.alternativaB = this.perguntas[2].alternativa_b;
        this.alternativaC = this.perguntas[2].alternativa_c;
        this.alternativaD = this.perguntas[2].alternativa_d;
        this.alternativaE = this.perguntas[2].alternativa_e;
        this.alternativasCorreta = this.perguntas[2].alternativa_correta;
        this.alterarEstadoDoBotao();
        } else {
          this.contador = 0;
          this.service.postPontuacao(this.nickname, this.pontuacao);
          return alert('redirecionando para a tela de ranking');
          // this.route.navigateByUrl("/ranking" + this.pontuacao);
        }
  }

  selecionarAlternativa(selecionada: string) {
    this.alternativaSelecionada = selecionada
  }

  calcularPontuacao() {
    if (this.alternativaSelecionada == this.alternativasCorreta) {
      this.pontuacao += 5;
    }
    console.log(this.pontuacao);
    console.log(this.alternativaSelecionada);
    console.log(this.alternativasCorreta);
  }
}
