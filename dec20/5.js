function runProgram(input) {
    input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    n = cases[0]
    p = cases[1]
    c = input[1].trim().split(' ').map(Number)

    total = 0; 
    count = 0;
    console.log(3)
    while(total < p){

        for (var i=n-1; i>=0; i--){
            
            if(total + c[i] <= p){
                total+=c[i]
                //console.log(c[i])
                count++
            }
            if(total == p){
                //console.log(count)
                return;
            }
        }
    }
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 11
    1 5 7`);
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
  