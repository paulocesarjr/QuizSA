import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CadastroPerguntaService {

    constructor(private http: HttpClient) {}

    cadastroPergunta(cadPerg: object) {
        // this.http.post<Object>(`cadastro/salvaPergunta${cadPerg}`);
    }
}