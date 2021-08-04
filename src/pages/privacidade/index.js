import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';

const ColorPrivacidade = "#855EC2";
const BgContainerTitle = "rgb(114, 18, 204)";
const ColorTitle = "#FFF";
const ColorBorderContainerTitle = "#FFF";

function index() {
    return (
        <div>
        <ContainerPrivacidade>

            <ContainerTitle>
                <Title>Política de Privacidade</Title>
            </ContainerTitle>
        
            <Privacidade>
                <h1>Política de privacidade para DevCourses</h1>
                <br />
                <p>Esta é a Política de Privacidade para DevCourses, acessível em https://DevCourses.com.br</p>
                <br />
                <p> <strong> O que são cookies </strong> </p>
                <p> Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados para o seu computador, para melhorar a sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode evitar que esses cookies sejam armazenados, no entanto, isso pode diminuir ou 'quebrar' certos elementos da funcionalidade do site. </p>

                <br />
                <p> <strong> Como usamos cookies </strong> </p>

                <p> Usamos cookies por vários motivos detalhados abaixo. Infelizmente, na maioria dos casos, não há opções padrão da indústria para desabilitar cookies sem desabilitar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa deles ou não, caso sejam usados ​​para fornecer um serviço que você usa. </p>

                <br />
                <p> <strong> Desativando cookies </strong> </p>
                <p> Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação dos cookies normalmente resultará na desativação de certas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies. Esta Política de Cookies foi criada com a ajuda do <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/"> Gerador de Política de Cookies de CookiePolicyGenerator.com </a>. </p>

                <br />
                <p> <strong> Os cookies que definimos </strong> </p>
                <ul>

                <li>
                    <p> Cookies relacionados a login </p>
                    <p> Usamos cookies quando você está conectado para que possamos nos lembrar desse fato. Isso evita que você tenha que fazer login toda vez que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você sai para garantir que você só possa acessar recursos e áreas restritas quando estiver conectado.</p>
                </li>

                </ul>
                <br />
                <p> <strong> Cookies de terceiros </strong> </p>

                <p> Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar neste site. </p>

                <ul>

                <li>
                    <p> Análises de terceiros são usadas para rastrear e medir o uso deste site para que possamos continuar a produzir conteúdo envolvente. Esses cookies podem rastrear coisas como quanto tempo você passa no site ou páginas que visita, o que nos ajuda a entender como podemos melhorar o site para você. </p>
                </li>

                </ul>

                <br />
                <p> <strong> Mais informações </strong> </p>

                <p> Esperamos que isso tenha esclarecido as coisas para você e, como foi mencionado anteriormente, se há algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso eles interajam com um dos recursos que você usa no nosso site. </p>

                <p> Para obter mais informações gerais sobre cookies, leia <a href="https://www.privacypolicyonline.com/what-are-cookies/"> "O que são cookies" </a>. </p>

                <p> No entanto, se ainda estiver procurando por mais informações, você pode entrar em contato conosco por meio de um de nossos métodos de contato preferidos: </p>

                <br />
                <ul>
                <li> Email: DevCourses@gmail.com.br </li>
                </ul>
            </Privacidade>
        </ContainerPrivacidade>
        <Footer />
        </div>
    )
}

export default index;

const ContainerPrivacidade = styled.div`
    
   
`
const Privacidade = styled.div`
    margin: 5%;
    color: ${ColorPrivacidade};
`

const ContainerTitle = styled.div`
    background-color: ${BgContainerTitle};
    height: 100px;
    margin-bottom: 85px;
    border-top: 1px solid ${ColorBorderContainerTitle};
    border-bottom: 1px solid ${ColorBorderContainerTitle}; 
`
const Title = styled.h1`
   color: ${ColorTitle};
   text-align: center;
   padding-top:35px;
`
