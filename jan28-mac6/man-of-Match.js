function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line = 1
    for(let j=0; j<cases; j++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
       var str = true
        var arun = 0
        var krun = 0
        for(let i=0 ;i<arr.length; i++){
            if(str){
                arun+=arr[i]
                if(+(i+1)%6 == 0 && (arr[i]==1 || arr[i]==3)){

                }
                else if(+(i+1)%6 !==0 && (arr[i]==1 || arr[i]==3)){
                    str = !str
                }else if(+(i+1)%6 == 0){
                    str = !str
                }
            } else {
                krun+=arr[i]
                if(+(i+1)%6 == 0 && (arr[i]==1 || arr[i]==3)){

                }
                else if(+(i+1)%6 !==0 && (arr[i]==1 || arr[i]==3)){
                    str = !str
                }else if(+(i+1)%6 == 0){
                    str = !str
                }
            }
            
        }

        if(arun > krun){
            console.log("AB de Villiers")
        } else if(arun < krun) console.log("Virat Kohli")
        else console.log("Tie")

    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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
  