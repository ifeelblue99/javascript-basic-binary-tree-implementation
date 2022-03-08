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
        this.addNode(val)
      }
    }
    // if val > root.value
    else{
      if(this.root.rightChild == null){
        this.root.rightChild = node
      }
      else{
        this.addNode(val)
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
// generate rand array
const randDataArray = []
for (let i=1; i<8 ; i++) {
  randDataArray.push((Math.random()*(10+i)).toFixed(1))
}

// construct the tree
randDataArray.forEach(el => binaryTree.addNode(el))

// driver code
console.log(binaryTree);
