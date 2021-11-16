function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())

    var line=1;
    for(var i = 0; i < n; i++) {
        case1= input[line++].trim().split(' ').map(Number)
        c = case1[0]
        q = case1[1]
        jump = input[line++].trim().split(' ').map(Number)
        height = jump.sort()
        // console.log(c,q,jump)

        // console.log(jump)
        

       var out = 0
        for(var j = 0; j < c-1; j++) {
            out+= Math.abs(height[j+1] - height[j])
        }
        console.log(out*q)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    2 4
    2 1
    1 5
    3`);
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
  