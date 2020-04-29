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

### Attributes of Package.json

- name - name of the package
- version - version of the package
- description - description of the package
homepage - homepage of the package
- author - author of the package
- contributors - name of the contributors to the package
- dependencies - list of dependencies. NPM automatically installs all the dependencies mentioned here in the node_module folder of the package.
- repository - repository type and URL of the package
- main - entry point of the package
- keywords - keywords

### Uninstalling a Module

Use the following command to `uninstall` a Node.js module.

`$ npm uninstall express`

Once NPM uninstalls the package, you can verify it by looking at the content of /node_modules/ directory or type the following command:

`$ npm ls`

### Updating a Module

Update package.json and change the version of the dependency to be updated and run the following command.

`$ npm update express`

### Search a Module

Search a package name using NPM.

`$ npm search express`

### Create a Module

Creating a module requires package.json to be generated. Let's generate package.json using NPM, which will generate the basic skeleton of the package.json.

`$ npm init`

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.
See 'npm help json' for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.

`name: (webmaster)`

You will need to provide all the required information about your module. You can take help from the above-mentioned package.json file to understand the meanings of various information demanded. Once package.json is generated, use the following command to register yourself with NPM repository site using a valid email address.

`$ npm adduser`

`Username: mcmohd`
`Password:`
`Email: (this IS public) mcmohd@gmail.com`

It is time now to publish your module:

`$ npm publish`

If everything is fine with your module, then it will be published in the repository and will be accessible to install using NPM like any other Node.js module.

###CALLBACK CONCEPT
What is Callback?

Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.
For example, a function to read a file may start reading a file and return the control to the execution environment immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as a parameter. So `there is no blocking or wait for File I/O.` This makes Node.js `highly scalable`, as it can process a `high number of requests without waiting `for any function to return results.

### Blocking Code Example
Create a text file named `input.txt` with the following content:

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Create a js file named main.js with the following code:

`var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());

console.log("Program Ended");`


Now run the main.js to see the result:

`$ node main.js`

Verify the Output.

Tutorials Point is giving self learning content to teach the world in simple and easy way!!!!!
Program Ended

### Non-Blocking Code Example

Create a text file named input.txt with the following content.

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Update `main.js` to have the following code:

`var fs = require("fs");

fs.readFile('input.txt', function (err, data) {

if (err) return console.error(err);

console.log(data.toString());

});

console.log("Program Ended");`

Now run the main.js to see the result:

`$ node main.js`

Verify the Output.

Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

These two examples explain the concept of blocking and non-blocking calls.

- The first example shows that the program blocks until it reads the file and then only it proceeds to end the program.
- The second example shows that the program does not wait for file reading and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.

Thus, a blocking program executes very much in sequence. From the programming point of view, it is easier to implement the logic but non-blocking programs do not execute in sequence. In case a program needs to use any data to be processed, it should be kept within the same block to make it sequential execution.

### EVENT LOOP  
 watch this amazing video .. https://www.youtube.com/watch?v=8aGhZQkoFbQ

Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

Example in the file  `eventsNodeJS.js`


- Event-Driven Programming

Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions, and then simply waits for the event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected

![image](https://user-images.githubusercontent.com/30797974/80552188-18279a80-89c6-11ea-83f8-c97a5a79d4a7.png)

Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners as follows:

### How Node Applications Work?

In Node Application, any async function accepts a callback as the last parameter and a callback function accepts an error as the first parameter. Let's revisit the previous example again. Create a text file named input.txt with the following content.

### EVENT EMITTER 

-----> event-emitter.js

Many objects in a Node emit events, for example, a net.Server emits an event each time a peer connects to it, an fs.readStream emits an event when the file is opened. All objects which emit events are the instances of events.EventEmitter.

`EventEmitter Class`

As we have seen in the previous section, EventEmitter class lies in the events module. It is accessible via the following code:

// Import events module

var events = require('events');

// Create an eventEmitter object

var eventEmitter = new events.EventEmitter();


When an EventEmitter instance faces any error, it emits an 'error' event. When a new listener is added, 'newListener' event is fired and when a listener is removed, 'removeListener' event is fired.

EventEmitter provides multiple properties like on and emit. on property is used to bind a function with the event and emit is used to fire an event. 

### How to parse command line arguments `argv` (short for 'argument values'). 

source link--> https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/

Node.js exposes this array for every running process in the form of `process.argv` - let's take a look at an example. Make a file called argv.js and add this line:

`console.log(process.argv);` // save this in args.js file

now write in command line

`$ node argv.js one two three four five
[ 'node',
  '/home/avian/argvdemo/argv.js',
  'one',
  'two',
  'three',
  'four',
  'five' ]`
  
you'll want to skip the first two. Now try this in argv.js: --- >check this file argv.js in repo 

`var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);`

###Cleaner way for arguments values 
