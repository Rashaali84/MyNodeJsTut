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
