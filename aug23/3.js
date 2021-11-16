function runProgram(input) {
    input = input.trim().split('\n'); 
    test = Number(input[0].trim())

    line=1;
    for (var i = 0; i < test; i++) {

      size = Number(input[line++].trim())
      var mat = [];
      for (var j = 0; j < size; j++) {
        mat.push(input[line++].trim().split(' '))
      }

      spiralTraversalIV(size, mat)
    
    }

    
   

    function spiralTraversalIV(N, arr){
        top = 0;
        bottom = N-1;
        left = 0;
        right = N-1;
       
       var out = [];
       
       for (var i = bottom; i>=top; i--){
        out.push(arr[0][right]  
       } right--

        for (var i = right; i>=left; i++){
            out.push(arr[top][i]
                top++
        }
                          
        for (var i = top; i<bottom; i++){
        out.push(arr[left][top]
            left++
        }

        for (var i = left; i<= right; i++){
        out.push[bottom][i]
            bottom--
        }
                
        console.log(N, arr)     
                  
         
       
     }
     
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    3 
    1 2 3
    4 5 6
    7 8 9`);
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
  