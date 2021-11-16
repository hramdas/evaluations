function WebAssembly(s, n, sum, count){
    
    if(s<=n) return
    if(sum.length >0){
        console.log(sum)
    }


    for(var i=0; i<n; i++){
        sum.push(i)
        WebAssembly(s+i, n, sum, count)
        sum.pop()
      
    }
    // return count
    
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = +input[0].trim()
    var n = +input[1].trim()
    // console.log(cases, n)

    for(var i=0 ; i<cases; i++){


        WebAssembly(0, n, [], 0)

    }

   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    5`);
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
  