import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProsissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";
import useDadosGrafico from "./useDadosGrafico";
import Title from "../Title";

interface Props {
    profissionais: IProsissional[] | null,
    consultas: IConsulta[] | null
}

interface IDados {
    nome: string,
    consultas: number
}

function Grafico({profissionais, consultas}: Props) {

    let dados: Array<IDados> = useDadosGrafico({profissionais, consultas});

    console.log("Grafico", dados);


    return (
    <>
        <Title imagem="graphic">Consultas mensais por especialista</Title>
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                layout="vertical"
                data={dados}
                margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
            >
                <XAxis type="number"></XAxis>
                <YAxis type="category" dataKey="nome"></YAxis>
                <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
            </BarChart>
        </ResponsiveContainer>
    </>
        
    )
}

export default Grafico;