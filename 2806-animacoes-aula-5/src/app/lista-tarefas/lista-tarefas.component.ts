import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TarefaService } from 'src/app/service/tarefa.service';
import { Tarefa } from '../interface/tarefa';
<<<<<<< HEAD:2806-animacoes-aula-5/src/app/lista-tarefas/lista-tarefas.component.ts
import { checkButtonTrigger, highlightedStateTrigger, shownStateTrigger } from '../animations';
=======
import { checkButtonTrigger, highlightedStateTrigger, showIllustrationTrigger, showStateTrigger } from '../animations';
>>>>>>> f7c1c25b5bdb4386a152b9c91ae020736e92461b:animacoes-projeto-base/src/app/lista-tarefas/lista-tarefas.component.ts

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
<<<<<<< HEAD:2806-animacoes-aula-5/src/app/lista-tarefas/lista-tarefas.component.ts
  styleUrls: ['./lista-tarefas.component.css'],
  animations: [
    highlightedStateTrigger,
    shownStateTrigger,
    checkButtonTrigger
  ]
=======
  styleUrls: ['./lista-tarefas.component.scss'],
  animations: [highlightedStateTrigger, showStateTrigger, showIllustrationTrigger, checkButtonTrigger]   // o primeiro param é o nome, o segundo um array de metadados
>>>>>>> f7c1c25b5bdb4386a152b9c91ae020736e92461b:animacoes-projeto-base/src/app/lista-tarefas/lista-tarefas.component.ts
})
export class ListaTarefasComponent implements OnInit {
  listaTarefas: Tarefa[] = [];
  formAberto: boolean = false;
  categoria: string = '';
  validado: boolean = false;
<<<<<<< HEAD:2806-animacoes-aula-5/src/app/lista-tarefas/lista-tarefas.component.ts
  indexTarefa: number = -1;
=======
  indexTarefa = -1;     // Não quero que o primeiro item fique destacado
>>>>>>> f7c1c25b5bdb4386a152b9c91ae020736e92461b:animacoes-projeto-base/src/app/lista-tarefas/lista-tarefas.component.ts
  id: number = 0;

  formulario: FormGroup = this.fomBuilder.group({
    id: [0],
    descricao: ['', Validators.required],
    statusFinalizado: [false, Validators.required],
    categoria: ['', Validators.required],
    prioridade: ['', Validators.required],
  });

  constructor(
    private service: TarefaService,
    private router: Router,
    private fomBuilder: FormBuilder
  ) {}

  ngOnInit(): Tarefa[] {
    this.service.listar(this.categoria).subscribe((listaTarefas) => {
      this.listaTarefas = listaTarefas;
    });
    return this.listaTarefas;
  }

  mostrarOuEsconderFormulario() {
    this.formAberto = !this.formAberto;
    this.resetarFormulario();
  }

  salvarTarefa() {
    if (this.formulario.value.id) {
      this.editarTarefa();
    } else {
      this.criarTarefa();
    }
  }

  editarTarefa() {
    this.service.editar(this.formulario.value).subscribe({
      complete: () => this.atualizarComponente(),
    });
  }

  criarTarefa() {
    this.service.criar(this.formulario.value).subscribe({
      complete: () => this.atualizarComponente(),
    });
  }

  excluirTarefa(id: number) {
    if (id) {
      this.service.excluir(id).subscribe({
        complete: () => this.recarregarComponente(),
      });
    }
  }

  cancelar() {
    this.resetarFormulario();
    this.formAberto = false;
  }

  resetarFormulario() {
    this.formulario.reset({
      descricao: '',
      statusFinalizado: false,
      categoria: '',
      prioridade: '',
    });
  }

  recarregarComponente() {
    this.router.navigate(['/listaTarefas']);
  }

  atualizarComponente() {
    this.recarregarComponente();
    this.resetarFormulario();
  }

  carregarParaEditar(id: number) {
    this.service.buscarPorId(id!).subscribe((tarefa) => {
      this.formulario = this.fomBuilder.group({
        id: [tarefa.id],
        descricao: [tarefa.descricao],
        categoria: [tarefa.categoria],
        statusFinalizado: [tarefa.statusFinalizado],
        prioridade: [tarefa.prioridade],
      });
    });
    this.formAberto = true;
  }

  finalizarTarefa(id: number) {
<<<<<<< HEAD:2806-animacoes-aula-5/src/app/lista-tarefas/lista-tarefas.component.ts
    this.id = id
=======
    this.id = id;
>>>>>>> f7c1c25b5bdb4386a152b9c91ae020736e92461b:animacoes-projeto-base/src/app/lista-tarefas/lista-tarefas.component.ts
    this.service.buscarPorId(id!).subscribe((tarefa) => {
      this.service.atualizarStatusTarefa(tarefa).subscribe(() => {
        this.listarAposCheck();
      });
    });
  }

  listarAposCheck() {
    this.service.listar(this.categoria).subscribe((listaTarefas) => {
      this.listaTarefas = listaTarefas;
    });
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao-salvar';
    } else return 'botao-desabilitado';
  }

  campoValidado(campoAtual: string): string {
    if (
      this.formulario.get(campoAtual)?.errors &&
      this.formulario.get(campoAtual)?.touched
    ) {
      this.validado = false;
      return 'form-tarefa input-invalido';
    } else {
      this.validado = true;
      return 'form-tarefa';
    }
  }
}
