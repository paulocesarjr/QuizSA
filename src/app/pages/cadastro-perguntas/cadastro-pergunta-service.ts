import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CadastroPerguntaService {

    constructor(private http: HttpClient) { }

    cadastroPergunta(cadPerg: Object) {
        return this.http.post('cadastro/salvaPergunta', cadPerg);
    }
}