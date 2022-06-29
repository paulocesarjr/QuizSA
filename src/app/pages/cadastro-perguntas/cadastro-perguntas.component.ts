import { Component } from '@angular/core';
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
  
  constructor(private service: CadastroPerguntaService) { }

  salvar() {
    debugger
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
      debugger
      console.log(this.pergObject);
      this.service.cadastroPergunta(this.pergObject);
  }
}

