// const s="selamkardesim";
// const p="s.l.m.a.d.s.m";
// const s = 'aaaaaaaaaaaaccccdddddddddeeeefghtfr';
// const p = 'a*b*c*d*e*.*.r';
const s ="aabcbcbcaccbcaabc";
const p =".*a*aa*.*b*.c*.*a*";
var isMatch = function (s, p) {
  let decode = '';
  let decode2 = '';

  let pPointer = 0;
  let sPointer = 0;
  let pPointer2 = p.length-1;
  let sPointer2=s.length-1;

  let pKey;
  let pKey2;
  
  let pBKey;
  let pAKey;

  let sKey;
  let sKey2;
  let sccWithS=false;
  while (sPointer < s.length || pPointer<p.length) {
    pKey = p[pPointer];
    pBKey = p[pPointer - 1];
    pAKey = p[pPointer + 1];

    sKey = s[sPointer];
    // console.log(decode)
    if (pKey != '*' ) {
        // console.log(pKey,sKey)
      if ((pKey === sKey || pKey === '.') && (sPointer < s.length) ) {
            pPointer++;
            sPointer++;
            decode+=sKey;
      }
      else if(sPointer == s.length && s[sPointer-1]==pKey && sccWithS){
        console.log("yıldız maçı bitirdi");
        pPointer++;
      } 
      else if(pAKey==="*"){pPointer++}
      else {
        // console.log(pPointer,sPointer,pKey,sKey)
        console.log("eşleşme hatası");
        return false;}
    }
    else if(pKey === '*'){
        if(pBKey==="."){
            while(pPointer2>pPointer){
                pKey2 = p[pPointer2];
                sKey2 = s[sPointer2];
                // console.log(pKey2,sKey2,decode2);

                if(pKey2==="*"){
                    pPointer2-=2;
                }
                else if((pKey2 === sKey2 || pKey2 === '.') && (sKey2 && pKey2)){
                    decode2+=sKey2;
                    pPointer2--;
                    sPointer2--;
                }
                else{
                    console.log("eşleşme hatası1");
                    return false;
                }
               

            }
            decode+=decode2.split("").reverse().join("");
            // console.log(decode)

            return true;
        }
        else{
            while (pBKey===sKey ){
                sPointer++;
                decode+=sKey;
                sKey = s[sPointer];
                sccWithS=sPointer == s.length;

            }
            
            if(pAKey===pBKey){
                while(pBKey==p[pPointer+1]){
                    pPointer++;
                }
                
            }
            pPointer++;
        }
        
    }
    else{
        console.log("gerekli sorgu bulunamadı")
        return false;
    }
  }
  console.log(pPointer,p.length)
  return true;
};

console.log(isMatch(s, p));
