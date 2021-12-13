function minPossible(arr, cur, n){
    if(cur<n){
        var sum = Math.min((arr[cur] - arr[cur+1]), (arr[cur] - arr[cur+2])) + Math.min(minPossible(arr, cur+1, n), minPossible(arr, cur+2, n))
        console.log(Math.min( Math.abs(arr[cur] - arr[cur+1]), Math.abs(arr[cur] - arr[cur+2])), cur)
    }
    return sum

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
  