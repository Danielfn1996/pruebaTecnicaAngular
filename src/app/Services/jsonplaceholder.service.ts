/**Clase que realiza la conexión al servico */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/Usuario.model';

@Injectable()
export class jsonPlaceHolder {
  url: string = 'https://jsonplaceholder.typicode.com/posts/';
  urlGet: string = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) {}

  /**
   * Metodo post el cual registra la informacion
   * @param {json} type : json
   *
   */
  Create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  /**
   * Metodo Get que devuelve informacion en variable tipo Json
   * @param {number} type : usuario id
   *
   */
  GetAll(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlGet}/${id}`);
  }

  /**
   * Metodo put que actualiza la informacion en variable tipo Json
   * @param {json} type : json
   * @param {number} type : usuario id
   */
  Update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
