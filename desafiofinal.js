class hero {
    constructor (name, age, type, atack) {
            this.name = name
            this.age = age
            this.type = type
            this.atack = atack
    }
mensagem () {
    console.log("O " + this.type + " " + this.name + ", atacou usando " + this.atack + ".")
}
}

let guerreiroHero = new hero("Marreta", 26, "guerreiro", "sua espada")
let magoHero = new hero("Geninho", 92, "mago", "sua magia")
let mongeHero = new hero("Calumin", 48, "monge", "artes marciais antigas")
let ninjaHero = new hero("Tchaka", 22, "ninja", "sua shuriken")
//Herói inventado para complementar o desfio encontra-se na variável abaixo:
let extraHero = new hero ("Supernova", "X?", "intergalático", "seu incrível poder inexplicável aos olhos humanos")

guerreiroHero.mensagem()
magoHero.mensagem()
mongeHero.mensagem()
ninjaHero.mensagem()
extraHero.mensagem()


/*se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/ 