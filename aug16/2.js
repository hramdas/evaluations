function runProgram(input) {
    var num = Number(input.trim())


        count = 0
        for (var i = 5; i >=1; i--) {
            if (num>=i){
                count += Math.floor(num/i)
                num = num%i;  
            } 
        } console.log(count)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`26`);
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
  