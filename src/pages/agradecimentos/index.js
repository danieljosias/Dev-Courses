import React from 'react'
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';

const BgContainerTitle = "rgb(114, 18, 204)";
const ColorBorderContainerTitle = "#FFF";
const ColorTitle = "#FFF";
const ColorFinalizar = "rgb(114, 18, 204)";

function Agradecimentos() {
    return (
        <div>
        <ContainerFinalizar>

            <ContainerTitle>
                <Title>Agradecimentos</Title>
            </ContainerTitle>

            <FinalizarText>
                <p>Olá, querido(a) cliente.</p>
                Obrigado pela preferência, enviaremos um email<br/> de confirmação para sua caixa de entrada.
                <br/>Faça bom proveito do seu curso.
                <br/>
                <br/>
                Atenciosamente, DevCourses.  
            </FinalizarText>
        </ContainerFinalizar>
        <Footer />
        </div>
    )
}

export default Agradecimentos;


const ContainerFinalizar = styled.div`
    height: 84vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ContainerTitle = styled.div`
    background-color: ${BgContainerTitle};
    height: 90px;
    border-top: 1px solid ${ColorBorderContainerTitle};
    border-bottom: 1px solid ${ColorBorderContainerTitle};
`
const Title = styled.h1`
   color: ${ColorTitle};
   text-align: center;
   padding-top:35px;
`

const FinalizarText = styled.div`
    font-size: 18pt;
    font-weight: bold;
    color: ${ColorFinalizar};
    margin-top: 10%;
`
