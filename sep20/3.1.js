function runProgram(input) {
    input = input.trim().split('\n')
    n = +input[0].trim()

    line=1;
    for(var i = 2; i < n; i+=2){
        console.log(input[1])
        // size= +input[i].trim()
        // arr = input[i].trim().split(' ').map(Number)
        
        // var sum=0
        // for(var j = 0; j<size-1; j++){
        //     for(var k = j+1; k <size; k++){
        //         if(arr[j] < arr[k]){
        //             if(arr[k]%2==0){
        //                 sum+=arr[j]
        //             }
        //             break;
        //         }
        //     }
        // }
        // console.log(sum)
    
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    5
    2 3 5 8 3`);
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
  