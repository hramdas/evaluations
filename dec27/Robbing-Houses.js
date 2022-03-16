function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line = 1
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)

        console.log(robbery(arr, n))
    }
}

function robbery(arr, n){
    if(n== 0) return 0;
    if(n==1) return arr[1]
    if(n==2) return Math.max(arr[0], arr[1])

    var dp = new Array(n)
    dp[0] = arr[0]
    dp[1] = Math.max(arr[0], arr[1])
    for(let j=2; j<n; j++){
        dp[j] = Math.max(arr[j] + dp[j-2], dp[j-1])
    }
    return dp[n-1]
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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
  