str1 = 'LEET';
str2 = 'CODE';

function control(str1, str2) {
    const arr = str1.split(str2);
    // console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            return false;
        }
    }
    return true;
}

var gcdOfStrings = function (str1, str2) {
    longStr = str1.length >= str2.length ? str1 : str2;
    shortStr = str1.length < str2.length ? str1 : str2;
    // console.log(longStr,shortStr)
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    for (var i = shortStr.length; i > 0; i--) {
        pointer1 = shortStr.length;
        pointer2 = pointer1 - i;
        while (pointer2 >= 0) {
            if ((longStr.length % i) + (shortStr.length % i) != 0) {
                break;
            }
            
            let slicer = shortStr.substring(pointer2, pointer1);
            if (control(longStr, slicer) && control(shortStr, slicer)) {
                return slicer;
            }

            pointer1--;
            pointer2--;
        }
    }
    return '';
};

console.log(gcdOfStrings(str1, str2));
