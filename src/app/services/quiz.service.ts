import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {} 

    getPerguntas() {
      return this.http.get("caminhodobanco");
    }

}
