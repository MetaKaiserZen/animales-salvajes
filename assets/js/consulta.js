let animales = (() =>
{
    const url = 'http://localhost:81/animales-salvajes/animales.json';

    const getDatos = async () =>
    {
        const resultado = await fetch(url);
        const datos = await resultado.json();

        return datos;
    };

    return { getDatos };
})();

export default animales;
