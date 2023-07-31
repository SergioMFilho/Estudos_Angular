import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeCompra : Array<Item> = []
  itemParaSerEditado! : Item;

  constructor(private servicoListaCompra: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.servicoListaCompra.getListaDeCompra();
    console.log(this.listaDeCompra)
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item
  }

  deletarItem(id: number) {
    const index = this.listaDeCompra.findIndex((item) => item.id === id);
    this.listaDeCompra.splice(index, 1)
  }

  limparLista() {
    this.listaDeCompra = [];
  }

  ngDoCheck(): void {
    console.log("Do check foi chamado")
    this.servicoListaCompra.atualizarLocalStorage()
  }
}
