import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {

  nickname: string = '';
  readonly apiURL: string;
  body: any = {
    nickname: this.nickname
  }

  constructor(private http: HttpClient) { this.apiURL = 'https://quiz-api-senai.herokuapp.com' }


  ngOnInit(): void { }


  authUser(campoValue: string) {

    if (campoValue == undefined || campoValue == '' || campoValue == null) {
      alert('Nickname inválido!');
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        nickname: campoValue
      });

      var requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: raw
      };


        
      fetch('https://quiz-api-senai.herokuapp.com/auth/', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.valid);
          if (result.valid == true) {
            alert('logado como autor!');
          } else {
            alert('logado como jogador!');
          }
        })
        .catch((error) => console.log('error', error));
    }
  }

}





