var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.1.104",
  user: "root",
  database:'vishwas',
  password: "Vishwas@1234"
});

module.exports.validate=((userName)=>{
//console.log('name is.....'+userName);
  con.connect(function(err) {
    if (err) throw err;
    query="select count(userName) as count from person where userName like " +"'" + userName +"'";
    //console.log(query);
    con.query(query, function (err, result, fields) {
    if (err) throw err;
    var ob=result[0];
    var count=ob['count'];
    console.log((count));
    return count;


    //console.log(count);

    //console.log(typeof(count));
    });
  });
//console.log('munnnn');

});
