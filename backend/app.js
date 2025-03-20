const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const router = express.Router();
const app = express();
app.use(express.json());
app.use(router);
const cors = require('cors')
 
app.use(cors())
mongoose
  .connect(
    "mongodb+srv://test:test@cluster0.pjuja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));

const peopleSchema = new Schema({
  name: { type: String },
  age: { type: Number, index: true },
  gender: {type: String}
});

const Student = mongoose.model("Students", peopleSchema);


app.get("/", function (req, res) {
  res.send("hh");
});

app.get("/allStudents", async(req, res, next)=>{
    try{
        const data = await Student.find();
        res.json(data)
    }catch(err){
        res.send(err)
    }
})

app.post("/addStudent", async (req, res, next) => {
  
  // if(!req.body.name){
  //   res.send('error is there')
  // }

  try{    
    const instance = new Student({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
      });
    const data = await instance.save();
    res.json(data)
  }catch(err){
    res.send(err)
  }
});

app.listen(3000);
