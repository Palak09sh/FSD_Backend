const http = require('http')
const fs = require('fs')
// const data = require('./data.json')
// console.log(data)

const server  = http.createServer((req,res) =>{
    if(req.url == '/home'){
        res.end("ABES Engineering College")
    }
   else if (req.url == '/about'){
    res.writeHead(200, { "Content-Type": "text/html" });

   res.end(`<img src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb6%2FImage_created_with_a_mobile_phone.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&docid=0JWe7yDOKrVFAM&tbnid=Q53WJiavu6IJtM&vet=12ahUKEwiBq4nz0dOSAxUzRWcHHUBsA9EQnPAOegQIIRAB..i&w=4000&h=3000&hcb=2&ved=2ahUKEwiBq4nz0dOSAxUzRWcHHUBsA9EQnPAOegQIIRAB">`)
   }
   else if (req.url == '/contact'){
    res.end('contact: 3431244xxxx')
   }
   else{
    res.end('page not found')
   }
})

server.listen(8000,()=>{
    console.log('server started')
})