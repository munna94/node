var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
//var sqlConnect=require('./sqlConnect.js')
var mongojs=require('mongojs');
var db=mongojs('authDb',['userValidation'])


const port=process.env.PORT || 3000;
console.log(port);
// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: "192.168.1.104",
//   user: "root",
//   database:'vishwas',
//   password: "Vishwas@1234"
//     })
//
// con.connect(function(err) {
//     if (err) throw err
//
// });
//

app.use(express.static(__dirname + '/views'));

// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);

app.use(session({ secret: 'abc',resave: true,saveUninitialized: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var sess;


//----for get request----
app.get('/',function(req,res){
sess = req.session;
//Session set when user Request our app via URL
if(sess.email) {
/*
* This line check Session existence.
* If it existed will do some action.
*/
    res.redirect('/admin');
}
else {
    res.render('index.html');
}
});


//table dataType


// var orgId='4602868435596181943';
// url='http://192.168.1.87/BpssComplianceService/v1/compliance/getEmployeeDetails/'+orgId;
// app.post('/employeeDataTable',function(req,res){
//   //sess = req.session;
// //In this we are assigning email to sess.email variable.
// //email comes from HTML page.
// request({url:url},(error,response,body)=>{
// console.log(response.statusCode);
// result=JSON.parse(body).data;
//
// //const fs = require('fs');
// //console.log('This is after the write call');
//
// for(var i=0;i<result.length;i++){
//
//
// });






//  for login---
app.post('/login',function(req,res){
  sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
  console.log('inside login');
  console.log('ssss'+req.body.email);
  var query = {};
  query['email'] = req.body.email;
  db.userValidation.count(query,function(err,count){
  //console.log("this is cccc "+count)
  if(err){
  	console.log(err);
  }
  else if(parseInt(count)==1){
  	console.log("go ahead.. it's valid user...");
  	sess.email=req.body.email;
  	console.log(sess.email);
  	res.end('done');
  }
  else{
  	console.log('its not a valid user. please try to login first..')
  	res.end('/')
  }

  });

});



//for admin---
app.get('/admin',function(req,res){
  console.log('inside admin')
  sess = req.session;
if(sess.email) {
res.write('<h1>Hello '+sess.email+'</h1>');
res.end('<a href="/logout">Logout</a>');
//res.write(sess.email);

} else {
    res.write('<h1>Please login first.</h1>');
    res.end('<a href="/">Login</a>');
}
});



//for logout-----

app.get('/logout',function(req,res){
console.log('inside logout')
req.session.destroy(function(err) {
  if(err) {
  	console.log('inside error')
    console.log(err);
  } else {
  	console.log('no error')
    res.redirect('/');
  }
});

});



//insert data to mongodb-------

app.get("/api/insert",function(req,res){
var doc={'email':'munnakumar5461@gmail.com','id':20}
db.userValidation.insert(doc,function(err,doc){
  if(err){
  	console.log('error while inserting');
  }
  else{
  	console.log("data inserted successfully");
  }

})
res.end('data inserted successfully....')

});





//get data from database
app.get("/api/multi/:email/:id",(req,resp)=>{

  console.log(req.params.email);
  console.log(req.params.id);

  //console.log(id);
  console.log('inside get data...');
  db.userValidation.findOne((err,result)=>{
    //console.log(result);
    resp.send(JSON.stringify(result));
  })

});




//get post data....
app.post('/api/users',(req,res)=>{
var email = req.body.user;
var id = req.body.empid;
console.log(email);
query={};
query['email']=email;
query['id']=parseInt(id);
//console.log(email);

db.userValidation.count(query,(err,count)=>{
//console.log('count is...'+count);
if(err){
  console.log('error in fetching data...');
  res.send("error in fetching data...");
}
else if(parseInt(count)==1){
  //console.log('count is '+count);
  //console.log('hi you are authorised  user ....');
  res.send("hi you are authorised  user ....");

}
else{
  console.log('not authorised user');
  res.send('not authorised user');
}
});
console.log('outside the retrieve....');

});






//get api to validate user authentication from sql databases
// app.get("/api/userValidate/:user",(req,res)=>{
// var user=req.params.user;
// console.log('user is'+user);
// query="select count(userName) as count from person where userName like " +"'" + user +"'";
// console.log(query);
// con.query(query, function (err, result, fields) {
// if (err) throw err;
// var ob=result[0];
// var count=ob['count'];
// console.log(count);
// if(parseInt(count)>=1){
//   res.send(200,'auth')
// }
// else{
//     res.send(401,'not auth')
//    }
//
// });
//
// });
//

app.get("/:id",(req,res)=>{
var id=req.params.id// IDEA: ;
console.log('id is.. '+id);

});


//creating server---
app.listen(port,function(){
console.log(`App Started on PORT ${ port }`);
});
