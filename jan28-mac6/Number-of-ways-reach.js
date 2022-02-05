function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line = 1;
    for(let z=0 ;z<cases; z++){
        var n = +input[line++].trim()
        var point = input[line++].trim().split(' ').map(Number)
        var eng = input[line++].trim().split(' ').map(Number)
        var point = point.sort((a,b)=>a-b)
        var start = point[0]
        let i=0;
        let j=0
        var count =0
        for(let i=0; i<=n ;i++){
            for(let j=0; j<eng.length; j++){
                if(start+eng[j] == point[i+1]){
                    start=point[i+1]
                    count++
                    break;
                }
            }
        }
        console.log(count)
       
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3
    99991 99994 99997
    3 3 3
    3
    1 4 7
    3 3 3`);
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