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
