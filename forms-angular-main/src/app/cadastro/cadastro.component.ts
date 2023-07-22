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
    console.log(cep)
    this.cepService.getConsultaCep(cep).subscribe(resultado => console.log(resultado))
  }
}
