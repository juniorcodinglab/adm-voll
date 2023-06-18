import styled from 'styled-components';
import logo from '../../assets/logo.png';
import perfil from '../../assets/perfil.png';

const SHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  2em 4em;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: .1;
`

const SLink = styled.a`
    color: val(--azul-escuro);
    font-weight: 700;
`

function Header() {
    return ( 
        <SHeader>
            <img src={logo} alt="Logo da Empresa" />
            <Container>
                <img src={perfil} alt="Foto Perfil do Usuário" />
                <SLink href="#">Sair</SLink>
            </Container>
        </SHeader>
    )
}

export default Header;