// Too slow to run and uses to much memory
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums?.length; i++) {
//     const index = nums.indexOf(target - nums[i]);

//     console.log(nums[i], index);

//     if (index > -1 && index !== i) {
//       console.log([i, index]);
//       return [i, index];
//     }
//   }

//   return [];
// }

// fast but requires some memory
function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (numberMap.has(target - nums[index])) return [index, numberMap.get(target - nums[index])];
    else numberMap.set(nums[index], index);
  }

  return [];
}

twoSum([3, 2, 4], 6);
