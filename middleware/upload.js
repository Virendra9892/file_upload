const multer = require("multer");
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "application/vnd.ms-excel" || file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        cb(null, true);
    } else {
        const error = new Error("please upload only imagea and excel file")
        cb(error);
    }
};
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        
        // console.log("00000000000000000",file);
        const extArray = file.originalname.split(".");
        const extention = extArray.length >= 2 ? extArray[extArray.length - 1] : "";
        let currentDate = Date.now()
        cb(null, `${currentDate}_${extArray[0] ? extArray[0] : ""}.${extention}`);
    },
    destination: (req, file, cb) => {
        cb(null, "public");
    }
});
const uploadFile = multer({ storage: storage, fileFilter: fileFilter });
// const multiUpload = uploadFile.fields([{ name: "image", maxCount: 1 }]);

// const userCreate = async
// module.exports = multiUpload;
module.exports = uploadFile;

