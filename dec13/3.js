function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    line = 1;
    for(let a=0; a<cases; a++){
        var val = input[line++].trim().split(' ').map(Number)
        var n= val[0]
        var k= val[1]
        var arr = input[line++].trim().split(' ').map(Number)
        arr = arr.sort((a,b)=>b-a)

        console.log(candidates(arr, n, k))
        // candidates(arr, n, k)
    }
}
function candidates(arr, n, k){
    var sum = 0;
    var r = 1;
    for(var i=0 ;i<n; i++){
        if(arr[i-1] !== arr[i]) {
            r = i+1;
        }
        if(r<=k) sum++
    }
    return sum
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    5 3
    3 3 3 3 3`);
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
  