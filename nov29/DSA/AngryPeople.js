function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
  
    arr = arr.sort((a,b)=>a-b)
    var mid = Math.ceil(arr.length/2)
    // console.log('arr',arr)
    var col = []

    for(let i=0 ;i< mid-1; i++){
      // console.log('pre', arr[i])
       col.push(arr[i+1] - arr[i])
    }
    
    col.push(arr[arr.length-1] - arr[mid-1])
    col.push(arr[mid] - arr[0])

    for(let i=mid ;i< arr.length-1; i++){
      // console.log('ar', arr[i])
        col.push(arr[i+1] - arr[i])
     }

     col.sort((a,b)=>a-b)

    //  console.log(col)
     console.log(col[col.length-1])

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    5 9 6 8 4`);
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
  