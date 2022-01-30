function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    let line = 1
    for(let a=0; a<cases; a++){
        let [n, m] = input[line++].trim().split(' ').map(Number)
        
        console.log(root(n, m))
    } 
}

    function root(n,m){
        var i=1;
        while(i < m){
            let val = i
            for(let j=0; j<n; j++){
                if(val == m){
                return i
                }
                val= val*i
            }
            i++
        }
    }
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    2 4
    6 4096
    3 126`);
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
  