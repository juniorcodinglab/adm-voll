import { useState } from "react";
import InputBasic from "../../components/InputBasic";

import Logo from './Logo_Voll.png'
import Botao from "../../components/Botao";
import styled from "styled-components";

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

export default function Login() {
    const [email, setEmail] = useState('');

    return <>
        <img src={Logo} alt="Logo da Voll" />
        <STitle>Faça login em sua conta</STitle>

        <InputBasic 
            value={email}
            type="email"
            placeholder="Insira seu e-mail"
            onChange={setEmail}
            label="Email"
            />
        <InputBasic 
            value={email}
            type="password"
            placeholder="Insira sua senha"
            onChange={setEmail}
            label="Senha"
            />

        <Botao>Entrar</Botao>

        <SForgot href="#">Esqueceu sua senha?</SForgot>

        <SRegister>Ainda não tem conta? <a href="#">Faça seu cadastro</a></SRegister>
    </>
}