function soaps(arr, p, n, l, h){
    let mid = Math.floor(l + (h- 1)/2)

    if(p > arr[n]) return n+1
    // console.log('mid', mid)
    if(arr[mid] < p && arr[mid+1] > p) return mid
    
    if(arr[mid] = p) return mid;


    if(arr[mid] > p) return soaps(arr, p, n, mid+1, h)
    else return soaps(arr, p, n, l, mid-1)
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim() - 1
    var arr = input[1].trim().split(' ').map(Number)
    var cases = +input[2].trim();
    let line = 3;

    arr = arr.sort((a,b)=> a-b)

    for(var i=0; i<cases; i++){
        let p = +input[line++].trim()

        console.log(soaps(arr, p, n, 0, n))

        // var count = 0;
        // for(var j=0; j<n; j++){
        //     if(arr[j] < p){
        //         count ++
        //     }
        // }
        // console.log(count)
    }

   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
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
  