import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms'

@Directive({
  selector: '[validacaoMaiorIdade]',
  providers: [{
    provide: NG_VALIDATORS,   // registrando-se como um provedor de validadores 
    useExisting: MaiorIdadeDirective,
    multi: true    //  pode ser uma de várias implementações de validadores
  }]
})
export class MaiorIdadeDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;   // recebendo o valor do input
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoAtual = new Date().getFullYear();

    return ((anoAtual - anoNascimento) >= 18) ? null : {'validacaoMaiorIdade':true}
  }
}
