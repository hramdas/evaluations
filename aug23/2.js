function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    m = Number(input[2].trim())

    char = input[1].trim();
    str = input[3].trim();

    count = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (str[i] == char[j]) {
                count++
                break;
            }
        }
    }
    // console.log(count)

    

    if (count == m){
        console.log('Yes')
    } else {
        console.log('No')
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    aabbc
    3
    abc`);
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
  