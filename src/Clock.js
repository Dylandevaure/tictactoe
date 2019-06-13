import React from 'react';

class Clock extends React.Component{
    // Première fonction qui execute pour créer le premier composant --> C'est celle qui le construit
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    // La fonction qui affiche l'HTML sur l'écran  / render = afficher
    render(){
        return (
        <div>
            <h1>heure locale</h1>
            <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
        </div>
        )

    }

    // Une fois que l'affichage a lieu, la fonction suivante s'execute directement.
    // COmponentDiDMount = le composant vient de se mettre en place
    componentDidMount(){
        this.timerID = setInterval(()=>this.tictac(), 1000);

    }

    // Voici une fonction qui permet de mettre à jour la date dans l'état (this.state.date)
    // ATT : qui dit mise à jour de l'état dit : setState
    tictac(){
        this.setState({
            date: new Date()
        });
    }

    // Juste avant de finir un lifecycle et de quitter le composant, nous effaçons le contenu de l'intervalle de temps

    componentWillUnmount(){
        clearInterval(this.timerID);
    }



}


export default Clock;