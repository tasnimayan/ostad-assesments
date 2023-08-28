/*
* Title: Assignment Module 5
* Author: Tasnim Chowdhury
* Submission Date: 28/08/2023
*/

const http = require('http');
const fs = require('fs');

const config ={
  port: 3000
}

const creteServer = () => {
  // Creating the server object 
  const server = http.createServer(handleReqRes)

  // Running the server at specified port
  server.listen(config.port, ()=>{
    console.log(`Server is listening to port: ${config.port}`);  
  })
}

// Callback function of the server to handle request and response
const handleReqRes = (req, res) => {
  const requestedURL = req.url;

  const toResponse = routing(requestedURL);

  res.write(toResponse);
  res.end();
};

// Convert the routing according to the routing object
const routing = (url) => {
  const route = {
    home : "This is Home Page.",
    about : "This is About Page.",
    contact : "This is Contact Page.",
    fileWrite : writeFile,
    notFound : "404 not found",
  }
  if(url === '/'){
    return route.home;
  }
  else if(url === '/about'){
    return route.about;
  }
  else if(url === '/contact'){
    return route.contact;
  }
  else if(url === '/file-write'){
    let x = route.fileWrite();
    return x;
  }
  else{
    return route.notFound;
  }
}
// Function to write file
const writeFile = () => {
  const fileName = "demo.txt";
  let data = "hello world";
  fs.writeFile(fileName, data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  })
  return "Success";
}


// calling the create server function to create and run the server
creteServer();