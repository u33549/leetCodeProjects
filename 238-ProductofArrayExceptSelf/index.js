const nums = [0,0]

var productExceptSelf = function (nums) {
    const nl=nums.length;
    const solution = new Array(nl).fill(0);
    let ans = 1;
    let zeroCount = 0;
    for (let i = 0; i < nl; i++) {
        if (nums[i] == 0) {
            zeroCount++;
            continue;
        }
        ans *= nums[i];
    }

    if(zeroCount == 0){
        for (let i = 0; i < nl; i++) {
            solution[i]=(ans/nums[i]);
        }
    }
    else if(zeroCount == 1){
        solution[nums.indexOf(0)] = ans;
    }

    return solution;
};

console.log(productExceptSelf(nums));