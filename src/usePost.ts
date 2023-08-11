import { useState } from "react";
/**
 * <T> = Um Tipo generíco de retorno, pode retornar qualquer coisa
 * Funções Assíncronas retornam Promisses
 */
export default function usePost() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false,);

    async function cadastrarDados<T>({url, dados}: {url: string, dados: T }) {
        try{
            await fetch(`http://localhost:8080/${url}`, {
                method: 'POST',
                body: JSON.stringify(dados)
            })
            setSuccess(true);
        } catch(error) {
            setError('Não foi possível enviar os dados')
        }
    }

    return { cadastrarDados, success, error };
}