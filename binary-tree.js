/* 
Binary tree implementation 
*/

// node
function Node(dt) {
    this.data = dt;
    this.left = null;
    this.right = null;
}

// binary tree
function BinaryTree(){

  this.root = null;
  
  this.add = function(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}



// tree set up
const binaryTree = new BinaryTree();

binaryTree.add(9);
binaryTree.add(4);
binaryTree.add(17);
binaryTree.add(12);
binaryTree.add(20);

// driver code
console.log(binaryTree)


