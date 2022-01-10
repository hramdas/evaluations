function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()

    var line = 1;
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        let span= []
        spanCount(arr, n, span)
        console.log(span.join(' '))
    }
}
function spanCount(arr, n, span){
    span.push(1)
    var st = []
    st.push(0)
    console.log('aa1', st, span)
    for(let j=1; j<n; j++){

        while(arr[st[st.length-1]] <= arr[j]){
            st.pop()
        }
        span[j] = st.length == 0 ? j+1 : j-st[st.length-1]
        st.push(j)
        console.log('BB@', st, span)

    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    6
    100 60 70 65 80 85`);
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
  