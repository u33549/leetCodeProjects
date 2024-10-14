let s="pwwkew";

var lengthOfLongestSubstring = function(s) {
    const subs = new Set();
    const lenS=s.length;
    let ans = 0, i = 0, j = 0;
    while (i<lenS && j< lenS){
        if (!subs.has(s[j])){
            subs.add(s[j++]);
             ans = Math.max(ans, j - i);
        }
        else{subs.delete(s[i++]);}
    }
    console.log(ans)
    return ans;
};

lengthOfLongestSubstring(s);