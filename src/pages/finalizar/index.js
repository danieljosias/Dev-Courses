import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema'

const BgContainerTitle = "rgb(114, 18, 204)";
const BorderContainerTitle = "#FFF";
const ColorTitle = "#FFF";
const ColorBordForm = "#855EC2";
const ColorLabel = "#855EC2";
const BgSelectFocus = "#855EC2";
const ColorTitleForm = "#855EC2";
const BgButton = "rgb(114, 18, 204)";
const ColorButton = "#FFF";



function finalizar() {

    function onSubmit(values,actions){
        console.log('SUBMIT', values);
    }   


    return (
        <div>
            <ContainerFinalizar>
                 
                    <ContainerTitle>
                        <Title>Finalizar</Title>
                    </ContainerTitle>

                        <Formik
                            validationSchema={schema}
                            onSubmit={onSubmit}
                            validateOnMount
                            initialValues = {{
                                name: '',
                                email: '',
                                card: '',
                                security: '',
                                flag: '',

                            }}
                            render={({values, errors, touched, isValid}) => (
                            
                            <Container>
                                <ContainerTitleForm> 
                                    <TitleForm>Preencha seus dados</TitleForm>
                                </ContainerTitleForm>

                                <ContainerForm>
                                    <Form 
                                
                                    >
                                        <ContainerInput>
                                            <label>Nome</label>
                                            <Field 
                                            style={{border:'1px solid #000'}}
                                            name="name"
                                            type="text"
                                            placeholder="nome"
                                            autoFocus
                                            
                                            />
                                            <ErrorMessage name="name"/>
                                            
                                            <br />
                                            <label>Email</label>
                                            <Field 
                                            style={{border:'1px solid #000'}}
                                            name="email"
                                            type="email"
                                            placeholder="email"
                                    
                                            />
                                            <ErrorMessage name="email"/>
                                        </ContainerInput>

                                        <ContainerInput>
                                        <br />
                                            <label>N° Cartão</label>
                                            <Field 
                                            style={{border:'1px solid #000'}}
                                            name="card"
                                            type="text"
                                            placeholder="número do cartão"
                                            
                                            />
                                            <ErrorMessage name="card"/>

                                            <br />
                                            <label>Código Segurança</label>
                                            <Field 
                                            style={{border:'1px solid #000'}}
                                            name="security"
                                            type="text"
                                            placeholder="código de segurança"
                                            
                                            />
                                            <ErrorMessage name="security"/>
                                        </ContainerInput>
                                        <br />

                                        <ContainerSelect>
                                            <label>Bandeira Cartão: </label> 
                                            
                                            <Field as="select" name="flag">
                                                <option>Selecione</option>
                                                <option>Visa</option>
                                                <option>MasterCard</option>
                                                <option>Elo</option>
                                                <option>Hipercard</option>
                                                <option>American Express</option>
                                            </Field>
                                            <ErrorMessage name="flag"/>
                                            <br/>
                                            <br/>

                                            <label>Parcelas: </label>   
                                            <select>
                                                <option>Selecione</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </ContainerSelect>

                                        <ContainerButton>
                                            <Link to="/agradecimentos"><button type="submit" disabled={!isValid}>Finalizar</button></Link>    
                                        </ContainerButton>
                                    </Form>
                                </ContainerForm>
                            </Container>
                     )} 
                    />
                    
                <Footer />
            </ContainerFinalizar>
        </div>
    )
}

export default finalizar;

const ContainerFinalizar = styled.div`
`

const ContainerTitle = styled.div`
    background-color: ${BgContainerTitle};
    height: 100px;
    margin-bottom: 65px;
    border-top: 1px solid ${BorderContainerTitle};
    border-bottom: 1px solid ${BorderContainerTitle};
`
const Title = styled.h1`
   color: ${ColorTitle};
   text-align: center;
   padding-top:35px;
`
const ContainerTitleForm = styled.div`

`

const TitleForm = styled.h1`
    color: ${ColorTitleForm};
    margin-bottom: 10px;
`
const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center; 

`

const ContainerForm = styled.div`
    border: 1px solid ${ColorBordForm};
    border-radius: 15px 0 15px;
    height: 70%;
    width: 400px;

`


const ContainerInput = styled.div`
     display: flex;
     flex-direction: column;
     margin: 2%;

     label{
         color: ${ColorLabel};
     }
`
const ContainerSelect = styled.div`
     margin: 2%;

     label{
         color: ${ColorLabel};
     }
     
     select{
        width: 80px;
        margin-right: 10px;

        &:focus{
            background-color: ${BgSelectFocus};
        }
     }

`

const ContainerButton = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 45px;

  button{
  width: 110px;
  height: 30px;
  font-size:18pt;
  background-color: ${BgButton};
  border-radius: 15px 10px;
  color: ${ColorButton};
  cursor: pointer;
  }
`
