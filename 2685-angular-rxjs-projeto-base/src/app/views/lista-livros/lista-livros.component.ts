import { FormControl } from '@angular/forms';
import { ImageLinks, Item } from './../../models/interface';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, pipe, switchMap, tap} from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {
  campoBusca = new FormControl()

  constructor(private service: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
      debounceTime(1000),
      filter((valorDigitado) => valorDigitado.length >= 3),
      tap(() => console.log('fluxo inicial')),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
      tap((result) => {
        console.log(result)
      }),
      map((items) => this.livrosResultadoParaLivros(items))
    )

  livrosResultadoParaLivros(items: Item[]) : LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item)
    })
  }

}



