const Book = require("../model/Bookmodel")

const createbook=async(req,res)=>{
    try {
    const {name,title,price,category,image}=req.body
    if(!name){
        return res.status(400).send({msg:'name is required',success:false})
    }
    if(!title){
        return res.status(400).send({msg:'Title is required',success:false})
    }
    if(!price){
        return res.status(400).send({msg:'Price is required',success:false})
    }
    if(!category){
        return res.status(400).send({msg:'Category  is required',success:false})
    }
    if(!image){
        return res.status(400).send({msg:'Image is required',success:false})
    }
   
    

    const newpost=await Book.create({name,title,price,category,image})
    await newpost.save();

    return res.status(201).send({msg:"post created ",success:true,newpost})
   } catch (error) {
    return res.status(500).send({msg:error,success:false})
   }
}

const getbook=async(req,res)=>{
    try {
        const book= await Book.find();
        res.status(200).json({msg:"Found ",book})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
        
    }
}









module.exports={getbook,createbook}