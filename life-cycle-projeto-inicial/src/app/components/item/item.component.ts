import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy{

  @Input() item! : Item;
  @Output() emitindoItemParaEditar = new EventEmitter()  // Output está criando uma forma de o componente enviar informações para o componente pai ou para outros componentes que estão escutando esse evento.
  @Output() emitindoIdParaDeletarItem = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { 
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);    
    
    // o emit é para que os outros componentes possam ouvir o evento
    // Ao emitir o evento, você pode enviar dados específicos junto com ele, que podem ser capturados pelos componentes inscritos.
  }

  deletarItem() {
    console.log("deletando item")
    this.emitindoIdParaDeletarItem.emit(this.item.id);
  }

  checarItem() {
    if(this.item.comprado == true) {
      console.log("item está como verdadeiro");
      this.item.comprado = false;
    } else {
      console.log("item está como falso")
      this.item.comprado = true;
    }
  }

  ngOnDestroy(): void {
   console.log("item deletado, on destroy") 
  }

}
