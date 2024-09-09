const {Router} = require("express");
const router =Router();
const Message=require("./formSchema");
const path=require("path");

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

router.post("/", (req, res)=> {
    let newMessage = new Message ({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    newMessage.save()
    res.sendFile (path.join(__dirname + "/answer.html"))
})

module.exports=router;