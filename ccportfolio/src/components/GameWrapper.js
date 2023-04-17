import React from 'react'
import GameScreen from '../game-components/GameScreen'
import '../css/GameWrapper.scss'

const GameWrapper = () => {
  return (
    <div className="gamewrapper">
      <div className="index-container">
        {/* Player HP */}
        <div className="index-player-hp">
          <div className="index-player-backdrop"></div>
          <div id="playerHP" className="index-player-hp-bar"></div>
          <div className="index-player-name">
            <span className="index-player-name-display">PLAYER 1</span>
          </div>
        </div>

        {/* Timer */}
        <div id="timer" className="index-timer">0</div>

        {/* Enemy HP */}
        <div className="index-enemy-hp">
          <div className="index-enemy-backdrop"></div>
          <div id="enemyHP" className="index-enemy-hp-bar"></div>
          <div className="index-enemy-name">
            <span className="index-enemy-name-display">PLAYER 2</span>
          </div>
        </div>
      </div>

      <div id="displayWinner" className="index-winner-display">
        <div id="displayText" className="index-winner-text">Tie</div>
        <button id="displayButton" className="index-winner-button">Restart</button>
      </div>

      <GameScreen />
    </div>
  )
}

export default GameWrapper