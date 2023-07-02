import styled from "styled-components";
import IProsissional from "../../types/IProfissional";
import Card from "./Card";

const SSecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

function Avaliacao({ profissionais }:{profissionais: IProsissional[] | null }) {
    return (
        <SSecaoCard>
            {profissionais?.map((profissional) => {
                return <Card profissional={profissional} />
            })}
        </SSecaoCard>
    )
}

export default Avaliacao;