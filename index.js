var express = require('express')
var mysql = require ('mysql')
var bodyparser = require('body-parser')
var cors = require('cors')

var connection = mysql.createConnection({
    host:'localhost',
user:'root',
password:'',
database:'dbfromnode',
port:'3306'
})

connection.connect((error)=>{
    if(error){
        throw error
    }
    console.log("Connected to dbfromnode database")
})

var expressApp = express()
expressApp.use(bodyparser.json())
expressApp.use(cors())




expressApp.get('/all', (request, response)=>{
    //response.send("All friends:  ")
    //connect to db and get all friends
    var qry = "select * from friends"
    connection.query(qry, (error, success)=>{
        if(error){
            throw error
        }
        console.log(JSON.stringify(success))
        response.send(JSON.stringify(success))
       // connection.end()
        response.end()
    })
})

expressApp.get('/friend/:id', (request, response)=>{
    console.log(request)
    console.log("Received: " +request.params.id)
    var qry = "select * from friends where id=?"
    connection.query(qry, request.params.id, (error, success)=>{
        if(error){
            throw error
        }
        console.log(JSON.stringify(success))
        //response.send(JSON.stringify(success))
        //response.end()
    })
    response.end()
})

expressApp.post("/add", (request, response)=>{
    console.log("Post request received!!")
    console.log(request.body)
    console.log("Name: "+request.body.name)
    console.log("Location: "+request.body.location)
})
//expressApp.get('/hello', (request, response)=>{
  //  response.send("Message: Hello")
   // console.log(request.query);
//})

expressApp.listen(1234)