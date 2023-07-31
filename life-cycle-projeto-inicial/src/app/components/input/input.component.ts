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
  editando = false;
  textoBtn = "Salvar Item";

  valorItem! : string;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem() {
    this.service.adicionarItemNaLista(this.valorItem)
    this.limparCampo()
  }

  limparCampo(){
    this.valorItem = '';
  }

  editarItem() {
    this.service.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = "Salvar"
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;  
      this.textoBtn = "editar item";
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
    console.log(changes['itemQueVaiSerEditado'].currentValue)
  }
}
