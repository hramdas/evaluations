function runProgram(input) {
    input = input.trim().split('\n'); 
    test = Number(input[0].trim())

    line= 1
    for (var i=0; i<test; i++) {
        cases = input[line++].trim().split(" ").map(Number)
        m = cases[0]
        n = cases[1]

        mat = []
        for (var j=0; j<m; j++) {
            mat.push(input[line++].trim().split("\n"))
        }


        count = 0
        for (var r=0; r<m; r++) {
            for (var c=0; c<n; c++) {
                if (mat[r][c] == mat[r][c]) {
                    count++
                }
            }
        } 
        console.log(count)
    }  
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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
  