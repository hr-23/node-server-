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
          make changes in the express.js file and then run on localhost
          nodemon
*/
