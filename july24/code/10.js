function runProgram(input) {
   var N = Number(input);

    
   for (var i = 0; i < N; i++) {
    out = []
       for (var j = 0; j < N; j++){
           if (j==0 || j == N-1 || i == N-1){
           out.push("*")
           } else out.push(" ")
       }  console.log(out.join(" "))
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
  