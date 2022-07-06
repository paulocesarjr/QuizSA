import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CadastroPerguntaService {

  url: string = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

    constructor(private http: HttpClient) { }

    cadastroPergunta(cadPerg: any) {
      const body = {
        'enunciado': cadPerg[0].enunciado,
        'alternativa_correta': cadPerg[0].alternativa_correta,
        'alternativa_a': cadPerg[0].alternativa_a,
        'alternativa_b': cadPerg[0].alternativa_b,
        'alternativa_c': cadPerg[0].alternativa_c,
        'alternativa_d': cadPerg[0].alternativa_d,
        'alternativa_e': cadPerg[0].alternativa_e
      }
      return this.http.post(this.url + "/", JSON.stringify(body), this.httpOptions).subscribe(result => {
        alert(result);
      })
    }

    editarPergunta(cadPerg: any, id: number) {
      const body = {
        'enunciado': cadPerg[0].enunciado,
        'alternativa_correta': cadPerg[0].alternativa_correta,
        'alternativa_a': cadPerg[0].alternativa_a,
        'alternativa_b': cadPerg[0].alternativa_b,
        'alternativa_c': cadPerg[0].alternativa_c,
        'alternativa_d': cadPerg[0].alternativa_d,
        'alternativa_e': cadPerg[0].alternativa_e
      }
      return this.http.put(this.url + '/' + id, JSON.stringify(body), this.httpOptions).subscribe(result => {
        alert(result);
      });
    }

    pegaPergunta(id: number) {
      return this.http.get(this.url + "/" + id);
    }

}