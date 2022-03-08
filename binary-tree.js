/*
binary tree implementation 
*/

// tree
function BTree(){
  this.root = null
}

// tree prototype
BTree.prototype.addNode = function(val){
  const node = new Node(val)
  
  if (this.root == null) {
    this.root = node
  } 
  else{
    // if val < root.value
    if (val<this.root.value) {
      if(this.root.leftChild == null){
        this.root.leftChild = node
      }
      else{
        addNode(val)
      }
    }
    // if val > root.value
    else{
      if(this.root.rightChild == null){
        this.root.rightChild = node
      }
      else{
        addNode(val)
      }
    }
  }
}

// nonde object
function Node(value){
  this.value = value
  this.leftChild = null
  this.rightChild = null
}

// tree set up
const binaryTree = new BTree()

binaryTree.addNode(6)
binaryTree.addNode(3)
binaryTree.addNode(10)

// driver code
console.log(binaryTree);
