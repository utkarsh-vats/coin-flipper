import './index.css';
import React, { Component } from 'react'
import headsImg from "./images/heads.png";
import tailsImg from "./images/tails.png";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
        };
    }

    flipCoin = () => {
        let coin = document.getElementById("coin");
        let chance = Math.floor(Math.random() * 2);
        coin.style.animation = "none";
        if(chance === 0){
            setTimeout(() => {
                coin.style.animation = "spin-heads 2s forwards";
            }, 100);
            this.setState({
                heads: this.state.heads + 1,
            });
        } else {
            setTimeout(() => {
                coin.style.animation = "spin-tails 2s forwards";
            }, 100);
            this.setState({
                tails: this.state.tails + 1,
            })
        }
        setTimeout(this.updateScore, 2000);
    }

    updateScore = () => {
        document.getElementById("heads-count").innerHTML = `Heads: ${this.state.heads}`;
        document.getElementById("tails-count").innerHTML = `Tails: ${this.state.tails}`;
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="score">
                        <p className="heads-count" id="heads-count">Heads: 0</p>
                        <p className="tails-count" id="tails-count">Tails: 0</p>
                    </div>
                    <div className="coin" id="coin">
                        <div className="heads">
                            <img src={headsImg} alt="heads" />
                        </div>
                        <div className="tails">
                            <img src={tailsImg} alt="tails" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button 
                            id="flip-button" 
                            className="flip-button"
                            onClick={this.flipCoin}
                        >
                            Flip Coin
                        </button>
                        <button 
                            id="reset-button" 
                            className="reset-button"
                            onClick={() => {
                                this.setState({
                                    heads: 0,
                                    tails: 0,
                                });
                                setTimeout(this.updateScore, 20);
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
