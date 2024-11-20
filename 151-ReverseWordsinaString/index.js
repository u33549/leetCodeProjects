s=" a good   example "

var reverseWords = function(s) {
    sArr=s.split(' ');
    sArr=sArr.filter((word) => word != "");
    sArr.reverse();
    return sArr.join(' ');
};

console.log(reverseWords(s));