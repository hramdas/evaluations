function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var str = input[1].trim()

    if(str[0] == 'a' || str[0]== 'e' || str[0]== 'i' || str[0]== 'o' || str[0]== 'u'){
        res = str + 'hulk'
    } else res = str + 'thor'
   console.log(res)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    ibced`);
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
  