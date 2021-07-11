import Animal from './animal.js';

class Leon extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);

        let _sonido = 'assets/sounds/Rugido.mp3';

        this.getSonido = () =>
        {
            return _sonido;
        }
    }

    rugir()
    {
        return this.getSonido();
    }
}

class Lobo extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);

        let _sonido = 'assets/sounds/Aullido.mp3';

        this.getSonido = () =>
        {
            return _sonido;
        }
    }

    aullar()
    {
        return this.getSonido();
    }
}

class Oso extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);

        let _sonido = 'assets/sounds/Gruñido.mp3';

        this.getSonido = () =>
        {
            return _sonido;
        }
    }

    gruñir()
    {
        return this.getSonido();
    }
}

class Serpiente extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);

        let _sonido = 'assets/sounds/Siseo.mp3';

        this.getSonido = () =>
        {
            return _sonido;
        }
    }

    sisear()
    {
        return this.getSonido();
    }
}

class Aguila extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido);

        let _sonido = 'assets/sounds/Chillido.mp3';

        this.getSonido = () =>
        {
            return _sonido;
        }
    }

    chillar()
    {
        return this.getSonido();
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
