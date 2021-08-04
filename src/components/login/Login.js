import React from 'react';
import fire from '../../firebase';
import styled from 'styled-components';
import ParticleBackground from '../../ParticlesBackground';

const ColorTitle = "#8552C2";
const ColorBorderBtn = "#000";
const ColorBorderInput = "#000";
const HoverBgButton = "#8552C2";


class Login extends React.Component{

    Login(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            alert('Login bem sucedido')
        })
        .catch((err) => {
            alert('Ocorreu algum erro')
        })
    }

    signUp(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            alert('Cadastro bem sucedido')
        })
        .catch((err) => {
            alert('Ocorreu algum erro')
        })
    }


    render(){
        return (
            <div>
               
                <ContainerLogin>
                    <ParticleBackground />
                    <ContainerTitle>
                        <Title>Login</Title>
                    </ContainerTitle>

                    <ContainerInput>
                        <Input
                        type="text"
                        placeholder="email"
                        autoFocus
                        required
                        id="email"

                        />
                        <br/>
                        <Input
                        type="password"
                        placeholder="senha"
                        autoFocus
                        required
                        id="password"

                        />
                    </ContainerInput>
    
                    <ContainerButton>
                       
                        <Button onClick={this.Login}>Sign In</Button> 
                        <br/>
                        
                            <ContainerConta>
                                <p>Não tem conta?</p> <span><button onClick={this.signUp}> <a href="/signup">Sign Up</a> </button> </span>
                            </ContainerConta>
                    </ContainerButton>

                    <ParticleBackground />
                </ContainerLogin>
            </div>
        )
    }
    
}

export default Login;

const ContainerLogin = styled.div`
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContainerTitle = styled.div``

const Title = styled.h2`
    color: ${ColorTitle};
`
const ContainerInput = styled.div``

const Input = styled.input`
    border: 1px solid ${ColorBorderInput};
    margin-bottom: 5px;
    width: 180px;
`
const ContainerButton = styled.div`
    p{
        margin-right: 5px;
        cursor: pointer;
    }

    span{
        cursor: pointer;
    }
`

const Button = styled.button`
    cursor: pointer;
    border-radius: 15px solid ${ColorBorderBtn};
    width: 180px;

    &:hover{
        background-color: ${HoverBgButton};
        transition: all ease .3s;
    }
`

const ContainerConta = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

`