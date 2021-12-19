function minPossible(arr, cur, n){
    let dp = new Array(n).fill(Infinity)

    dp[0] = 0;

    for(let i=0; i<n-1; i++){
      dp[i+1] = Math.min(dp[i] + Math.abs(arr[i+1]-arr[i]), dp[i+1])
      if(i < n-2){
      dp[i+2] = Math.min(dp[i] + Math.abs(arr[i+2]-arr[i]), dp[i+2]) 
      }
      console.log(i, dp)
    }
    console.log(dp)
    return dp[n-1]

}

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

    console.log(minPossible(arr, 0, n))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    10 30 40 20`);
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
  