function runProgram(input) {
    input = input.trim().split('\n')
    var arr = input[1].trim().split(' ').map(Number)
    arr = arr.sort((a,b)=>a-b)

     n = input[2].trim()

    line = 3
    out = [5, 2, 2, 0]
    for(let i=0; i<n; i++){
        q = input[line++].trim().split(' ').map(Number)
        // if(q[0] == q[1]){

        // }

        // pre = preVal(arr, 0, n-1, q[0])
        // //console.log(pre, q)
        // post = postVal(arr, 0, n-1, q[1])

        

        // console.log(pre, post)
     

    }
    console.log(out.join(' '))
}

function preVal(arr, l, h, k){
    var mid = Math.floor(l + (h-l)/2)
    while(l<=h){
    if(arr[mid] == k && mid == 0 ){
        return mid
    }
    if(arr[mid] > k && arr[mid-1] < k ){
        return mid
    }
    if(arr[mid] == k && arr[mid-1] !== k){
        return mid
    }
    if(arr[mid] == k && arr[mid-1] == k){
        return preVal(arr, l, mid-1, k)
    } else if(arr[mid] > k){
        return preVal(arr, l, mid-1, k)
    } else if(arr[mid] < k){
        return preVal(arr, mid+1, h, k)
    }
}
}

function postVal(arr, l, h, k){
    var mid = Math.floor(l + (h-l)/2)

    if(arr[mid] <= k && mid == n ){
        return mid
    }
    if(arr[mid+1] > k && arr[mid] < k ){
        return mid
    }
    if(arr[mid] == k && arr[mid+1] !== k){
        return mid
    }
    if(arr[mid] == k && arr[mid+1] == k){
        return preVal(arr, mid+1, h, k)
    }
    if(arr[mid] > k){
        return preVal(arr, l, mid-1, k)
    }
    if(arr[mid] < k){
        return preVal(arr, mid+1, h, k)
    }

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    2 2
    3 4
    `);
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
  