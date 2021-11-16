function runProgram(input) {
    input = input.trim().split('\n'); 

    S1= input[0];
    S2=input[1];
    
    out = ""
    for (var i = 0; i < input[0].length; i++) { 
            if (S1[i] !== S2[i]){
            out = S1[i]
            
            }  
       
    } console.log(out)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`ABCX
    ABCD`);
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
  