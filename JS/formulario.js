// llamado a los ID del html  : 


let nombreCompleto = document.getElementById("nombreCompleto");
let dni = document.getElementById("dni");
let fechaIngreso =document.getElementById("fechaIngreso");
let direccion = document.getElementById("direccion");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let fechaNacimiento = document.getElementById("fechaNacimiento");
let elementosHigiene = document.getElementById("elementosHigiene");
let antecedentesSalud = document.getElementById("antecedentesSalud");
let medicacion = document.getElementById("medicacion");
let alergias = document.getElementById("alergias");
let observaciones = document.getElementById("observaciones");
let formulario = document.getElementById("Formulario")
let submit = document.getElementById("submit");
let spinner = document.getElementById("spinner");
let busqueda = document.getElementById("busqueda");


/* -- -- -- --Botones-- -- -- -- -- */
let bton_ingresoPacientes = document.getElementById("btn-ingresoPacientes");
let bton_busquedaPacientes =document.getElementById("btn-busquedaPacientes");
let bton_cerrarFormulario = document.getElementById("cerrar")
let bton_cerrarBusqueda = document.getElementById("boton-cerrar-busqueda");


/* Asignamos funciones a los btn*/ 
bton_ingresoPacientes.addEventListener("click",mostrarFormulario)
bton_busquedaPacientes.addEventListener("click",mostrarBusqueda)
bton_cerrarFormulario.addEventListener("click",cierraFormulario)
bton_cerrarBusqueda.addEventListener("click", cerrarBusqueda)

/* -- -- -- -- -- Botones en HTML -- -- -- -- --  */

// funcion que cierra la Busqueda
function cerrarBusqueda () {
   busqueda.className="Busquedaoff"
   obser.className="MostrarObservacionesoff"

}
// funcion de boton que Cierra el formulario
function cierraFormulario (){
   formulario.className="formulariooff";

}
// funcion  que muestra el formulario 
function mostrarFormulario(){
   busqueda.className="Busquedaoff"
   formulario.className="formulario";
}
// funcion de mostrar busqueda de paciente
function mostrarBusqueda (){
   busqueda.className="Busqueda";
   formulario.className="formulariooff";

}

//variable global / array de lista de pacientes
let listaPacientes=[]


//00000000000 creacion y envio de formulario 0000000000//
submit.addEventListener("click",crearFormulario);

