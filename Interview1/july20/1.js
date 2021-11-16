function runProgram(input) {
    input = input.trim().split("\n").map(Number)
    test = input[0]
     
     for (var i=2; i<input.length; i+=2){
       line = input[i].trim().split(" ")
         //line = line.split(" ")
         for (var a=0; a < line.length; a++){
         if (line[i] %2 ==0 && line[i+1]%2 ==0 && line[i+2]%2==0){
         	console.log("Yes")
           } else console.log("No")
         } 
       } 
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3
    1 2 3
    5
    1 2 4 6 8`);
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
  