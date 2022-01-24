function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
    console.log(findMax(arr, 0, n-1))
   
}
function findMax(arr, l, h){
    if(arr[0] < arr[h]) return arr[h]

    while(l <= h){
        var mid = Math.floor(l+(h-l)/2)
        if(arr[mid] < arr[mid-1]){
            return arr[mid-1]

        }else if(arr[mid] > arr[mid+1]){
            return arr[mid]

        }else if(arr[mid] < arr[0]){
            h = mid-1
        } else l = mid+1
    }

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
   6 6 0 4`);
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
  