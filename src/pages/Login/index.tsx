import { useState } from "react";
import InputBasic from "../../components/InputBasic";

import Logo from './Logo_Voll.png'
import Botao from "../../components/Botao";
import styled from "styled-components";
import usePost from "../../usePost";
import autenticaStore from "../../stores/autentica.store";
import { Navigate, useNavigate } from "react-router-dom";

const STitle = styled.h4`
    font-size: 24px;
    color: var(--cinza);
    font-weight: 700;
`

const SForgot = styled.a`
    font-size: 16px;
    color: var(--azul-escuro);
    text-decoration: none;
    margin-top: 5px;
`

const SRegister = styled.span`
    font-size: 16px;
    color: var(--cinza);
    margin-top: 15px;

    a {
        color: var(--azul-claro);
        text-decoration: none;
        font-weight: 700;
    }
`

const SForm = styled.form`
    width: 100%;
`;

interface ILogin {
    email: String;
    senha: String;
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const { cadastrarDados, error, success, resposta } = usePost();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const usuario: ILogin = {
            email: email,
            senha: senha
        }

        try {
            cadastrarDados({ url: "auth/login", dados: usuario })
            autenticaStore.login({email: email, token: resposta }); 

            resposta && navigate('/dashboard');
        } catch (error) {
            error && alert('Não foi possível fazer o login')
        }
    };

    return <>
        <img src={Logo} alt="Logo da Voll" />

        <STitle>Faça login em sua conta</STitle>

        <SForm onSubmit={handleLogin}>
            <InputBasic 
                value={email}
                type="email"
                placeholder="Insira seu e-mail"
                onChange={setEmail}
                label="Email"
            />
            <InputBasic 
                value={senha}
                type="password"
                placeholder="Insira sua senha"
                onChange={setSenha}
                label="Senha"
                />

            <Botao type="submit">Entrar</Botao>
        </SForm>

        <SForgot href="#">Esqueceu sua senha?</SForgot>

        <SRegister>Ainda não tem conta? <a href="#">Faça seu cadastro</a></SRegister>
    </>
}