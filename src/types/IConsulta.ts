import IProsissional from "./IProfissional";

export default interface IConsulta extends IProsissional {

    id: number,
    data: string,
    horario: string,
    profissional: Array<IProsissional>,
    especialidade: string,
    paciente: string,
    modalidade: string
}