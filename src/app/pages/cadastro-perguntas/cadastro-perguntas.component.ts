import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastroPerguntaService } from './cadastro-pergunta-service';

@Component({
  selector: 'app-cadastro-perguntas',
  templateUrl: './cadastro-perguntas.component.html',
  styleUrls: ['./cadastro-perguntas.component.css']
})
export class CadastroPerguntasComponent {

  // variaveis de objeto da pergunta
  id?: number;
  enunciadoP: string = "";
  resp1: string = "";
  resp2: string = "";
  resp3: string = "";
  resp4: string = "";
  resp5: string = "";
  respCerta: string = "";
  pergObject: Object[] = [];
  
  constructor(private service: CadastroPerguntaService,
              private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['editar'];
    // this.id = 1;
    if(this.id) {
      this.service.pegaPergunta(this.id).subscribe((res: any) => {
        this.enunciadoP = res.pergunta[0].enunciado;
        this.resp1 = res.pergunta[0].alternativa_a;
        this.resp2 = res.pergunta[0].alternativa_b;
        this.resp3 = res.pergunta[0].alternativa_c;
        this.resp4 = res.pergunta[0].alternativa_d;
        this.resp5 = res.pergunta[0].alternativa_e;
        this.respCerta = res.pergunta[0].alternativa_correta;
      });
    }
   }

  salvar() {
    this.pergObject = [];
    if(this.id){
      this.pergObject.push(
        {
          id: this.id,
          enunciado: this.enunciadoP, 
          alternativa_a: this.resp1,
          alternativa_b: this.resp2,
          alternativa_c: this.resp3,
          alternativa_d: this.resp4,
          alternativa_e: this.resp5,
          alternativa_correta: this.respCerta
        }
      );
      this.service.editarPergunta(this.pergObject, this.id);
    } else {
      this.pergObject.push(
        {
          enunciado: this.enunciadoP, 
          alternativa_a: this.resp1,
          alternativa_b: this.resp2,
          alternativa_c: this.resp3,
          alternativa_d: this.resp4,
          alternativa_e: this.resp5,
          alternativa_correta: this.respCerta
        }
      );
      this.service.cadastroPergunta(this.pergObject);
    }
    this.limpaCampos();
  }

  limpaCampos() {
    this.id = 0;
    this.enunciadoP = "";
    this.resp1 = "";
    this.resp2 = "";
    this.resp3 = "";
    this.resp4 = "";
    this.resp5 = "";
    this.respCerta = "";
  }
}

