import { Cbo } from 'src/app/cbo/cbo.model';
import { Uf } from 'src/app/uf/uf.model';

export class Spsadt {

  id: string;
  registroAns: string;
  numGuiaPrestador: string;
  numGuiaPrincipal: string;
  dataAutorizacao: Date;
  senha: string;
  dataValidadeSenha: string;
  numGuiaOperadora: string;
  numCarteira: string;
  dataValidadeCarteira: Date;
  nomeBeneficiario: string;
  numCartaoSaude: string;
  atendimentoRn: string;
  codigoContratadoSolicitante: string;
  nomeContratadoSolicitante: string;
  nomeProfissionalSolicitante: string;
  conselhoProfissionalSolicitante: string;
  numConselhoProfissionalSolicitante: string;
  ufConselhoProfissionalSolicitante: Uf;
  cboProfissionalSolicitante: Cbo;
  caraterAtendimento: string;
  dataSolicitacao: Date;
  indicacaoClinica: string;
  nomeContratadoExecutante: string;
  codigoContratadoExecutante: string;
  cnesContratadoExecutante: string;
  tipoAtendimento: string;
  indicacaoAcidente: string;
  tipoConsulta: string;
  motivoEncerramento?: string;
  observacao?: string;
  totalProcedimento?: number;
  totalTaxaAluguel?: number;
  totalMaterial?: number;
  totalMedicamento?: number;
  totalOpme?: number;
  totalGases?: number;
  totalGeral?: number;

}
