import produce from 'immer'; // produce immer é um tipo de produtor de valores que mantém estado (state) junto ao redux

/*
** funções reducer e reducerAmountCart responsável pelo comportamento das ações dispatch em react-redux
** conforme o tipo (type ou action.type) lançado durante o uso da aplicação react.js.
** o state para o estado da loja (store) e action das ações (dispatch) da aplicação
**/

const INITIAL_AMOUNT = {
  amount: []
}

const INITIAL_CART = {
  cart: []
}

// responsável por adicionar course ao carrinho através dos dispatchs
const reducer = produce((draft, action) => {
  switch (action.type) {
    case '@cart/addSuccess':
      const {product} = action;
      draft.cart[product[0].id] = product;
      break;
      default:   
      return draft;
  }
}, INITIAL_CART)

// responsável por atualizar a quantia de cada course individualmente
const reducerAmountCart = produce((draft, action) => {
  switch (action.type) {
    // case responsável por adicionar quantia de courses ao adicionar ao carrinho
    case '@cart/amountSuccess':
      if(typeof draft.amount[action.id] === 'undefined')
        draft.amount[action.id] = 1;
      else
        draft.amount[action.id]++;
      break;
    
    case '@cart/incremented':
        draft.amount[action.id]++;
      break;
      default:
    // case responsável por atualizar a quantia de courses subtraindo (decremented)
    break;
    case '@cart/decremented':
      if(draft.amount[action.id] > 0)
        draft.amount[action.id]--;
      
     
  }
}, INITIAL_AMOUNT)

// exporta os reducers individualmente
export {reducer, reducerAmountCart};