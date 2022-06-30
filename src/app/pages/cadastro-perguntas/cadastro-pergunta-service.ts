import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CadastroPerguntaService {

  url: string = "http://localhost:5000";

    constructor(private http: HttpClient) { }

    cadastroPergunta(cadPerg: Object[]) {
      return this.http.post(this.url + "/", { body: cadPerg } );
    }

    editarPergunta(pergObject: Object[], id: number) {
      this.http.put(this.url + '/' + id, pergObject);
    }

    pegaPergunta(id: number) {
      return this.http.get(this.url + "/" + id);
    }

}