import React from 'react';

// Lorsque j'appuie sur le bouton toggle il y a un like du commentaire sinon c'est un dislike
class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state={ like: false};
        // Nous allons lier la fonction handleClick avec le "this" pour ne pas avoir à le repeter sans cesse... Technique bonne à savoir. Bind = Assigner
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({like: !state.like}))
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.like ? "Like" : "dislike"}
            </button>
        );
    }
}



export default Toggle;