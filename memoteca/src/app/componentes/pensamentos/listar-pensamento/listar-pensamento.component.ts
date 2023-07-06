import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Hoje queria poder descansar mais',
      autoria: 'Sérgio Medeiros',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Hoje estou aprendendo muito do angular',
      autoria: 'Sérgio Medeiros',
      modelo: 'modelo1'
    }
  ];
}
