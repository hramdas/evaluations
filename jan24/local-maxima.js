function runProgram(input) {
    input = input.trim().split('\n')
    var tests = +input[0].trim()
    var line = 1;
    for(let i=0 ;i<tests; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
       
        console.log(findMaxima(arr, n-1))
    }
 
}
function findMaxima(arr, n){
    if(arr.length<3) return -1
    let sum = 0
    for(let j=1; j<n; j++){
        if(arr[j] > arr[j-1] && arr[j] > arr[j+1]){
            console.log(arr[j],arr[j-1], "&&" ,arr[j],arr[j+1])
            sum++
        }
    }
    return sum
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    2
    1 2
    10
    884 729 768 201 266 494 597 328 705 287`);
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
  