import styled from "styled-components";
import BG from "./BG_Blue.png"
import { Outlet } from "react-router-dom";

const ContainerMain = styled.div`
    background-image: url(${BG});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    background-color: #FFF;
    width: 50vw;
    height: 100%;
    display: flex;
    padding: 30px 60px;
    flex-direction: column;
    align-items: center;
`

export default function PageBaseForm () {
    return (
        <ContainerMain>
            <Container>
                <Outlet/>
            </Container>
        </ContainerMain>
    );
}