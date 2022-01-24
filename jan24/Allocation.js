function runProgram(input) {
    input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var n = cases[0]
    var m = cases[1]
    var k = cases[2]
    var d = input[1].trim().split(' ').map(Number)  //desired
    var h = input[2].trim().split(' ').map(Number)  //available
    var d = d.sort((a,b)=>a-b)
    var h = h.sort((a,b)=>a-b)
    
    var j = 0
    let res = 0
    for(let i=0; i<d.length; i++){
        while(j<h.length){
            if(d[i]-k <= h[j] && d[i]+k >= h[j]){
                res++
                j++
                break;
            } 
            else if(d[i]-5 > h[j]){
                j++
            }
            else break
           
        }
    }
    console.log(res)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 3 5
    60 45 80 60
    40 30 60 75`);
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
  