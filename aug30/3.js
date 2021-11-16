function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
    arr = input[1].trim().split(' ').map(Number)
    // console.log(arr, N)
   
    res = []
    for (var i = 0; i < N; i++) {
        out = [];
        for (var j = i; j < N; j++) {
            if (arr[j]%2 !== 0){
                out.push(arr[j]);
            } else break
            // console.log(out)
            res.push(out)
        }
        
        // console.log(out)
       
    }  console.log(res.length)
        
    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    1 2 3`);
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
  