import React, {Component} from 'react'; // importar de react
import {bindActionCreators} from 'redux'; // importar de redux
import {  connect } from 'react-redux'; // importar de react-redux
import { add } from '../../store/actions'; // importar de store/actions
import Footer from '../../components/footer/Footer';
import styled from 'styled-components';
import {Link, Redirect} from "react-router-dom";

const BgHomeHeader = 'rgb(114, 18, 204)';
const ColorHomeHeader = '#FFF';
const ColorBorderHomeHeader = '#FFF';
const ColorLinkCart = '#FFF';

const BgListRow = 'rgb(255,255,255)';
const ColorListRow = '#000';
const ColorBorderListRow = 'rgb(114, 18, 204)';

const BgListButton = 'rgb(114, 18, 204)';
const ColorListButton = '#FFF';
const ColorBorderListButton = '#000';

const BgAddCart = '#000';
const BgLinkCart = '#000';

// declare Home como componente de classe que herda (estende) de Component 
class Back extends Component {
  // hook state responsável pelo redirecionamento ao carrinho de compras após de adicionar um item
  state = {
    redirect: null  // define como indefinido (nulo)
  }

  // renderiza (exiba) o HTML
  render() {
    
    const coursesjson = [
      {id: 4, title: 'C#', price: 49.99, img: 'https://static.cdnlogo.com/logos/c/27/c.svg'},
      {id: 5, title: 'Java', price: 29.99, img: 'https://logospng.org/download/java/logo-java-4096.png'},
      {id: 6, title: 'Spring', price: 29.99, img: 'https://thumbs.dreamstime.com/b/spring-logo-design-13350112.jpg'}
    ];
    
    const {
      add,  // add para adicionar lista (objeto literal) que representa um JSON
      amount, // amount responsável pela quantia de cada livro individualmente
    } = this.props; // obtém de this.props os objetos (add, cart e amount)

    // declare uma função addCourse para adicionar lista (objeto literal)
    const addCourse = course => {
      add(course); // adicione à lista
      // define (set) o hook state como botão clicado para redirecionar ao carrinho de compras
      this.setState({
        redirect: 'clicked' // clicked diz que o botão de adicionar course com clicado
      });
    }

    // se botão addCourse clicado, então redirecionar ao carrinho de compras
    if(this.state.redirect !== null)
      // course-adicionado-com-sucesso responsável pela exibição da notificação no carrinho de compras
      return <Redirect to="/cart/curso-adicionado-com-sucesso" />

    // agora, renderiza (exiba) o HTML
    return (
      <>
      <ContainerBack>
        <HomeHeader>
          <TitleHeader>LISTA DE CURSOS</TitleHeader>
          <Link to="/show-cart"><LinkCart>CARRINHO</LinkCart></Link>
        </HomeHeader>

        <ContainerCursos>
          <ListCursos>
            {coursesjson.map((course,index) => <React.Fragment key={index}>
              <ListRow>
                <p><img alt="logo" src={course.img} width={150} height={200} /></p>
                <p>{course.title}</p>
                <p>R$ {course.price}</p>
                <p>
                  <ListButton onClick={() => addCourse(course.id)}>
                    <span className="add-cart">{(amount[course.id] > 0) ? amount[course.id] : 0}</span><span className="text-add-cart">ADICIONAR AO CARRINHO</span>
                  </ListButton>
                </p>
              </ListRow>
            </React.Fragment>)}
          </ListCursos>
        </ContainerCursos>
        <Footer />
      </ContainerBack>
      </>
    );
  }
}

const ContainerBack = styled.div`
`
const HomeHeader = styled.header`
  background-color: ${BgHomeHeader};
  color: ${ColorHomeHeader};
  text-align: center;
  padding: 20px 0 20px 0;
  border-top: 1px solid ${ColorBorderHomeHeader};
  border-bottom: 1px solid ${ColorBorderHomeHeader}; 
`
const TitleHeader = styled.h1`
  @media (max-width: 780px){
    font-size: 16pt;
  }

  @media (max-width: 500px){
    font-size: 14pt;
  }
`
const LinkCart = styled.button`
  color: ${ColorLinkCart};
  font-size: 14pt;

  background-color: ${BgLinkCart};
  border-radius: 15px;
  width: 200px;
  padding: 5px;
  cursor: pointer;

  @media (max-width: 780px){
    font-size: 12pt;
  }

  @media (max-width: 500px){
    font-size: 10pt;
  }
`
const ContainerCursos = styled.div`
 margin-top: -80px;
`
const ListCursos = styled.div`
  display: flex;
  font-size:  13pt;
`
const ListRow = styled.div`
  color: ${ColorListRow};
  text-align: center;
  margin: 10% auto;
  padding: 50px;
  font-weight: bold;
  font-size: 14pt;
  background-color: ${BgListRow};
  border: 3px solid  ${ColorBorderListRow};
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 10px;

  }

  @media (max-width: 780px) {
    margin-top: 100px;
    margin-bottom: 180px;
    padding: 10px;
    height: 180px;
    width: 180px;

    img{
      width: 90px;
      height: 90px;
    }
  }

  @media (max-width: 500px) {
    height: 150px;
    width: 120px;
    padding-top: 40px;
    margin-bottom: 230px;
    margin-top: 80px;

    img{
      width: 40px;
      height: 40px;
    }

    p{
      font-size: 10pt;
      margin-bottom: 2px;
    }
  }
`
const ListButton = styled.button`
  cursor: pointer;
  height: 40px;
  width:280px;
  font-size: 14pt;
  background-color: ${BgListButton};
  color: ${ColorListButton};
  border: 1px solid ${ColorBorderListButton};

  .add-cart{
    padding: 10px;
    background: ${BgAddCart};
    margin-left: -20px;
  }

  .text-add-cart{
    font-size: 14pt;
    margin-left: 8px;
  }

  @media (max-width: 1024px) {
    height: 35px;
    
    .add-cart{
      padding-bottom: -3px;
      padding-top: 6px;
      
    }

    .text-add-cart{
    font-size: 12pt;
    margin-left: 8px;
    
    }
  }
  
  @media (max-width: 780px) {
    height: 35px;
    width: 160px;
    
    .add-cart{
      position: relative;
      top: -1px;
    }

    .text-add-cart{
    font-size: 8pt;
    margin-left: 8px;
    
  }

  }

  @media (max-width: 500px) {
    height: 25px;
    width: 120px;

    .add-cart{
      position: relative;
      top: -2px;
      left: -5px;
      padding: 0 5px;
      padding-bottom: 3px;
    }

    .text-add-cart{
    font-size: 5pt;
    margin-left: 2px;
    position: relative;
    top: -2px
  }

  }
`

// declare método padrão (mapStateToProps) do React para recuperar os valores da Store que vem de combineReducers do script main.js
const mapStateToProps = store => ({
  cart: store.clickCart.cart, // obtém de combineReducers de main.js
  amount: store.clickAmount.amount,
});

// declare método padrão (mapDispatchToProps) para realizar dispatch (ações) para add com bindActionCreators
const mapDispatchToProps = dispatch =>
  bindActionCreators({ add }, dispatch); // vincula (bind) ações (actions) com bindActionCreators

// exporta connect vinculando métodos padrão acima ao componente Home para que o combineReducers funcione em main.js
export default connect(mapStateToProps, mapDispatchToProps)(Back);