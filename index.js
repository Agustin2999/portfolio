
function downloadCV() {
    window.location.href = './pdfs cv/Curriculum5s.pdf';
}




// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});






// De proyecto viejo
function addHoverButtonContact(id) {
    let button = document.querySelector('#' + id)
    button.classList.add('divButtonContact_hover')
}

function removeHoverButtonContact(id) {
    let button = document.querySelector('#' + id)
    button.classList.remove('divButtonContact_hover')
}

function mezclarArregloConCopia(arreglo) {
    const copia = Array.from(arreglo);
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function copiarAlPortapapeles(texto, idContainer, texto) {
    // Crea un elemento textarea oculto para poder copiar el texto dentro de él
    let textarea = document.createElement('textarea');
    textarea.value = texto;

    // Asegúrate de que el textarea esté fuera de la pantalla
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;

    // Agrega el textarea al DOM
    document.body.appendChild(textarea);

    // Selecciona el texto dentro del textarea
    textarea.select();

    try {
        // Intenta copiar el texto seleccionado al portapapeles
        document.execCommand('copy');
        console.log('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al intentar copiar el texto al portapapeles:', err);
    }

    // Elimina el textarea del DOM
    document.body.removeChild(textarea);


    // Cambiar icono copiar a icono check por un ratito
    let contenedorIcono = document.querySelector('#' + idContainer);
    contenedorIcono.innerHTML = " " + texto + " <i class='bi bi-check-lg'></i>";
    console.log("NUEVOICONO")
    console.log(contenedorIcono.innerHTML)

    setTimeout(() => {
        // contenedorIcono.innerHTML = texto + "&nbsp;<i class='bi bi-copy' style='cursor:pointer' onclick='copiarAlPortapapeles('https://github.com/Agustin2999','" + idContainer + "', '" + texto + "')'></i>"

        contenedorIcono.innerHTML = `
            ${texto} 
            <i class='bi bi-copy' 
            style='cursor:pointer' 
            onclick="copiarAlPortapapeles('https://github.com/Agustin2999', '${idContainer}', '${texto}')">
            </i>
        `;

        console.log("VIEJOICONO")
        console.log(contenedorIcono.innerHTML)

    }, 1000);
}

//Skills:
let arraySkills = [
    {
        name: "Javascript",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
    },

    {
        name: "React.js (+ vite)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"
    },

    {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png"
    },

    {
        name: "C#",
        image: "https://www.fixedbuffer.com/wp-content/uploads/2019/06/reflexion.png"
    },

    {
        name: "Amazon Web Services",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsZ1a6ldYwpY8fFpaNB_QPfyHyX7NN7CEHA&s"
    },

    {
        name: "Cypress.io",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvVqEapXsm3wyIBCj0j6GwUMwEpsUElyGSA&s"
    },

    {
        name: "Github",
        image: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
    },

    {
        name: "Bootstrap",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
    },

    {
        name: "SQL",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1FXV2YVvF8-KfQ4w9qtnzDuFKFt3hv1sFA&s"
    },

    {
        name: "Sass",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5SZIi0op7DlJEJOGXbo7fs5qpfotofpEhQ&s"
    },

    {
        name: "Materialize",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBE7eZ9DskZuF8QCdcSZ11wMr8AUD1paj-Q&s"
    },

    {
        name: "Visual Basic",
        image: "https://www.edtittel.com/wp-content/uploads/2020/03/newvblogo-1026x576.jpg"
    },

    {
        name: "Java",
        image: "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp"
    },

    {
        name: ".net",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
    },

    {
        name: "Node.js + Express + Pug",
        image: "https://midu.dev/images/tags/node.png"
        //https://miro.medium.com/v2/resize:fit:366/1*1YJCoKmEWlTL6C9I8apJmA.png
    },

    {
        name: "Arduino",
        image: "https://www.electronicabp.com/wp-content/uploads/2017/08/Arduino-logo.png"
    }
]





//Proyectos:
let proyectos = [
    {
        name: "Ropero Virtual",
        function: "Inventario de ropa que una persona tiene en su casa, con la posibilidad de elegir su vestimenta a utilizar. Permite agregar, editar, eliminar. Trabaja con la base de datos de localstorage",
        technologies: ["React.js", "Bootstrap", "CSS"],
        image: "./imagenes_proyectos/img-ropero.jpg",//"./imagenes_proyectos/img-ropero.JPG",
        link: "https://agustin2999.github.io/?proj=pma"
    },

    {
        name: "Reparto de Dinero",
        function: "Repartir dinero entre personas de manera equitativa. Cuenta con impresion de comprobante, y posibilidad de conectar un GSheet",
        technologies: ["React.js", "Bootstrap", "CSS"],
        image: "./imagenes_proyectos/img-repartodinero.JPG",
        link: "https://agustin2999.github.io/"
    },

    {
        name: "Spidder",
        function: "Red social. Publicaciones, likes, mensajes, buscar perfil. Fue hecho principalmente para version mobile. Cuenta con arrastre hacia abajo para recargar. Coneccion a una api para los datos. Permite copiar al portapapeles las publicaciones",
        technologies: ["React.js", "Bootstrap", "CSS"],
        image: "./imagenes_proyectos/img-spidder.JPG",
        link: "https://agustin2999.github.io/?proj=sp"
    },
    {
        name: "Cronos",
        function: "Organizacion de tiempo. Cuenta con un cronometro y permite arrastre hacia diferentes secciones, donde se va sumando el tiempo. Ej: 15 minutos en programacion web, luego se hace 10 minutos de programacion python, etc",
        technologies: ["React.js", "Bootstrap", "CSS"],
        image: "./imagenes_proyectos/img-cronos.JPG",
        link: "https://agustin2999.github.io/?proj=cron"
    },
    {
        name: "Zion Music Pagina web",
        function: "Información sobre una productora musical",
        technologies: ["Javascript", "Bootstrap", "CSS"],
        image: "./imagenes_proyectos/img-zionmusic.JPG",
        link: "https://zionmusic.000webhostapp.com/"
    },





    //Otros proyectos. Listo controlado 1/6/24 y listo para produc
    {
        //1 - Api python fastapi PY
        name: "Api python fastapi",
        function: "Api para consultar y modificar datos de base de datos SQLite3",
        technologies: ["Python", "SQLite"],
        image: null,
        link: "https://github.com/Agustin2999/Proyectos-de-todo/tree/main/1%20-%20Api%20python%20fastapi"
    },
    {
        //2 - Adeteccion. Comparador de rostros JS
        name: "Adeteccion. Comparador de rostros",
        function: "Pagina web que permite comparar rostros y encontrar coincidencias. Se utiliza face-api como libreria. Tiene porcentaje de coincidencia modificable en el código",
        technologies: ["Javascript", "Materialize", "CSS"],
        image: null,
        link: "https://github.com/Agustin2999/Proyectos-de-todo/tree/main/2%20-%20Adeteccion.%20Comparador%20de%20rostros"
    },
    {
        //3 - consulta bd postgresql, arma csv y envio por mail PY
        name: "Consulta bd postgresql, arma csv y envio por mail",
        function: "Hace consulta a base de datos PostgreSQL, arma un archivo .csv con los datos obtenidos utilizando libreria 'pandas' y luego hace envio por mail utilizando libreria 'smtplib'",
        technologies: ["Python", "PostgreSQL"],
        image: null,
        link: "https://github.com/Agustin2999/Proyectos-de-todo/blob/main/3%20-%20consulta%20bd%20postgresql%2C%20arma%20csv%20y%20envio%20por%20mail.py"
    },
    {
        //4 - query sistema, recordatorios por mail presupuestos y facturas PY
        name: "Query sistema, recordatorios por mail presupuestos y facturas",
        function: "Script que lee una api de sistema empresarial y envia diferentes mails (en html) en forma de aviso de acuerdo a vencimientos de presupuestos y facturas",
        technologies: ["Python"],
        image: null,
        link: "https://github.com/Agustin2999/Proyectos-de-todo/blob/main/4%20-%20query%20sistema%2C%20recordatorios%20por%20mail%20presupuestos%20y%20facturas.py"
    },
    {
        //5 - google calendar, aviso cumpleaños, crear aniversarios, eliminar exempleados PY
        name: "Google calendar, aviso cumpleaños, crear aniversarios, eliminar exempleados",
        function: "Lee datos de google calendar utilizando api de Google, envia mails de avisos de cumpleaños cercano, crea aniversarios de empleados nuevos y elimina datos de exempleados",
        technologies: ["Python", "Google"],
        image: null,
        link: "https://github.com/Agustin2999/Proyectos-de-todo/blob/main/5%20-%20google%20calendar%2C%20aviso%20cumplea%C3%B1os%2C%20crear%20aniversarios%2C%20eliminar%20exempleados.py"
    },
    {
        //10 - get google sheet data JS
        name: "Get google sheet data",
        function: "Obtiene datos de un Google Sheets que sea publico. Permite traer datos filtrados",
        technologies: ["Javascript", "Google"],
        image: null,
        link: "https://github.com/Agustin2999/Proyectos-de-todo/blob/main/10%20-%20get%20google%20sheet%20data.js"
    },
    {
        //11 - get data mediante join espacial o condicion where JS
        name: "Get data mediante join espacial o condicion where",
        function: "Obtiene datos del sistema empresarial mediante condicion where o join espacial (geografica)",
        technologies: ["Javascript"],
        image: null,
        link: "https://github.com/Agustin2999/Proyectos-de-todo/blob/main/11%20-%20get%20data%20mediante%20join%20espacial%20o%20condicion%20where.js"
    },
    {
        //12 - get data from google sheet and insert to table (interna) PY
        name: "Get data from google sheet and insert to table",
        function: "Obtiene datos de un Google Sheets mediante api de Google (con credenciales) y luego los inserta en el sistema empresarial",
        technologies: ["Python", "Google"],
        image: null,
        link: "https://github.com/Agustin2999/Proyectos-de-todo/blob/main/12%20-%20get%20data%20from%20google%20sheet%20and%20insert%20to%20table%20(interna).py"
    },



]




function insertIconsTechnologies(technology) {

    let imgTech = document.createElement('img');


    imgTech.style.width = "50px";
    imgTech.style.height = "auto";
    // imgTech.style.border = "1px solid green";
    imgTech.style.zIndex = "99999px";

    imgTech.style.margin = "8px";
    switch (technology.toLowerCase()) {
        case "github":
            imgTech.src = "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
            imgTech.alt = "imagen github"
            break;
        case "javascript":
            imgTech.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            imgTech.alt = "imagen javascript"
            break;
        case "react.js":
            imgTech.src = "https://cdn.worldvectorlogo.com/logos/react-1.svg"
            imgTech.alt = "imagen react.js"
            break;
        case "css":
            imgTech.src = "https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
            imgTech.alt = "imagen css"
            break;
        case "bootstrap":
            imgTech.src = "https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg"
            imgTech.alt = "imagen bootstrap"
            break;
        case "python":
            imgTech.src = "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png"
            imgTech.alt = "imagen python"
            break;
        case "postgresql":
            imgTech.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png"
            imgTech.alt = "imagen postgresql"
            break;
        case "materialize":
            imgTech.src = "https://k-graphiste.com/wp-content/uploads/2022/04/materialize-css.jpg"
            imgTech.alt = "imagen materialize"
            break;
        case "sqlite":
            imgTech.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png"
            imgTech.alt = "imagen sqlite"
            break;
        case "google":
            imgTech.src = "https://avatars.githubusercontent.com/u/16785467?s=200&v=4"
            imgTech.alt = "imagen google"
            break;
        default:
            imgTech.src = "https://cdn-icons-png.flaticon.com/512/1995/1995515.png"
            imgTech.alt = "imagen " + technology;
            break;
    }

    return imgTech
}






document.addEventListener('DOMContentLoaded', function () {

    // Agregamos Skills
    let ulContainerSkills = document.querySelector('#ul-container-skills');

    arraySkills = mezclarArregloConCopia(arraySkills)

    arraySkills.forEach((item) => {

        let liContainerSkill = document.createElement("li");

        let divSkill = document.createElement("div");
        divSkill.className = "div-skill";
        divSkill.style.display = "flex";
        divSkill.style.alignItems = "center";
        divSkill.style.gap = "0.3rem";

        let imagen = document.createElement("img");
        imagen.src = item.image;
        imagen.style.width = "10px"

        if (item.image == null) {
            imagen.src = "https://gaea.com.br/wp-content/uploads/2023/01/post_thumbnail-36c3c625ec8261bcaf15cb8a611b680a.jpeg";
        }

        let spanName = document.createElement('span');
        spanName.textContent = item.name;

        divSkill.appendChild(imagen);
        divSkill.appendChild(spanName);
        liContainerSkill.appendChild(divSkill);
        ulContainerSkills.appendChild(liContainerSkill);
    })





    // Agregamos proyectos
    let container = document.querySelector('#projects');

    proyectos = mezclarArregloConCopia(proyectos)

    proyectos.forEach((item) => {
        let divProyecto = document.createElement("div");
        divProyecto.className = "project";

        let imagen = document.createElement("img");
        imagen.src = item.image;
        imagen.alt = item.name

        // imagen.maxWidth="100%" 
        imagen.height = "auto"
        imagen.width = "400px !important";
        imagen.maxHeight = "300px !important";
        imagen.objectFit = "contain !important";


        if (item.image == null) {
            imagen.src = "https://gaea.com.br/wp-content/uploads/2023/01/post_thumbnail-36c3c625ec8261bcaf15cb8a611b680a.jpeg";
        }

        let nombreProyecto = document.createElement('h3');
        nombreProyecto.textContent = item.name

        let pDescripcion = document.createElement('p');

        pDescripcion.textContent = item.function;


        let pTecnologias = document.createElement('p');
        pTecnologias.textContent = item.technologies;

        //let arrImgIconTechnologies = [];


        let aLinkProyecto = document.createElement('a');
        aLinkProyecto.textContent = "Ver proyecto";
        aLinkProyecto.href = item.link;
        aLinkProyecto.target = "_blank";
        aLinkProyecto.style.marginBottom = "1rem";
        aLinkProyecto.style.color = "#708DFA";
        aLinkProyecto.style.textShadow = "5px 1px 15px rgba(0,0,0,0.59)";

        aLinkProyecto.className = "linkVerProyecto"

        //Agregamos de mas chico a mas grande

        // divTexto.appendChild(spanName);
        // divTexto.appendChild(pDescripcion);
        // divTexto.appendChild(pTecnologias);


        // divTexto.appendChild(aLinkProyecto);

        divProyecto.appendChild(imagen);
        divProyecto.appendChild(nombreProyecto);

        divProyecto.appendChild(pDescripcion);
        //divProyecto.appendChild(pTecnologias); no van a ir mas escritas las tecnologias, directo van con 

        divProyecto.appendChild(aLinkProyecto);

        let divContainerImgsTech = document.createElement("div");
        divContainerImgsTech.style.display = "flex";
        divContainerImgsTech.style.justifyContent = "center";
        // divContainerImgsTech.style.border = "1px solid red";


        item.technologies.forEach((itemTechnology) => {

            let idArmadoParaHoverTecnologia = item.name.substring(0, 3) + "-" + itemTechnology.toLowerCase();

            let divContainerImgTechConName = document.createElement("div");
            // divContainerImgTechConName.style.border = "1px solid blue";
            divContainerImgTechConName.style.position = "relative";
            divContainerImgTechConName.style.display = "flex";
            divContainerImgTechConName.style.justifyContent = "center";
            divContainerImgTechConName.style.zIndex = "0px";

            let hoverTimeoutTech;//esto es fantastico, es para cancelar el settimeout

            let imagenHTMLTechnology = insertIconsTechnologies(itemTechnology)


            //NO ME DETECTA LA IMAGEN, CUANDO TENGO EL MOUSE ENCIMA
            imagenHTMLTechnology.addEventListener("mouseenter", (event) => {
                //aca hacer aparecer el textito de la tecnologia correspondiente
                //sacarle la clase divNameTechAbsoluteHidden 

                hoverTimeoutTech = setTimeout((event) => {
                    let divAbsoluteHidden = document.getElementById(idArmadoParaHoverTecnologia);
                    divAbsoluteHidden.classList.remove("divNameTechAbsoluteHidden");
                    console.log("mouseenter en el timeout")
                }, 1000);

            });


            imagenHTMLTechnology.addEventListener("mouseleave", (event) => {

                //cancelamos el settimeout si aun esta cargando en el evento de arriba
                clearTimeout(hoverTimeoutTech);

                //aca hacer aparecer el textito de la tecnologia correspondiente
                //agregarle la clase divNameTechAbsoluteHidden 
                let divAbsoluteHidden = document.getElementById(idArmadoParaHoverTecnologia);

                divAbsoluteHidden.classList.add("divNameTechAbsoluteHidden");
            });



            imagenHTMLTechnology.addEventListener('mousemove', (event) => {
                let divAbsoluteHidden = document.getElementById(idArmadoParaHoverTecnologia);

                // Esto es para que al mover el mouse arriba del elemento no se mueva tambien el mensaje, que quedaba medio molesto
                if (divAbsoluteHidden.classList.contains("divNameTechAbsoluteHidden")) {
                    divAbsoluteHidden.style.left = `${event.pageX + 10}px`; // Ajusta según necesites
                    divAbsoluteHidden.style.top = `${event.pageY + 10}px`; // Ajusta según necesites
                }
            });




            //TOOLTIP:
            //     divContainerImgTechConName.title = "Tooltip en la parte superior";
            //     divContainerImgTechConName.setAttribute('data-bs-toggle', 'tooltip');
            //     divContainerImgTechConName.setAttribute('data-bs-placement', 'top');
            //    // Inicializar tooltip. NI SE SI HACE FALTA
            //     var tooltip = new bootstrap.Tooltip(divContainerImgTechConName);


            divContainerImgTechConName.appendChild(imagenHTMLTechnology)


            // agregamos info en absolute
            let divNameTechAbsolute = document.createElement("div");
            divNameTechAbsolute.style.position = "absolute";
            divNameTechAbsolute.style.background = "#333";
            divNameTechAbsolute.style.color = "white";
            divNameTechAbsolute.textContent = itemTechnology;



            // divNameTechAbsolute.style.top = "-10px";
            // divNameTechAbsolute.style.right = "-20px";
            divNameTechAbsolute.style.zIndex = "999";
            divNameTechAbsolute.style.border = "2px solid #4A4A4A"
            divNameTechAbsolute.style.borderRadius = "8px"
            divNameTechAbsolute.style.padding = "0.4rem"
            divNameTechAbsolute.style.textAlign = "center"


            divNameTechAbsolute.id = idArmadoParaHoverTecnologia;
            //connotacion rara para que tome bien como id unico


            //esto define que arranca escondido
            divNameTechAbsolute.classList.add("divNameTechAbsoluteHidden")


            //divContainerImgTechConName.appendChild(divNameTechAbsolute);
            //lo tengo que posicionar en el body gral, para que se ubique bien el tooltip
            document.querySelector('body').appendChild(divNameTechAbsolute);

            divContainerImgsTech.appendChild(divContainerImgTechConName);
        })

        divProyecto.appendChild(divContainerImgsTech);

        container.appendChild(divProyecto);


    })
})










// Anassssd


//         let tecnologia
//         divNameTechAbsoluteHidden


// sad
// asd








//tooltip
// document.addEventListener('DOMContentLoaded', function () {
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl);
//     });
// });

