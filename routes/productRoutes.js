const express = require("express");
const router = express.Router();
const productdetail = require("./../models/productdetail");

router.post("/items", async (req,res)=>{
    try{
        const{Name,Price,Manufacturer,Description,category,Available_in_Stock,Image } = req.body;
        const newproductdetail = await productdetail.create({Name,Price,Manufacturer,Description,category,Available_in_Stock,Image});
        res.json(newproductdetail);
    }catch (error){
        res.status(500).json({error:"Error creating user"});
    }
    });

router.get("/user",async(req,res)=>{
    try{
        const users =await productdetail.find();
        res.json(users);
    }catch(error){
        res.status(500).json({error:"Error fetching users"});
    }
});    

router.put("/user/:id",async(req,res)=>{
    try{
        const updatedproductdetails = await
        productdetail.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json(updatedproductdetails);
    }catch(error){
        res.status(500).json({error:"Error updating user"});
    }
});    

router.delete("/user/:id",async (req,res)=>{
    try{
     await productdetail.findByIdAndDelete(req.params.id);
    res.json({message: "Product deleted successfully"});      
    }catch(error){
        res.status(500).json({error:"Error deleting user"});
    }
});    
    module.exports = router;
