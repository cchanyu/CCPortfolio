import React, { useState, useEffect, useRef } from "react";
import { Sprite, Fighter } from './GameClass';
import { isPlayerWithinBounds, rectangularCollision, determineWinner, timerId, decreaseTimer } from "./GameFunction";
import gsap from 'gsap';

import Background from '../IMG/background/background_layer.png';
import Shop from '../IMG/decorations/shop_anim.png';

import Player1_idle from '../IMG/player1/Idle.png';
import Player1_run from '../IMG/player1/Run.png';
import Player1_jump from '../IMG/player1/Jump.png';
import Player1_fall from '../IMG/player1/Fall.png';
import Player1_attack1 from '../IMG/player1/Attack1.png';
import Player1_takehit from '../IMG/player1/Take Hit.png';
import Player1_death from '../IMG/player1/Death.png';

import Player2_idle from '../IMG/player2/Idle.png';
import Player2_run from '../IMG/player2/Run.png';
import Player2_jump from '../IMG/player2/Jump.png';
import Player2_fall from '../IMG/player2/Fall.png';
import Player2_attack1 from '../IMG/player2/Attack1.png';
import Player2_takehit from '../IMG/player2/Take hit.png';
import Player2_death from '../IMG/player2/Death.png';

function GameScreen() {
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    let playerBoundary, enemyBoundary;
    const keys = {
        a: { pressed: false },
        d: { pressed: false },
        ArrowRight: { pressed: false },
        ArrowLeft: { pressed: false },
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const c = canvas.getContext("2d");
        canvas.width = 1024;
        canvas.height = 576;

        const background = new Sprite ({ c: c, canvas: canvas, position: { x: 0, y: 0 }, scale: 1.067, imageSrc: Background })
        const shop = new Sprite ({ c: c, canvas: canvas, position: { x: 600, y: 100 }, scale: 3, framesMax: 6, imageSrc: Shop })

        const player = new Fighter ({
            c: c, canvas: canvas,
            position: { x: 200, y: 50 },
            velocity: { x: 0, y: 10 },
            offset: { x: 0, y: 0 },
            scale: 2.5,
            imageSrc: Player1_idle,
            framesMax: 8,
            offset: { x: 215, y: 155 },
            sprites: {
                idle: { imageSrc: Player1_idle, framesMax: 8 },
                run: { imageSrc: Player1_run, framesMax: 8 },
                jump: { imageSrc: Player1_jump, framesMax: 2 },
                fall: { imageSrc: Player1_fall, framesMax: 2 },
                attack1: { imageSrc: Player1_attack1, framesMax: 6 },
                takeHit: { imageSrc: Player1_takehit, framesMax: 4 },
                death: { imageSrc: Player1_death, framesMax: 6 }
            },
            attackBox: { offset: { x: 60, y: 50 }, width: 200, height: 50 }
        })
        
        const enemy = new Fighter ({
            c: c, canvas: canvas,
            position: { x: 800, y: 50 },
            velocity: { x: 0, y: 10 },
            offset: { x: -50, y: 0 },
            scale: 2.5,
            imageSrc: Player2_idle,
            framesMax: 4,
            offset: { x: 215, y: 170 },
            sprites: {
                idle: { imageSrc: Player2_idle, framesMax: 4 },
                run: { imageSrc: Player2_run, framesMax: 8 },
                jump: { imageSrc: Player2_jump, framesMax: 2 },
                fall: { imageSrc: Player2_fall, framesMax: 2 },
                attack1: { imageSrc: Player2_attack1, framesMax: 4 },
                takeHit: { imageSrc: Player2_takehit, framesMax: 3 },
                death: { imageSrc: Player2_death, framesMax: 7 }
            },
            attackBox: { offset: { x: -180, y: 50 }, width: 180, height: 50 }
        })

        function animate() {
            window.requestAnimationFrame(animate); // infinite update
            
            c.fillStyle = "black";
            c.fillRect(0,0, canvas.width, canvas.height)
            
            background.update()
            shop.update()
        
            // light background filter 
            c.fillStyle = 'rgba(255, 255, 255, 0.08)'
            c.fillRect(0, 0, canvas.width, canvas.height)
        
            playerBoundary = isPlayerWithinBounds(player, canvas.width, canvas.height)
            enemyBoundary = isPlayerWithinBounds(enemy, canvas.width, canvas.height)
        
            // player movement
            player.update()
            player.velocity.x = 0
            if (keys.a.pressed && player.lastKey === 'a') {
                player.velocity.x = -5
                player.switchSprite('run')
            } else if (keys.d.pressed && player.lastKey === 'd') {
                player.velocity.x = 5
                player.switchSprite('run')
            } else {
                player.switchSprite('idle')
            }
            if (!playerBoundary) {
                console.log("player1 out of bound", player.position.x, player.position.y)
            }
        
            // enemy movement
            enemy.update()
            enemy.velocity.x = 0
            if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
                enemy.velocity.x = -5
                enemy.switchSprite('run')
            } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
                enemy.velocity.x = 5
                enemy.switchSprite('run')
            } else {
                enemy.switchSprite('idle')
            }
            if (!enemyBoundary) {
                console.log("player2 out of bound", enemy.position.x, enemy.position.y)
            }
        
            // player jumping
            if (player.velocity.y < 0) {
                player.switchSprite('jump')
            } else if (player.velocity.y > 0) {
                player.switchSprite('fall')
            }
        
            // enemy jumping
            if (enemy.velocity.y < 0) {
                enemy.switchSprite('jump')
            } else if (enemy.velocity.y > 0) {
                enemy.switchSprite('fall')
            }
        
            // collision: player attacks, enemy gets hit
            if (rectangularCollision({ rectangle1: player, rectangle2: enemy}) &&
                player.isAttacking && player.framesCurrent === 4) {
                    enemy.takeHit()
                    player.isAttacking = false
                    gsap.to('#enemyHP', {
                        width: enemy.health + '%'
                    })
            }
        
            // if player misses 
            if (player.isAttacking && player.framesCurrent === 4) {
                player.isAttacking = false
            }
        
            // collision: enemy attacks, player gets hit
            if (rectangularCollision({ rectangle1: enemy, rectangle2: player}) &&
                enemy.isAttacking && enemy.framesCurrent === 2) {
                    player.takeHit()
                    enemy.isAttacking = false
                    gsap.to('#playerHP', {
                        width: player.health + '%'
                    })
            }
        
            // if enemy misses 
            if (enemy.isAttacking && enemy.framesCurrent === 2) {
                enemy.isAttacking = false
            }
        
            // end game based on HP runs out
            if (enemy.health <= 0 || player.health <= 0) {
                determineWinner({ player, enemy, timerId })
            }
        }

        canvasRef.current = canvas;
        setContext(c);
        decreaseTimer();
        animate();

        window.addEventListener('keydown', (event) => {
            if (!player.dead) {
                switch (event.key) {
                    // player case
                    case 'd':
                        keys.d.pressed = true
                        player.lastKey = 'd';
                        break
                    case 'a':
                        keys.a.pressed = true
                        player.lastKey = 'a';
                        break
                    case 'w':
                        player.velocity.y = -15
                        break
                    case 's':
                        player.attack()
                        break        
                }
            }
        
            if (!enemy.dead) {
                switch (event.key) {
                    // enemy case
                    case 'ArrowRight':
                        keys.ArrowRight.pressed = true
                        enemy.lastKey = 'ArrowRight';
                        break
                    case 'ArrowLeft':
                        keys.ArrowLeft.pressed = true
                        enemy.lastKey = 'ArrowLeft'
                        break
                    case 'ArrowUp':
                        enemy.velocity.y = -15
                        break
                    case 'ArrowDown':
                        enemy.attack()
                        break
                }
            }
        })
        
        window.addEventListener('keyup', (event) => { 
            // player case
            switch (event.key) {
                case 'd':
                    keys.d.pressed = false
                    break
                case 'a':
                    keys.a.pressed = false
                    break
            }
        
            // enemy case
            switch (event.key) {
                case 'ArrowRight':
                    keys.ArrowRight.pressed = false
                    break
                case 'ArrowLeft':
                    keys.ArrowLeft.pressed = false
                    break
            }
        })
    }, []);

    return (
        <div className="gamescreen">
            <canvas className="gamescreen-canvas" ref={canvasRef}></canvas>
        </div>
    );
}

export default GameScreen;