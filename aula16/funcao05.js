//RECURSVIDADE 

/*
function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

var v = function(x) {
    return x*2
}

console.log(v(5))

*/
nums = [2,7,11,15]
target = 9
var twoSum = function(nums, target) {
   for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};
console.log(twoSum(nums, target))