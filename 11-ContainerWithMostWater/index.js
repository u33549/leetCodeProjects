const height=[1,8,6,2,5,4,8,3,7];


function calcArea(heights,p1,p2){

    return Math.min(heights[p1],heights[p2])*Math.abs(p1-p2);
}
var maxArea = function(height) {
    let p1=0;
    let p2=height.length-1;
    let maxArea=0;
    while (p1!=p2){
        // console.log(calcArea(height,p1,p2),height[p1],height[p2],p1,p2)
        maxArea=Math.max(calcArea(height,p1,p2),maxArea);
        if(height[p1]>height[p2]){
            p2--;
        }
        else{
            p1++;
        }
    }
    return maxArea;
};

console.log(maxArea(height));