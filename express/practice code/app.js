const express = require('express');
const logger = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");
 const Users = require("./models/users");
 var Schema = mongoose.Schema;

var app = express();

//connecting mongodb
mongoose.connect('mongodb://localhost:27017/first-test');
var RandomModel = new Schema({
    text:String,
    postedBy: String
})
var Random = mongoose.model('Random', RandomModel)


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(logger("short"));


app.use((req, res, next) => {
    console.log('request comming');
    next();
});

app.get('/api/:id', function (req, res) {
    res.send(`GET request to the homepage with id ${req.params.id}`)
  })

app.get('/', function (req, res) {
    res.send(`hellow home page`)

  })

  app.get('/messages', function(req, res) {
    messages.find((err, users)=>{
        res.send(users)
    })
  })

  app.get('/users', function(req, res) {
    Users.find((err, users)=>{
        res.json(users)
    })
    // Users.find(
    //     {name: 'Shahzaib'}, (err, data)=>{
    //         res.send(data)
    //     }
    // )
  })
  //fiind meh takes 2 arguments 
  //one for  what to find
  //second for a function to response with


//   app.get('/:id', function (req, res) {
//       let id = req.params.id;
//     Users.findById(id)
//         .exec()
//             .then((a)=>{
//                 console.log(a)
//                 res.json(a)
//             })
//             .catch((b)=>{
//                 console.log(b)
//                 res.json(b)
//             })

//   })


//   app.get('/', function (req, res) {
//     res.send( req.query)

//   })
  
app.get('/about', function (req, res) {
    res.send(`hellow about page`)
  })  

  
// app.use((req, res) => {
//     res.send('hello0');
// })
// app.use(function(request, response) {
// //   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Not Found");
// });

app.post('/messages', (req, res) => {
    // res.send('post request');
    new messages({text:req.body.text})
     messages.save(function (err, succ) {
        if (err) {res.send('send')}
      
      else{res.send('not send')}
    })
      
    // res.send('done')
})


app.post('/Random', function(req, res){
    var data = new Random({text: req.body.text, postedBy: req.body.postedBy})
    data.save(function (err, succ) {
        console.log(err + succ)
    })
    res.send(`Random running ${req.body.text} ${req.body.postedBy}`)
})
app.get('/Random', function(req, res) {
    Random.find((err, succ)=>{
        res.json(succ)
    })
  })
http.createServer(app).listen(2000, () => {console.log('listening at port 2000')});