import React from 'react';
import Voiture from "./Voiture";

class Garage extends React.Component{
    // Attributs




    // Methodes
    render(){
        const def="grise";
        const voit = {color:"grise", brand:"Peugeot", owner:"None", id:"WWWWW"}
        // On ouvre les parenthèses pour injecter de l'HTML via l'annotation JSX - Javascript XML ET on execute la logique du code dans les {}
        // C'est ici que l'on défini le contenu html affichable à l'appel de la bâlise <Garage /> dans l'index.js
        return (
            <div>
                <h1>Quelles sont les voitures que j'ai dans mon garage ?</h1>
                <Voiture color="verte" brand="Mustang" owner="Sylvain" id="NZ78W2"/><br/>
                <Voiture color="rouge" brand="Mercedes" owner="Jean" id="NZ78W2"/><br/>
                <Voiture color="bleue" brand="Ford" owner="Dalida" id="NZ78W2"/><br/>
                <Voiture color="jaune" brand="Citroen" owner="Lucile" id="NZ78W2"/><br/>
                <Voiture color={voit.color} brand={voit.brand} owner={voit.owner} id={voit.id}/>
            </div>
        );
    }

}

export default Garage;