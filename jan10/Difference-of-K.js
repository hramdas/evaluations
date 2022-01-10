function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line = 1;
    for(let i=0; i<cases; i++){
        var tests = input[line++].trim().split(' ').map(Number)
        var [n, k] = tests
        var arr = input[line++].trim().split(' ').map(Number)

        console.log(pairs(arr, n, k))
    }
}

function pairs(arr, n, k){
    for(let j=0; j<n; j++){
        let l = j+1
        let h = n-1;
        //var num = k+arr[j]
        
        while(l<h){
            let mid = Math.floor(l + (h-l)/2)
           //console.log( arr[j]- arr[mid])
            if( k == Math.abs(arr[j]- arr[mid])){
                return "Yes"
            } if( k < Math.abs(arr[j]- arr[mid])){
                h = mid-1
            } else l=mid+1
        }
    }
    return 'No'
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3 3
    -5 -3 0
    5 8
    1 2 3 4 5 `);
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
  