function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line =1;
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)

        console.log(findNum(arr, n))
    }
}

function  findNum(arr, n){
    var obj = {}

    for(let j=0; j<arr.length; j++){
        obj[arr[j]] = obj[arr[j]] ? obj[arr[j]]+=1:  obj[arr[j]] = 1
    }

    for(key in obj){
        if(obj[key] === 1){
            return key
        }
    }

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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
  