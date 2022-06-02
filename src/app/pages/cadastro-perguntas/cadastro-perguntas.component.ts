import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-perguntas',
  templateUrl: './cadastro-perguntas.component.html',
  styleUrls: ['./cadastro-perguntas.component.css']
})
export class CadastroPerguntasComponent {

  // variaveis de objeto da pergunta
  enunciadoP: string = "";
  resp1: string = "";
  resp2: string = "";
  resp3: string = "";
  resp4: string = "";
  resp5: string = "";
  respCerta: string = "";
  pergObject: Object[] = [];

  constructor() { }

  salvar() {
    this.pergObject.push(
      {
        enunciadoP: this.enunciadoP, 
        resp1: this.resp1,
        resp2: this.resp2,
        resp3: this.resp3,
        resp4: this.resp4,
        resp5: this.resp5,
        respCerta: this.respCerta
      }
    );
  }

}
