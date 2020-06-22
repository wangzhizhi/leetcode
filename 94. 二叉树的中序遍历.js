/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let newTree = [];
    getTree(root)

    function getTree(node) {
        if (!node) return; //
        getTree(node.left)
        newTree.push(node.val);
        getTree(node.right)
    }
    return newTree;
};