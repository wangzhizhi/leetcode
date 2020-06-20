var findTarget = function (root, target) {
  if (!root) {			// 基础判断
    return false;
  }
  
  let nums = []
  function inOrder(root) {
    if (!root) {
      return;
    }
    inOrder(root.left);
    nums.push(root.val);
    inOrder(root.right);

  }
  inOrder(root);
  console.log(nums)
  // 以下是二分法的代码
  for (let index = 0; index < nums.length; index++) {
    const aim = target - nums[index];
    let start = index + 1;
        end = nums.length - 1;
    while (start <= end) {
      let mid = Math.round((start + end) / 2)
      if (nums[mid] === aim) {
        return true
      } else if (nums[mid] < aim) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return false
};
findTarget({left: {val: 3,left:{val: 2}, right:{val: 4}}, right: {val:6, right: {val: 7}}, val: 5},9)



// 输入： [1,2,3,4,5]
var levelOrder = function(root) {
    if (!root) {
        return [];
    }

    let nums = [];
    function getorder(root) {
        root.val && nums.push(root.val)
        root.left && getorder(root.left)
        root.right && getorder(root.right)
    }
    getorder(root)
    return nums;
};
// 输出：[1,2,4,5,3] --- 前序遍历
var levelOrder = function(root) {
    if(root==null)return [];
    //bfs遍历即可
    let res=[];
    let qu=[root];
    while(qu.length>0){
        let p=qu.shift();
        res.push(p.val);
        if(p.left!==null)qu.push(p.left);
        if(p.right!==null)qu.push(p.right);
    }
    return res;
};
// 输出：[1,2,3,4,5]











