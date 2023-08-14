const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
const {getAllProducts} = require ("../backEnd/mongoDb/index.js")
const db = require('./mongoDb')

app.use(cors());



app.get('/api/products',(req,res)=> {

    getAllProducts().then((resp)=>{
        res.status(200).send(resp)
      })
      .catch((err)=>{
        res.status(500).send(err)
      })

})






app.listen(port, ()=>{
console.log(`listening on ${port}`);
})