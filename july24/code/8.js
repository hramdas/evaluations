function runProgram(input) {
    var N = Number(input);

    out = []
    for (var i = 1; i <= N*N; i++){
        if (i%N !== 0){
         out.push(i + " ")
        } else if (i<N*N) {
            out.push(i + "\n")
        } else out.push(i)
    } console.log(out.join("")) 
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4`);
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
  