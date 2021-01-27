# ECF CSS Storefront
Pour commencer le projet a été développé sous Express et donc il vous faut Node.JS, si vous ne l'avez pas encore, suivez ce lien pour le télécharger: https://nodejs.org/en/download/.</br>

## Installer les dépendances du projet
### Express
Express est une infrastructure d'applications Web Node.js minimaliste et flexible qui fournit un ensemble de fonctionnalités robuste pour les applications Web et mobiles. Dans ce projet Express permet la gestion de routage et la définition du moteur de modèle Pug.
```
npm install express
```
### Bootstrap
Bootstrap permet la gestion de grille des éléments du projet et le responsive du site.
```
npm install bootstrap
```
### Fontawesome-free
Installer la version free de fontawesome permet l'accès aux différentes icones utilisées dans le projet
```
npm install @fortawesome/fontawesome-free
```
### jQuery
jQuery est une bibliothèque JavaScript rapide, petite et riche en fonctionnalités. Il simplifie beaucoup la traversée et la manipulation de documents HTML, la gestion des événements, l'animation et Ajax avec une API facile à utiliser qui fonctionne sur une multitude de navigateurs.
```
npm install jquery
```
### Pug
Pug est un moteur de template haute performance fortement influencé par Haml et implémenté avec JavaScript pour Node.js et les navigateurs. La documentation sur le site: https://pugjs.org/.
```
npm install pug
```
### SASS
Sass est le langage d'extension CSS de qualité professionnelle le plus mature, stable et puissant au monde.
```
npm install sass
```
### Node-sass
Node-sass est une bibliothèque qui fournit la liaison de Node.js à LibSass , la version C du préprocesseur de feuille de style populaire, Sass. Dans ce projet, il permet de compiler nativement des fichiers .scss en .css à une vitesse incroyable et automatiquement via un middleware de connexion.
```
npm install node-sass
```
Pour compiler les fichiers .scss en .css automatiquement, ajouter cette commande au fichier package.json "scss": "node-sass --watch public/styles -o public/styles", de façon à ce qu'il ressemble à l'expemple ce-dessous:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "scss": "node-sass --watch public/styles -o public/styles"
  },
```
## Lancer le projet
### Lancer le serveur
```
npm start
```
### Lancer Node-sass
Lancer la compilation des fichiers .scss en .css automatiquement
```
npm run scss
```
