function runProgram(input) {
    input = input.trim().split('\n')
    cases = +input[0].trim()

    var line=1
    for(var i =0; i<cases; i++){

        st = []
        n1 = +input[line++].trim()
        arr1 = input[line++].trim().split(' ').map(Number)
        n2 = +input[line++].trim()
        arr2 = input[line++].trim().split(' ').map(Number)
        
        arr1 = arr1.sort(function(a,b){
            return a -b
        })
        arr2 = arr2.sort(function(a,b){
            return a -b
        })

        for(var i=0; i<arr1.length; i++){
            st.push(arr1[i])
        }

        for(var i=0; i<arr2.length; i++){
            st.push(arr2[i])
        }

        st = st.sort(function(a,b){
            return a -b
        })

        un = []
        for(var i=0; i<st.length; i++){
            if(un == null){
                un.push(st[i])
            } else if(un[un.length-1] !== st[i]){
                un.push(st[i])
            }
        }
        console.log(un.join(' '))
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    4
    1 2 3 4
    5
    1 2 3 4 5`);
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
  