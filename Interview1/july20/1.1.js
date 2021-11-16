function runProgram(input) {
    input = input.trim().split("\n")
    testcase = input[0]
     
  for (var i=2; i<input.length; i+=2){
    line = input[i].trim().split(" ")
    line = line.join(" ")
    line = line.split(" ").map(Number)
  }
    //line = line.split(" ")
    //console.log(line[1+1])
    //console.log((line[1+1])%2)
    //out = false
    //console.log(Number(line[0]), Number(line[0+1]), Number(line[2]))
    for (var a=0; a < line.length-2; a++) {
      console.log(i)
      if (Number(line[i]) % 2 == 0 && Number(line[i+1]) %2 == 0 && Number(line[i+2]) % 2 == 0) {
      console.log("Yes")
      } else (console.log("No"))
    } 
  }
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3
    1 2 3
    5
    1 2 4 6 8`);
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
  