CRUD REST API with Node express.js 

![Test Image 1](https://assets.website-files.com/5ff66329429d880392f6cba2/61c325278ba0dc1f5c550f27_CRUD%20acronym.png)

How to run
Uses Node.js, express.js, and PostMan or Insomnia
1.run npm init -y 
2.run npm install --save express
3.run npm install --save-dev nodemon  --> saves your script without having to reload.
4.run npm install uuid --> creates a unique id for users.

This app uses nodemon to save files to livefeed
Package json--> in scripts delete tests and add  "serve":"nodemon script.js" 
then run--> 

- npm run serve --> this allows for live updates without having to re-run node js file

To run without npm run serve:
- run node sript.js

Description 
- The first step is to set up a localhost then a Router.
- The routes folder will contain routers.  Router()

controllers are exported and imported to router folder.

Built with
- JavaScript
- Node
- NPM
- Nodemon
- uuid
- express.js






