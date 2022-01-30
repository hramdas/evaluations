function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = [];
  for (let i = 1; i <= n; i++) {
    var row = input[i].trim().split(" ").map(Number);
    arr.push(row);
  }
  var l = 0;
  var r = n - 1;
  var t = 0;
  var b = n - 1;
  var size = n * n;
  var count = 0;

  for (var j = 0; j < Math.floor(n / 2); j++) {
    var pre = arr[t + 1][l];
    for (let i = l; i <= r; i++) {
      let temp = arr[t][i];
      arr[t][i] = pre;
      pre = temp;
    }
    t++;
    for (let i = t; i <= b; i++) {
      let temp = arr[i][r];
      arr[i][r] = pre;
      pre = temp;
      count++;
    }
    r--;
    for (let i = r; i >= l; i--) {
      let temp = arr[b][i];
      arr[b][i] = pre;
      pre = temp;
      count++;
    }
    b--;
    //console.log(arr)
    for (let i = b; i >= t; i--) {
      let temp = arr[i][l];
      arr[i][l] = pre;
      pre = temp;
      count++;
    }
    // console.log(arr)
    l++;
  }
  arr.forEach((e) => {
    console.log(e.join(" "));
  });

  // for(let r=t; r<b; r++){
  //     for(let c=l; c<r; c++){

  //     }
  // }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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
