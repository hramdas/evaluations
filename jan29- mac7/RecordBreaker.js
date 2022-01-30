function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line = 1;
    
    for(let a=0; a<cases; a++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        //console.log(arr, n)
        let most = arr[0]
        let least = arr[0]
        let mc = 0;
        let lc=0;
        
        for(let i=1; i<n ;i++){
            if(arr[i] > most) {
                most = arr[i]
                mc++
            } else if(arr[i] < least){
                lc++
                least = arr[i]
            }
        }
        console.log(mc, lc)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    9
    10 5 20 20 4 5 2 25 1
    10
    3 4 21 36 10 28 35 5 24 42`);
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
  