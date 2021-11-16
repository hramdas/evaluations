function runProgram(input) {
    var input = input.split(' ').map(Number)
    var input = input
    // console.log(input[1])
    var sum = 0;
    for (i=0; i<input.length; i++)
    sum = sum + input[i]
    
    score = (150 * input.length) - sum;
    console.log(score)
    


}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`120 120 120`);   // INPUT
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