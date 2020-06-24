var isSameTree = function(p, q) {
    // 解法一：
    // function getTree(t) {
    //     let arr = new Array();
    //     if (!t) {
    //        return []
    //     }
    //     arr.push(t.val)
    //     arr.push(t.left)
    //     arr.push(t.right)
    //     console.log(arr)
    //     return arr;
    // }
    // let a = JSON.stringify(getTree(p));
    // let b = JSON.stringify(getTree(q));
    // return a == b;

    // 解法二：
    // return JSON.stringify(p)===JSON.stringify(q)

    // 解法三：
    if (p == null && q == null || (p && p.val == null && q && q.val == null)) return true;
    if (p == null || q == null || (p.val !== q.val)) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};