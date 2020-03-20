const canvas = document.getElementById('canvas')
function rand(min, max){return Math.floor(Math.random() * (max - min + 1) + min)}

//canvas
let ctx = canvas.getContext('2d')
//snow
let snowNum = 80
let backSnowNum = 80
let snows = []
let backSnows = []

class Particle {
  constructor(ctx, radius, screen, color, gravity) {
    this.ctx = ctx
    this.screen = screen
    this.x = rand(0, this.screen.width)
    this.y = rand(0, this.screen.height)
    this.color = color
    this.radius = rand(radius*.75, radius*1.25)
    this.velocity = {x: 0, y: gravity}
  }
  update_position() {
    this.y += this.velocity.y
    this.x += this.velocity.x
    if(this.x - this.radius > this.screen.width) this.x = 0
    if(this.x + this.radius < 0) this.x = this.screen.width - this.radius
    if(this.y - this.radius > this.screen.height) {
      this.y = 0
      this.x = rand(0,this.screen.width)
    }
    if(this.y + this.radius < 0) this.y = this.screen.height - this.radius
  }
	resize() {
		this.x = rand(0, X)
		this.y = rand(0, Y)
  }
  gradient() {
    let gradient = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
    gradient.addColorStop(0, "rgba(" + this.color + ", " + (1 * 1) + ")");
    gradient.addColorStop(0.5, "rgba(" + this.color + ", " + (1 * 0.2) + ")");
    gradient.addColorStop(1, "rgba(" + this.color + ", " + (1 * 0) + ")");
    return gradient;
  }
  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.gradient()
    this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
    this.ctx.fill()
    this.ctx.closePath()
  }
	render() {
		this.update_position()
		this.draw()
	}
}

class Particles {
  constructor(ctx, particle_density, particle_size) {
    this.ctx = ctx
    this.screen = {width: canvas.width = window.innerWidth, height: canvas.height = window.innerHeight}
    this.particles = []
    this.particle_density = particle_density
    this.particle_num = this.get_particle_num()
    this.particle_size = particle_size
    this.create_particles(this.particle_num)
  }
  create_particles(particle_num) {
    for(let i=0; i<particle_num; i++) {
      this.particles.push(new Particle(ctx, 10, this.screen, '0,0,0', rand(5,15)))
    }
  }
  get_particle_num() {
    return Math.floor(this.screen.width * this.particle_density)
  }
  resize() {
    this.screen.width = canvas.width = window.innerWidth
    this.screen.height = canvas.height = window.innerHeight
    this.particle_num = this.get_particle_num()
    this.particles = this.particles.filter(particle => particle.x < this.screen.width)
    if(this.particles.length < this.particle_num) this.create_particles(this.particle_num - this.particles.length)
  }
  render() {
    this.ctx.clearRect(0,0,this.screen.width,this.screen.height)
    for(let i=0; i<this.particles.length; i++){
      this.particles[i].render()
    }
  }
  get_particles() {
    console.log(this.particles)
  }
}

particles = new Particles(ctx, .1, 10)
setInterval(() => particles.render(), 1000/30)
window.addEventListener('resize', () => particles.resize())