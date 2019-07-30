var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
   
    
})



/*connection.connect(function(error){
    if(error){
        console.log(error)
        throw error
    }
    console.log("Connected to mysql server!!...")
    var insertQuery = "insert into friend (id, name, age, location) values(2, 'Rayshma', 21, 'Trichy')"
    //var insertQuery = "insert into friend (id, name, age, location) values(1, 'Roshini', 21, 'Chennai')"
    connection.query(insertQuery, function(error, success){
        if(error){
            console.log(error)
            throw error
        }
        console.log("1 row inserted!..")
    })
})*/

connection.connect((error)=>{
    if(error){
        throw(error)
    }
    console.log("Connected to MySql database")
    var createDbQuery = "create database dbfromnode"
    connection.query(createDbQuery, (error, success)=>{
        if(error){
            throw error
        }
        console.log("Connected to database!!......")
})
})