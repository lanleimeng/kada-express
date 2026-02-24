import express from 'express';

const app = express();

app.use((req,res,next)=>{
    if(false){
        next(new error("not authorized"))
    }
    next();

});
app.use((err,req,res,next)=>{
    res.send("error")
})

app.get('/',(req,res)=>{
    res.send("hello ramon")
});



app.get('/say/:greeting',(req,res)=>{
    const{greeting} = req.params;
    res.send(greeting);
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
});