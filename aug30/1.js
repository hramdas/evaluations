function runProgram(input) {
    input = input.trim().split('\n'); 
    test = Number(input[0].trim())

    line=1;
    for (var i =0; i<test; i++) {

        size = Number(input[line++].trim())
        mat= []
        for (var j = 0; j < size; j++){
            mat.push(input[line++].trim().split(''))
        }

        count = 0
        for (var r=1; r<size; r++){
            for (var c=0; c<r; c++){
                if (mat[r][c] !== '*'){
                    count++
                }
            }
        }
        // console.log(count)

        count2 = 0
        for (var r=1; r<size; r++){
            for (var c=0; c<r; c++){
                if (mat[c][r] !== '+'){
                    count2++
                }
            }
        }

        if (count == 0){
            console.log('-1')
        } else 
       console.log(count + count2)
        

    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3
    x*+
    +x*
    *+x
    2
    x*
    *x`);
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
  