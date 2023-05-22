Hola, primero debes descargar la aplicacion, dando:

**1er forma**. Dar clic en Code y luego en **Download Zip**.
**2da forma** Crear una carpeta, ingresar a git bash y ejecutar.

Realizar estas instalaciones en caso de no tener la libreria de Java 17, el framework de Node.js y el manejador de paquetes npm

**Paso 1.** Descargar Java 17 para Windows 64 bit, mediante este link, e instalarlo:

[jdk17-windows](https://www.oracle.com/java/technologies/downloads/#jdk17-windows "jdk17-windows")

**Paso 2**. Luego descargar e instalar Node.js version LTS 18.16.0 (esta incluye npm por defecto).

Llink: https://nodejs.org/es/download

**Paso 3**.  Crear la app (front-end) con react,  abriendo un terminar, ej: CMD y usar el comando

npx create-react-app app-with-bootstrap

**Paso 4**.  Descargar la libreria de bootstrap colocando este comando en la terminal:

npm install bootstrap

**Paso 5**. Boostrap tiene una dependencia de popper para que funcionen algunos elementos, por lo cual en la terminal, ejecuta este comando:

npm i @popperjs/core

Nota: Si la terminal te da un mensaje de "severity vulnerabilities" al ejecutar el comando del paso 4 y/o 5 , ejecuta este comando: npm audit fix o npm audit fix --force

**Paso 6**. Ahora en el Index.js agregar estas librerias:
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


##Vista previa.
**Paso 7**. Ahora queda probar el funcionamiento de la app, para esto en la terminal, ejecuta el comando:

npm start