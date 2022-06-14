import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  nickname: string = '';
  acessKey: string = '157';
  listNickname: any = [];
  nick: any;

  constructor() {}

  ngOnInit(): void {}

  // authUser(campoValue: string) {
  //   this.nickname = campoValue;

  //   let data: string = this.nickname;

  //   fetch(`http://localhost:8080/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((resp) => console.log(resp))
  //     .catch((err) => console.log(err));
  //   // requisição para a rota de login -- POST
  // }

  // endpoint = http://localhost:8080/login

  authUser(campoValue: string) {
    this.nickname = campoValue;
    // console.log(this.nickname, this.acessKey);

    //logica redirecionamento dos guri
    if (
      this.nickname == '' ||
      this.nickname == undefined ||
      this.nickname == null
    ) {
      console.log('algo de errado n esta certo');
      alert('Nickname inválido!');
    } else if (this.nickname == this.acessKey) {
      console.log('entrou autor');
      // redirecionar para pagina de autor
      campoValue = '';
    } else if (this.nickname != null || this.nickname == undefined) {
      this.nick = this.listNickname.filter(
        (nickname: string) => nickname === this.nickname
      ).length;
      // console.log(this.nick);
      if (this.nick > 0) {
        alert('Este nickname ja existe!');
        console.log('nickname duplicado!');
      } else {
        console.log('entrou jogador');
        this.listNickname.push(this.nickname);
        // redirecionar
        campoValue = '';
      }
    }

    console.log(this.listNickname);
  }
}
