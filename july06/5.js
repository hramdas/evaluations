function runProgram(input) {
    var input = input.trim().split('\n');
    var test = Number(input[0]);

    var line = 1
    for (var i =0; i< test; i++) {
      var size = Number(input[line])
      line++

      var arr = input[line].trim().split(" ").map(Number)
      line++
    console.log(size, arr) }
    console.log(input)
}


  if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5 
    1 4 2 3 5
    5
    5 4 3 2 1`);   //INPUT
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