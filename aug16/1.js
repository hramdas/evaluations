function runProgram(input) {
    input = input.trim().split('\n'); 
    test = Number(input[0].trim())

    line =1;
    for (var i=0; i<test; i++){
    size= Number(input[line++].trim());

    mat = []
    for (var j=0; j<size; j++){
        mat.push(input[line++].trim().split(""))
    }
    //console.log(mat)
    count = 0
    count2 = 0
    for (let r = 0; r<size; r++){
        for (let c = 0; c<size; c++){
            if (mat[r][c]==mat[size-r-1][c]){
                count++
            }
            if (mat[c][r]==mat[c][size-r-1]){
                count2++
                // console.log(mat[c][r])
                // console.log(mat[size-c-1][r])
            } 
        } 
    } 
    // console.log(count)
    //      console.log(count2)
        
        if (count == size*size && count2 == size*size){
            console.log("YES")
        } else console.log("NO")

   


    



    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    2
    11
    11
    4
    0101
    0110
    0110
    0101
    4
    1001
    0000
    0000
    1001
    5
    01110
    01010
    10001
    01010
    01110
    5
    00100
    01010
    10001
    01010
    01110`);
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
  