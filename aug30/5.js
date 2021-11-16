function runProgram(input) {
    input = input.trim().split('\n'); 
    test = Number(input[0].trim())

    line = 1;
    for (var i = 0; i < test; i++) {
        size = Number(input[line++].trim())
        arr = input[line++].trim().split(" ").map(Number)


        count = 0
        for (var j = 0; j < size; j++) {
            
            out = []
            for (var k = j; k < size; k++) {
                out.push(arr[k])
                if (out[0]%2 !== 0 && out[out.length-1]%2 == 0){
                    count++
                    // console.log(out)
                }
            }
            
        }
        console.log(count)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    5
    1 2 3 4 5`);
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
  