function runProgram(input) {
    input = input.trim().split('\n')
    var tests = +input[0].trim()
    var line = 1;
    for(let i=0 ;i<tests; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        q = +input[line++].trim()
        var even = []
        var odd = []
        Segregation(arr, n, odd, even)

        if(q==1){
            if(even.length==0 || odd.length==0){
                console.log((even+odd).join(' ') )
            }
            console.log(even.join(' '), odd.join(' '))
        } else  console.log(odd.join(' '), even.join(' '))
    }
}
function Segregation(arr, n, odd, even){
    
    for(let j=0; j<n; j++){
        if(arr[j]%2==0){
            even.push(arr[j])
        } else odd.push(arr[j])
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5
    1 2 3 8 5 6
    1
    2
    2 0
    2`);
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
  