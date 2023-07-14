var removeElement = function(nums, val) {
     let k = 0; 
 
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] !== val) {
             nums[k] = nums[i];
             k++; 
         }
     }
 
     return k;
 };
 
 const nums = [3, 2, 2, 3];
 const val = 3;
 const newLength = removeElement(nums, val);
 
 console.log(newLength);
 console.log(nums.slice(0, newLength)); 
 