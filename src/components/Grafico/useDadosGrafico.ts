import IConsulta from "../../types/IConsulta";
import IProsissional from "../../types/IProfissional";

interface Props {
    profissionais: IProsissional[] | null,
    consultas: IConsulta[] | null
}

interface IDados {
    nome: string,
    consultas: number
}

const useDadosGrafico = ({profissionais, consultas}: Props) => {
    let dados: Array<IDados> = [];

    if(profissionais && consultas) {
        dados = profissionais.map((profissional) => ({
            nome: profissional.nome,
            consultas: consultas.filter((consulta) => 
                consulta.profissional.some((prof) => prof.nome === profissional.nome)
            ).length
        }))
    }

    console.log(dados)

    return dados;
}

export default useDadosGrafico;