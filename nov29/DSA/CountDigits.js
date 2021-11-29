function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

    var obj = {}
    for(let i =0; i<arr.length; i++){
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]]+=1 : obj[arr[i]] =1
    }
    // console.log(obj)
    console.log(obj[0], obj[1], obj[2])
  
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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
  