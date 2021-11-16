function notLess(arr, val){

  if(val > arr[arr.length-1]) return 0
  if(val < arr[0]) return arr.length

    var l = 0; var h = arr.length-1;

    while(l <= h){
      let mid = Math.floor(l + (h-l)/2)
      //console.log('mid1', mid)

      if(arr[mid] == val) return arr.length-mid-1
     
      if(arr[mid] > val){
        h = mid-1
      } else l = mid+1
    } return -1
}

greater = (arr, val)=>{

  if(val < arr[0]) return arr.length
  if(val > arr[arr.length-1]) return arr.length

  var l= 0; var h = arr.length-1

  while(l<=h){

    let mid = Math.floor(l + (h-l)/2)

    if(arr[mid] === val){
      return arr.length - mid-1
    } 
    if(arr[mid] > val){
      h = mid-1
    } else l = mid+1
  }

}

function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
    var arr = arr.sort((a,b)=> {return a-b})
    //console.log(arr)

    var cases = +input[2].trim()
    var line = 3;

    for(var i=0; i< cases; i++){

        let query = input[line++].trim().split(' ').map(Number)
        var x = query[0]
        var val = query[1]
        // console.log(x, val)

        if(x === 0){
          console.log(notLess(arr, val))
        } else{
          console.log(greater(arr, val))
        }
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
  