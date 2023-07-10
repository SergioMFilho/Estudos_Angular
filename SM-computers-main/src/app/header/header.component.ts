import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DatePipe]
})
export class HeaderComponent implements OnInit {
  tempoRestante: any;
  divPromocao: boolean = true;

  constructor(
    public carrinhoService: CarrinhoService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.calculaTempoRestante();
    this.divPromocao = JSON.parse(sessionStorage.getItem('divPromocao') || 'true')
  }

  calculaTempoRestante() {
    const dataAtual = new Date();
    const dataFinal = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate(), 23, 59, 59);
    const diff = dataFinal.getTime() - dataAtual.getTime();
    const segundosTotais = Math.floor(diff / 1000);
    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    this.tempoRestante = {
      horas: horas < 10 ? '0' + horas : horas,
      minutos: minutos < 10 ? '0' + minutos : minutos,
      segundos: segundos < 10 ? '0' + segundos : segundos
    };

    setTimeout(() => {
      this.calculaTempoRestante();
    }, 1000);
  }

  excluirPromocaoDiaria () {
    this.divPromocao = false;
    sessionStorage.setItem('divPromocao', JSON.stringify(this.divPromocao))
  }


}
