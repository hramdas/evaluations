function findBug(n, arr){
    for(let i=0; i<n; i++){
        if(arr[i] === 1){
            return i
        }
    } return -1
    
}

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

   console.log(findBug(n, arr))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    0 0 0 1 1`);
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
  