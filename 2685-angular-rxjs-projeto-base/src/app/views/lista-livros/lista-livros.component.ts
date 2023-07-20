import { FormControl } from '@angular/forms';
import { ImageLinks, Item, LivrosResultado } from './../../models/interface';
import { Component } from '@angular/core';
import { EMPTY, catchError, debounceTime, distinctUntilChanged, filter, map, of, pipe, switchMap, tap, throwError} from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();
  mensagemErro = ''
  livrosResultado: LivrosResultado;

  constructor(private service: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(1000),
      filter((valorDigitado) => valorDigitado.length >= 3),
      tap(() => console.log('Fluxo inicial')),
      switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
      map(resultado => this.livrosResultado = resultado),
      tap((retornoAPI) => console.log(retornoAPI)),
      map(resultado => resultado.items ?? []),
      map((items) => this.livrosResultadoParaLivros(items)),
      catchError((erro) => {
        // this.mensagemErro ='Ops, ocorreu um erro. Recarregue a aplicação!'
        // return EMPTY
        console.log(erro)
        return throwError(() => new Error(this.mensagemErro ='Ops, ocorreu um erro. Recarregue a aplicação!'))
      })
    )

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item)
    })
  }

}

// Comentários sobre o código

// distinctUntilChanged = se o resultado da requisição for igual, não pesquisa novamente
// switchMap = só mostra a última requisição e cancela as demais
// Caso não queira fazer nada com o erro
// catchError = recebe o erro
// EMPTY = usado como callback do catchError caso eu não queria fazer nada com o erro
// throwError = 'joga' o erro / 'estoura' o erro


