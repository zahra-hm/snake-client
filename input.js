
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    connection.write("Move: up");
  }
  else if (key === '\u0073') {
    connection.write("Move: down");
  }
  else if (key === '\u0061') {
    connection.write("Move: left");
  }
  else if (key === '\u0064') {
    connection.write("Move: right");
  }
}

module.exports = { setupInput };