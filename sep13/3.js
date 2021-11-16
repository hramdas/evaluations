function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
    arr = input[1].trim().split(' ').map(Number)

    // arr = arr.sort()
    function sortNumber(a,b){
        return a - b;
     }
     
     var arr = arr.sort(sortNumber)
    
    // for (let i = 0; i < N; i++) {
    //     for (let j =0; j<N;j++){
    //         if(arr[j]>arr[j+1]) {
    //             temp = arr[j+1]
    //             arr[j+1] = arr[j]
    //             arr[j] = temp
    //         }
    //     }
    // }
    
    // console.log(arr)

    obj={}
    for (let i = 0; i < N; i++) {
       if(obj[arr[i]] = obj[arr[i]]){
            obj[arr[i]] +=2
        } else obj[arr[i]] = 1
    }
    // console.log(obj)
    
    var key = Object.keys(obj)

    //Sorting 
    function sortNumber(a,b){
      return a - b;
     }
     var key = key.sort(sortNumber)


    // console.log('key ' + key)

    // for (let i = 0; i < key.length; i++) {
    //     for (let j =0; j<key.length;j++){
    //         if(key[j]>key[j+1]) {
    //             temp = key[j+1]
    //             key[j+1] = key[j]
    //             key[j] = temp
    //         }
    //     }
    // }
    // console.log(key)

    kl = key.length

    if(key.length<3){
        console.log('Not Possible')
    } else console.log(key[0],key[1],key[2])

    if(key.length<3){
        console.log('Not Possible')
    } else console.log(key[kl-3],key[kl-2],key[kl-1])
     
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10
    -4 -7 -2 -11 -2 -8 0 -122 -66 10`);
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
  