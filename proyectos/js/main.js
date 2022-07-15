const files = [
    {   href: '#',
        src: '../assets/img/mapa_peru.png',
        titulo:'Perú total - Límites nacionales',
        descripcion:'Límite nacional del Perú, archivo vectorial. Contiene área, perímetro, población al 2022 en tabla atributiva. EPSG: 4326.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'PDF'
    },
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const proyecto = document.querySelector('#proyecto');

 const filtrar = () => {
    proyecto.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for(let file of files){
        let titulo = file.titulo.toLowerCase();
        if(titulo.indexOf(texto) !== -1){
            proyecto.innerHTML += `
            <a href="${files.href}"><img src="${files.src}"></img></a>
            `
        }         
    }
    if (proyecto.innerHTML === ''){
        proyecto.innerHTML += `No se encontraron resultados`
    }

 }

 boton.addEventListener('click', filtrar);
 formulario.addEventListener('keyup', filtrar);
 filtrar();