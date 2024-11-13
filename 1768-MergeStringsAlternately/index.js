const word1 = 'ab';
const word2 = 'pqrs';


var mergeAlternately = function (word1, word2) {
    let merge="";
    const limit=(word1.length>word2.length?word1.length:word2.length);
    for(var i=0;i<limit;i++){
        merge+=word1[i]?word1[i]:"";
        merge+=word2[i]?word2[i]:"";
    }
    return merge;
};

console.log(mergeAlternately(word1, word2))