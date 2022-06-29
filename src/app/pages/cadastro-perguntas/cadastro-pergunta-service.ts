import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CadastroPerguntaService {

  url: string = "http://localhost:5000";

    constructor(private http: HttpClient) { }

    cadastroPergunta(cadPerg: Object) {
      debugger
      return this.http.post(this.url + "/", {headers: cadPerg});
    }

    editarPergunta(pergObject: Object[]) {
      console.log(pergObject);
      this.http.put('editar', pergObject);
    }
}