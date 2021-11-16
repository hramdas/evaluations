function runProgram(input) {
    var input = input.trim().split("\n")
    test = Number(input[0])

    var line = 1
    for (var i = 0; i < test; i++) {
       var N = Number(input[line])
        line++
        var arr = input[line].trim().split(" ").map(Number)

        count = 0
       for (var j = 0; j < N-2; j++) {
           if (arr[j]%2 !== 0 && arr[j+1] %2 !==0 && arr[j+2] %2 !== 0){
               count++
           }
       }  if (count > 0){
           console.log("Misbehave!")
       } else {
           console.log("Behave!")
       }

        line++
    }  
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    6
    1 3 3 4 5 6
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
  