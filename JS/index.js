//importar configuraciones
// manera correta de importar datos 
import { firebaseConfig } from './firebase.js';
console.log(firebaseConfig);




let verificar = document.getElementById("verificar")
verificar.addEventListener("click",verificarUsuario)

let userId = document.getElementById("userid");
let userPassword = document.getElementById("Userpassword");


function verificarUsuario (){
 
  if (userId !== null) {
    // Ahora puedes acceder a userId.value de manera segura
    console.log(userId.value)
    const userIdValue = userId.value;
    // Resto de tu código
  } else {
    console.log("Elemento 'userid' no encontrado en el DOM.");
  }


  const db = firebase.firestore();
  const usersRef = db.collection("users");
  
  
    usersRef.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Accede a los datos de cada documento
        const data = doc.data();
        const nombre = data.Nombre;
        const email = data.Email;
        const password = data.Password;
        if ((nombre === (userId).value || email === (userId).value) && password === (userPassword).value ){
          alert ("usuario verificado")


        }
  
        // Haz lo que desees con los datos, como mostrarlos en pantalla
      //  console.log(`Nombre: ${nombre}, Email: ${email}, Password: ${password}`);
      });
    })
    .catch((error) => {
      console.error("Error al obtener datos: ", error);
    });

  
    
}







let btn__CreateUser = document.getElementById("btn-createUser")
let formularioCreateUser = document.getElementById("formulario-createUser")
let login = document.getElementById("login-container")
 
btn__CreateUser.addEventListener("click",MostrarCreateUser);


function MostrarCreateUser(){
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


