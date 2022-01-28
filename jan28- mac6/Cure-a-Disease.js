function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var ar1 = input[1].trim().split(' ').map(Number)
    var ar2 = input[2].trim().split(' ').map(Number)

    var ar1 = ar1.sort((a,b)=>a-b)
    var ar2 = ar2.sort((a,b)=>a-b)
   
    for(let i=0 ;i<n ;i++){
        if(ar1[i]<ar2[i]){
            console.log("No")
            return
        }
    }
    console.log("Yes")
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`);
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
  