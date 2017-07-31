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
  ls: ls
}
