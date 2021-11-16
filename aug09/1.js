function runProgram(input) {
    input = input.trim().split(' '); 
    N = input.length;


   sort = input.sort()

   console.log(sort[1])
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 11 5`);
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
  