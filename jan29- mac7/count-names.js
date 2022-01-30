function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()

    let arr =[]
    for(let i=1 ;i<=n; i++){
        var str = input[i].trim()
        arr.push(str)
    }
    arr.sort()
    console.log(arr)

    let obj={}
    for(let i=0 ;i<arr.length; i++){
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]]+=1 : obj[arr[i]] =1
    }

    for(key in obj){
        console.log(key, obj[key])
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    masairrr
    school
    masai`);
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
  