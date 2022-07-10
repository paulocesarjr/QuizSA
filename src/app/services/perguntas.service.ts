import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  constructor(private http: HttpClient) {}

  buscarPergunta() {
    return this.http.get('');
  }
}
