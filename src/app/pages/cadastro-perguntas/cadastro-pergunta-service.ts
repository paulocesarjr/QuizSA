import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CadastroPerguntaService {

    editarPergunta(pergObject: Object[]) {
      this.http.put('editar', pergObject);
    }

    constructor(private http: HttpClient) { }

    cadastroPergunta(cadPerg: Object) {
      return this.http.post('cadastro/salvaPergunta', cadPerg);
    }
}