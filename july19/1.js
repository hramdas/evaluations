function runProgram(input) {
    input = input.trim().split("\n")
    test = input[0]

    var line = 1
    for (var i = 1; i <test;i++){
    var N = input[line].trim()
    line++
    var arr = input[line].trim().split(" ")
    arr = Number(arr)
    line++ }

    console.log(N, arr)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
5
1 2 3 4 5`);
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
  