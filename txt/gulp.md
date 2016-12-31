# Gulp
Se trata de un __automatizador de tareas__ que corre bajo __node.js__. A grosso modo, __Gulp__ nos permite definir tareas bajo un mismo __nombre__ de tal forma que al ejecutar nuestra tarea, __gulp__ de forma automática realice las tareas que hemos indicado. 
Las tareas que podemos crear pueden englobar todo aquello que queramos __automatizar__, ejemplo de los usos _más comunes_ de gulp son:
* Minimificación y concatenación
* Uso en sistemas de control de versiones
* Compilación de archivos SASS
* Agregar prefijos
* Realizar pruebas en php
* Crear controladores
* Etc




#### Proceso de instalación de Gulp
Para poder llevar a cabo la instalación es necesario tener Node.js instalado previamente. A continuación, en línea de comandos escribiremos la siguiente línea que iniciará el proceso de instalación de Gulp.js:
~~~
npm install -g gulp
~~~

Una vez finalizada la instalación podemos verificar si se instaló de forma correcta comprobando la versión de la siguiente manera:
~~~
gulp -v
~~~
Si la instalación ha sido correcta aparecerá algo como ___CLI versión 3.9.0___.

#### Utilización de Gulp.js
Para comprender correctamente la utilización de __Gulp__ describiremos los pasos a realizar para un supuesto proyecto. 
Primeramente deberemos crear una carpeta con el nombre que deseemos. En ella crearemos un archivo __gulpfile.js__, este archivo tiene ___especial importancia___ ya que es el que Gulp.js necesita para saber que tareas realizará. Pasaremos a configurarlo más adelante, por ahora inicializaremos nuestro directorio mediante:
~~~
npm init
~~~
En el proceso de inicialización, se nos formularán diversas preguntas como el nombre, una descripción, licencia... 
_En caso de tener ya un directorio de trabajo inicializado en el que únicamente queramos incorporar el funcionamiento de Gulp, nos saltaremos ese paso previo_.

Antes de comenzar a trabajar sobre nuestros archivos necesitamos __agregar las dependencias de desarrollo__ a nuestro proyecto, para __Gulp__:
~~~
npm install --save-dev gulp
~~~
En este momento se deberían reflejar dichas dependencias en el __package.json__ de nuestro proyecto.
_Dejando de lado la configuración de carpetas que tengamos en nuestro proyecto, el gulpfile.js deberá contener algo similar a lo que se muestra a continuación_:
~~~
/*
* Dependencias
*/
var gulp = require('gulp');
/*
* Configuración de la tarea 
*/
gulp.task('nombre de la tarea', function () {
  ...
});
~~~
Con el método gulp.task __definimos una tarea__. Dicho método recibe __3__ argumentos, el nombre de nuestra tarea _(podemos utilizar "default" como nombre para declarar una tarea por defecto que invocaremos desde línea de comandos introduciendo simplemente "gulp")_, la o las tareas que dependen de esta tarea y por último la función que llama a esta tarea. También es posible __definir__ si queremos que una tarea se realice __si__ una tarea anterior ha terminado, por ejemplo:
~~~
gulp.task('js',['css'],function(){
  ...
  });
~~~
De esta manera, la tarea js se ejecutará sólo cuando la tarea css __haya terminado__.
Existen multitud de plugins para Gulp, ejemplo de los más comúnmente utilizados son __Gulp-uglify__ para minificar y __Gulp-concat__ para concatenar.
<!-- toc -->