var exp=require('express')

var app=exp();

app.get('/getform',function(req,res){
    res.sendFile(__dirname+"/form.html")
    })

app.post('/getDataTable',function(req,res){
    res.send("/form.html")
})    

app.listen(9000,function(){
    console.log("server is connected");
})