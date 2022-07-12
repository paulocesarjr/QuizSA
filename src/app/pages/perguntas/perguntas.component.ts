import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerguntasService } from 'src/app/services/perguntas.service';


@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})

export class PerguntasComponent implements OnInit {

  constructor(
    private router: Router,
    private service: PerguntasService) {
  }
  
  perguntas: any[] = [];
  id: number = 0;
  data: Date = new Date

  ngOnInit(): void {
    this.service.buscarPergunta().subscribe(res => {
      this.perguntas = res.perguntas;
      console.log(this.perguntas)
    });
  }

    criar(){
      this.router.navigate(['criar-pergunta']);
    
    }

    editar(id: number){
      let pergunta = this.perguntas.findIndex(perguntas => perguntas.id === id);
      if(pergunta !== -1){
      this.router.navigate(['criar-pergunta', pergunta]);
      }
    }
  
    excluir(id: number){
      this.service.excluirPergunta(id).subscribe();
      this.ngOnInit();
    } 
}



