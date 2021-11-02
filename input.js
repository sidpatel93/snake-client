//Stores the TCP connection object.
let connection;
const {KEY_MAPPING} = require('./constants')
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput)

  return stdin;
};

const handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();
  }
  connection.write(KEY_MAPPING[key])
}

module.exports = {setupInput}