import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroPerguntaService } from './cadastro-pergunta-service';


@Component({
  selector: 'app-cadastro-perguntas',
  templateUrl: './cadastro-perguntas.component.html',
  styleUrls: ['./cadastro-perguntas.component.css']
})
export class CadastroPerguntasComponent implements OnInit {

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
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.pergObject = this.route.snapshot.queryParams["editar"];
    this.pergObject.forEach(pergunta =>{
      // this.enunciadoP = pergunta.enunciado,
      // this.
      // this.respCerta = pergunta.alternativacorreta

    })
  }

  salvar() {
    if(this.id){
      this.pergObject.push(
        {
          id: this.id,
          enunciadoP: this.enunciadoP, 
          resp1: this.resp1,
          resp2: this.resp2,
          resp3: this.resp3,
          resp4: this.resp4,
          resp5: this.resp5,
          respCerta: this.respCerta
        }
      );
    this.service.editarPergunta(this.pergObject);
    }else{
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
      this.service.cadastroPergunta(this.pergObject);
    }
  }
}

