function runProgram(input) {
    input = input.trim().split('\n'); 
    cases = Number(input[0].trim())

    var line=1;
    for (let i=0; i<cases; i++) {
        n = +input[line++].trim()
        arr = input[line++].trim().split(' ').map(Number)

        out = []

        for (let j=0; j<n; j++) {
            var k = j;
            while(k < n) {
                if (arr[j] < arr[k]) {
                    out.push(arr[k])
                    break;
                }
                k++
            } 
        }
        console.log(out)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    4
    1 3 2 4`);
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
  