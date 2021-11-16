function runProgram(input) {
    var input = input.split(' ').map(Number)
    console.log(input)

    var sum = 0;
    for (i=0; i<input.length; i++)
    sum += input[i]

    if (sum % 2 == 0){
        console.log("YES")
    } else {
        console.log("NO")
    }
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`5 10 15`);   // INPUT
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