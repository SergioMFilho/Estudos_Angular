import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

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
    dataCriacao: this.datePipe.transform(new Date(), 'dd/MM/yyyy') || null
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private datePipe: DatePipe
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
