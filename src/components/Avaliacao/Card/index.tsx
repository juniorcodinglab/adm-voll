import { Rating } from "@mui/material";
import IProsissional from "../../../types/IProfissional";
import styled from "styled-components";

const SContainer = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #FFF;
    padding: 1em;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`;

function Card({profissional} : {profissional: IProsissional }) {
    return (
        <SContainer>
            <ul>
                <li>
                    <img src={profissional.imagem} alt={`Foto do perfil do profissional ${profissional.nome}`} />
                </li>
                <li>
                    <p>{profissional.nome}</p>
                    <p>{profissional.especialidade}</p>
                </li>
                <li>
                    <Rating name="simple-controlled" readOnly={true} />
                </li>
            </ul>
        </SContainer>
    )
}

export default Card;