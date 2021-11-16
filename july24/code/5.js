function runProgram(input) {
    N = input.split(' ').map(Number)
    //console.log(N)

    out = N[0]*5 + N[1]*4 + N[2]*3 + N[3]*2 + N[4]
    console.log(out)
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 2 1 4 5`);
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
  