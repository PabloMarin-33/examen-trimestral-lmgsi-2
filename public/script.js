fetch("/api/mensajes")
.then(res => res.json())
.then(data => {


    const lista = document.querySelector("#lista")
    data.forEach(mensaje => {

        const id = document.createElement("li")
        id.textContent = mensaje.id
        lista.appendChild(id)

        const usuario = document.createElement("li")
        usuario.textContent = mensaje.user
        lista.appendChild(usuario)
        
        const contenido = document.createElement("li")
        contenido.textContent = mensaje.content
        lista.appendChild(contenido)

        const fecha = document.createElement("li")
        fecha.textContent = mensaje.created_at
        lista.appendChild(fecha)
        
    });
})

const crear = document.querySelector("#CrearUsuario")

crear.addEventListener("submit", (i)=>{

i.preventDefault()

const datos = {
id: document.querySelector("#id").value,
usuario: document.querySelector("#usuario").value,
contenido: document.querySelector("#contenido").value,
fecha: document.querySelector("#fecha").value,
}

fetch("/api/mensajes", {

    method:"POST" ,
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(datos)
})
.then(res => res.json())
.then(data => {

document.querySelector("#respuesta")
})

})

app.get("/api/mensajes", (req, res ) => {
  res.json(mensaje)
})