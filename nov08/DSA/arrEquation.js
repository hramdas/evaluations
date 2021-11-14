function runProgram(input) {
     input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
     var A= 2; var B = 3

     X = 0  //even numbers
     Y = 0  //odd 
     
     for(var num of arr){
         if(num%2 == 0){
            X+=num
         } else  Y+=num
     }


    
    // console.log(X, Y)

    out = A * X + B * Y
    console.log(out)
   
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
  