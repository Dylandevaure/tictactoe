import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from "./Voiture";
import Garage from "./Garage";
import Square from "./Square";
import Board from "./Board";
import Game from "./Game";
import * as serviceWorker from './serviceWorker';

// function monComposant(){
//     return <p>Trop cool ce nouveau composant</p>;
// }

// Syntaxe JSX - Javascript XML, elle nous permet d'écrire de l'HTML en React.
// const myelement = (<p>Coucou voici mon html {5+5}</p>);

// // Sans syntaxe JSX / Oubliez ça, préférez la syntaxe JSX

// const myelement2 = React.createElement('p',{}, "coucou voici mon html")

// ReactDOM.render(<App />, document.getElementById('root'));
// // ReactDOM.render(myelement, document.getElementById('popo') );    
// ReactDOM.render(<Garage color="red"/>, document.getElementById('popo') );

ReactDOM.render(<Game />, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
