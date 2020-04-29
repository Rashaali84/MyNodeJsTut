# MyNodeJsTut
### What is Node.js?
Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36.

`Node.js = Runtime Environment + JavaScript Library`

### Features of Node.js
- Asynchronous and Event Driven
- Very Fast
- Single Threaded but Highly Scalable
- No Buffering
- License

![image](https://user-images.githubusercontent.com/30797974/80549752-591bb100-89be-11ea-930e-e5a79aca4af7.png)
### Where to Use Node.js?
● I/O bound Applications
● Data Streaming Applications
● Data Intensive Real-time Applications (DIRT)
● JSON APIs based Applications
● Single Page Applications
### Where NOT to use Node.js
It is not advisable to use Node.js for CPU intensive applications.

### First Applicatiom ---> in firstNodeApp.js 

Before creating an actual "Hello, World!" application using Node.js, let us see the components of a Node.js application. A Node.js application consists of the following three important components:
1. `Import required modules`: We use the require directive to load Node.js modules.
2. `Create server`: A server which will listen to client's requests similar to Apache HTTP Server.
3. `Read request and return response`: The server created in an earlier step will read the HTTP request made by the client which can be a browser or a console and return the response.

### REPL

REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell where a command is entered and the system responds with an output in an interactive mode. Node.js or Node comes bundled with a REPL environment. It performs the following tasks:
- Read - Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
- Eval - Takes and evaluates the data structure.
- Print - Prints the result.
- Loop - Loops the above command until the user presses ctrl-c twice.
The REPL feature of Node is very useful in experimenting with Node.js codes and to debug JavaScript codes.

Starting REPL
REPL can be started by simply running node on shell/console without any arguments as follows.
`$ node`

### Node Package Manager (NPM) provides two main functionalities:

- Online repositories for node.js packages/modules which are searchable on search.nodejs.org
- Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.
NPM comes bundled with Node.js installables after v0.6.3 version. To verify the same, open console and type the following command and see the result:

`$ npm --version`
2.7.1

If you are running an old version of NPM, then it is quite easy to update it to the latest version. Just use the following command from root:
`$ sudo npm install npm -g`

### Installing Modules using NPM

There is a simple syntax to install any Node.js module:
`$ npm install <Module Name>`
For example, following is the command to install a famous Node.js web framework module called express:
`$ npm install express`
Now you can use this module in your js file as following:
`var express = require('express');`

### Global vs Local Installation

By default, NPM installs any dependency in the local mode. Here local mode refers to the package installation in node_modules directory lying in the folder where Node application is present. Locally deployed packages are accessible via require() method. For example, when we installed express module, it created node_modules directory in the current directory where it installed the express module.

`$ ls -l`

total 0
drwxr-xr-x 3 root root 20 Mar 17 02:23 node_modules

Alternatively, you can use` npm ls` command to list down all the locally installed modules.

Globally installed packages/dependencies are stored in system directory. Such dependencies can be used in CLI (Command Line Interface) function of any node.js but cannot be imported using require() in Node application directly. Now let's try installing the express module using global installation.

`$ npm install express -g`

You can use the following command to check all the modules installed globally:

`$ npm ls -g`

### Using package.json

package.json is present in the root directory of any Node application/module and is used to define the properties of a package. Let's open package.json of express package present in node_modules/express/

