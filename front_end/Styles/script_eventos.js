let url = 'http://localhost:5161/api/eventos';

    fetch(url)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))

    const mostrarData = (data) => {
      let body = "";
      for (let i = 0; i < data.length; i++) {
        body += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].titulo}</td>
                    <td>${data[i].descripcion}</td>
                    <td>${data[i].lugar}</td>
                    <td>${data[i].fecha}</td>
                    <td><a href="formulario_evento.html?id=${data[i].id}" class="btn btn-warning">Editar</a></td>
                  </tr>`;
      }
      document.getElementById('data').innerHTML = body;
    }