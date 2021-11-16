function runProgram(input) {
    input = input.trim().split("\n");
    line = input[0].split(" ").map(Number)
    num = input[1].trim().split(" ").map(Number)
   
    
    N = line[0]
    K = line[1]
    //console.log(N, K)

    out = 0
   for (var i = 0; i<N; i++){
       if (num[i] <= K){
           out+= num[i]
       }
   } console.log(out)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 2
    1 2 3 4`);
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
  