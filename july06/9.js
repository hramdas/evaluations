function runProgram(input) {

    var input = input.split(' ').map(Number)
    // console.log(input)
    var k = input[0];
    var x = input[1];

    var y = ((2 * x) - k);

    var j = (2*x)+(3*y)+2;

    console.log(j)
}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`5 3`);   // INPUT
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