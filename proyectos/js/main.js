const files = [
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/dirs/codigos_postales_del_peru',
        src: './assets/img/codigos_postales_peru.png',
        alt: 'No disponible',
        titulo: 'Códigos Postales del Perú',
        descripcion:'Códigos postales del Perú, información espacial de tipo vectorial. Información proveniente del MTC.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'',
        glb:'',
        kml:'',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/dirs/codigo_ubigeo_nacional/',
        src: './assets/img/codigo_ubigeo_nacional.png',
        alt: 'No disponible',
        titulo: 'Códigos de Ubigeo Nacional',
        descripcion:'Códigos de ubigeo del Perú, información espacial de tipo vectorial. Información proveniente del MTC.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'',
        glb:'',
        kml:'',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/dirs/distritos_del_peru/',
        src: './assets/img/distritos_peru.png',
        alt: 'No disponible',
        titulo: 'Distritos del Perú',
        descripcion:'Distritos del Perú, contiene ubigeo, codigo del departamento, provincia y distrito. EPSG: 4326 (WGS84). Datos del INEI',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'',
        glb:'',
        kml:'KML',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/dirs/cuencas_hidrograficas_peru/',
        src: './assets/img/cuencas_hidrograficas_peru.png',
        alt: 'No disponible',
        titulo: 'Cuencas Hidrográficas del Perú',
        descripcion:'Cuencas como objetos espaciales de totod el perú, contienen nombre de cuenca, niveles, orden de cuenca, codigo entre otros datos.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'',
        glb:'',
        kml:'KML',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/dirs/huascaran_3d/',
        src: './assets/img/huascaran_3d.png',
        alt: 'No disponible',
        titulo: 'Nevado Huascarán - Huaraz | Modelo 3D',
        descripcion:'Modelo 3D del nevado Huascarán norte, sur y nevado Chopicalqui, ubicado en el distrito de Huaraz departamento del Perú.',
        shp:'',
        gml:'',
        bd:'',
        geojeson:'',
        pdf:'',
        glb:'GLB',
        kml:'',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/dirs/provincias_peru/',
        src: './assets/img/peru_provincias.png',
        alt: 'No disponible',
        titulo: 'Provincias del Perú',
        descripcion:'Datos provenientes del Instituto Nacional de Estadistica e Informatica del Perú',
        shp:'SHP',
        gml:'',
        bd:'',
        geojeson:'GeoJson',
        pdf:'',
        glb:'',
        kml:'KML',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/carmen_de_la_legua_modelo3D/',
        src: './assets/img/clegua_3d.png',
        alt: 'No disponible',
        titulo: 'Parque Media Luna - Carmen de La Legua | Modelo 3D',
        descripcion:'Modelo 3D del parque Media Luna y alrededores del distrito de Carmen de La Legua -  Reynoso distrito del Lima',
        shp:'',
        gml:'',
        bd:'',
        geojeson:'',
        pdf:'',
        glb:'GLB',
        kml:'',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/',
        src: './assets/img/ldepartamentales.png',
        alt: 'No disponible',
        titulo: 'Departamentos del Perú',
        descripcion:'Límites departamentales del Perú, archivo vectorial. EPSG: 4326. Contiene código de departamento y nombre del departamento.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'PDF',
        glb:'',
        kml:'KML',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/capitales_peru/',
        src: './assets/img/capitales_peru.png',
        alt: 'No disponible',
        titulo: 'Capitales departamentales del Perú',
        descripcion:'Marcadores de las capitales por departamento del Perú, archivo vectorial. EPSG: 4326. Contiene código de capital, fuente, ubigeo departamental y nombre de capital. Información proveniente del MTC - Perú',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'PDF',
        glb:'',
        kml:'KML',
        tif:''
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_departamentales/dirs/pronostico_48UV/',
        src: './assets/img/radiacion_uv_48.png',
        alt: 'No disponible',
        titulo: 'Pronóstico de Radiación UV - 48 horas',
        descripcion:'Pronóstico de radiación UV cada actualizado cada 48 hrs. Archivo vectorial disṕnoble como raster y vector.',
        shp:'SHP',
        gml:'',
        bd:'',
        geojeson:'GeoJson',
        pdf:'PDF',
        glb:'',
        kml:'KML',
        tif:'TIF'
    },
    {   href: 'https://1nfinit0.github.io/peru_limites_nacionales/',
        src: './assets/img/limite_nacional_peru.png',
        alt: 'No disponible',
        titulo:'Perú total - Límite nacional',
        descripcion:'Límite nacional del Perú, archivo vectorial. EPSG: 4326.',
        shp:'SHP',
        gml:'GML',
        bd:'PL/PgSQL',
        geojeson:'GeoJson',
        pdf:'',
        glb:'',
        kml:'',
        tif:''
    },
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const proyectos = document.querySelector('#proyectos');
const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};

 const filtrar = () => {
    proyectos.innerHTML = '';
    const texto = formulario.value.toLowerCase();
            texto.split('').map( letra => acentos[letra] || letra).join('').toString();
    for(let file of files){
        let titulo = file.titulo.toLowerCase();
                    titulo = titulo.split('').map( letra => acentos[letra] || letra).join('').toString();
        if(titulo.indexOf(texto) !== -1){
            proyectos.innerHTML +="<div class='proyecto'><a href='"+file.href+"'><img src='"+file.src+"' alt='"+file.alt+"'></a>"+
                                        "<div class='descripcion'>"+
                                            "<a href='"+file.href+"'><h3>"+file.titulo+"</h3></a>"+
                                            "<p>"+file.descripcion+"</p>"+
                                            "<h4>Disponible en:</h4>"+
                                                "<div class='formatos'>"+
                                                    "<div class='shp'><p>"+file.shp+"</p></div>"+
                                                    "<div class='gml'><p>"+file.gml+"</p></div>"+
                                                    "<div class='bd'><p>"+file.bd+"</p></div>"+
                                                    "<div class='geojson'><p>"+file.geojeson+"</p></div>"+
                                                    "<div class='pdf'><p>"+file.pdf+"</p></div>"+
                                                    "<div class='glb'><p>"+file.glb+"</p></div>"+
                                                    "<div class='kml'><p>"+file.kml+"</p></div>"+
                                                    "<div class='tif'><p>"+file.tif+"</p></div>"+
                                                "</div>"+
                                        "</div>"+
                                    "</div><hr>";

                                     ;
        }         
    }
    if (proyectos.innerHTML === ''){
        proyectos.innerHTML += `No se encontraron resultados`
    }

 }

 boton.addEventListener('click', filtrar);
 formulario.addEventListener('keyup', filtrar);
 filtrar();