import {all, put, takeLatest} from 'redux-saga/effects'  // importe de redux-saga/effects
import { addSuccess, cartAmountUpdateSuccess } from './actions'; // importar de store/actions

/* ### métodos para redux saga que funcionam por trás dos panos na aplicação aos quais você queira ###
** ### que funcione junto aos componentes como Home, Cart e ShowCart ###
**/

// representa o BACK-END. Caso queira para a produção, desconsidere esse objeto coursesjson caso queira um banco de dados real
const coursesjson = [
    {id: 1, title: ' Java Script', price: 49.99, img: 'http://www.logotypes101.com/logos/531/E9BC19EB93F4FEA9236932ABAD8A7CFF/js.png'},
    {id: 2, title: 'HTML5', price: 29.99, img: 'https://catalin.red/dist/uploads/2011/01/css3-html5-logo-initial.png'},
    {id: 3, title: 'CSS3', price: 29.99, img: 'https://www.logolynx.com/images/logolynx/8c/8cdf4c047e99f7389e76aa4e2e7e2803.png'},
    
    {id: 4, title: 'C#', price: 49.99, img: 'https://ih0.redbubble.net/image.416412087.0587/pp,550x550.jpg'},
    {id: 5, title: 'Java', price: 29.99, img: 'https://logospng.org/download/java/logo-java-4096.png'},
    {id: 6, title: 'Spring', price: 29.99, img: 'https://thumbs.dreamstime.com/b/spring-logo-design-13350112.jpg'},
    
    {id: 7, title: 'Swift', price: 49.99, img: 'https://logowik.com/content/uploads/images/swift.jpg'},
    {id: 8, title: 'React Native', price: 29.99, img: 'https://miro.medium.com/max/700/1*GkR93AAlILkmE_3QQf88Ug.png'},
    {id: 9, title: 'Android', price: 29.99, img: 'https://www.neonexus.com.br/wp-content/uploads/2018/01/android-logo-300x300.png'}
];

// function saga responsável por executar em segundo plano
function* addToCart({id}) {

    // obtém um course através do ID
    const course = coursesjson.map(course => (course.id === id) ? course : null);

    // faz dispatch através de put de redux-saga/effects, responsável pelos efeitos colaterais em redux no react.js
    yield put(addSuccess([course[id - 1]]));
    yield put(cartAmountUpdateSuccess(id));
}

/* ### exporta como padrão com all (que junta todos os sagas de redux) com takeLatest para cada ação de add (adicionar) 
** ### quando houver cliques no botão em Home, ou seja, takeLatest ouve os eventos de adiçao de courses e nos cliques no botão
   ### em scripts Home. Você poderá adiconar mais eventos se quiser além desse que está embaixo.
**/
export default all([
    takeLatest('add', addToCart),
]);
