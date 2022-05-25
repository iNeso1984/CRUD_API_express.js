#CRUD REST API with Express.js 



###How to run
Uses Node.js, express.js, and PostMan or Insomnia
1.run npm init -y 
2.run npm install --save express
3.run npm install --save-dev nodemon  --> saves your script without having to reload.
4.In order to create a unique id for users use uuid.
npm install uuid

This app uses nodemon to save files to livefeed
Package json--> in scripts delete tests and add  "serve":"nodemon script.js" 
then run--> 

npm run serve --> this allows for live updates without having to re-run node js file

To run without npm run serve:
run node sript.js

###Description of the app
The first step is to set up a localhost then a Router.
The routes folder will contain routers.  Router()

controllers are exported and imported to router folder.
Resource: https://github.com/adrianhajdin 

