const {Pool} = require('pg')
const dotenv=require('dotenv')

dotenv.config()

const pool= new Pool({
    user: "postgres",
    password: "vt123",
    host: "localhost",
    port: 5432,
    database: "book-store"
})

pool.on('connect',()=>{
    console.log('Connected Succesfully');
})

module.exports={
    query:(text,params)=>pool.query(text,params)
}