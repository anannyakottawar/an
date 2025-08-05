const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, "uploads/videos");
    },
    filename: function( req,file,cb){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()* 1e9);
        cb(null,uniqueSuffix+path.extname(file.originalname));
    },
});


const fileFilter =(req,file,cb) => {
    const allowedTypes = /mp4|mov|avi|mkv/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);

    if (extName && mimeType){
        cb(null,true);
    }else{
        cb(new Error("only video files are allowed!"));
    }
};


const limits ={
    fileSize: 100 * 1024,
};

const upload = multer({ storage,fileFilter, limits});

module.exports =upload;