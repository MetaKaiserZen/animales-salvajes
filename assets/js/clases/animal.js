class Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.getNombre = () =>
        {
            return _nombre;
        }

        this.getEdad = () =>
        {
            return _edad;
        }

        this.getImg = () =>
        {
            return _img;
        }

        this.getComentarios = () =>
        {
            return _comentarios;
        }

        this.getSonido = () =>
        {
            return _sonido;
        }

        this.setComentarios = (comentarios) =>
        {
            _comentarios = comentarios;
        }
    }

    // Getters

    get nombre()
    {
        return this.getNombre();
    }

    get edad()
    {
        return this.getEdad();
    }

    get Img()
    {
        return this.getImg();
    }

    get comentarios()
    {
        return this.getComentarios();
    }

    get sonido()
    {
        return this.getSonido();
    }

    // Setter

    set comentarios(comentarios)
    {
        this.setComentarios(comentarios);
    }
}

export default Animal
