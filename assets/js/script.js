import Animales from './consulta.js';
import { Leon, Lobo, Oso, Serpiente, Aguila  } from './clases/especies.js';

let imagenes = document.getElementById('animal');

imagenes.addEventListener('change', async() =>
{
    let animal = document.getElementById('animal');

    const { animales } = await Animales.getDatos();

    // Ciclo repetitivo que permite mostrar una imagen correspondiente a cada animal

    for (let i = 0; i < animal.options.length; i++)
    {
        switch (imagenes.selectedIndex - 1)
        {
            case i:
                const imagenSrc = `assets/imgs/${animales[i].imagen}`;

                document.getElementById('preview').style.backgroundImage = `url(${imagenSrc})`;
                break;
        }
    }
});

let animales = [];

document.getElementById('btnRegistrar').addEventListener('click', () =>
{
    let nombre = document.getElementById('animal');
    let edad = document.getElementById('edad');
    let previewElement = document.getElementById('preview');
    let imagenSrcBg = previewElement.style.backgroundImage;
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);
    let comentarios = document.getElementById('comentarios');
    let sonido = '';

    // Instancia de la clase Animal

    let nuevoAnimal;

    switch (nombre.value)
    {
        case 'Leon':
            nuevoAnimal = new Leon(nombre.value, edad.value, imgSrc, comentarios.value, sonido.value);
            break;
        case 'Lobo':
            nuevoAnimal = new Lobo(nombre.value, edad.value, imgSrc, comentarios.value, sonido.value);
            break;
        case 'Oso':
            nuevoAnimal = new Oso(nombre.value, edad.value, imgSrc, comentarios.value, sonido.value);
            break;
        case 'Serpiente':
            nuevoAnimal = new Serpiente(nombre.value, edad.value, imgSrc, comentarios.value, sonido.value);
            break;
        case 'Aguila':
            nuevoAnimal = new Aguila(nombre.value, edad.value, imgSrc, comentarios.value, sonido.value);
            break;
    }

    // Validación de datos

    if (nombre.value && edad.value && comentarios.value)
    {
        animales.push(nuevoAnimal);

        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        previewElement.style.backgroundImage = 'url("./assets/imgs/lion.svg")';
        imagenSrcBg = previewElement.style.backgroundColor = 'f0f0f0';
        comentarios.value = ''

        reloadTable();
    }
    else
    {
        alert('Faltan datos por llenar');
    }
});

const reloadTable = () =>
{
    // Contador para agregar un ID único a cada tarjeta

    let count = 0;

    const animalesTemplate = document.getElementById('Animales');

    animalesTemplate.innerHTML = '';

    animales.forEach((a) =>
    {
        animalesTemplate.innerHTML +=
            `<div class="px-3 pb-2 animal" style="width: 25%;">
                <div class="card" style="background-color: #343a40; height: 200px;">
                    <img src="${a.getImg()}" class="card-img-top" id="animal${count}" style="height: 150px;">
                    <div class="card-body d-flex align-items-center bg-secondary">
                        <button type="button" class="btn btn-secondary"><img src="./assets/imgs/audio.svg" style="width: 50%"></button>
                    </div>
                </div>
            </div>`;

        // El contador aumenta de manera autoincremental

        count++;
    });

    // Array que guardará los datos de cada tarjeta que se haya agregado

    let imagen = [];

    // Ciclo repetitivo que permite mostrar los datos de una tarjeta seleccionada

    for (let i = 0; i < count; i++)
    {
        imagen[i] = document.getElementById(`animal${i}`);

        imagen[i].addEventListener('click', async() =>
        {
            let datosTemplate = document.getElementById('Datos');

            datosTemplate.innerHTML = '';

            datosTemplate.innerHTML =
                `<img src="${animales[i].getImg()}" class="card-img-top" id="imagen${i}">
                <p class="text-center text-white my-2">${animales[i].getEdad()}</p>
                <p class="text-center text-white my-2">Comentarios</p>
                <p class="text-center text-white my-4">${animales[i].getComentarios()}</p>`;

            $('#exampleModal').modal('toggle');
        });
    }
}
