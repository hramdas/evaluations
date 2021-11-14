function Shopping(n, k, cur, col){
    if(k == 0) return
    // if(z==n) return
    if(col.length==k){
        console.log(col.join(' '))
    }

    for(var i=cur;i<=n; i++){
        col.push(i)
        Shopping(n, k, i+1, col)
        col.pop()
    }
}

function runProgram(input) {
    input = input.trim().split(' ').map(Number)
    var n = input[0]
    var k = input[1]
    
    var col = []
    Shopping(n, k, 1, col)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 2`);
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
  