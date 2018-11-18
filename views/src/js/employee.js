 var orgId='4602868435596181943';


 $.ajax({
        url:'https://testportal.betterplace.co.in/BpssComplianceService/v1/compliance/getEmployeeDetails/4602868435596181943',//https://testportal.betterplace.co.in?id=16581134409677608612
        type: 'get',
        crossDomain: true,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function(employeeList){
            var finalList=[]

            var result=employeeList.data;
            for (var i =0;i<result.length; i++) {
               var doc={};
               doc['name']=result[parseInt(i)].name;
               doc['id']=result[parseInt(i)].id;
               doc['organizationId']=result[parseInt(i)].organizationId;
               doc['designation']=result[parseInt(i)].designation;
               finalList.push(doc);
            }
            console.log(finalList);
                var i=0;
                var table = $('#employeeDataTable').DataTable({
                    data: finalList,
                    "columns": [
                        {"data": "name"},
                        {"data": "id"},
                        {"data": "organizationId"},
                        {"data": "designation"},
                        // {
                        //     "targets": -1,
                        //     "data": null,
                        //     "orderable": false,
                        //     "defaultContent": "<button class='btn btn-default fa fa-angle-right' title='view'></button>"
                        // }
                    ],
                    "order": [[1, 'asc']]
                });
        },
        error : function(error) {
            console.log(error);
        }
    });


  // $(document).ready(function () {
  //           $('#employeeDataTable').DataTable({
  //               "ajax": {
  //                   "url":'https://testportal.betterplace.co.in/BpssComplianceService/v1/compliance/getEmployeeDetails/4602868435596181943',//https://testportal.betterplace.co.in?id=16581134409677608612
  //                   "type": "GET",
  //                   "datatype": "json"
  //               },
  //               "columns": [
  //                   { "data": "Name" },
  //                   { "data": "Position" },
  //                   { "data": "Office" },
  //                   { "data": "Age" },
  //                   { "data": "Salary" },
  //                   { "data": "Salary" }
  //               ]
  //           });
  //       });



// var orgId='4602868435596181943';
// $.ajax({
//    type: 'GET',
//    crossDomain: true,
//    //jsonp : false,
//    //jsonpCallback: 'jsonCallback',
//    dataType: 'JSON',
//    contentType: 'application/json',
//    url:'https://testportal.betterplace.co.in/BpssComplianceService/v1/compliance/getEmployeeDetails/4602868435596181943',//https://testportal.betterplace.co.in?id=16581134409677608612
//    success: function (result) {
//     console.log(result);
//    },
//    error: function (error) {
//     console.log(error);
//    }
// });
