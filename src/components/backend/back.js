const express= require('express');
const cors=require('cors');
let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);
const app= express();
const bodyParser = require("body-parser");


app.use(bodyParser.json());
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(cors());
connection.connect(err=>{
    if(err){
        return err;
    }
});

app.get('/products/add',(req,res)=>{
    const{NAME ,PHONE , PICKUP , START_TIME}=req.query;
    const INSERT_WC=`INSERT INTO react_schema.teacher_woc (T_NAME, T_PHONE, T_PICKUP, T_START_TIME) VALUES ('${NAME}','${PHONE}','${PICKUP}','${START_TIME}')`;
    connection.query(INSERT_WC,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Successfull");
        }
    });
})

app.get('/',(req,res)=>{
    res.send("go to /products");
});

app.get('/products',(req,res)=>{
    connection.query(select, (err, results, fields) => {
        if (err) {
          return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
});
});

app.get('/withcar',(req,res)=>{
    connection.query(select_with_car, (err, results, fields) => {
        if (err) {
          return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
});
});  

app.get('/withcar/add',(req,res)=>{
    const{NAME ,PHONE , START , START_TIME,VIA,VIA2,CAR_REG}=req.query;
    const INSERT_C=`INSERT INTO react_schema.teacher_c (TC_NAME, TC_PHONE, TC_START_TIME,CAR_REG,TC_START,TC_VIA,TC_VIA2) VALUES ('${NAME}','${PHONE}','${START_TIME}','${CAR_REG}','${START}','${VIA}','${VIA2}')`;
    connection.query(INSERT_C,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Successfull");
        }
    });
})

app.get('/cars',(req,res)=>{
    connection.query(select_car, (err, results, fields) => {
        if (err) {
          return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
});
});

app.get('/cars/add',(req,res)=>{
    const{CAR_REG,MODEL,CAPACITY}=req.query;
    const INSERT_CAR=`INSERT INTO react_schema.cars (CAR_REG,MODEL,CAPACITY) VALUES ('${CAR_REG}','${MODEL}','${CAPACITY}')`;
    connection.query(INSERT_CAR,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Successfull");
        }
    });
})

app.get('/query',(req,res)=>{
    connection.query(match, (err, results, fields) => {
        if (err) {
          return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
});
});

app.get('/pass',(req,res)=>{
    connection.query(pass, (err, results, fields) => {
        if (err) {
          return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
});
});

app.get('/pass/add',(req,res)=>{
    const{user,password}=req.query;
    const insert_password=`INSERT INTO react_schema.password(user,password) VALUES ('${user}','${password}')`;
    connection.query(insert_password,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Successfull");
        }
    });
})

        let select=`SELECT * FROM react_schema.teacher_woc`;
        let select_with_car=`SELECT * FROM react_schema.teacher_c`;
        let select_car=`SELECT * FROM react_schema.cars`;
        let match =`select TC_NAME as car_owner , T_NAME as rider ,MODEL, TC_START_TIME,T_PICKUP as Pickup_Loaction,TC_PHONE as phone from react_schema.teacher_c as T1 , react_schema.cars as T2,react_schema.teacher_woc as T3
        where T1.CAR_REG = T2.CAR_REG
        and (T1.TC_START =T3.T_PICKUP or T1.TC_VIA=T3.T_PICKUP or T1.TC_VIA2= T3.T_PICKUP) 
        and (T1.TC_START_TIME = T3.T_START_TIME)`;
        let pass=`SELECT * FROM react_schema.password`;
app.listen(4000,()=>{
    console.log(`products at 4000`)
});