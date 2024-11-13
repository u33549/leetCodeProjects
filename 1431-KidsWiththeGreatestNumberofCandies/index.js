candies = [1,7,1,8,4,2,1,1];
extraCandies = 1;

function giveCandiesId(candies) {
    for (var i = 0; i < candies.length; i++) {
        candies[i] = [candies[i], i];
    }
    return candies;
}
function isPossibleBiggest(candieswithId,id,extra){
    const arr=JSON.parse(JSON.stringify(candieswithId))
    arr[id][0]+=extra;
    arr.sort(function (a, b) {
        return -a[0] + b[0];
    });


    let pointer1=0
    let pointer2=1
    while (arr[pointer1][0]==arr[pointer2][0]){

        if(arr[pointer1][1]==id){
            return true
        }
        pointer1++;
        pointer2++;
    }
    return arr[pointer1][1]==id
}

var kidsWithCandies = function (candies, extraCandies) {
    let arr=[];
    candieswithId = giveCandiesId(candies);
    for (var i=0;i<candieswithId.length;i++){

        arr.push(isPossibleBiggest(candieswithId,i,extraCandies))
    }
    return arr
};

console.log(kidsWithCandies(candies, extraCandies));
