function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var val = input[1].trim().split(' ').map(Number)
    l = val[0]
    r = val[1]
    var arr = []
    for(let i=0; i<n; i++){
        arr.push(i+1)
    }
    // console.log(arr)
    sub = []
    count = 0
   
    console.log( subseq(arr,0, n, l, r))
}

function subseq(arr, cur, h, l, r){
    console.log(sub)
    if(sub.length > 0){
        return sub
    }

    for(var j=cur; j<h; j++){
        sub.push(arr[j])
        subseq(arr, j+1, h, l, r)
        //sub.pop()
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    0 1`);
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
  