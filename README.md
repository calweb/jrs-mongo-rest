# jrs-mongo-rest

This repository is a demo fullstack application that uses mongodb, express, and an independent frontend for a full stack application.

# Getting Started

To get started using this repo, you will an active, local installation of mongodb and to use both the frontend and backend, I would suggest opening 2 terminals, one for the nodejs server and one to serve up the frontend application.

## To run the Api

You will first want to have you mongodb server running.

1. Then, in your terminal, cd into the `api/` directory of this repository
2. Once in `api/` directory, you will want to install the dependencies.
3. Once dependencies are installed, you can run your api application, like the third command below:

```
$ cd api/
$ npm install
$ npm run dev
```

^^ The last command will run the node app using `nodemon` so you do not have to restart the server every time you are adding and saving new code.

## To run the frontent

The frontend of this application lives in the `web/` folder of this repository.

This frontend, currently, is just vanilla javascript with no dependencies except for the web browser apis that are available to it, like `fetch`

You will want to run this folder like it is being served up by a server so that you can perform the api calls correctly.  To do so, I would recommend using a tool/npm module called `serve` that will allow you to run the web folder like it would live on the web.

To install the `serve` utility, simply globally install the module: `npm install serve -g`

Now you can just use the command `serve` in any directory and will treat it like a directory on the web, so having an index.html will automatically be displayed when you go to the site.

```
$ cd web/
$ serve
```
