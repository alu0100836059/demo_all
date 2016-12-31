#
# Práctica: Despliegue en iaas y Heroku


![alt text][logo] ![imagen2][logo1]
[logo]: http://www.codecheese.com/wp-content/uploads/heroku-logo.png
[logo1]: http://quersystem.com/wp-content/uploads/2015/03/IaaS-Cloud1-300x268.jpg
### Requisitos

Descripción

El objetivo de esta práctica es proporcionar un mecanismo de despliegue de un libro gitbook de manera que un deploy a github produzca la actualización automática de los otros sites de despliegue:

* gitboook.com
* Heroku
Para lograr este objetivo usaremos la técnica descrita en el artículo Colaboración: The Perfect Work-flow with Git, GitHub, and SSH.

En iaas.ull.es, debido a que la IP de la máquina virtual es privada a la red de la ULL. Para sincronizar con iaas.ull.es disponga un script que utilice ssh y/o scp para actualizar los ficheros necesarios al repositorio del libro en la máquina virtual.

## Enlace a github gh-pages
[gh-pages](https://ull-esit-sytw-1617.github.io/tareas-iniciales-noejaco2017/)

## Enlace a gitbook
[gitbook](https://alu0100836059.gitbooks.io/apuntessytw/content/)

## Enlace a npm
[npm](https://www.npmjs.com/package/gitbook-start-team-noejaco2017)

## Enlace a la aplicación desplegada en heroku
[heroku](https://herokuiaass.herokuapp.com/)



# Instalación

## Instalar nuestro paquete NPM
_npm install -g gitbook-start-team-noejaco2017_

## Ejecutar nuestro paquete
_gitbook-start --autor juanito --url juanito@ull.edu.es --wiki wiki@ull.es --email github@github.es --version 1.0.1 --directorio chuchu_

## Manual de ayuda
_gitbook-start --h || --help_
````````````````````
gitbook-start [OPTIONS]
--autor: autor del libro a crear node gitbook-star -a AutorDelLibro
--email: email de contacto del usuario
--version: version repositorio github contra el que se va a trabajar -r github.com/repo.git
--url: repositorio github contra el que se va a trabajar -r github.com/repo.git
--wiki: direccion web de la wiki en github -w github.com/repo.wiki.git
--directorio: nombre del directorio a crear
--help: muestra ayuda sobre las opciones disponibles
````````````````````
### Comandos para crear nuestro modulo en NPM

* npm adduser (añade nuestro paquete)
* npm publish(publica nuestro paquete)
* Tener en cuenta que cada vez que se publique cambiar version package.json

### Carpeta bin y template
* En nuestra carpeta /bin contiene los archivos para las funciones que podremos ejecutar desde la linea de comandos del cliente npm
* En nuestra carpeta /template tendremos el directorio a crear en gh-pages
*  index.js que sirve de atajo al script principal de nuestra aplicación

### Ejecutar nuestro script linea-comando-npm
_node bin/linea-comando-npm.js --autor juanito --url juanito@ull.edu.es --wiki wiki@ull.es --email github@github.es --version 1.0.1 --directorio chuchu_
