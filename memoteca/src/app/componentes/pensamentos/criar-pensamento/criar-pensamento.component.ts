import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      autoria: ['' , Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3)
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarCriacao() {
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    if(!this.formulario.valid) {
      return 'botao__desabilitado'
    } else {
      return 'botao'
    }
  }

}
