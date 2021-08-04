import React, {Component} from 'react'; // importe de React
import {bindActionCreators} from 'redux'; // importar de redux
import { connect } from 'react-redux'; // importar de react-redux
import { increment, decrement, add } from '../../store/actions'; // importar de store/actions
import Footer from '../../components/footer/Footer';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const ColorHeaderListCart = '#FFF';
const BgHeaderListCart = 'rgb(114, 18, 204)';
const ColorItemListCart = '#000';
const BgItemListCart = '#FFF';
const BgBtnAmountCart = 'rgb(114, 18, 204)';
const ColorBtnAmountCart = '#FFF';
const BgFooterListCart = 'rgb(114, 18, 204)';
const ColorFooterListCart = '#FFF';
const BgNotification = '#90EE90';
const ColorNotification= '#000';
const BgContainerCart = 'rgb(114, 18, 204)';
const ColorContainerCart= '#FFF';
const BorderContainerCart= '#FFF';
const ColorLinkHome = '#FFF';
const BgBtnFinalizar = 'rgb(114, 18, 204)';
const ColorBtnFinalizar = "#FFF";

// declare Cart como componente de classe que herda (estende) de Component 
class Cart extends Component {
  
  state = {
    addSuccess: 'block'
  } 

  render() {
    let total = 0;
    const {
      id, // id para representar a notificação de adição de item ao carrinho com sucesso
      cart, // text para a interpolação dos valores da lista (objeto literal)
      amount, // amount para representar a quantia de cada livro no carrinho individualmente
      increment,  // representa o incremento (soma) da quantia de livros
      decrement,  // representa o decremento (subtração) da quantia de livros
    } = this.props; // obtém de this.props os objetos (id, add, cart, amount, increment, decrement)

    // responsável em retirar a exibição da notificação de adição de item ao carrinho de compras
     
    const addCartSuccess = () => {
      this.setState({
        addSuccess: 'none'
      });
    }
    setTimeout(addCartSuccess, 3000); // ocultar a notificação em 3 segundos 


    // responsável pelo preço total de todos os items ao carrinho de compras
    const totalCart = (price, amount) => {
      total += price * amount;
      return total.toFixed(2);  // fixe somente duas casas decimais depois da vírgula
    }

    // responsável pelo preço subtotal de cada livro individualmente
    const subTotal = (price, amount) => {
      return (price * amount).toFixed(2); // fixe somente duas casas decimais depois da vírgula
    }

    // responsável pela exibição (show) do carrinho de compras
    const ShowCart = () => {
      // renderiza (exiba) o HTML do carrinho de compras
      return (cart.length > 0) ? cart.map((course, index) => {return <React.Fragment key={index}>
        <HeaderListCart>
          <ItemCart >PREÇO</ItemCart>
          <ItemCart >QUANTIDADE</ItemCart>
          <ItemCart>SUBTOTAL</ItemCart>
        </HeaderListCart>

        <ItemListCart>
          <ItemImgCart alt="logo" src={course[0].img} width={150} height={150}></ItemImgCart>
          <ItemPriceCart>R$ {course[0].price}</ItemPriceCart>
          
          <ContainerBtnAmountCart>
            <BtnAmountCart onClick={() => decrement(course[0].id)}>-</BtnAmountCart> 
            &nbsp;{amount[course[0].id]}&nbsp; 
            <BtnAmountCart onClick={() => increment(course[0].id)}>+</BtnAmountCart>
          </ContainerBtnAmountCart>

          <ItemCartSubTotal>R$ {subTotal(course[0].price, amount[course[0].id])}</ItemCartSubTotal>
        </ItemListCart>

        <FooterListCart>TOTAL R$ {totalCart(course[0].price, amount[course[0].id])}</FooterListCart>
        </React.Fragment>
      }) : <h4 style={{marginTop: '25%', textAlign: 'center', fontSize: '20pt',}}>Carrinho Vázio</h4>

    
    }

    // agora, renderiza (exiba) o HTML
    return (
      <>
      {(cart.length > 0) ? <Notification style={{display: this.state.addSuccess}}>{id.split('-').join(' ')}</Notification> : ''}
      <ContainerCart>
          <HeaderCart>
              <TitleCart>CARRINHO DE COMPRAS</TitleCart>
              <Link to="/front"><LinkHome> LISTA DE CURSOS</LinkHome></Link>
          </HeaderCart>

          <ListCart>
            {ShowCart()}
          </ListCart>

          <ContainerBtn>
           <Link to="/finalizar"><BtnFinalizar>Finalizar</BtnFinalizar></Link>    
          </ContainerBtn>

          <Footer />
      </ContainerCart>
      </>
    );
  }
}


