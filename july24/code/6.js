function runProgram(input) {
    num = input.split(" ").map(Number)
    k = num[0]
    //console.log(k)

    console.log(k * (num[1]+num[2]+num[3]))
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 1 2 3`);
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
  