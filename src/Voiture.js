import React from 'react';

// Création d'une classe voiture
// On hérite de la classe component définie dans React.

class Voiture extends React.Component{
    // attributs


    // Méthodes
    constructor(){
        super(); // Il prend le comportement du parent, execution du constructor qui est défini dans React.Component
        this.state={color:"red"};
    }
    
    render(){
        // return <h2>Coucou, je suis la meilleure voiture du monde et ma couleur est {this.state.color}</h2>
        return <h2>Coucou, je suis la voiture {this.props.brand}, de couleur {this.props.color}, appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
    }
}

export default Voiture;