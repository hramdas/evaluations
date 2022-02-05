function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    for(var i=1; i<=n;i++){
        var arr = input[i].trim().split(' ')

        var res = ''
        for(let i=0 ;i<arr[0].length; i++){
            if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]){
                res+=arr[1][i]
            } else break
          
        }
        if(res.length == 0) console.log("None")
        else console.log(res)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10
    rbyryyyyyyybbbrbbrbryy rbbrryyyrbrbrbrybrybybybbbyy rbyybbryyrbbbryrb
    brrrybrbrryrbry yrbrrybbbyrybbbyrbbyr brrrybbryyyr
    yrbrbyrbrybrbbr yrbbryrbb ybrrbyrbrybrbbr
    brrrybrbrryrbry yrbrrybbbyrybbbyrbbyr brrrybbryyyr
    yrbrbyrbrybrbbr yrbbryrbb ybrrbyrbrybrbbr
    brrrybrbrryrbry yrbrrybbbyrybbbyrbbyr brrrybbryyyr
    yrbrbyrbrybrbbr yrbbryrbb ybrrbyrbrybrbbr
    brrrybrbrryrbry yrbrrybbbyrybbbyrbbyr brrrybbryyyr
    yrbrbyrbrybrbbr yrbbryrbb ybrrbyrbrybrbbr
    brrrybrbrryrbry yrbrrybbbyrybbbyrbbyr brrrybbryyyr`);
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
  