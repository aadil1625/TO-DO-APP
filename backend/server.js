const express = require('express');
const app = express();
const port = 4000;

const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'todo',
    password:'',
});



connection.connect((err)=>{
    if(err){
        console.log('Error connecting to database',err.stack);
        return;
    }
    console.log('Connected to database successfully as id', connection.threadId);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post('/signup',(req,res)=>{
    const {name,email,phone,password} = req.body;

    // const sql='select * from caterdata';
    connection.query('INSERT INTO user_details (name,email,phone,password)VALUES(?,?,?,?)',[name,email,phone,password],(error,results,fields)=>{
        if (error){
            console.error('Error fetching data from emp table ',error);
           
        }
        res.status(200).send('Signup Successful');

        // console.log(results);
    });
});

app.post('/login',(req,res)=>{
    const {name,email,password} = req.body;

    // const sql='select * from caterdata';
    connection.query('select name,email,password from user_details where name=?,email=? and password=?',[name,email,password],(error,results,fields)=>{
        if (error){
            console.error('Error fetching data from emp table ',error);
            res.status(500).send('error fetching data from emp table')
            return;
        }
        if(results.length>0)
        {
            res.send({'status':true});
        }else{
            res.send({'status':false});
        }

        // console.log(results);
    });
});

app.post('/profile-update',(req,res)=>{
    console.log(req.body);
    const {name , email , phone , id} = req.body;
    const query = 'update user_details set name = ? , email = ? , phone = ? where id = ?';
    connection.query(query,[name,email , phone,id],(err,results,field)=>{
        if(err){
            console.error(err);
            return res.status(500).send({message:'Error in updating profile'});
        }
        return res.status(200).send({message:'Profile Updated Successfully'});
    })
});


app.get('/fetch',(req,res)=>{
    console.log(req.body);
    const {name , email , phone , id} = req.body;
    const query = 'select * from user_details';
    connection.query(query,[name,email , phone,id],(err,results,field)=>{
        if(err){
            console.error(err);
            return res.status(500).send({message:'Error in fetching user name'});
        }
        return res.status(200).send({message:'user name fetched Successfully',results});
    })
});

app.listen(port,()=>{
    console.log('Listening to port ', port);
})
