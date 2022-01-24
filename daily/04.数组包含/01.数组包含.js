/**
给两个数组[1,2,3],[2,1,3,4]
如果A包含于B返回1，B含于A返回2，其他返回0
*/

function isContainer(nums1, nums2) {
  const sort1Str = nums1.sort((a, b) => a - b).join("");
  const sort2Str = nums2.sort((a, b) => a - b).join("");
  if (sort1Str.includes(sort2Str)) return 1;
  if (sort2Str.includes(sort1Str)) return 2;
  return 0;
}

let A = [1, 2, 3];
let B = [2, 1, 3, 4];

console.log(isContainer(A, B))
