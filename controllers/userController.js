const path = require("path")
const createUsers = require("../services/userService");
// const xlsx2json = require("xlsx2json");
const xlsx = require("xlsx");

const userCreate = async(req,res,next)=>{
    try{
        // let workbook = await xlsx2json(req.files.path);
        // let workbook = xlsx.readFile(req.file.path);
        // let file = req.file.path;
        // console.log(file);
        let result= await createUsers.userCreate();
        if(result){
            return res.send({data:result.data})
        }
    }
    catch(error){
        next(error)
    }
}
const addUser = async(req,res,next)=>{
    try{
        // let workbook = await xlsx2json(req.files.path);
        // let workbook = xlsx.readFile(req.file.path);
        // let file = process.env.base_url+req.files["image"][0].path;
        
        console.log(req.file.path,":::::::::::::");
        // let file=req.files["image"][0]
        // let file = req.files["image"][0].path
        let body = req.body;
        body.document = process.env.base_url+"/"+req.file.path;
        console.log("???????????",body);
        let result= await createUsers.addUser(body);
        if(result){
            return res.send({status:result.status,sucess:result.sucess,message:result.message,data:result.data})
        }
    }
    catch(error){
        next(error)
    }
}

module.exports = {userCreate,addUser};

