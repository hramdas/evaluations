function runProgram(input) {
    input = input.trim().split('\n'); 
    test = Number(input[0].trim());

    line = 1;
    for (var i = 0; i < test; i++) {

        var size = input[line++].trim()
        arr = input[line++].trim().split(" ").map(Number);
        // console.log(arr, size)

        obj = {}
        for (var j = 0; j<arr.length; j++) {
           if (obj[arr[j]] = obj[arr[j]]){
               obj[arr[j]] +=1;
           } else {
               obj[arr[j]] = 1;
           }
        }
        out = Object.keys(obj)

        // console.log(Object.values(obj))

        for (var key in obj) {
          if (obj[key] == 1)
          console.log(key)
      }
 
    } 
  }
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5
    1 2 1 3 4 4 5 2 3
    4
    1 3 4 4 2 3 1`);
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
  