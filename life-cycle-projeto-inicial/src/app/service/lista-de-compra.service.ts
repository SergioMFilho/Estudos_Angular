import { Item } from './../interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarNovoItem(NomeItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: NomeItem,
      data: new Date().toLocaleString('pt-br'),
      comprado: false
    }
    return item
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarNovoItem(nomeDoItem)
    this.listaDeCompra.push(item)
    // this.atualizarLocalStorage()
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado : Item = {
      id : itemAntigo.id,
      nome: nomeEditadoDoItem,
      data : itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
    // this.atualizarLocalStorage();
  }

  deletarItemDaLista(itemAntigo: Item) {
    const nomeDoItem = itemAntigo.nome;
    this.listaDeCompra = this.listaDeCompra.filter(item => item.nome !== nomeDoItem)
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra))
  }

} 