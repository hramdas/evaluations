function Unique(str, n){
    let obj = {}
     for(var i=0; i<n; i++){
         obj[str[i]] = obj[str[i]] ? obj[str[i]]+=1 : obj[str[i]] = 1
     } 

     let objVal = Object.values(obj)
     //console.log(objVal)

     for(var j=0; j < objVal.length; j++){
         if(objVal[j] > 1){
             return 'No'
         }
     }
     return 'Unique'
}

function runProgram(input) {
     let str = input.trim()
     let n = input.length;
     console.log(Unique(str, n))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`msaaaai`);
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
  