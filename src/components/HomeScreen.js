import React from 'react';
import '../css/HomeScreen.css'
import Board from './Board';

const HomeScreen = () => {
    return(
        <div className="hs">
            <Board />
            <div className="text title--game">Tic-Tac-Toe</div>
        </div>
    )
}

export default HomeScreen;