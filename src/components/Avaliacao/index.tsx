import styled from "styled-components";
import IProsissional from "../../types/IProfissional";
import Card from "./Card";
import Title from "../Title";
import Botao from "../Botao";

const SSecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
`

function Avaliacao({ profissionais }:{profissionais: IProsissional[] | null }) {
    return (
        <>
            <Title imagem="avaliation">Avaliações de especialistas</Title>
            <SSecaoCard>
                {profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                })}
            </SSecaoCard>
            <Botao>Ver mais</Botao>
        </>
        
    )
}

export default Avaliacao;