import { Component, OnInit, Input } from '@angular/core';
import { Spsadt } from '../spsadt.model';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-spsadt-form',
  templateUrl: './spsadt-form.component.html',
  styleUrls: ['./spsadt-form.component.scss']
})
export class SpsadtFormComponent implements OnInit {

  @Input() spsadt: Spsadt;

  spsadtForm = this.formBuilder.group({
    id: new FormControl(''),
    registroAns: [''],
    numGuiaPrestador: [''],
    numGuiaPrincipal: [''],
    dataAutorizacao: [''],
    senha: [''],
    dataValidadeSenha: [''],
    numGuiaOperadora: [''],
    numCarteira: [''],
    dataValidadeCarteira: [''],
    nomeBeneficiario: [''],
    numCartaoSaude: [''],
    atendimentoRn: [''],
    codigoContratadoSolicitante: [''],
    nomeContratadoSolicitante: [''],
    nomeProfissionalSolicitante: [''],
    conselhoProfissionalSolicitante: [''],
    numConselhoProfissionalSolicitante: [''],
    ufConselhoProfissionalSolicitante: [''],
    cboProfissionalSolicitante: [''],
    caraterAtendimento: [''],
    dataSolicitacao: [''],
    indicacaoClinica: [''],
    nomeContratadoExecutante: [''],
    codigoContratadoExecutante: [''],
    cnesContratadoExecutante: [''],
    tipoAtendimento: [''],
    indicacaoAcidente: [''],
    tipoConsulta: [''],
    motivoEncerramento: [''],
    observacao: [''],
    totalProcedimento: [''],
    totalTaxaAluguel: [''],
    totalMaterial: [''],
    totalMedicamento: [''],
    totalOpme: [''],
    totalGases: [''],
    totalGeral: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
