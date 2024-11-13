const flowerbed = [0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0]
const n = 17



var canPlaceFlowers = function(flowerbed, n) {
    const filledPlacesCount=flowerbed.filter(x => x==1).length;
    if(n==0){
        return true;
    }
    else if((filledPlacesCount+n)*2-1>flowerbed.length){return false;}
    let cauntOfAvilablePlaces=0;

    for(var i=0;i<flowerbed.length;i++){
        let prePlace=(i-1)<0?0:flowerbed[i-1];
        let pointer=flowerbed[i]
        let sufPointer=(i+1)==flowerbed.length?0:flowerbed[i+1]
        // console.log(prePlace,pointer,sufPointer)
        if(prePlace+pointer+sufPointer===0){
            cauntOfAvilablePlaces++;
            flowerbed[i]=1
        }
        if(cauntOfAvilablePlaces==n){
            return true;
        }

    }
    return false;
};

console.log(canPlaceFlowers(flowerbed,n))