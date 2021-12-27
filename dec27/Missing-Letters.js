function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()

    for(var i=1; i<=cases; i++){
        var arr = input[i].trim().split(' ').map(Number)
        var n = arr.length;
        
        console.log(missingLetter(arr, 0, n))
    }
}

function missingLetter(arr, l, n){
    // if(arr[0] !== 0) return 0;

    // var mid = Math.floor(l + (n-l)/2)

    // if(arr[mid] == mid) return missingLetter(arr, mid+1, n)
    // if(arr[mid] > mid && arr[mid-1] == mid-1) return mid
    // if(arr[mid] > mid) return missingLetter(arr, l, mid-1)

    for(var j=0; j<n; j++){
        if(arr[j] !== j){
            return j
        }
    }
     return n
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12
    0 1 2 3 5 7 8 9 10 11 12
    0 1 2 3 4 5 6 7 8 9 10`);
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
  