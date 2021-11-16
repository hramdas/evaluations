function runProgram(input) {
    var input = input.trim().split('\n');
    var N = Number(input[0]);
    var arr = input[1].trim().split(" ")

    out = []
    for (var i = 0; i < arr.length; i++) {
        if (i%2==0){
            out.push(arr[i])
        }
        
    } console.log(out.join(" "))

   
  }
  if (process.env.USERNAME === "hedga") {
    runProgram(`5
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
  
  