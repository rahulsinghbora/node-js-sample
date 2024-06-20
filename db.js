const mongoose=require('mongoose')
require('dotenv').config();

//const mongoURL=process.env.MONGODB_URL_LOCAL
const mongoURL=process.env.MONGODB_URL;

//setup mongodb connection 
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


//get the default connection
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('server connected');
});
db.on('disconnected',()=>{
    console.log('server disconnected');
})

//export the db
module.exports=db