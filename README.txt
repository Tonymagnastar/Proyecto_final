SISTEMA DE ADMINISTRACION DE EVENTOS

## Descripción:

Aplicación web enfocada a la administración de eventos mediante operaciones CRUD y una interfaz web para su uso. Este proyecto tiene como objetivo comprender el funcionamiento de peticiones mediante Backend y Frontend así como la manipulación de datos proporcionados.

## Características:
- Formulario con validación de entrada.
- Envío de datos mediante `fetch` a un servidor backend.
- Manejo de respuestas del servidor (éxito o error).
- Diseño responsivo para facilitar su manejo a los usuarios.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- C#
- ASP .NET CORE Web API 9.0
- Microsoft Entity Framework Core 8.0.2
- Microsoft Entity Framework Core.Design 8.0.2
- Pomelo Entity Framework Core.Mysql 8.0.2
-Mysql

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Tonymagnastar/Proyecto_Dialogus.git

## Ejecución 
-Importa el esquema de la base de datos en MySQL Workbench o cualquier otro gestor local de bases de datos.
-Ejecuta la Api en Visual Studio.
-Abre el documento Index.html para validar las credenciales
-Las credenciales validas para iniciar sesión son las siguientes:
	-Marcoaantonio"gmail.com
	-Marychavero"gmail.com
	-password: admin123
-Una vez validado apreciaras la tabla con los eventos de la base de datos.
-La interfaz cuenta con dos botones "Nuevo evento" y "Editar"
-Dependiendo de cual opción elijas deberás llenar el formulario correspondiente.
-Una vez llenado podrás apreciar los cambios realizados por la petición.

NOTA: El archivo del backend llamado appsettings.json cuenta con la siguiente linea de código para realizar la conexión a la base de datos:
"ConnectionStrings": {
    "DefaultConnection": "server=localhost;port=3306;database=Dialogus;user=root;password=admin123"
},
Dependiendo de donde se encuentre alojada la base de datos, la linea DefaultConnection cambiara



