//Alternate Palindrome

function runProgram(input) {
    input = input.trim().split("\n")
    N = input[0]
    mid = N/2
    arr = input[1].trim()

        out = ""
    for (var i = 0; i < N; i++){
        if (i == N/2)
        break
        else out += (arr[i] + arr[N-1-i])
    } 

    pal = ""
    for (var i = out.length-1; i >=0; i--){
    pal += out[i]}

    if (out == pal){
        console.log("yes")
    } else {
        console.log("no")
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6
    abcdef`);
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
  