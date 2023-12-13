const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.rootNode = this._insert(this.rootNode, data);
  }

  _insert(root, data) {
    if (!root) {
      return new Node(data);
    }

    if (data < root.data) {
      root.left = this._insert(root.left, data);
    } else if (data > root.data) {
      root.right = this._insert(root.right, data);
    }

    return root;
  }

  has(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this._search(this.rootNode, data);
  }

  _search(node, data) {
    if (!node) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._search(node.left, data);
    } else {
      return this._search(node.right, data);
    }
  }

  find(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this._find(this.rootNode, data);
  }

  _find(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._find(node.left, data);
    } else {
      return this._find(node.right, data);
    }
  }

  remove(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.rootNode = this._remove(this.rootNode, data);
  }

  _remove(root, data) {
    if (!root) {
      return null;
    }

    if (data < root.data) {
      root.left = this._remove(root.left, data);
    } else if (data > root.data) {
      root.right = this._remove(root.right, data);
    } else {
      // Node with only one child or no child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      // Node with two children
      root.data = this._findMin(root.right).data;
      root.right = this._remove(root.right, root.data);
    }

    return root;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

// npm run test test/carbon-dating.test
