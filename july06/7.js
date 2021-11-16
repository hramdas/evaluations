function runProgram(input) {

    var input = Number(input)

    output = []
    for (i=0; i<input; i++){
        for (j=0; j<input; j++)
    if (i==0 || j == 0 || i == input-1){
        output.push('* ')} 
    else {
        output.push('')
        }
        output.push('\n')
    }

        out = output.join('')
        console.log(out)

}
    
    
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`5`);   // INPUT
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