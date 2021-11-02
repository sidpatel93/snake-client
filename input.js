//Stores the TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn
  console.log(conn)
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
  if(key === 'w'){
    connection.write('Move: up')
  }
  if(key === 's'){
    console.log('Move: down')
    connection.write('Move: down')
  }
  if(key === 'a'){
    console.log('Move: left')
    connection.write('Move: left')
  }
  if(key === 'd'){
    console.log('Move: right')
    connection.write('Move: right')
  }
  
}

module.exports = {setupInput}