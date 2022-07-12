import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  /* url = "https://quiz-api-senai.herokuapp.com" */
  url = "http://localhost:3000"

  constructor(private http: HttpClient) {}

  buscarPergunta(): Observable<any> {
    return this.http.get(`${this.url}/listapergunta`);
  }

  excluirPergunta(id: any){
    return this.http.delete(`${this.url}/listapergunta/${id}`);
  }
}
