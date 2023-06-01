class Tree {
  value: number;
  right: Tree | null;
  left: Tree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: Tree | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    const newNode = new Tree(value);

    // firs interaction
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: Tree, newNode: Tree): void {
    // left
    if (node.value > newNode.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    // right
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: number) {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: Tree | null, value: number, count = 1): { exists: boolean, count: number }  {
    if (!node) {
      return { exists: false, count }
    }

    if (value === node.value) {
      return { exists: true, count }
    }
    // right
    if (node.value < value) {
      return this.searchNode(node.right, value, ++count);
    }

    return this.searchNode(node.left, value, ++count);
  }
}

{
  const tree = new BinarySearchTree();
  tree.insert(8);
  tree.insert(3);
  tree.insert(10);
  tree.insert(1);
  tree.insert(6);
  tree.insert(14);
  tree.insert(4);
  tree.insert(7);
  tree.insert(13);

  console.log(tree.search(6)); // Output: true
  console.log(tree.search(12)); // Output: false
}