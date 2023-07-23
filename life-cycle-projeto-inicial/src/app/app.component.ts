import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';
  listaDeCompra : Array<Item> = []

  constructor(private servicoListaCompra: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.servicoListaCompra.getListaDeCompra();
    console.log(this.listaDeCompra)
  }

}
