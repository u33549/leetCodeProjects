const x=120;


function arrToNumber(arr){
    let sum=0;
    for(i=arr.length-1;i>=0;i--){
        sum+=arr[i]*10**i;
    }
    return sum;
}

var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let num=x;
    let digit=[]
    let remaining=0;
    let i=10;
    while(num!=0){
        remaining=num%i;
        num-=remaining;
        digit.unshift(remaining/(i/10));
        i*=10;
    }
    return arrToNumber(digit)==x;
    
};

isPalindrome(x)