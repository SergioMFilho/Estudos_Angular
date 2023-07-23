import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado! : Item;
  valorItem! : string;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem() {
    this.service.adicionarItemNaLista(this.valorItem)
    this.limparCampo()
  }

  limparCampo(){
    this.valorItem = ''
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['itemQueVaiSerEditado'].currentValue)
  }
}
