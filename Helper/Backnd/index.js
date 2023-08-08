const express =  require('express');
const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config();

const userRouter= require("./routers/UserRouter");
const userModel = require('./models/UserModel');
const carpenterModel = require('./models/CarpenterModel');
const plumberModel=require('./models/PlumberModel');
const electricianModel=require('./models/ElectricianModel');
const labourModel=require('./models/LabourModel');
const LabourModel = require('./models/LabourModel');

const app =express();


app.use(express.json());
app.use(cors());

// app.use("/user",userRouter);


//Login and Signup routes

app.post("/signup",async (request,response)=>{
    var data = request.body
    // console.log(data);
    var status = await userModel.saveUser(data).catch(status=>response.json({status}));
    response.json({status})
})


app.post("/login",async (request,response)=>{
    var data = request.body
    var status = await userModel.getUser(data).catch(status=>response.json({status}));
    console.log(data)
    response.json({status})
})

//Option Routes
//status featuer update krna h

app.get("/carpenter",async (request,response)=>{
    var list = await carpenterModel.listCarpenter().catch(status=>response.json({status}));
    console.log(list);
    response.json({list})
})

app.get("/plumber",async (request,response)=>{
    var list = await plumberModel.listPlumber().catch(status=>response.json({status}));
    response.json({list})
})

app.get("/electrician",async (request,response)=>{
    var list = await electricianModel.listElectrician().catch(status=>response.json({status}));
    response.json({list})
})

app.get("/labour",async (request,response)=>{
    var list = await labourModel.listLabour().catch(status=>response.json({status}));
    response.json({list})
})











app.listen('5000',()=>{
    console.log('Listening at 000');
});
