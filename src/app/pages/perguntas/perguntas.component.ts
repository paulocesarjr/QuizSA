import { Component, OnInit } from '@angular/core';
//import { Perguntas } from './perguntas';


@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  
  constructor() {
    console.log(this.perguntas)
  } 

  public perguntas = [
    {
      id: 1,
      pergunta: 'Pergunta-1',
      data: '05/06/2022', 
      enunciado:'1+1',
      alternativas: ['1','2','3','4','5'],
      alternativacorreta: 2
    },
    {
      id: 2,
      pergunta: 'Pergunta-2',
      data: '06/06/2022', 
      enunciado:'2+3',
      alternativas: ['1','2','3','4','5'],
      alternativacorreta: 5

    },
    {
      id: 3,
      pergunta: 'Pergunta-3',
      data: '07/06/2022',  
      enunciado:'1+0',
      alternativas: ['1','2','3','4','5'],
      alternativacorreta: 1

    },
    {
      id: 4,
      pergunta: 'Pergunta-4',
      data: '08/06/2022',  
      enunciado:'1+2',
      alternativas: ['1','2','3','4','5'],
      alternativacorreta: 3
    }
  ];

  ngOnInit(): void {
  }

    criar(){
    
    }

    editar(){
  
    }

    excluir(id: number){
      let pergunta = this.perguntas.findIndex(perguntas => perguntas.id === id)
      if(pergunta !== -1){
        this.perguntas.splice(pergunta, 1)
        console.log(`pergunta ${id} excluida`)
      }
    }
}



