function runProgram(input) {
    arr = input.trim()
    n = input.length

    st = []
    //var count = 0
    for(var i=0; i<n; i++){
        if(arr[i]=='(' || arr[i]=='[' || arr[i]=='{' ){
            st.push(arr[i])
        } else if((arr[i]==')'&& st[st.length-1]=='(') || (arr[i]=='}' && st[st.length-1]=='{') || (arr[i]==']' && st[st.length-1]=='[')){
           
            st.pop()
        } else if (arr[i]=='(' || arr[i]=='[' || arr[i]=='{' || arr[i]==')' || arr[i]==']' || arr[i]=='}' ){
            st.push(arr[i])}
        
    }

    if(st.length == 0){
        console.log('balanced')
    } else console.log('unbalanced')
   
}

if (process.env.USERNAME === "hedga") {
    runProgram(`{(([])[])[]]}`);
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
  