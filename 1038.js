/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0;
    getNumbers(root)
    return root;

    function getNumbers(node) {
        if (node.right) {
            getNumbers(node.right)
        }
        sum += node.val;
        node.val = sum;

        if (node.left) {
            getNumbers(node.left)
        }
    }
};