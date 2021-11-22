function Numbers(arr, x1, x2){
    // let i = pre(arr, x1, 0, arr.length-1)
    count1 = 0;
    count2 = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > x1){
            count1++
        } 
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i] > x2){
            count2++
        }
    }
    return count2
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

    var cases = +input[2].trim()
    var line = 3;
    for(var i=0; i< cases; i++){
        let query = input[line++].trim().split(' ').map(Number)
        var x1 = query[0]
        var x2 = query[1]

        console.log(Numbers(arr, x1, x2))
    }
   
}

function pre(arr, x1, l, h){
    if(arr[l] = x1) return l;
    if(arr[l] > x1) return l;
    var mid =  Math.floor(l + (h-l)/2)
    if(arr[mid] < x1) return pre(arr, x1, l+1, h)

}


  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
  