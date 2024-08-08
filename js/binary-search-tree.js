class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        // Left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        // Right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        // When node is found

        // Case 1: When no right child of currentNode
        if (currentNode.right === null) {
          // Case 1.1: If currentNode is root
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            // Case 1.2: If currentNode value < parentNode value then make currentNode left child a left child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            }
            // Case 1.3: If currentNode value > parentNode value then make currentNode left child a right child of parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        }

        // Case 2: When right child of currentNode doesn't have left child
        else if (!currentNode.right.left) {
          // Case 2.1: If currentNode is root
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            // Case 2.2: If currentNode value < parentNode value then make currentNode right child a left child of the parentNode
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }
            // Case 2.3: If currentNode value > parentNode value then make currentNode right child a right child of the parentNode
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }

        // Case 3: When right child of currentNode has a left child
        else {
        }
      }
    }
  }

  traverseTree() {
    function traversePreOrder(node) {
      console.log(node.value);
      if (node.left) traversePreOrder(node.left);
      if (node.right) traversePreOrder(node.right);
    }
    traversePreOrder(this.root);
  }
}
