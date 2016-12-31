#!/usr/bin/env node
var express = require('express');
var app = express()
var path = require('path');
var fs= require('fs-extra');
var ejs=require('ejs');

//DIRECTORIO CON TEMPLATES
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'ejs');

//MINIMIST
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

// console.log("argv_ ",argv._);//los que no tienen opcion asociada
// console.log("argv ",argv);
// console.log("nombre "+argv.autor);
// console.log("url "+argv.url);
// console.log("wiki "+argv.wiki);
// console.log("version "+argv.version);
// console.log("email "+argv.email);


if(argv.h || argv.help){
    
    //MENU
    console.log("gitbook-start [OPTIONS]\n"+
    "--autor: autor del libro a crear node gitbook-star -a AutorDelLibro\n"+
    "--email: email de contacto del usuario\n"+
    "--version: version repositorio github contra el que se va a trabajar -r github.com/repo.git\n"+
    "--url: repositorio github contra el que se va a trabajar -r github.com/repo.git\n"+
    "--wiki: direccion web de la wiki en github -w github.com/repo.wiki.git\n"+
    "--directorio: nombre del directorio a crear\n"+
    "--help: muestra ayuda sobre las opciones disponibles\n");
    
    
}else{
    
//EJS RENDERFILE cargamos la plantilla
var direct = process.cwd() + '/template/';

    //Creamos el directorio
    fs.mkdirsSync(direct + argv.directorio);
    
    //Creamos una copia de los scripts
    fs.copy(path.join(__dirname, '../template', 'scripts') , path.join(direct, `${argv.directorio}`,'scripts'), function(err){
        if(err) return console.error(err)
    }); 
    //Creamos una copia de los txt
    fs.copy(path.join(__dirname, '../template', 'txt') , path.join(direct, `${argv.directorio}`,'txt'), function(err){
        if(err) return console.error(err)
    });
    //Creamos una copia de Readme
    fs.copy(path.join(__dirname, '../template', 'README.md') , path.join(direct, `${argv.directorio}`,'README.md'), function(err){
        if(err) return console.error(err)
    });
    //Creamos gulpfile
    fs.copy(path.join(__dirname, '../template', 'gulpfile.js') , path.join(direct, `${argv.directorio}`,'gulpfile.js'), function(err){
        if(err) return console.error(err)
    });
    

    
    //Creamos el packeage.json a traves de la plantilla
    ejs.renderFile(path.join(__dirname, '../template', 'package.ejs'),{nombre:argv.name, num:argv.version, direcciongit:argv.url, direccionwiki:argv.wiki, autor:argv.autor, email:argv.email},function(err, result) {
   // render on success
   
           if (!err) {
               // result.nombre=argv.name;
               // result.direcciongit=argv.url;
               // result.direccionwiki='argv.wiki';
                console.log(result);
                    //CREAMOS EL PACKAGE.JSON del template
                       //var write=fs.writeFile("./template/package.json",result, (err) => {
                        fs.writeFile(path.join(direct, `${argv.directorio}`, 'package.json'), result);
                               if (err) throw err;
                               console.log('CREADO PACKAGE.JSON');
                     
           }
           // render or error
           else {
                    console.log('Error renderFile(package.ejs)');
                    console.log(err);
           }
    });
}   



