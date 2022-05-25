import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-perguntas',
  templateUrl: './cadastro-perguntas.component.html',
  styleUrls: ['./cadastro-perguntas.component.css']
})
export class CadastroPerguntasComponent implements OnInit {

  enunciadoP: string = "";
  resp1: string = "";
  resp2: string = "";
  resp3: string = "";
  resp4: string = "";
  resp5: string = "";
  respCerta: string = "";

  constructor() { }

  ngOnInit() {

  }

  salvar() {
  }

}
