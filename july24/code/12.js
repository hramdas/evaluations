function runProgram(input) {
    input = input.trim().split("\n")
    test = Number(input[0])

    var line = 1
    for (var i = 0; i < test; i++) {
       var N = Number(input[line])
        line++
        var arr = input[line].trim().split("")

        out = []
        for (var j = 0; j <N; j++){
            if (j%2 !== 0){
                out.push(arr[j])
                out.push(arr[j-1])
            }
        } console.log(out.join(""))

    line++
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    6
    rutwik`);
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
  