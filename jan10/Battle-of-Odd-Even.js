// https://oj.masaischool.com/contest/2790/problem/3

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

    var oddsum = 0
    var evensum = 0
    for(let i=0 ;i<n; i++){
        if(arr[i] % 2 == 0) evensum+=arr[i]
        if(arr[i] % 2 !== 0) oddsum+=arr[i]
    }

    if(oddsum > evensum) console.log('Odd')
    else  console.log('Even')
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    1 2 3 2`);
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
  
