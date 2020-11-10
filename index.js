const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


const router = require('./route')

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let Schema = mongoose.Schema
// let testSchema = new Schema({
//     name:String
// })

// let Test = mongoose.model('Test',testSchema)

app.use('/contacts', router)

app.get("/", (req, res) => {
//     let test = new Test({
//         name:'Iqram Khan'
//     })
//     test.save()
//         .then(t => {
//             res.json(t)
//         })
//         .catch(e => {
//             console.log(e);
//             res.status(500).json({
//                 error:'Error Occurred'
//             })
//         })
 });

const PORT = process.env.PORT || 8080;
mongoose
  .connect(
    `mongodb+srv://iqramdb:iqram18103047@cluster01.rr76l.mongodb.net/iqramdb?retryWrites=true&w=majority`,
    { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  });
