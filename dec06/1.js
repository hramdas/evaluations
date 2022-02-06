
 function maxSum(arr, n){
     var ls = []
     lsSum =0;
     for(let i=0 ;i<n; i++){
         lsSum += arr[i]*(-1)
         ls.push(lsSum)
     }
    //  console.log(ls)


    for(let k = 0; k<n ; k++){
        num = arr[k]
        hsum = (n - k -1) * arr[k]
        lsum = ls[k-1]
        total = hsum + lsum + num
        // console.log(num, hsum, lsum, total)

        if(res < total){
            res = total
        }
    }
    return res
 }

function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    line =1

    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)

        arr = arr.sort((a,b)=> a-b)
         res = 0
        console.log(maxSum(arr, n))

    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10
    97
    95 29 82 55 79 55 62 16 67 84 47 79 81 37 8 52 32 44 18 7 95 11 31 96 23 84 4 54 82 79 51 77 60 85 84 92 40 47 8 59 83 55 91 64 45 99 68 29 95 86 37 42 97 20 39 72 4 43 27 39 74 30 16 87 67 1 79 7 0 39 19 83 95 10 99 40 61 67 21 57 5 10 99 2 30 90 74 87 34 53 26 60 83 94 47 50 95
    27
    10 47 66 29 82 13 91 81 5 52 0 26 9 57 37 61 59 19 51 86 58 37 39 36 98 75 31
    98
    25 78 24 35 26 42 16 8 7 7 42 12 60 94 38 21 52 27 34 63 99 38 49 9 27 41 46 25 16 77 75 93 55 99 81 81 93 97 90 0 5 32 64 17 26 54 90 30 82 25 94 33 63 95 42 90 36 88 68 4 17 43 50 73 94 31 54 39 80 96 91 37 80 55 54 59 9 45 89 43 22 35 76 37 31 71 79 19 59 47 76 29 42 26 2 88 9 8
    28
    89 57 70 79 37 25 85 48 35 30 38 78 4 73 7 41 56 78 21 76 89 20 52 18 15 30 20 3
    40
    81 83 80 38 53 59 27 31 45 76 66 27 14 44 84 39 51 77 48 81 98 24 71 71 28 89 38 10 62 93 1 95 76 81 33 82 93 60 13 90
    37
    31 69 2 27 5 94 31 83 42 12 33 18 35 4 46 25 94 56 39 88 57 34 16 90 19 98 35 79 63 77 68 46 99 22 74 4 16
    6
    87 10 69 21 28 5
    78
    26 82 72 82 21 60 91 7 28 34 26 27 21 57 42 99 77 41 98 0 15 54 68 72 42 79 41 15 59 46 44 86 28 68 68 1 80 12 60 9 98 38 88 19 48 82 18 25 23 68 77 38 23 46 10 17 77 4 32 36 50 28 22 31 97 43 84 29 7 45 38 5 83 26 24 31 9 95
    10
    32 63 86 23 86 84 85 3 13 89
    88
    50 92 16 24 75 65 19 59 94 78 4 85 83 40 63 60 71 72 55 80 57 18 67 32 57 3 69 12 17 11 0 19 3 68 95 30 85 67 89 31 45 46 16 81 86 80 93 57 4 48 90 13 18 9 45 27 12 67 40 29 78 92 0 81 12 96 63 97 63 52 28 60 98 45 41 36 77 34 94 81 34 84 95 5 93 92 32 57`);
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
  