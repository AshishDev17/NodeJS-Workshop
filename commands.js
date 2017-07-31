var fs = require('fs');
var request = require('request');



function pwd(done){
  done(`${process.cwd()}`);

};

function date(done){
  done(formatDate(new Date()));
};

function ls(done){
  fs.readdir('.', 'utf8', function(err, files){
    if(err) throw err;

    files.forEach(function(file){
      done(file.toString() + '\n');
    });
  });
};

var echo = (cmd, done) => {
  var str = cmd.slice(1).join(' ');
  done(str);
  //return str;
};

var cat = (fileName, done) => {
  var dataToHead = '';
   fs.readFile(fileName, 'utf8', function (err, data) {
    if(err) throw err;
   
   if (typeof done !== undefined) { done (data);
   }
   
   dataToHead = data;
  })
  //console.log(dataToHead, " Data to head");
  return dataToHead;
}

var head = (fileName, done) => {
  var data = cat(fileName);
  //console.log(data);
    var fileHead = data.split('\n').slice(0, 10).join('\n');
    done(fileHead);
  
}

var tail = (filePath, done) => {
  fs.readFile(filePath, 'utf8', function(err, data){
    if(err) throw err;
    var lines = data.split('\n');
    var fileTail = lines.slice(lines.length - 10).join('\n');
    done(fileTail);
  })
}

var curl = (urlString, done) => {
  var urlPath = `http://www.${urlString}`;
  request(urlPath, function(err, response, body){
    done(`Error: ${err}`);
    done(`statuscode: ${response && response.statusCode}`);
    done(`body: ${body}`);
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
  ls: ls,
  echo: echo,
  cat: cat,
  head: head,
  tail: tail,
  curl: curl
}
