let moveZeroes = function(nums) {
     let insertPos = 0;
 
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] !== 0) {
             nums[insertPos] = nums[i];
             insertPos++;
         }
     }
 
     while (insertPos < nums.length) {
         nums[insertPos] = 0;
         insertPos++;
     }
 };
 
 const nums = [0, 1, 0, 3, 12];
 moveZeroes(nums);
 
 console.log(nums);
 
