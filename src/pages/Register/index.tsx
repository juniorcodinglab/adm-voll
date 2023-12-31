import styled from 'styled-components'
import logo from './Logo_Voll.png'
import { Step, StepLabel, Stepper } from '@mui/material'
import { useState } from 'react'
import InputBasic from '../../components/InputBasic'
import Botao from '../../components/Botao'
import IClinica from '../../types/IClinicas'
import usePost from '../../usePost'
import { useNavigate } from 'react-router-dom'

const Img = styled.img`
    padding: 2em 0;
`

interface PropsCustom {
    color: string
}

const StepCustomizada = styled.div<PropsCustom>`
    background-color: ${({color}) => color };
    width: 16px;
    height: 16px;
    border-radius: 50%;
`;

const STitle = styled.h4`
    font-size: 24px;
    font-weight: 700;
    color: var(--cinza);
    text-align: center;
`;

const SButton = styled(Botao)`
    width: 50%;
    margin: 0 auto;
`;

const SForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  //align-items: center;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between;
`;

const SRotule = styled.label`
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: var(--azul-escuro);
    margin-bottom: 10px;
`


export default function Register() {
    const [etapaAtiva, setEtapaAtiva] = useState(0);
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [estado, setEstado] = useState('');
    const { cadastrarDados, error, success} = usePost();

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // previne o envio padrão do formulário

       // setEtapaAtiva(etapaAtiva + 1); // atualiza o estado da etapa para a próxima etapa

        const clinica: IClinica = {
            email: email,
            nome: nome,
            senha: password,
            endereco: {
                cep: cep,
                rua: endereco,
                numero: numero,
                complemento: complemento,
                estado: estado
            }
        }

        if(etapaAtiva == 1) {
            try{ 
                cadastrarDados({url: 'clinica', dados: clinica});
                navigate('/login'); // Redireciona para Login 
            } catch (errorP) {
                errorP && alert('Erro ao cadastrar os dados')
            }
        }

        setEtapaAtiva(etapaAtiva + 1);
    }

    return (
        <>
            <Img src={logo} alt="Logo da Voll"/>
            <Stepper activeStep={etapaAtiva}>
                <Step>
                    <StepLabel StepIconComponent={(props) => (
                        <StepCustomizada color={props.active ? 'lightblue' : 'lightgray'}/>
                    )}/>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={(props) => (
                        <StepCustomizada color={props.active ? 'lightblue' : 'lightgray'}/>
                    )}/>
                </Step>
            </Stepper>
            <STitle>Primeiro, alguns dados básicos:</STitle>

            <SForm onSubmit={handleSubmit}>
                { etapaAtiva == 0 ? ( <>
                    <InputBasic 
                        type='text' 
                        label='Nome'
                        value={nome}
                        onChange={setNome}
                        placeholder="Digite o nome da clínica"/>
                    <InputBasic 
                        type='text' 
                        label='CNPJ'
                        value={cnpj}
                        onChange={setCnpj}
                        placeholder="Digite o CNPJ"/>
                    <InputBasic 
                        type='text' 
                        label='E-mail'
                        value={email}
                        onChange={setEmail}
                        placeholder="Insira o endereço de e-mail para login"/>
                    <InputBasic 
                        type='password' 
                        label='Senha'
                        value={password}
                        onChange={setPassword}
                        placeholder="Digite sua senha"/>
                    <InputBasic 
                        type='password' 
                        label='Repita a senha'
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                        placeholder="Repita a senha anterior"/>
                </>) : (<>
                    <InputBasic 
                        type='text' 
                        label='Telefone'
                        value={telefone}
                        onChange={setTelefone}
                        placeholder="Digite o telefone"/>

                    <SRotule>Endereço</SRotule>

                    <InputBasic 
                        type='cep' 
                        label='CEP'
                        value={cnpj}
                        onChange={setCnpj}
                        placeholder="Insira o seu CEP"/>

                    <InputBasic 
                            type='text' 
                            value={endereco}
                            onChange={setEndereco}
                            placeholder="Rua"/>

                    <Container>
                        <InputBasic 
                            type='text' 
                            value={numero}
                            onChange={setNumero}
                            placeholder="Número"/>

                        <InputBasic 
                            type='text' 
                            value={complemento}
                            onChange={setComplemento}
                            placeholder="Complemento"/>

                    </Container>

                    <InputBasic 
                            type='text' 
                            value={estado}
                            onChange={setEstado}
                            placeholder="Estado"/>
                </>) }

                <SButton type="submit">
                    { etapaAtiva == 0 ? "Avançar": "Cadastrar" }
                </SButton>
            </SForm>
        </>
    )
}