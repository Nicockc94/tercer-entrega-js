//importar configuraciones
// manera correta de importar datos 
import { firebaseConfig } from './firebase.js';
console.log(firebaseConfig);



//btn de verificacion de Usuario
let verificar = document.getElementById ("verificar")
verificar.addEventListener("click",verificarUsuario) 


/*  -- -- -- -- Notificaciones de Verificado de Usuario -- -- -- -- */
function  notificacionVerificado(){
  swal({
    text: "Verificado!!!",
  });
}



function  notificacionDenegado (){
  swal({
    text: "Acceso Denegado",
  });
}

function verificarUsuario() {
  let userId = document.getElementById("userid");
  let userPassword = document.getElementById("userpassword");
  let usuarioVerificado = false; // Variable para rastrear si se ha verificado el usuario

  if (userId !== null) {
    const userIdValue = userId.value;
    const userPasswordValue = userPassword.value;

    const db = firebase.firestore();
    const usersRef = db.collection("users");

    usersRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const nombre = data.Nombre;
          const email = data.Email;
          const password = data.Password;
          
          if ((nombre === userIdValue || email === userIdValue) && password === userPasswordValue) {
            notificacionVerificado();
            verificar.className = "btn-verificar_off";
            ingresoUsuario.className = "Ingresoon";
            usuarioVerificado = true; // esto termina de validar la autenticacion 
          }
        });

        // Después del bucle, Si el usuario no fue validado / mostrara la notificacion de denegado
        if (!usuarioVerificado) {
          notificacionDenegado();
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos: ", error);
      });
  } else {
    console.log("Elemento 'userid' no encontrado en el DOM.");
  }
}



let btn__CreateUser = document.getElementById("btn-createUser")
let formularioCreateUser = document.getElementById("formulario-createUser")
let login = document.getElementById("login-container")
 
btn__CreateUser.addEventListener("click",MostrarCreateUser);


function MostrarCreateUser(){
  console.log("Botón 'Crear Usuario' clicado"); // Agrega esta línea de prueba
  formularioCreateUser.className="mostrar-createUser"
  login.className="ocultar__login-container"
 
}

// validacion de formulario de usuario

document.getElementById("formulario").addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Validar campo nombre
  let entradaNombre = document.getElementById('name');
  let errorNombre = document.getElementById('nameError');

  if (entradaNombre.value.trim() === '') {
      errorNombre.textContent = "Por favor introduzca un Nombre";
      errorNombre.classList.add("error-message");
  } else {
      errorNombre.textContent = '';
      errorNombre.classList.remove("error-message");
  }

  // Validar campo email
  let emailEntrada = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailEntrada.value)) {
      emailError.textContent = "Por favor introduzca un email válido";
      emailError.classList.add("error-message");
  } else {
      emailError.textContent = "";
      emailEntrada.classList.remove("error-message");
  }
  
  // Validar campo contraseña
  let contrasenaEntrada = document.getElementById("password");
  let contrasenaError = document.getElementById("passwordError");

  if (contrasenaEntrada.value.length < 8) {
      contrasenaError.textContent = "Por favor introduzca una contraseña con un mínimo de 8 caracteres";
      contrasenaError.classList.add("error-message");
  } else {
      contrasenaError.textContent = "";
      contrasenaError.classList.remove("error-message");
  }

// guardar datos 

function guardarDatos (){
  const db = firebase.firestore();
  db.collection("users").add({
    Nombre: entradaNombre.value,
    Email:emailEntrada.value,
    Password:contrasenaEntrada.value,
    
    
})
.then((docRef) => {
    alert("Usuario Creado con exito!")
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}

  // Comprobar si no hay errores en el formulario
  if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
      formularioCreateUser.className="ocultar-createUser"
      login.className="mostrar__login-container"
      guardarDatos()
    
      
  }
   
});








// comentarios al azar de Supuestos usuarios de la aplicacion
// al igual que en el formulario , desde este index.js accedo a los datos de JSONPlaseholder
function getRandomComment() {

const randomCommentId = Math.floor(Math.random() * 500);
const url = `https://jsonplaceholder.typicode.com/comments/${randomCommentId}`;


let comentarios = document.getElementById("comentarios");

fetch(url)
  .then(response => response.json())
  .then(json => {
    comentarios.className ="comentarios"
    comentarios.innerHTML = `
        <div class="titulo-comentario">
      <h2>Comentario de Profesionales que utilizan este servicio</h2>
      <h2>Utilizando La api de Prueba de JsonPlaseholder</h2>
       </div>
      
      <p>Nombre de Usuario : ${json.name}</p>
      <p> Email : ${json.email}</p>
      <div class="box-comentario">
      <p> Reseña :${json.body}</p>
      </div>
    `;
  })
  .catch(error => {
    console.error('Error al cargar los comentarios: ', error);
  });
}



getRandomComment();
setInterval(getRandomComment, 5000);


