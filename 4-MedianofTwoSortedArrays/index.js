const nums1 = [1,2,3,4,5];
const nums2 = [6,7,8,9,10,11,12,13,14,15,16,17];

var findMedianSortedArrays = function (nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const length = merged.length;
  if (length % 2) {
    var i = (length - 1) / 2;
    return merged[i];
  } else {
    var i = length / 2;
    return (merged[i] + merged[i - 1]) / 2;
  }
};

console.log(findMedianSortedArrays(nums1, nums2));
