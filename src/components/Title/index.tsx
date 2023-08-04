import avaliacao from '../../assets/avaliacao.png';
import grafico from '../..//assets/grafico.png';
import consulta from '../../assets/consulta.png';
import styled from 'styled-components';
import Botao from '../Botao';

interface Props {
    imagem?: string|undefined,
    children?: string,
}

interface IImages {
    avaliation?: string,
    graphic?: string,
    consult?: string,
}

interface ISpan {
    image: string,
}

const SSpan = styled.span<ISpan>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.image ? `url(${props.image})` : 'none'}; 
`

const STitle = styled.h2`
    color: var(--azul-claro);
`

const SContainer = styled.div`
    display: flex;
    align-items: center;
`

function Title ({imagem, children}: Props) {

    const listImgs: IImages = {
        avaliation: avaliacao,
        graphic: grafico,
        consult: consulta,
    }

    return (
        <>
            <SContainer>
                {imagem && 
                    <SSpan image={listImgs[imagem as keyof IImages] ?? ""} />
                }
                <STitle>{children}</STitle>
            </SContainer>
        </>
        
    )

}

export default Title;