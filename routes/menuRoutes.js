const express=require('express')
const router=express.Router()

const MenuItem=require('../models/MenuItem')

router.post('/',async(req,res)=>{
    const body=req.body;
    const result=await MenuItem.create({
        name:body.name,
        price:body.price,
        taste:body.taste,
        is_drink:body.is_drink,
        ingridients:body.ingredients,
        num_sales:body.num_sales
    })
  res.status(201).json({msg:'data added'})
 })

 router.get('/',async(req,res)=>{
    const result=await MenuItem.find()
    return res.status(200).json(result)
 })

 router.get('/:taste',async(req,res)=>{
    const taste=req.params.taste;
    if(taste==='sweet'||taste==='sour'||taste==='spicy'){
        
        const result=await MenuItem.find({taste:taste})
         res.status(200).json(result)
    }else{
        res.json({msg:'invalid taste category'})
    }
 })

 module.exports=router