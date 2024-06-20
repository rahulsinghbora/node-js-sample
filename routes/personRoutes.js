const express=require('express')
const router=express.Router();
const Person=require('../models/Person')

router.post('/',async(req,res)=>{
    const body=req.body;
    const result=await Person.create({
        name: body.name,
        age:body.age,
        work: body.work,
        mobile:body.mobile,
        email:body.email,
        address:body.address,
        salary:body.salary,
    })
    res.status(201).json({msg:'data added successfully'})
})

router.get('/',async(req,res)=>{
    try{
        const data=await Person.find()
        res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json({error:"err occured"})
    }
})


router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType==='chef'||workType==='manager'||workType==="waiter"){

        const response=await Person.find({work:workType});
        console.log('res fetched');
        res.status(200).json(response)

        }else{
            res.status(404).json({error:'invalid workType'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})

 router.put('/:id',async(req,res)=>{
    try{
          const user=req.params.id;
          const updatedPersonData=req.body;

          const response=await Person.findByIdAndUpdate(user,updatedPersonData,{
            new:true,
            runValidators:true
          })
          res.status(200).json(response)
    }
    catch(err){
      res.status(404).json({msg:"invalid"})
    }
 })

 router.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    await Person.findByIdAndDelete(id);
    res.status(200).json({msg:'success'})
 })

module.exports=router;