
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
  // key = w
  } else if (key === '\u0077') {
    connection.write("Move: up");
  }
  // key = s
  else if (key === '\u0073') {
    connection.write("Move: down");
  }
  // key = a
  else if (key === '\u0061') {
    connection.write("Move: left");
  }
  // key = d
  else if (key === '\u0064') {
    connection.write("Move: right");
  }
  // key = h
  else if (key === '\u0068') {
    connection.write( "Say: Greetingssssss");
  }
}

module.exports = { setupInput };