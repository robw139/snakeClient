const net = require("net");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243" , // IP address here,
//     port: "50541"             // PORT number here,
    
//   });
//   conn.on("connect", (data) => {
//     // code that does something when the connection is first established
//     console.log("we have connected");
//   });
//   conn.on("data", (data) => {
//     // code that does something when the connection is first established
//     console.log(data);
//   });


//   // interpret incoming data as text
//   conn.setEncoding("utf8");

  

//   return conn;
// };

const connect = require("./client")

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here

    process.stdout.write('.');
  
  if (key === '\u0003') {
    process.exit();
  }
};

const d = setupInput();

d.on("data", handleUserInput);





