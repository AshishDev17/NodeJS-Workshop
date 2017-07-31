var commands = require('./commands.js');


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' '); // remove the newline
  
  if(cmd[0] === 'pwd'){
    commands.pwd();
  }
  else if(cmd[0] === 'date'){
    commands.date();
  }
  else if(cmd[0] === 'ls'){
    commands.ls();
  }

  else if (cmd[0] === 'echo') {
    commands.echo(cmd);
  }

  else if(cmd[0] === 'cat') {
    commands.cat(cmd[1]);
  }

  else if (cmd[0] === 'head') {
    var cat = commands.cat(cmd[1]);
    console.log ('this is a test', cat);
    //commands.head(cat);
  }
  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
