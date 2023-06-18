import styled from 'styled-components';
import facebook from '../../assets/facebook.png';

const SRodape = styled.footer`
    height: 100%;
    color: #FFF;
    padding: 1em;;
    background-color: var(--azul-escuro);
    text-align: center;
`

const SList = styled.ul`
    display: flex;
    justify-content: center;
    width: 10%;
    margin: 1em auto;
`

const SItem = styled.li`
    list-style-type: none;
`


export function Footer() {
    return (
        <SRodape>
            <SList>
                <SItem>
                    <a href="">
                        <img src={facebook} alt="" />
                    </a>
                </SItem>
            </SList>
            <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </SRodape>
    )
}