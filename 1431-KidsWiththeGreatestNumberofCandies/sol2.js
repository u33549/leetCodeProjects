candies = [1,7,1,8,4,2,1,1];
extraCandies = 1;




var kidsWithCandies = function (candies, extraCandies) {
    let arr=[];
    const max=Math.max(...candies)
    for (var i=0;i<candies.length;i++){
        arr.push(max<=candies[i]+extraCandies);
    }
    return arr
};

console.log(kidsWithCandies(candies, extraCandies));
