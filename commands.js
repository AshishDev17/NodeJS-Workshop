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
  fs.readFile(filePath, 'utf8', function (err, data) {
    if(err) throw err;
   console.log (data);
  })


}

var head = (filePath) => {
  fs.readFile(filePath, 'utf8', function(err, data){
    if(err) throw err;
    var fileHead = data.split('\n').slice(0, 10).join('\n');
    console.log(fileHead);
  })
}

var tail = (filePath) => {
  fs.readFile(filePath, 'utf8', function(err, data){
    if(err) throw err;
    var lines = data.split('\n');
    var fileTail = lines.slice(lines.length - 10).join('\n');
    console.log(fileTail);
  })
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
  cat: cat,
  head: head,
  tail: tail
}
