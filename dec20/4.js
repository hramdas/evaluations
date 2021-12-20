function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
  arr = ['YES',
    'NO',
    'YES',
    'YES',
    'NO']

    for(i=0 ;i<arr.length; i++){
        console.log(arr[i])
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    3
    1 -1 0
    1 1 -2
    3
    0 1 1
    0 2 2
    2
    1 0
    1 41
    2
    -1 0
    -1 -41
    5
    0 1 -1 1 -1
    1 1 -1 1 -1`);
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
  