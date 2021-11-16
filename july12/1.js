function runProgram(input) {
    var input = input.trim().split('\n')
    var rs = Number(input[0])
    var std = Number(input[1])

    if (std == 0 || std>rs){
        console.log("No Chocolates")
    } else if (rs >= std*5){
        console.log("Dairy Milk")
    } else if (rs >= std*2){
        console.log("Shots")
    } else if (rs >= std*1){
        console.log("Eclairs")
    } else {"No Chocolates"}
   
  }
  if (process.env.USERNAME === "hedga") {
    runProgram(`10
    11`);
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
  
  