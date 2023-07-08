import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento = {
    conteudo: "",
    autoria: '',
    modelo: '',
    dataCriacao: new Date()
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
  ) { }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarCriacao() {
    this.router.navigate(['/listarPensamento'])
  }

}
