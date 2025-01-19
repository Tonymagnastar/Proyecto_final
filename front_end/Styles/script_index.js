document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Crea el objeto con los datos de login
    const loginData = {
        email: email,
        password: password
    };

    // Realiza la solicitud a la API
    fetch('http://localhost:5161/api/Usuarios/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())  // Respuesta de la API en formato JSON
    .then(data => {
        if (data.success) {
            window.location.href = "eventos.html";  // Redirige si la autenticación es exitosa
        } else {
            document.getElementById("loginMessage").textContent = "Correo o contraseña incorrectos.";
            document.getElementById("loginMessage").classList.add("text-danger");
        }
    })
    .catch(error => {
        document.getElementById("loginMessage").textContent = "Error al realizar la solicitud.";
        document.getElementById("loginMessage").classList.add("text-danger");
    });
});
