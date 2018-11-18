//call the post api using post and body to get json data
const request=require('request');
var body={
    user:'munna94kumar@gmail.com',
    empid:262
}
//two argument: first is api url,  second is call back which get called when data comes from api call
request({
  headers:{
    "Content-Type":"application/json"
  },
url:'http://localhost:3000/api/users',
json:true,
method: 'POST',
body:JSON.parse(JSON.stringify(body))},(error,response,body)=>{
//console.log('hi... after request.....');
console.log("response status is...."+response.statusCode);
var result=JSON.parse(JSON.stringify(body));
console.log('result  is .. '+result);
});

//call  the get api with multiple parameter

request({url:'http://localhost:3000/api/multi/munna/kumar'},(error,response,body)=>{
  console.log(response.statusCode);
  console.log(body);

});
