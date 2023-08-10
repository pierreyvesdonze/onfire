# Deploy to Github Pages

yarn build

into package.json : "homepage" : "https://username.github.io/titleofproject/",

yarn add gh-pages 

Ajouter dans package.json/scripts : 

"predeploy": "npm run build",
"deploy": "gh-pages -b main -d build"

npm run deploy


