

function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
    //console.log(input[2])

    line =1;
    for (var i = 0; i < N; i++){
        size = input[line++].trim()
        str = input[line++].trim()

        R = 0
        L = 0
        U = 0
        D = 0
       
       for (var j = 0; j < size; j++){
           if (str[j] == "R") {
               R++
            } else if (str[j] == "L") {
                L++
            } else if (str[j] == "U") {
                U++
            } else if (str[j] == "D") {
                D++
            }
       }

       //console.log(R, L, U, D)

       if (L == R && U == D){
           console.log("Yes")
       } else console.log("No")
        
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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
  