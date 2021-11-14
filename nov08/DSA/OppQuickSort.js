function partition(arr, l, n){
  var pivot = arr[Math.floor((n+l)/2)]
  i = l;
  j = n
  while(i<=j){
    while(arr[i]< pivot){
      i++
    }
    while(arr[j] > pivot){
      j--
    }
    if(i <= j){
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }
  return i
}

function oppSort(arr, l, n){
  // console.log(arr)
  var index
    if(arr.length > 1){
      index = partition(arr, l, n)
      if(l < index-1){
        oppSort(arr, l, index-1)
      } if(index < n){
        oppSort(arr, index, n)
      }
    }
    return
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

    // console.log(arr, 0, n-1)

  oppSort(arr, 0, n-1)

  // output = []
  // for(var i=0; i<arr.length; i++){

  // }
    console.log(arr.join(' '))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    2 3 1 4 5`);
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
  