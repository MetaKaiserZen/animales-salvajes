import Animal from './animal.js';

class Leon extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir()
    {
        let sonido = this.getSonido();

        //
    }
}

class Lobo extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar()
    {
        let sonido = this.getSonido();

        //
    }
}

class Oso extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);
    }

    gruñir()
    {
        let sonido = this.getSonido();

        //
    }
}

class Serpiente extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear()
    {
        let sonido = this.getSonido();

        //
    }
}

class Aguila extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar()
    {
        let sonido = this.getSonido();

        //
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
