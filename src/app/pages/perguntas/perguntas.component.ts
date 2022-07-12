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

  ngOnInit(): void {
    this.service.buscarPergunta().subscribe((res: any) => {
      this.perguntas = res.perguntas;
      console.log(this.perguntas)
    });
  }

    criar(){
      this.router.navigate(['criar-pergunta']);
    }

    editar(id: number){
      let pergunta = this.perguntas.find(perguntas => perguntas.pergunta_id === id);
      this.router.navigate(['criar-pergunta', pergunta]);
    }
  
    excluir(id: number){
      this.service.excluirPergunta(id).subscribe();
      this.ngOnInit();
    } 
}



