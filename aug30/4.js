function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
    str = input[1].trim();

    obj = {}
    for (var i = 0; i < N; i++) {
       if( obj[str[i]] = obj[str[i]]){
            obj[str[i]] += 1
       } else {
        obj[str[i]] = 1
       }
    }
    
    out = Object.keys(obj)

    var alpha = 'abcdefghijklmnopqrstuvwxyz'

    keysingle = []
    for ( key in obj ) {
        // console.log(key)
        if (obj[key] == 1){
            keysingle.push(key)
        }
    }

    res = []
    for (var a =0; a<26; a++){
        for (var b =0; b<keysingle.length; b++){
            if (alpha[a] == keysingle[b]){
                res.push(keysingle[b])
                break
            }
        }
    }
    console.log(res[0])
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8
    agbfbaad`);
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
  