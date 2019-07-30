var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'dbfromnode'

})

connection.connect((error) => {
    if (error) {
        throw error
    }
    console.log("Connected to database!..")
    var multipleInsert = "insert into friends (name, age, location) values ?"
    var records = [
        ['Damon', 23, 'Mystic Falls'],
        ['Stefan', 21, 'Virginia'],
        ['Caroline', 20, 'Mystic Falls'],
        ['Elena', 20, 'Virginia']
    ]
connection.query(multipleInsert, [records], (error, success)=>{
    if(error){
        throw error
    }
    console.log(success)
})

var getAll = "select * from friends"
connection.query(getAll, (error, success)=>{
    if (error){
        throw error
    }
    console.log(JSON.stringify(success))
})
})