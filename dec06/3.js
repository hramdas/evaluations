function diffWays(n){
    Dp = []
    Dp[0] = Dp[1] = Dp[2] = 1;
    Dp[3] = 2

    for(let i=4; i<=n; i++){
        Dp[i] = Dp[i-1] + Dp[i-3] + Dp[i-4]
    }
    return Dp[n]
}

function runProgram(input) {
    n = +input.trim()

    console.log(diffWays(n))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5`);
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
  