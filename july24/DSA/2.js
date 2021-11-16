function runProgram(input) {
    input = input.trim().split("\n")
    test = input[0].trim()

    for (var i=1; i<input.length; i++)
    line = 1
        cases = input[line].trim().split(" ")
        N = Number(cases[0])
        M = Number(cases[1])
    line++
        a = input[line].trim().split(" ").map(Number)
        for (var i=0; i<N; i++){
            count = 0
            for (var j=1; j<N; j++){
                for (var k=0; k<=j; k++){
                    if (i<j && k<=N-1){
                        if(a[i]+a[j]+a[k] == M){
                            count++
                        }
                    }
                }
            }console.log(count)  
        }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3 0
    1 2 3
    5 4
    3 2 3 1 5`);
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
  