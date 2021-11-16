//Delete Parts
function runProgram(input) {
    input = input.trim().split("\n")
    N = input[0]
    arr = input[1].trim().split("")
    range = input[2].trim().split(" ")
    range1 = Number(range[0])
    range2 = Number(range[1])

    //     check1 = ""
    // for(var i = 0; i < N; i++) 
    //     if( (i < range1)){
    //     check1 +=arr[i] }
    //     check2 = ""
    // for(var i = 0; i <= N; i++) 
    //     if((i > range2)){
    //     check2 += arr[i]}
    //     check = check1 + check2
    //     console.log(check)

        check = ""
    for(var i = 0; i <= N; i++) 
        if((i < range1) || i > range2){
        check += arr[i] }
        console.log(check)
  
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    abcdef
    1 3
    `);
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
  