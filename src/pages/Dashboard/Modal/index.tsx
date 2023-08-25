import { Box, Modal } from "@mui/material";
import Title from "../../../components/Title";
import styled from "styled-components";

interface IModalCadastro {
    open: boolean,
    handleClose: () => void;
};

const SBox = styled(Box)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    max-height: 90vh;
    overflow-y: auto;
    background-color: #FFF;
    border: none;
    border-radius: 16px;
    padding: 1em 5em;
`

export default function ModalCadastro({open, handleClose}: IModalCadastro) { 

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-Labelledby="Modal de cadastro do especialista"
            aria-describedby="Nesse modal terá os dados de cadastro do especialista "
        >
            <SBox>
                <Title>Cadastre o especialista inserindo os dados abaixo. </Title>
            </SBox>

        </Modal>
    );
}
