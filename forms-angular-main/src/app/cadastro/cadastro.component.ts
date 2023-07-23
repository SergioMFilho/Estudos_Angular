import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CepService } from '../service/cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  dadosCep: any = {}

  constructor(
    private router: Router,
    private cepService: CepService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['./sucesso'])
    } else {
      alert('Formulário inválido')
    }
    console.log(form)
  }

  consultaCEP(ev: any) {
    const cep = ev.target.value;
    return this.cepService.getConsultaCep(cep).subscribe(resultado => {
      this.dadosCep = resultado;
    })
  }

  preencherCamposEndereco(form:NgForm) {
    form.controls['endereco'].setValue(this.dadosCep.logradouro);
    form.controls['bairro'].setValue(this.dadosCep.bairro);
    form.controls['cidade'].setValue(this.dadosCep.localidade);
    form.controls['estado'].setValue(this.dadosCep.uf);
  }
}
