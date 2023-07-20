import { VolumeInfo } from './../models/interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volume'

  constructor(private http: HttpClient) { }

  buscar(valorDigitado: string): Observable<Item[]> {
    const params = new HttpParams().append('q', valorDigitado)
    return this.http.get<LivrosResultado>(this.API, { params }).pipe(
      map(resultado => resultado.items),
      // tap(retornoAPI => console.log('fluxo do tap ', retornoAPI)),
    )
  }
}
