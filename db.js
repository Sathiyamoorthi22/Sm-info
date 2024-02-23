const{
    createPool
}=require('mysql');

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    connectionLimit:10

})
pool.query('select*from registeration',(err,result,fields)=>{
    if(err){
        return console.Console.console.log(err);
    }
    return console.log(result);
})