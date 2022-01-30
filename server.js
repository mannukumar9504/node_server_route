// by using framewok express
const express = require('express');  // requires express module
const app = express(); // instance of express

app.get("/",(req,res) => { //declare the route here
    res.send("defaut route is called");
})
app.listen(8080, function () { // listening 
    console.log("server runs at port: 8080");
	console.log("Shivam");
});
