const express=require('express');
const app=express();

const PORT=3000;

app.get('/ping',(req,res)=>{
    res.send("Hi i am An Asura");
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});