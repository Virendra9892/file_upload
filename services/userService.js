const xlsx = require("xlsx");
const db = require('../models/index');
// const xlsx2json = require("xlsx2json");
const user = db.user;


const userCreate = async()=>{

  const workbook = xlsx.readFile("C:/Users/hp/Desktop/practice/file_upload/public/images/1679320616394_bulkdata (1).xlsx");
  const sheetName = workbook.SheetNames[0];
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  let uniqueData = sheetData.filter((item,index)=>{
    let firstIndex = sheetData.findIndex(object=>object.email==item.email);
    return index===firstIndex;
  })        
    return {data:uniqueData};
}
// module.exports = userCreate;

// let test = ()=>{
//     console.log(`1`);
// }

const addUser = async(data)=>{
  if(!data){
    return ({status:404,sucess:false,message:"user details must be required."});
  }
  let exist = await user.findOne({where:{email:data.email}});
  if(exist){
      return ({status:403,sucess:false,message:"user already exist"})
  }
  else{
    //  console.log(data);
   let result =  await user.create(
      // first_name:data.first_name,
      // last_name:data.last_name,
      // email:data.email,
      // password:data.password,
      // document:file
      data
    )
    return ({status:200,sucess:true,message:"user created sucessfully",data:result})
  }
}
module.exports = {userCreate,addUser}