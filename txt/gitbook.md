# Gitbook

Se trata de una herramienta para __crear documentación de proyectos y libros técnicos usando Markdown y Git/Github__. 
Entre las numerosas características que nos ofrece podemos destacar:
* Publicar y mantener fácilmente libros online utilizando _gitbook.com_.
* Ofrece la posibilidad de trabajar desde una aplicación propia.
* Permite __incluir ejemplos y ejercicios interactivos__.
* Mediante la utilización de __Markdown__ podemos "maquetar" nuestros documentos y crearlos con diferentes formatos: __PDF, ebook o web__.

__Gitbook__ está implementado usando node.js, podemos instalarlo usando ___NPM___:
~~~
npm install gitbook -g
~~~
Una vez instalado podemos comenzar a trabajar sobre nuestros archivos en formato Markdown y posteriormente servir dichos archivos cara un repositorio, por ejemplo:
~~~
gitbook serve txt ./repositorio
~~~
En este ejemplo, __txt__ es el directorio en el que tenemos nuestros archivos Markdown y __./repositorio__ es donde nos dejará los html.

Una opción muy interesante es servir nuestro libro bajo gh-pages de forma que contenemos nuestro libro exportado en un sitio web fácilmente accesible.


