const s = "IceCreAm"


function isVowel(char) {
    return (/^[aeiou]$/i).test(char);
}

var reverseVowels = function (s) {
    const vowels = []
    for (var i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            vowels.push({vowel: s[i], id: i})
        }
    }
    let s2 = s.split("");
    for (let i = 0; i < vowels.length; i++) {
        let replaceId = vowels.length - 1 - i;
        s2[vowels[i].id] = vowels[replaceId].vowel;
    }
    return s2.join("");
};


console.log(reverseVowels(s));