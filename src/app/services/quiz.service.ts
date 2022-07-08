import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  url = 'https://quiz-api-senai.herokuapp.com'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {} 

  getPerguntas() {
    return this.http.get(this.url + '/quiz/perguntas')
  }

  postPontuacao(nickname: string, pontuacao: number) {
    const body = {
      "nickname": nickname,
      "pontuacao": pontuacao
    }

    this.http.post(this.url + '/quiz/inserir-pontuacao', JSON.stringify(body), this.httpOptions).subscribe(p => {
      alert(p);
    });
  }

}
