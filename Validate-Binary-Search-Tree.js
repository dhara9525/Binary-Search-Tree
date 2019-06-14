// Recursive javascript solution, faster than 94.85% of JavaScript online submissions for Validate Binary Search Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) 
{
    
     var max= Infinity;
     var min= -Infinity;
    
    return isValid(root,min,max);
  
    function isValid(root,min,max)
    {
        if(!root) return true;
        
        // Сheck that curent node meets the minimum and maximum limits
        if((root.val<=min) || ( root.val>=max))
            return false;  
        
        // Check left and right branches
        return  isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
    }
};