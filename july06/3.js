function runProgram(input) {
var input = input.split("\n")
var N = input[1]
var num = input[1].trim()
var num = num.split(" ").map(Number)

// var num = input[1]
var even = 0;
var odd = 0;
for (i=0; i<num.length; i++)
if (num[i]%2 == 0){
    even += num[i]
} else if (num[i]%2 !== 0){
    odd += num[i]
} console.log(even - odd)
    
}
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`4
      1 2 3 4`);   // INPUT
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