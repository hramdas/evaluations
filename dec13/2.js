function runProgram(input) {
    inp = input.trim().split('\n')
    var n = +inp[0].trim()

    for(let i=1; i<=n; i++){
        str = inp[i].trim()

        var sum = 0;
        for(let j=0; j<str.length; j++){

            if(str[j-1] !== str[j]){
              sum++
            }
        }
       console.log(sum)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10
    a1
    abbbaaz
    aabbggccd
    aadfd
    adfsg
    adfsgs
    asgaaeeggggaabbggccdaabbggccdaabbggccdaabbggccd
    asgaaeeggggaabbggccdaabbggccdaabbggccdaabbggccd
    asgaaeeggggaabbggccdaabbggccdaabbggccdaabbggccd
    asgaaeeggggaabbggccdaabbggccdaabbggccdaabbggccd`);
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
  