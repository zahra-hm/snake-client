// const net = require('net');
// const { connects } = require('./client');
// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: 'localhost',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 

//   return conn;
// }

// console.log('Connecting ...');
// connect();
// // console.log('you ded cuz you didled')

const { connect } = require('./client');
console.log('Connecting ...');
connect();