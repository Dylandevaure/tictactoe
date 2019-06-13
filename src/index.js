import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from "./Voiture";
import Garage from "./Garage";
import Tick from './Tick';
import Square from "./Square";
import Board from "./Board";
import Game from "./Game";
import Clock from "./Clock";
import * as serviceWorker from './serviceWorker';

// function Tick2(){

//     const element= (
//     <div>
//         <h1>heure locale</h1>
//         <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
//     </div>
//     );

//     ReactDOM.render(element,document.getElementById('popo2') );

// }

// L'appelle à la fonction Tick2 chaque seconde
// setInterval(Tick2, 1000);

// Syntaxe JSX - Javascript XML, elle nous permet d'écrire de l'HTML en React.
// const myelement = (<p>Coucou voici mon html {5+5}</p>);

// // Sans syntaxe JSX / Oubliez ça, préférez la syntaxe JSX

// const myelement2 = React.createElement('p',{}, "coucou voici mon html")

// ReactDOM.render(<App />, document.getElementById('root'));
// // ReactDOM.render(myelement, document.getElementById('popo') );    
// ReactDOM.render(<Garage color="red"/>, document.getElementById('popo') );

ReactDOM.render(<Game />, document.getElementById('root') );
ReactDOM.render(<Clock />, document.getElementById('popo') );

// Ci dessous une manière d'appeler un composant à partir d'une fonction
// ReactDOM.render(<Tick />, document.getElementById('popo') );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
