function soaps(arr, p, n, l, h){
  if(h<l) return 0

    if(p > arr[n]) return n+1

    let mid = Math.floor(l + (h- l)/2)
    // console.log('mid', mid)

    if(arr[mid] > p && arr[mid-1] < p) return mid
    if(arr[mid] == p) return mid;

    if(arr[mid] > p){
      return soaps(arr, p, n, l, mid-1)
    } else if(arr[mid] < p) return soaps(arr, p, n, mid+1, h)
  
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim() - 1
    var arr = input[1].trim().split(' ').map(Number)
    var cases = +input[2].trim();
    let line = 3;

    arr = arr.sort((a,b)=> a-b)
    // console.log(arr, n+1)

    for(var i=0; i<cases; i++){
        let p = +input[line++].trim()

        console.log(soaps(arr, p, n, 0, n))
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8
    1 4 10 5 6 12 11 14
    7
    2
    3
    5
    11
    12
    0
    14`);
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
  