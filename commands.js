var fs = require('fs');

function pwd(){
  console.log(`${process.cwd()}`);
};

function date(){
  console.log(formatDate(new Date()));
};

function ls(){
  fs.readdir('.', 'utf8', function(err, files){
    if(err) throw err;

    files.forEach(function(file){
      process.stdout.write(file.toString() + '\n');
    });
  });
};

var echo = (cmd) => {
  var str = cmd.slice(1).join(' ');  
  console.log(str);
  //return str;
};

var cat = (filePath) => {
  var fileContents = [];
  fs.readFile(filePath, 'utf8', function (err, data) {
   console.log (data);
  }) 


}

var head = (str) => {
  //var firstTen 
}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo,
  cat: cat
}
