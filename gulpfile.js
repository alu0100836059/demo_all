var gulp  = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');
var path = require('path');
var run = require('gulp-run');
var cwd = process.cwd();
var paquete = require(process.cwd()+'/package.json');

//----------- Simplificación --------------------------------------

// Inclusión del Despliegue a gh-pages, problema :nothing to commit
// gulp.task('deploy', ['build-gitbook', 'empujar-libro', 'build-gitbook', 'empujar-gh'], function () {
//   return gulp.src('').pipe(shell("./scripts/deploy-gitbook"));
// });

gulp.task('deploy', ['build-gitbook', 'empujar-libro'], function () {
  return gulp.src('').pipe(shell("./scripts/deploy-gitbook"));
});

gulp.task('build-gitbook', function() {
  return gulp.src('').pipe(shell('./scripts/generate-gitbook'));
});

gulp.task('wiki-deploy', ['wiki-build'], function() {
   return gulp.src('').pipe(shell(['./scripts/deploy-wiki']));
});

gulp.task('wiki-build', function() {
   return gulp.src('').pipe(shell(['./scripts/generate-wiki']));
});

gulp.task('empujar-libro',
 shell.task("git add .; git commit -am 'desplegando a github_apuntes';"+
    // "git remote add repo_apuntes_no_tocar git@github.com:alu0100836059/Apuntes_SYTW.git;"+
    // "git push repo_apuntes_no_tocar master;",
    "git push origin master;",

    // cambiar la coma de arriba por un +  ,borrar esta línea y descomentar las de abajo
    // ";"+
    // "git push heroku master",
    { verbose: true }
  )
);

// División de tareas para libro y gh
// gulp.task('empujar-gh',
//  shell.task("cd gh-pages; git add .; git commit -m 'Despliegue gh';"+
//  "git push repo_secundario gh-pages;",
//     { verbose: true }
//   )
// );



//-----------------------------------------------------------------
//-----------------------IAAS--------------------------------------
gulp.task('iaas',shell.task(['./scripts/ssh']));

// gulp.task('iaas', function(){
//     return run(path.join(__dirname,'scripts','ssh')).exec();
// });
//-----------------------------------------------------------------


//empujar a gh-pages el directorio book
// gulp.task('deploy-gh-pages', function() {
//       return gulp.src('./gh-pages/*')
//         .pipe(ghPages());
// });


//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
// gulp.task('deploy', deploy-gh-pages);

////////////// viejo___
// gulp.task('deploy', ['empujar'], function () {
// return gulp.src('').pipe(shell(["./scripts/deploy-gitbook"]));
// });
// //  "generate-gitbook": "./scripts/generate-gitbook",
// gulp.task('build', function() {
//   return gulp.src(' ').pipe(shell(['./scripts/generate-gitbook']));
// });
//
// // Comentado Jacobo 19.10 problema autorización ?
// // gulp.task('deployWiki', function(){
// //   return gulp.src('').pipe(shell(["./scripts/deploy-wiki"]));
// // });
//
// gulp.task('empujar', ['build'],
//  shell.task(
//     "git add ."+
//     ";"+
//     "git commit -am 'desplegando a github'"+
//     ";"+
//     "git push origin master",
//     // cambiar la coma de arriba por un +  ,borrar esta línea y descomentar las de abajo
//     // ";"+
//     // "git push heroku master",
//     { verbose: true }
//   )
// );
//

// Comentado el 18.10 por Jacobo error en let
// var deploygh = function() {
//   "use strict";
//   let gh = require('gh-pages');
//
//   //process.env.CMDDESC="Deploy GitBook on Github";
//
//   let json = require('./package.json');
//   let REPO = json.repository.url;
//   console.log( "Repositorio:"+REPO);
//
//   gh.publish('./gh-pages', { repo: REPO, logger: function(m) { console.error(m); } });
// };


//creacion de pdf emobi y epub
gulp.task('creación-archivos',['pdf','mobi','epub']);

gulp.task('pdf',
  shell.task(
    "gitbook pdf ./txt",
    { verbose: true })
);

gulp.task('mobi',
  shell.task(
    "gitbook mobi",
    { verbose: true })
);

gulp.task('epub',
  shell.task(
    "gitbook epub",
    { verbose: true })
);

// npm install -g http-server

// NO BORRAR ESTE COMENTARIO
// https://git.heroku.com/herokuiaasfinal.git es la dirección de
// herokuiaasfinal, la del repo. En los settings de la aplicación
// en la página de heroku podemos ver el repositorio git al que
// responde nuestra aplicación. Sólo administrador

gulp.task("deploy-heroku-oauth" ,function(){
            var heroku = require("gitbook-start-heroku-token-oauth-noejaco17");
            heroku.deploy();
     });

gulp.task("deploy-heroku", function () {
	var heroku = require("gitbook-start-heroku-noejaco-final");
	var url = paquete.repository.url;

 heroku.deploy();
});