const HeaderListCart = styled.header`
  color: ${ColorHeaderListCart};
  background-color: ${BgHeaderListCart};

  display: flex;
  font-weight: bold;
  align-items: center;
  padding: 20px;
  margin-top: 50px;

  @media (max-width: 1024px){
    width: 925px;
  }

  @media (max-width: 780px){
    width: 690px;
  }
`
const ItemCart = styled.span`
  position: relative;
  left: 280px;
  padding-right: 250px;

  @media (max-width: 1024px){
    position: relative;
    left: 180px;
    
  }

  @media (max-width: 780px){
    position: relative;
    left: 180px;
    padding-right: 100px;
  }
`
const ItemImgCart = styled.img`

`

const ItemPriceCart = styled.span`
  position: relative;
  left: 145px;

  @media (max-width: 1024px){
    position: relative;
    left: 40px;
    
  }

  @media (max-width: 780px){
    position: relative;
    left: 40px;
    
  }
`
const ItemListCart = styled.div`
  color: ${ColorItemListCart};
  background-color: ${BgItemListCart};

  display: flex;
  font-weight: bold;
  align-items: center;
`
const ContainerBtnAmountCart = styled.div`
  position: relative;
  left: 395px;

  @media (max-width: 1024px){
    position: relative;
    left: 295px;
    
  }
  @media (max-width: 780px){
    position: relative;
    left: 145px;
    
  }

`
const BtnAmountCart = styled.button`
  width: 30px;
  background-color: ${BgBtnAmountCart};
  color: ${ColorBtnAmountCart};
  font-size: 14pt;
  font-weight: bold;
  border-radius: 100%;
  `
  const ItemCartSubTotal = styled.div `
    position: relative;
    left: 665px;

    @media (max-width: 1024px){
    position: relative;
    left: 565px;
  }
    @media (max-width: 780px){
    position: relative;
    left: 265px;
  }
  `
const FooterListCart = styled.footer`
  background-color: ${BgFooterListCart};
  color: ${ColorFooterListCart};
  font-weight: bold;
  text-align: right;
  padding: 10px;
`

const Notification = styled.h6`
  position: fixed;
  left: 10px;
  bottom: 100px;
  font-size: 14pt;
  padding: 10px;
  background: ${BgNotification};
  color: ${ColorNotification};
`

const ContainerCart = styled.div`
  background-color: ${BgContainerCart};
  color: ${ColorContainerCart};
  height: 70px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${BorderContainerCart};
  border-top: 1px solid ${BorderContainerCart};
`
const HeaderCart = styled.header`
  text-align: center;
`
const TitleCart = styled.h1`
`
const LinkHome = styled.span`
  color: ${ColorLinkHome};
`
const ListCart = styled.div`
  margin: 20px auto;
`
const ContainerBtn = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 135px;
`

const BtnFinalizar = styled.button`
  width: 110px;
  height: 30px;
  font-size:18pt;
  background-color: ${BgBtnFinalizar};
  border-radius: 15px 10px;
  color: ${ColorBtnFinalizar};
  cursor: pointer;
`

// declare método padrão (mapStateToProps) do React para recuperar os valores da Store que vem de combineReducers do script main.js
const mapStateToProps = store => ({
  cart: store.clickCart.cart, // obtém de combineReducers de main.js
  amount: store.clickAmount.amount, // obtém de compineReducers de main.js
});

// declare método padrão (mapDispatchToProps) para realizar dispatch (ações) para increment, decrement e add com bindActionCreators
const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment, decrement, add }, dispatch); // vincula (bind) ações (actions) com bindActionCreators

// exporta connect vinculando métodos padrão acima ao componente Cart para que o combineReducers funcione em main.js
export default connect(mapStateToProps, mapDispatchToProps)(Cart);