const express=require("express");
const app=express();
const mongoose=require("mongoose");

const Message=require("./formSchema");
const formRouter=require("./formRouter")

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('dotenv').config();
mongoose.set("strictQuery", false);

const PORT=3000 || "https://form-app-two.onrender.com"


mongoose
.connect(process.env.MONGODB_LINK)
.then(()=> console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err));


app.use("/", formRouter);

app.use(express.static('public'));

app.listen(PORT, () =>{
    console.log("Server is listening on PORT-3000")
})