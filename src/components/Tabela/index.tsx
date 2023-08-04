import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import styled from "styled-components";
import Subtitulo from "../Subtitulo";
import Title from "../Title";
import Botao from "../Botao";

const SCelula = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)",
    }
}));

const SLinha = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}));

const STable = styled(Table)(() => ({
    backgroundColor: "rgba(255, 255, 255,0.5)"
}));

function Tabela({consultas}: {consultas: IConsulta[] | null }) {
    return (
        <>
            <Title imagem="consult">Consultas do dia</Title>
            <TableContainer component={Paper}>
                <STable sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                             <SCelula>Data</SCelula>
                             <SCelula>Horário</SCelula>
                             <SCelula>Profissional</SCelula>
                             <SCelula>Especialidade</SCelula>
                             <SCelula>Paciente</SCelula>
                             <SCelula>Modalidade</SCelula>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                                <SLinha key={linha.paciente}>
                                    <SCelula component="th" scope="row">
                                        {new Date(linha.data).toLocaleString()}
                                    </SCelula>
                                    <SCelula>{linha.horario}</SCelula>
                                    <SCelula>{linha.profissional[0].nome}</SCelula>
                                    <SCelula>{linha.profissional[0].especialidade}</SCelula>
                                    <SCelula>{linha.paciente}</SCelula>
                                    <SCelula>{linha.modalidade}</SCelula>
                                </SLinha>
                            )
                        })}
                        
                    </TableBody>
                </STable>
            </TableContainer>

            <Botao>Ver mais</Botao>
        </>
    )

}

export default Tabela;