function runProgram(input) {
    inp = input.trim().split('\n')
    var n = +input[0].trim()

    for(let i=1; i<=n; i++){
        str= inp[i].trim()

        var sum =1;
        for(let j=0; j<str.length-1; j++){

            if(str[j] == str[j+1]){

            } else sum++
        }
       console.log(sum)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    a1
    abbbaaz`);
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
  