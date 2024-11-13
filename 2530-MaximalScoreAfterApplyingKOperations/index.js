const nums = [756902131,995414896,95906472,149914376,387433380,848985151];
const k = 6;

function sortArr(arr, k) {
  arr = arr.sort(function (a, b) {
    return b - a;
  });
  return arr.slice(0, k);
}
function stepArr(arr){
    let num=Math.ceil(arr[0] / 3);
    arr.shift();
    // if(num<arr[arr.length-1]){
    //   return arr;
    // }
    // let top=arr.length-1;
    // let bottom=0;
    // let concatFact=false;
    // // console.log(top,bottom)
    // while (Math.abs(top-bottom)!=1){
    //     let pointer=parseInt((top+bottom)/2);
    //     // console.log(pointer,arr[pointer],top,bottom)
    //     if(num>arr[pointer]){
    //       top=pointer;
    //       concatFact=true;
    //     }
    //     else{
    //       bottom=pointer;
    //     }
    // // console.log(top,bottom)

    // }
    // let a1=arr.slice(0, concatFact?bottom:bottom+1);
    // let a2=arr.slice(concatFact?top-1:top,arr.length);
    // // console.log(a1,a2)
    arr.push(num);
    return arr.sort(function (a, b) {
      return b - a;
    });
    


}
var maxKelements = function (nums, k) {
  let point = 0;
  let arr=sortArr(nums, k)
  // console.log(arr)

  for (var i = 0; i < k; i++) {
    point+=arr[0];
    arr=stepArr(arr);
    // console.log(arr)

  }
  return point;
};

console.log(maxKelements(nums, k));

// stepArr([4,3,3,3,1])
