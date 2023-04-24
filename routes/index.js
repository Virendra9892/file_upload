var express = require('express');
var router = express.Router();

/* GET home page. */
const upload = require("../middleware/upload");
const userController = require("../controllers/userController");
const multiUpload = require('../middleware/upload');

// router.post('/upload-file', upload,(req,res)=>{res.send({status:201,sucess:true,message:"file uploaded sucessfully"})});
// router.get("/get-data",userController.userCreate)
router.post("/",multiUpload.single("image"),userController.addUser)

module.exports = router;
