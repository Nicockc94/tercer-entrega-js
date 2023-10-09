// llamado a los ID del html 

let nombreCompleto = document.getElementById("nombreCompleto");
let dni = document.getElementById("dni");
let direccion = document.getElementById("direccion");
let fechaIngreso =document.getElementById("fechaIngreso");
let fechaUltimaConsulta = document.getElementById("fechaUltimaConsulta");
let controlDeCepillado = document.getElementById("controlDeCepillado");
let elementosHigiene = document.getElementById("elementosHigiene");
let antecedentesSalud = document.getElementById("antecedentesSalud");
let medicacion = document.getElementById("medicacion");
let alergias = document.getElementById("alergias");
let observaciones = document.getElementById("observaciones");
let formulario = document.getElementById("formulario")
let submit = document.getElementById("submit");




//variable global

let listaPacientes=[]


//envio de formulario
submit.addEventListener("click",crearFormulario);

// notificaciones 
function eliminastePaciente(){
   Toastify({

      text:"Has Eliminado el Paciente",
      gravity:`bottom`,
      position:"right",
      duration: 3000,
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      
      }).showToast();
   
}
function notificacionNuevoPaciente() {
   Toastify({

      text: "Agregaste Nuevo Paciente",
      gravity: `bottom`,
      position: "right",
      duration: 3000,
      
      }).showToast();
}


//creacion del formulario
 function crearFormulario(e){
  
    //entrada de datos
    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let dni = document.getElementById("dni").value;
    let direccion = document.getElementById("direccion").value;
    let fechaIngreso =document.getElementById("fechaIngreso").value;
    let fechaUltimaConsulta = document.getElementById("fechaUltimaConsulta").value;
    let controlDeCepillado = document.getElementById("controlDeCepillado").value;
    let elementosHigiene = document.getElementById("elementosHigiene").value;
    let antecedentesSalud = document.getElementById("antecedentesSalud").value;
    let medicacion = document.getElementById("medicacion").value;
    let alergias = document.getElementById("alergias").value;
    let observaciones = document.getElementById("observaciones").value;
   
    e.preventDefault()

    let paciente = {
        nombreCompleto:nombreCompleto,
        dni:dni ,
        direccion:direccion,
        //fechas =======> revisar documentacion para implementar datos tipo fechas
        fechaIngreso:fechaIngreso,
        fechaUltimaConsulta:fechaUltimaConsulta,
        ////fechas =======> revisar documentacion para implementar datos tipo fechas
        controlDeCepillado:controlDeCepillado ,
        elementosHigiene:elementosHigiene,
        antecedentesSalud:antecedentesSalud,
        medicacion:medicacion ,
        alergias:alergias,
        observaciones:observaciones ,
     }
    //llamado a la funcion que crea un un nuevo paciente
    nuevoPaciente(paciente)
    notificacionNuevoPaciente()
   
 }

 const nuevoPaciente = (paciente) => {
  
   listaPacientes.push(paciente)
   console.log (listaPacientes)
   //storage              //key       //valor
  localStorage.setItem("Pacientes",JSON.stringify (listaPacientes))
}



  // busqueda de pacientes mediante input 
 let buscaPaciente = document.getElementById("buscarPacientes")
 let pacienteaBuscar = document.getElementById("buscaPacientes")
 let ocultar = document.getElementById("ocultar")
   
  
  buscaPaciente.addEventListener("click",busquedaDePacientes)
 //funcion que busca pacientes por nombre!
 
 function busquedaDePacientes () {
  
    let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
    let  obser=document.getElementById("obser") 
    //VACIAR HTML
    
      dataIngresada.innerHTML =""
      
      for (let index = 0; index < pacientes.length; index++) {     
       let nombre = pacienteaBuscar.value
      if (pacientes[index].nombreCompleto === nombre) {
         
         
         obser.innerHTML=`
                                       <h2>Observaciones</h2>
                                   <p>${pacientes[index].observaciones}</p>`

         dataIngresada.innerHTML =`<tr>
                                    <th>${pacientes[index].nombreCompleto}</th>
                                    <td>${pacientes[index].dni}</td>
                                    <td>${pacientes[index].fechaIngreso}</td>
                                    <td>${pacientes[index].fechaUltimaConsulta}</td>
                                    <button id ="EliminarPaciente">Eliminar De Lista</button>
                                   </tr> 

                                   `
     
   EliminarPaciente.addEventListener("click",quitarDeLista)



   function quitarDeLista () {

      let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
      
      listaPacientes.splice(index,1)
      listaPacientes[index].nombre
      localStorage.setItem("Pacientes",JSON.stringify(listaPacientes))
      dataIngresada.innerHTML =""
      obser.innerHTML=""

      eliminastePaciente()
   }     
       //  console.log(pacientes[index])
                     
       }else {  

      
      
   }
   }
   }


   //boton que muestra La lista actual de pacientes 
  let mostrarLista = document.getElementById("mostrarLista")
   // id que mostrara la informacion 
  let listaDePasientes = document.getElementById("listaDePasientes")

   mostrarLista.addEventListener("click",mostrarListaDePacientes)

//funcion que muestra la lista de pacientes

   function mostrarListaDePacientes() { 

      let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
      pacientes = listaPacientes

      // vaciar la lista de pacientes 
      listaDePacientes.innerHTML = ""; 
     
         for (let index = 0; index < pacientes.length; index++) {
         listaDePacientes.innerHTML += 
                                             `
                                <li>${pacientes[index].nombreCompleto}</li>
                                
                                              `                                                
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
     // También puedes volver a cargar la lista de pacientes en la página al cargar
     mostrarListaDePacientes();
   }
 });








 


 
 
 














 












   

 
     

 

 
