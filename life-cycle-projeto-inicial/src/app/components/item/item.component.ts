import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges{

  @Input() item! : Item;
  @Output() emitindoItemParaEditar = new EventEmitter()  // Output está criando uma forma de o componente enviar informações para o componente pai ou para outros componentes que estão escutando esse evento.

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { 
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);    
    
    // o emit é para que os outros componentes possam ouvir o evento
    // Ao emitir o evento, você pode enviar dados específicos junto com ele, que podem ser capturados pelos componentes inscritos.
  }

}
