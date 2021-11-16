function runProgram(input) {

  input = input.trim().split("\n");
  let testCases = Number(input[0]);

  let line = 1
  for (let i = 0; i < testCases; i++) {
    let size = +input[line++];

    let mat = [];
    for (var j = 0; j < size; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    } console.log(mat)


    out1 = []
    for (var r = 0; r < size; r++) {
      for (var c = 0; c < size; c++) {
        if (c == 0){
          out1.push(mat[r][c])
        }
      }
    } //console.log(out1.join(" "));

    out2 = []
    for (var r = 1; r < size-1; r++) {
      for (var c = size-2; c >0; c--) {
        if (r+c == size-1){
          out2.push(mat[c][r])
        }
      }
    } //console.log(out2.join(" "));

    out3 = []
    for (var r = 0; r < size; r++) {
      for (var c = 0; c < size; c++) {
        if (c == size-1){
          out3.push(mat[r][c])
        }
      }
    } 
    //console.log(out1.join(" ") + " " + out2.join(" ") + " " + out3.join(" "))
  } 
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    4
    2 2 3 4
    4 5 6 7
    7 8 9 8
    1 2 3 4`);
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
  