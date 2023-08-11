import styled from "styled-components"

interface Props {
    value: string,
    type: string,
    placeholder: string,
    onChange: (value: string) => void
    label?: string,
}

const SInput = styled.input`
    background: #F0F0F0;
    position: relative;
    margin: 1em 0;
    box-sizing: border-box;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .25);
    border-radius: 8px;
    border: none;
    width: 100%;
    padding: 16px;

    ${props => props.type === 'cep' && `
        padding-left: 40px;
    `}
`

const SSpan = styled.span`
    position: absolute;
    left: 8px;
    top: 55%;
    z-index: 2;
    transform: translateY(-50%);
    font-size: 18px;
`;

const SRotule = styled.label`
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: var(--azul-escuro);
`

const SContainer = styled.div`
    width: 100%;
    position: relative;
`

export default function InputBasic({type, value = "", placeholder, onChange, label}:Props) {
    return (
        <SContainer>
            <SRotule htmlFor="">{label}</SRotule>
            
            { type === 'cep' && (
                <SSpan>📌</SSpan>
            )}

            <SInput
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    required> 
            </SInput>
            
        </SContainer> 
    )
}