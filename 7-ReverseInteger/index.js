const x=1534236469;

var reverse = function(x) {
    const multiplyWith=x>0?1:-1;
    let a=Math.abs(x).toString().split("").reverse().join("");
    a=parseInt(a)*multiplyWith;
    if( (-2)**31 <= a && a <= 2**31 - 1){
        return a;
    }
    else{
        return 0;
    }
};

console.log(reverse(x))