const request=require('request');
//this  orgId is dynamic value we will get from UI select box
var orgId='4602868435596181943';
url='http://192.168.1.87/BpssComplianceService/v1/compliance/getEmployeeDetails/'+orgId;
//console.log(url);
request({url:url},(error,response,body)=>{
console.log(response.statusCode);
result=JSON.parse(body).data;

//const fs = require('fs');
//console.log('This is after the write call');

for(var i=0;i<result.length;i++){


  console.log('name: '+result[parseInt(i)].name);
  console.log('id: '+result[parseInt(i)].id);
  console.log('empId: '+result[parseInt(i)].employeeId);
  console.log('personId: '+result[parseInt(i)].personId);
  console.log('organizationId: '+result[parseInt(i)].organizationId);
  console.log('designation: '+result[parseInt(i)].designation);
  console.log('--------------------------');
}
});
