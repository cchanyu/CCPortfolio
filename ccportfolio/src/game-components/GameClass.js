let gravity = .7;

export class Sprite {
    constructor({ c, canvas, position, imageSrc, scale = 1, framesMax = 1, offset = {x: 0, y: 0} }) {
      this.c = c;
      this.canvas = canvas;
      this.position = position;
      this.width = 50;
      this.height = 150;
      this.image = new Image();
      this.image.src = imageSrc;
      this.image.onload = this.update.bind(this);
      this.scale = scale;
      this.framesMax = framesMax;
      this.framesCurrent = 0;
      this.framesElapsed = 0;
      this.framesHold = 8;
      this.offset = offset;
    }
  
    draw_character() {
        this.c.drawImage(this.image, 
            this.framesCurrent * (this.image.width / this.framesMax), 0, this.image.width / this.framesMax, this.image.height,
            this.position.x - this.offset.x, this.position.y - this.offset.y, (this.image.width / this.framesMax) * this.scale, this.image.height * this.scale)
    }

    animateFrames() {
      this.framesElapsed++

      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
            this.framesCurrent++
        } else {
            this.framesCurrent = 0;
        }
      }
    }
  
    update() {
      this.draw_character()
      this.animateFrames()
    }
}

export class Fighter extends Sprite {
    constructor({ c, canvas, position, velocity, color, imageSrc, scale = 1, framesMax = 1, offset = {x: 0, y: 0}, sprites, attackBox = { offset: {}, width: undefined, height: undefined} }) {
      super({ position, imageSrc, scale, framesMax, offset });
      this.c = c;
      this.canvas = canvas;
      this.position = position;
      this.velocity = velocity;
      this.width = 50;
      this.height = 150;
      this.lastKey = null;
      this.attackBox = {
        position: {
            x: this.position.x,
            y: this.position.y
        },
        offset: attackBox.offset,
        width: attackBox.width,
        height: attackBox.height,
      }
      this.color = color;
      this.isAttacking = false;
      this.health = 100;
      this.framesCurrent = 0;
      this.framesElapsed = 0;
      this.framesHold = 8;
      this.sprites = sprites;
      this.dead = false

      for (const sprite in this.sprites) {
        sprites[sprite].image = new Image()
        sprites[sprite].image.src = sprites[sprite].imageSrc
      }
    }
  
    draw_character() {
      // draws the character
      // this.c.fillStyle = 'blue'
      // this.c.fillRect(
      //   this.position.x,
      //   this.position.y,
      //   this.width,
      //   this.height
      // )
      this.c.drawImage(this.image, 
          this.framesCurrent * (this.image.width / this.framesMax), 0, this.image.width / this.framesMax, this.image.height,
          this.position.x - this.offset.x, this.position.y - this.offset.y, (this.image.width / this.framesMax) * this.scale, this.image.height * this.scale)
    }
  
    update() {
      this.draw_character()
      if (this.health <= 1) {
        this.switchSprite('death')
      }
      if (!this.dead) {
        this.animateFrames()
      }
      
      // attack boxes
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y

      // draws the attack box
      // this.c.fillStyle = 'red'
      // this.c.fillRect(
      //   this.attackBox.position.x,
      //   this.attackBox.position.y,
      //   this.attackBox.width,
      //   this.attackBox.height
      // )

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // Boundary checks for X-axis
      if (this.position.x < 0) { // Left boundary
        this.position.x = 0;
        this.velocity.x = 0;
      } else if (this.position.x + this.width * this.scale > this.canvas.width) { // Right boundary
        this.position.x = this.canvas.width - this.width * this.scale;
        this.velocity.x = 0;
      }

      // Boundary checks for Y-axis
      if (this.position.y < 0) { // Top boundary
        this.position.y = 0;
        this.velocity.y = 0;
      }

      // gravity function
      if (this.position.y + this.height + this.velocity.y >= this.canvas.height - 40) {
        this.velocity.y = 0;
        this.position.y = 390; // Adjust position to prevent jitter effect on jump
      } else {
        this.velocity.y += gravity;
      }
    }

    attack() {
        this.switchSprite('attack1')
        this.isAttacking = true
    }

    takeHit() {
      this.health -= 15;
      this.switchSprite('takeHit')
    }

    switchSprite(sprite) {
      // overriding all other animations
      if (this.image === this.sprites.death.image) {
        if (this.framesCurrent === this.sprites.death.framesMax - 1) {
          this.dead = true
        }
        return
      }
      if (this.image === this.sprites.attack1.image && this.framesCurrent < this.sprites.attack1.framesMax - 1) return
      if (this.image === this.sprites.takeHit.image && this.framesCurrent < this.sprites.takeHit.framesMax - 1) return
      switch(sprite) {
        case 'idle':
          if(this.image !== this.sprites.idle.image) {
            this.image = this.sprites.idle.image
            this.framesMax = this.sprites.idle.framesMax
            this.framesCurrent = 0
          }
          break;
        case 'run':
          if(this.image !== this.sprites.run.image) {
            this.image = this.sprites.run.image
            this.framesMax = this.sprites.run.framesMax
            this.framesCurrent = 0
          }
          break;
        case 'jump':
          if(this.image !== this.sprites.jump.image) {
            this.image = this.sprites.jump.image
            this.framesMax = this.sprites.jump.framesMax
            this.framesCurrent = 0
          }
          break;
        case 'fall':
          if(this.image !== this.sprites.fall.image) {
            this.image = this.sprites.fall.image
            this.framesMax = this.sprites.fall.framesMax
            this.framesCurrent = 0
          }
          break;
        case 'attack1':
          if(this.image !== this.sprites.attack1.image) {
            this.image = this.sprites.attack1.image
            this.framesMax = this.sprites.attack1.framesMax
            this.framesCurrent = 0
          }
          break;
        case 'takeHit':
          if(this.image !== this.sprites.takeHit.image) {
            this.image = this.sprites.takeHit.image
            this.framesMax = this.sprites.takeHit.framesMax
            this.framesCurrent = 0
          }
          break;
        case 'death':
          if(this.image !== this.sprites.death.image) {
            this.image = this.sprites.death.image
            this.framesMax = this.sprites.death.framesMax
            this.framesCurrent = 0
          }
          break;
        default:
          break;
      }
    }
}