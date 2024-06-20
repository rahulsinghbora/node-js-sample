const express=require('express')
const app=express()
const bodyParser=require('body-parser')
require('dotenv').config();

const PORT =process.env.PORT ||3001

const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hey welcome to our hotel')
})

 app.use('/person',personRoutes);
 app.use('/menu',menuRoutes);



app.listen(PORT,()=>console.log('server started'))