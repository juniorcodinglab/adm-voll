import { Container } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Botao from "../../components/Botao";
import Tabela from "../../components/Tabela";
import Grafico from "../../components/Grafico";
import Avaliacao from "../../components/Avaliacao";
import { Footer } from "../../components/Footer";
import useDadosConsulta from "../../useDadosConsulta";
import useDadosProfissional from "../../useDadosProfissional";

export default function Dashboard() {

    const {dados: consultas, erro: consultasErro } = useDadosConsulta();
    const {dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

    if (consultasErro || profissionaisErro) 
        console.log("Ocorreu um erro na requisição")

    return (
        <Container>
            <Title>Área Administrativa</Title>
            <Botao>Cadastrar especialista</Botao>
            <Tabela consultas={consultas}></Tabela>
            <Grafico consultas={consultas} profissionais={profissionais}></Grafico>
            <Avaliacao profissionais={profissionais} />
        </Container>
    )
}