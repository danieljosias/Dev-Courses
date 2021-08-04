import React, {Component} from 'react'; // importar de react
import {bindActionCreators} from 'redux'; // importar de redux
import {connect } from 'react-redux'; // importar de react-redux
import { add } from '../../store/actions'; // importar de store/actions
import Footer from '../../components/footer/Footer';
import {Link, Redirect } from "react-router-dom";
import styled from 'styled-components';

const BgHomeHeader = 'rgb(114, 18, 204)';
const ColorHomeHeader = '#FFF';
const ColorBorderHomeHeader = '#FFF';
const ColorLinkCart = '#FFF';
const BgListRow = 'rgb(255,255,255)';
const ColorBorderListRow = 'rgb(114, 18, 204)';

const ColorListRow = "#000";

const BgListButton = 'rgb(114, 18, 204)';
const ColorListButton = '#FFF';
const ColorBorderListButton = '#000';

const BgAddCart = '#000';

const BgLinkCart = '#000';

// declare Home como componente de classe que herda (estende) de Component 
class Front extends Component {
 // hook state responsável pelo redirecionamento ao carrinho de compras após de adicionar um item
 state = {
  redirect: null  // define como indefinido (nulo)
}

  // renderiza (exiba) o HTML
  render() {
    
    const coursesjson = [
      {id: 1, title: 'Java Script', price: 39.99, img: 'http://www.logotypes101.com/logos/531/E9BC19EB93F4FEA9236932ABAD8A7CFF/js.png'},
      {id: 2, title: 'HTML5', price: 29.99, img: 'https://www.kutub-download.com/wp-content/uploads/2011/06/html-pdf.jpg'},
      {id: 3, title: 'CSS3', price: 29.99, img: 'https://www.logolynx.com/images/logolynx/8c/8cdf4c047e99f7389e76aa4e2e7e2803.png'},
    ]
    
    const {
      add,  // add para adicionar lista (objeto literal) que representa um JSON
      amount, // amount responsável pela quantia de cada livro individualmente
    } = this.props; // obtém de this.props os objetos (add, cart e amount)

    // declare uma função addCourse para adicionar lista (objeto literal)
    const addCourse = course => {
      add(course); // adicione à lista
      // define (set) o hook state como botão clicado para redirecionar ao carrinho de compras
      this.setState({
        redirect: 'clicked' // clicked diz que o botão de adicionar livro com clicado
      });
    }

    const addCartSuccess = () => {
      this.setState({
        addSuccess: 'none'
      });
    }
    setTimeout(addCartSuccess, 3000); // ocultar a notificação em 3 segundos 
    

    // se botão addCourse clicado, então redirecionar ao carrinho de compras
    if(this.state.redirect !== null)
      // course-adicionado-com-sucesso responsável pela exibição da notificação no carrinho de compras
      return <Redirect to="/cart/Curso-adicionado-com-sucesso" 
      />

    // agora, renderiza (exiba) o HTML
    return (
      <>
      <ContainerFront>
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
      </ContainerFront>
      </>
    );
  }
}

const ContainerFront = styled.div`
`
const HomeHeader = styled.div`
  background-color: ${BgHomeHeader};
  color: ${ColorHomeHeader};
  text-align: center;
  border-top: 1px solid ${ColorBorderHomeHeader};
  border-bottom: 1px solid ${ColorBorderHomeHeader}; 
  padding: 20px;
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
  

  @media (max-width: 1024px) {
    padding: 10px;

  }

  @media (max-width: 780px) {
    padding: 10px;
    margin-top: 100px;
    margin-bottom: 180px;
    height: 180px;
    width: 185px;

    img{
      width: 90px;
      height: 90px;
    }

    p{
      font-size: 12pt;
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 310px;
    margin-top: 80px;
    padding-top: 40px;
    height: 150px;
    width: 120px;

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
  font-size: 14pt;
  background-color: ${BgListButton};
  color: ${ColorListButton};
  border: 1px solid ${ColorBorderListButton};
  padding: 10px 10px;

  .add-cart{
    padding: 10px;
    background: ${BgAddCart};
    margin-left: -10px;
  }

  .text-add-cart{
    font-size: 14pt;
    margin-left: 8px;
  }

  @media (max-width: 1024px) {
    height: 35px;
    
    .add-cart{
      padding-bottom: 3px;
      padding-top: 10px;
      
    }

    .text-add-cart{
    font-size: 12pt;
    margin-left: 8px;
    
    }
  }
  
  @media (max-width: 780px) {
    height: 35px;
    
    .add-cart{
      padding-bottom: 3px;
      padding-top: 10px;
      position: relative;
      left: -1px;
    }

    .text-add-cart{
    font-size: 8pt;
    margin-left: 4px;
    position: relative;
    top: -6px
    
  }

  }

  @media (max-width: 500px) {
    height: 25px;

    .add-cart{
      padding-top: 0px;
      position: relative;
      top: -10px;
    }

    .text-add-cart{
    font-size: 4pt;
    margin-left: 8px;
    position: relative;
    top: -13px;
    left: -5px;
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
export default connect(mapStateToProps, mapDispatchToProps)(Front);