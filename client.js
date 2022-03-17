const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243" , // IP address here,
    port: "50541"             // PORT number here,
    
  });
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log("we have connected");
    conn.write('Name: ROB');
    setTimeout(()=> {conn.write("Move: up")},  1000 );
    setTimeout(()=> {conn.write("Move: right")},  2000 );
    setTimeout(()=> {conn.write("Move: up")},  3000 );
    setTimeout(()=> {conn.write("Move: left")},  4000 );
    
  });
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
    
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  

  return conn;
};

module.exports = connect