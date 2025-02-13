import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    background-color: darkgrey;
    justify-content: space-around;
    color: black;
    padding: 1em;

    a {
        color: black;
        text-decoration: none;
        margin: 0 10px;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default function Header({ propsStatus }) {

    const handleClick = () => {
        const { status, setStatus } = propsStatus
        setStatus(!status)
    }

    return (
        <StyledHeader>
            <div>
                <h1>Prontuário de Pacientes</h1>
            </div>
            <div>
                <a href="#" onClick={handleClick}>Cadastrar</a>
                <a href="#" onClick={handleClick}>Exibir</a>
            </div>
        </StyledHeader>
    );
}
