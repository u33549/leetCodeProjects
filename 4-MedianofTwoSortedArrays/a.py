class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = sorted(nums1 + nums2)
        n = len(nums)

        if n % 2 == 0:
            a = (n // 2) - 1  # // işareti tamsayı bölme sağlar
            b = n // 2
            d = (nums[a] + nums[b]) / 2  # Ortadaki iki elemanın ortalamasını alıyoruz
            return(d)
        else:
            c = n // 2  # Ortadaki eleman direkt bulunuyor
            return(nums[c])