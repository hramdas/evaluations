function runProgram(input) {
    input = input.trim().split('\n')
     var [n, q] = input[0].trim().split(' ').map(Number)
    var arr = input[1].trim().split(' ').map(Number)
   var line =2;
   for(let a=0; a<q; a++){
       let [left, right, val] = input[line++].trim().split(' ').map(Number)
       left = left-1
       right = right-1
       var count = 0
       while(left<n && left <=right){
           //console.log('left' ,left, arr[left])
           if(arr[left]==val){
               count++
           }
           left++
       }
       console.log(count)
   }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6 2
    1 5 3 2 3 2 
    3 6 2
    4 4 2
    `);
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
  