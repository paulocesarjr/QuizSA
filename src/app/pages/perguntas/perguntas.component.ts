import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  pergunta: string = '';
  data: string = '';

  constructor() {
    console.log(this.perguntas)
  } 

  ngOnInit(): void {
  }

  perguntas: any= [
      {
        id: 1,
        pergunta: this.pergunta = 'Pergunta-1',
        data: this.data = '05/06/2022', 
        enunciado:'1+1',
        alternativa: ['1','2','3','4','5'],
        alternativacorreta: 2
      },
      {
        id: 2,
        pergunta: this.pergunta = 'Pergunta-2',
        data: this.data = '06/06/2022', 
        enunciado:'2+3',
        alternativa: ['1','2','3','4','5'],
        alternativacorreta: 5

      },
      {
        id: 3,
        pergunta: this.pergunta = 'Pergunta-3',
        data: this.data = '07/06/2022',  
        enunciado:'1+0',
        alternativa: ['1','2','3','4','5'],
        alternativacorreta: 1

      },
      {
        id: 4,
        pergunta: this.pergunta = 'Pergunta-4',
        data: this.data = '08/06/2022',  
        enunciado:'1+2',
        alternativa: ['1','2','3','4','5'],
        alternativacorreta: 3
      }
    ];

    criar(){

    }

    editar(){
      
    }

    excluir(id: number){
      console.log(`pergunta ${id} excluida`)
      }
}


