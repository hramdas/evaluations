function runProgram(input) {
    var input = input.trim().split('\n')
    var N = Number(input[0])
    var arr = input[1].trim().split(" ")

    odd = []
    for (var i = 0; i < N; i++)
    for (var j = 1; j <N; j++){
        if(arr[i]%2 !== 0){
            if(odd[i]==arr[i]){
                break
            }
            odd.push(arr[i])
        }
        console.log(odd)
    }
    
   
  }
  if (process.env.USERNAME === "hedga") {
    runProgram(`12
    1 1 1 1 2 2 2 2 2 1 1 1`);
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
  
  