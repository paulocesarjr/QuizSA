import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  

  constructor() {} 

  ngOnInit(): void {
  
  }

    perguntas = [
   
      {
        id: 1,
        pergunta: 'Pergunta-1',
        data: '05/06/2022', 
        enunciado:'abc',
        alternativa: '1,2,3,4,5',
        alternativacorreta: '2'
      },
      {
        id: 2,
        pergunta: 'Pergunta-2',
        data: '06/06/2022', 
        enunciado:'abd',
        alternativa: '1,2,3,4,5',
        alternativacorreta: '5'

      },
      {
        id: 3,
        pergunta: 'Pergunta-3',
        data: '07/06/2022',  
        enunciado:'abf',
        alternativa: '1,2,3,4,5',
        alternativacorreta: '1'

      },
      {
        id: 4,
        pergunta: 'Pergunta-4',
        data: '08/06/2022',  
        enunciado:'abg',
        alternativa: '1,2,3,4,5',
        alternativacorreta: '3'
      }
    ];   
}



