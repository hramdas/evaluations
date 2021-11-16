function runProgram(input) {
    input = input.trim().split('\n')
    //n = +input[0].trim()
    arr = []
    for(let i = 1; i < input.length; i++){
        arr.push(input[i].trim().split(' '))
    }
    arr = arr.join(',')
    arr = arr.split(',').map(Number)
    // console.log(arr)
    
    num = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            num+=1}
        // var count=0
        for(let j = 2; j < arr[i]; j++){
           
         if(arr[i]%j == 0){
               num+=1
            //    console.log(arr[i])
                break
            }
        }
        // if(count== 0){
        //     num+=1
        // }
        // console.log(i)
    }

    console.log(num)

    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9 `);
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
  