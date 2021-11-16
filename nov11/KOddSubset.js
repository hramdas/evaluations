function subSet(s, n, k, arr){
    if(n < s ) return
   if(sub.length >0){
       count = 0
       for(let k=0; k<sub.length; k++){
        //    console.log(sub)
           if(sub[k]%2 !== 0){
               count++
           }
       }

       if(count >= k){
           sum++
       }
    //    console.log(sum)
   }

   for(let j=s; j<=n; j++){
       sub.push(arr[j])
       subSet(j+1, n, k, arr)
       sub.pop()
   }
   return sum

}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = +input[0].trim()

    var line = 1;
    for(let i=0 ; i<cases; i++){
        line1 = input[line++].trim().split(' ').map(Number)

        var n = line1[0]
        var k = line1[1]
        var arr = input[line++].trim().split(' ').map(Number)

        sub = []
        sum = 0
        subSet(0, n, k, arr)
        console.log(sum)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3
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
  