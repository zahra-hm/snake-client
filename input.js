const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    console.log('UP');
  }
  else if (key === '\u0073') {
    console.log('DOWN');
  }
  else if (key === '\u0061') {
    console.log('LEFT');
  }
  else if (key === '\u0064') {
    console.log('RIGHT');
  }
}

// Stores the active TCP connection object.
let connection;

module.exports = { setupInput };