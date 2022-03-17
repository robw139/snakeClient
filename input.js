const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here

    process.stdout.write(key);
  
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput,handleUserInput};