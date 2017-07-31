var commands = require('./commands.js');


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' '); // remove the newline

  if(cmd[0] === 'pwd'){
    commands.pwd(done);
  }
  else if(cmd[0] === 'date'){
    commands.date(done);
  }
  else if(cmd[0] === 'ls'){
    commands.ls(done);
  }
  else if (cmd[0] === 'echo') {
    commands.echo(cmd, done);
  }
  else if(cmd[0] === 'cat') {
    commands.cat(cmd[1], done);
  }
  else if(cmd[0] === 'head') {
    commands.head(cmd[1], done);
  }
  else if(cmd[0] === 'tail') {
    commands.tail(cmd[1], done);
  }
  else if(cmd[0] === 'curl'){
    commands.curl(cmd[1], done);
  }

  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});


var done = (output) => {
  console.log(output);
}