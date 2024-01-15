require('dotenv').config()
const { Socket } = require('engine.io');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3030
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html')
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+'/pages/about.html')
})
app.get("/american", (req, res)=>{
    res.sendFile(__dirname+'/pages/1american.html')
})
app.get("/japan", (req, res)=>{
  res.sendFile(__dirname+'/pages/2japan.html')
})
app.get("/russian", (req, res)=>{
  res.sendFile(__dirname+'/pages/3russian.html')
})
app.get("/brazil", (req, res)=>{
  res.sendFile(__dirname+'/pages/4brazil.html')
})
app.get("/portugal", (req, res)=>{
  res.sendFile(__dirname+'/pages/5portugal.html')
})
app.get("/chine", (req, res)=>{
  res.sendFile(__dirname+'/pages/6chine.html')
})
app.get("/egito", (req, res)=>{
  res.sendFile(__dirname+'/pages/7egito.html')
})
app.get("/australian", (req, res)=>{
  res.sendFile(__dirname+'/pages/8australian.html')
})
app.get("/african", (req, res)=>{
    res.sendFile(__dirname+'/pages/9african.html')
     
})
io.on('connection', async(socket) => {
    let count = 0
    let StopRes = await setInterval(async()=>{
      socket.emit('count', count)
      count++
      if(count >= 60){
        socket.emit('count', "x1924y")
        clearInterval(StopRes)
      }
    }, 1000)

  });
server.listen(port);