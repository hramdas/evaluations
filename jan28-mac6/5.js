function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var line =1;
   for(let i=0 ;i<n; i++){
     var str1 = input[line++].trim()
     var str2 = input[line++].trim()

     if(anagram(str1, str2)) console.log("True")
     else console.log("False")
   }
   
}

function anagram(str1, str2){
  if(str1.length !== str2.length) return false
     var obj1 = {}
     for(let j=0 ;j<str1.length; j++){
       obj1[str1[j]] =obj1[str1[j]] ? obj1[str1[j]]+=1 : obj1[str1[j]]=1
     }
     var obj2 = {}
     for(let j=0 ;j<str2.length; j++){
       obj2[str2[j]] =obj2[str2[j]] ? obj2[str2[j]]+=1 : obj2[str2[j]]=1
     }
     
     for(key in obj1){
       
       if(obj1[key] !== obj2[key]) return false
     } return true
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    ad
    db
    aa
    aaa`);
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
  