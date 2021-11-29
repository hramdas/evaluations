function find(arr,n){
    // l = 0;
    // h = arr.length-1;

    // while(l<=h){
    //     var mid = Math.floor(l + (h-l)/2)
    //     console.log('mid', mid)

    //     if(arr[mid] < n && arr[mid+1] > n){
    //         console.log('ans1')
    //         out = [arr[mid], arr[mid+1]]
    //         return out
    //     }
    //     if(mid == 0 && arr[mid] < n) {
    //         console.log('ans2')
    //         out = ['Front', arr[mid]]
    //         return out
    //     }
    //     if(mid == arr.length-1 && arr[mid] > n){
    //         console.log('ans3')
    //         out = (arr[mid], 'Last')
    //         return out
    //     }

    //     if(arr[mid] > n){
    //         h = mid-1
    //     } else l= mid+1
    // }

    for(let i=0; i<arr.length; i++){
        if(arr[i] > n && i=== 0) {
            out = ['Front', arr[i]]
            return out.join(' ')

        } else if(arr[i] < n && i== arr.length-1){
            out = [arr[i], 'Last']
            return out.join(' ')

        } else if(arr[i] < n && arr[i+1]> n){
            out = [arr[i] , arr[i+1]]
            return out.join(' ')
        }
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()

    var line= 1; 
    for(var i=0; i<cases; i++){
        var n = +input[line++].trim();
        var arr = input[line++].trim().split(' ').map(Number)
        
        console.log(find(arr, n))
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    10
    1 4 5 6 8 9
    5 
    1 2 6 7 8
    1
    2 3 4 5 6
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
  