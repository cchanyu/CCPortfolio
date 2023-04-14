export function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

export function isPlayerWithinBounds(user, canvasWidth, canvasHeight) {
    if (user.position.x < 0 || 
        user.position.x + user.width > canvasWidth || 
        user.position.y < 0 || 
        user.position.y + user.height > canvasHeight) {
      return false;
    }
    return true;
  }

export function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayWinner').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie'
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    } else if (player.health < enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }

    document.querySelector('#displayButton').addEventListener('click', function() {
        window.location.reload()
    });
}

// export function restartGame(player, enemy) {
//     player.health = 100;
//     player.position = { x:200, y:50 }
//     player.dead = false
//     player.switchSprite('idle')

//     enemy.health = 100;
//     enemy.position = { x:800, y:50 }
//     enemy.dead = false
//     enemy.switchSprite('idle')

//     document.querySelector('#displayWinner').style.display = 'none'
//     document.querySelector('#playerHP').style.width = player.health + '%'
//     document.querySelector('#enemyHP').style.width = enemy.health + '%'
    
//     timer = 60;
//     decreaseTimer();
//     animate();
// }

export let timer = 60
export let timerId;
export function decreaseTimer() {
    if (timer > 0) { 
        timerId = setTimeout(decreaseTimer, 1000)
        timer-- 
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0) {
        // determineWinner({ player, enemy, timerId })
    }
}