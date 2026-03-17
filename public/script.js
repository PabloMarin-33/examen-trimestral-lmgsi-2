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

app.get("/api/mensajes", (req, res ) => {
  res.json(mensaje)
})