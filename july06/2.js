function runProgram(input) {
var input = input.split(' ').map(Number)
// console.log(input)
var N = input[0]
var score = 0
for (i=1; i<input.length; i++)
score = score + input[i]
output = N - score;
console.log(output)
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`40 6 6 6 6 6 6`);   // INPUT
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }