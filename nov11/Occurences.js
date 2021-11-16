function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line=1;
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split('').map(Number)

        let obj = {}
        for(let k =0; k<10; k++){
            obj[k] = 0
        }

        for( let j=0; j<n ; j++){

            obj[arr[j]] = obj[arr[j]] ? obj[arr[j]] +=1 : obj[arr[j]] = 1

        }
        console.log(Object.values(obj).join(' '))

    }
}

if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5
    21321
    6
    235452`);
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
  