//     ----   ----         Notificaciones de Toastify                  ----   ----    //
function eliminastePaciente(){
   Toastify({

      text:"Has Eliminado el Paciente",
      gravity:`bottom`,
      position:"right",
      duration: 3000,
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
   
}
//     ----   ----                                                     ----   ----    //
function notificacionNuevoPaciente() {
   Toastify({

      text: "Agregaste Nuevo Paciente",
      gravity: `bottom`,
      position: "right",
      duration: 3000,
      
      }).showToast();
}
/*-------------------------------------------------------------------------*/

//funcion que crea el formulario
 function crearFormulario(e){
  
    //entrada de Valores 
    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let dni = document.getElementById("dni").value;
    let direccion = document.getElementById("direccion").value;
    let fechaIngreso =document.getElementById("fechaIngreso").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let elementosHigiene = document.getElementById("elementosHigiene").value;
    let antecedentesSalud = document.getElementById("antecedentesSalud").value;
    let medicacion = document.getElementById("medicacion").value;
    let alergias = document.getElementById("alergias").value;
    let observaciones = document.getElementById("observaciones").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
   
    e.preventDefault()
//Objeto Paciente
    let paciente = {
        nombreCompleto:nombreCompleto,
        dni:dni ,
        direccion:direccion,
        fechaIngreso:fechaIngreso,
        fechaNacimiento:fechaNacimiento,
        elementosHigiene:elementosHigiene,
        antecedentesSalud:antecedentesSalud,
        medicacion:medicacion ,
        alergias:alergias,
        observaciones:observaciones ,
        email:email,
        telefono:telefono,
     }
//llamado a la funcion que crea un un nuevo paciente
nuevoPaciente(paciente)

setTimeout (reset,2000);
setTimeout (notificacionNuevoPaciente,2000)
spinnerOn ()   
 }

// funcion que vacia el formulario despues de guardar los datos en storage
function reset () {
nombreCompleto.value = "";
dni.value = "";
direccion.value = "";
fechaIngreso.value = "";
fechaNacimiento.value = "";
elementosHigiene.value = "";
antecedentesSalud.value = "";
medicacion.value = "";
alergias.value = "";
observaciones.value = "";
telefono.value="";
email.value ="";

}

// funcion de el icono de carga
function spinnerOn (){
   spinner.className="spinnerOn"
   setTimeout(spinnerOff,2000);  
}

function spinnerOff (){
   spinner.className="spinnerOff"
}

 const nuevoPaciente = (paciente) => {
   listaPacientes.push(paciente)
   console.log (listaPacientes)
   localStorage.setItem("Pacientes",JSON.stringify (listaPacientes))

}

 // busqueda de pacientes mediante input // referencias a los ID del HTML
 let buscaPaciente = document.getElementById("buscarPacientes")
 let pacienteaBuscar = document.getElementById("buscaPacientes")
 let ocultar = document.getElementById("ocultar")
   
  
  buscaPaciente.addEventListener("click",busquedaDePacientes)



  //funcion que busca pacientes por nombre!
 function busquedaDePacientes () {
  
    let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
    let obser=document.getElementById("obser") 
       //VACIAR HTML
      dataIngresada.innerHTML =""
      
      for (let index = 0; index < pacientes.length; index++) {     
       let nombre = pacienteaBuscar.value
      if (pacientes[index].nombreCompleto === nombre) {
         
         obser.className="MostrarObservaciones"
         obser.innerHTML=`              <h2>Datos de Paciente</h2> 
                         <p><span class="key">Alergias:</span>${pacientes[index].alergias}</p>
                         <p> <span class="key">Direccion:</span>${pacientes[index].direccion}</p> 
                         <p> <span class="key">Telefono:</span> ${pacientes[index].telefono}</p>
                         <p> <span class="key" >Email: </span> ${pacientes[index].email}</p> 
                                        <h2>Antecedentes de Salud</h2>
                                <p>${pacientes[index].antecedentesSalud}</p>
                                 <h2>Observaciones Generales</h2>
                                <p>${pacientes[index].observaciones}</p>
                                       `
                                 

         dataIngresada.innerHTML =`<tr>
                                    <th>${pacientes[index].nombreCompleto}</th>
                                    <td>${pacientes[index].dni}</td>
                                    <td>${pacientes[index].fechaNacimiento}</td>
                                    <td>${pacientes[index].telefono}</td>
                                    <button id ="EliminarPaciente">Eliminar De Lista</button>
                                   </tr> 

                                   `

                                     
     
   EliminarPaciente.addEventListener("click",quitarDeLista)

   function quitarDeLista () {

      let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
      listaPacientes.splice(index,1)
      localStorage.setItem("Pacientes",JSON.stringify(listaPacientes))
      dataIngresada.innerHTML =""
      obser.innerHTML=""

      eliminastePaciente()
      mostrarListaDePacientes()
   }     
                     
       }else{ 
             
         swal({
            text: "No se encontro un Paciente con ese Nombre",
          });
     
      
   }}}


   //boton que muestra La lista actual de pacientes 
  let mostrarLista = document.getElementById("mostrarLista")
   // id que mostrara la informacion 
  let listaDePasientes = document.getElementById("listaDePasientes")
   mostrarLista.addEventListener("click",mostrarListaDePacientes)

  //funcion que muestra la lista de pacientes
  // Atravez de la api JsonPaseholder , obtengo imagenes de usuarios 



   function mostrarListaDePacientes () { 

      // Atravez de la aPi JsonPlaseholder , obtengo imagenes de usuarios
      // la razon por la que se encuentra aqui , es por que obtengo imagenes que simulan ser de usuarios, 
      

      let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
      pacientes = listaPacientes

      // vaciar la lista de pacientes 
      listaDePacientes.innerHTML = ""; 
     
     for (let index = 0; index < pacientes.length; index++) {

         let urlBase ='https://jsonplaceholder.typicode.com'
         let fotos ='photos'
                                                       
         fetch (`${urlBase}/${fotos}/${index + 1}`)
            .then(response => response.json())
            .then(data =>{
         let imageUrl = data.url

            // creo un elemento en html
         let imgElement = document.createElement('img')
         imgElement.src = imageUrl;
         imgElement.className="imagen-profile"

         let listItem = document.createElement("li");
         listItem.className ="listaProfile"
         listItem.innerHTML = `${pacientes[index].nombreCompleto}`;
         listItem.appendChild(imgElement);

         listaDePacientes.appendChild(listItem);
         
            
            })
            .catch(error => {
            console.error('Error al cargar la imagen: ', error);
            });  
                                                              
          }
       
   }

ocultar.addEventListener("click",guardarLista)

function guardarLista(){
   pacientes = listaPacientes
   
  return listaDePacientes.innerHTML = "";


}
let pacientes = JSON.parse(localStorage.getItem("Pacientes"))


document.addEventListener("DOMContentLoaded", () => {
   let pacientes = JSON.parse(localStorage.getItem("Pacientes"));
   if (pacientes) {
     listaPacientes = pacientes;
    
     mostrarListaDePacientes();
   }else{

      console.log("Nose cargaron nuevos pacientes")
   }
 }
 );








      




      







 


 
 
 














 












   

 
     

 

 
