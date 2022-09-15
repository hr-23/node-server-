const express=require('express');
const app=express();

app.get("/",function (req,res){
res.send("<center><h1>hello this is harshaa reddy</h1></center>");
})

app.get("/contact",function(req,res){
    res.send("<h2>contact me : harshaareddygodlaveeti@gmail.com</h2>");
})
app.get("/about",function(req,res){
    res.send("this is a brief intro about , about sec in the server");
})
app.get("/hobbies",function(req,res){
    res.send("<li>cooking</li><li>walking</li>")
})
app.listen(3000, function(){
console.log("server started on port 3000");
});

// to stop the server use ctrl+c
// recall the whole process , that is all the terminal commands 
// first making a folder , then touching a server javascript file , then initializing npm and making packages 
/*
          mkdir express_sever
          cd express_server 
          touch server.js 
          npm init 
          npm istall express( this installs the node modules ,once see folder )
          make changes in the express.js file and then run on localhost
          nodemon
          
          look at this below for brief idea 
          Calculator Setup Challenge
Before we start creating our Calculator website, we'll need to set up a new project. Follow the steps below using your Hyper Terminal to complete this challenge:

Make a new folder called Calculator on your Desktop

Change Directory to this new folder

Inside the Calculator folder, create a new file called calculator.js

Set up a new NPM package

Open the project folder in Atom 

Using NPM install the express module

Require express in your calculator.js

Setup express

Create a root route get method with app.get()

Send the words Hello World from the root route as the response

Spin up our server on port 3000 with app.listen

Run server with nodemon
*/
