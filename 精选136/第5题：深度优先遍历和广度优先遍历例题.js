var myTree = {
  val: 6,
  left: {
    val: 5,
    left: {
      val: 4,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 2,
    right: {
      val: 1,
    },
  },
};

function dfs(node, cur = []) {
  res = cur;
  if (!node) return res;
  res.push(node.val);
  node.left && dfs(node.left, res);
  node.right && dfs(node.right, res);
  return res;
}

function bfs(node) {
  if (!node) return null;
  const res = [];
  let queue = [node];
  while (queue.length) {
    const stack = [];
    for (let v of queue) {
      res.push(v.val);
      v.left && stack.push(v.left);
      v.right && stack.push(v.right);
    }
    queue = stack;
  }
  return res;
}

console.log(dfs(myTree));
console.log(bfs(myTree));
