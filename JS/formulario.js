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



const mostrarPaciente = () =>{

}

//envio de formulario
submit.addEventListener("click",crearFormulario);
const nuevoPaciente=(paciente) => {
  
    listaPacientes.push(paciente)
    console.log(listaPacientes)
    //storage              //key       //valor

   localStorage.setItem("Pacientes",JSON.stringify(listaPacientes))

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
 }





  // busqueda de pacientes mediante input 
 let buscaPaciente = document.getElementById("buscarPacientes")
 let pacienteaBuscar = document.getElementById("buscaPacientes")
 let ocultar = document.getElementById("ocultar")
   
  
  buscaPaciente.addEventListener("click",busquedaDePacientes)
 //funcion que busca pacientes por nombre!
 
 function busquedaDePacientes () {
  
    let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
      //VACIAR HTML
    let  obser=document.getElementById("obser")
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
      console.log(pacientes)
      pacientes.splice(index)
      localStorage.setItem("Pacientes",JSON.stringify(pacientes))
      
    
      dataIngresada.innerHTML =""
      obser.innerHTML=""


   }     
       //  console.log(pacientes[index])
                     
       }else {  

     //  console.log(pacientes[index])
      
   }
   }
   }


   


   //boton que muestra La lista actual de pacientes 
  let mostrarLista = document.getElementById("mostrarLista")
   // id que mostrara la informacion 
  let listaDePasientes = document.getElementById("listaDePasientes")

  
   mostrarLista.addEventListener("click",mostrarListaDePacientes)

//funcion 

   function mostrarListaDePacientes() { 
      let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
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
  return listaDePacientes.innerHTML = ""

}

let pacientes = JSON.parse(localStorage.getItem("Pacientes"))
//llamado a elementos de DOM 







 


 
 
 














 












   

 
     

 

 
