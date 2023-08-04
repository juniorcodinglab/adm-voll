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
    
    
`;

const SUl = styled.ul`
    list-style: none;
    padding: 0%;
    display: flex;
    align-items: center;

    li {
        &.thumb {
            img {
                width: 64px;
                height: 64px;
                object-fit: cover;
                border-radius: 50%;
                border: 3px solid var(--azul-claro);
            }
        }
        &.nome {
            flex: 1;
            margin-left: 20px;
            h5 {
                font-size: 16px;
                color: var(--cinza);
                margin: 0; 
            }
            p {
                font-size: 14px;
                color: var(--cinza);
                margin: 0;
            }
        }
    }
`


function Card({profissional} : {profissional: IProsissional }) {
    console.log(profissional);
    return (
        <SContainer>
            <SUl>
                <li className="thumb">
                    <img src={profissional.imagem} alt={`Foto do perfil do profissional ${profissional.nome}`} />
                </li>
                <li className="nome">
                    <h5>{profissional.nome}</h5>
                    <p>{profissional.especialidade}</p>
                </li>
                <li>
                    <Rating name="simple-controlled" readOnly={true} defaultValue={5} precision={profissional.nota} />
                </li>
            </SUl>
        </SContainer>
    )
}

export default Card;