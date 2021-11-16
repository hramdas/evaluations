function runProgram(input) {
    
    N = Number(input.trim())

    for (var r=0; r<N; r++) {
        mat = []
        for (var c=0; c<N;c++) {
            if (c%2==0){
                mat.push(r)
            } else if (c%2!==0){
                mat.push(c)
            }
        }
      
        console.log(mat.join(' '))
    }

   
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
  