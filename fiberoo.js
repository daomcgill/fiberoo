function fib(){
  let arr = [];
  for (let i = 0; i < 50; i++){
    if (i < 2){
    arr.push(i);
    } else {
      arr.push(arr[i-1] + arr[i-2]);
    }
  }
  return arr;
}
console.log(fib());
function numToStrings(arr){
  let strArr = _.map(arr, function(num){
    return num.toString();
  });
  return strArr;
}
console.log(numToStrings(fib()));
function numEvenNums(arr){
  let evenNums = _.filter(arr, function(num){
    return num % 2 === 0;
  });
  return evenNums.length;
}
console.log(numEvenNums(fib()));