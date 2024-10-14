const s ="aabcbcbcaccbcaabc";
const p =".*a*aa*.*b*.c*.*a*";

var isMatch = function(s, p) {
  p = p.replace(/\*{1,}/g, "{0,}")
  console.log(p)
  return new RegExp(`^${p}$`).test(s)
};  
console.log(isMatch(s, p));
