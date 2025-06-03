const { Heap, MinHeap, MaxHeap } = require("@datastructures-js/heap");

const tree = [3, 6, 5, 0, 8, 2, 1, 9];
// Expected Output for max heap: [ 9, 8, 5, 6, 3, 2, 1, 0 ]

/**
 * Max Heap
 * push, pop, size, toArray
 */
{
  console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  const maxHeap = new MaxHeap(tree.map((v) => v)); // ❌ - Doesn't work when directly passed to constructor
  console.log("maxHeap: ", maxHeap.toArray());
}

{
  console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  const maxHeap = new MaxHeap();
  for (const node of tree) {
    maxHeap.push(node);
  }
  console.log("maxHeap: ", maxHeap.toArray()); // ✅
  console.log("original tree: ", tree);
  console.log("size: ", maxHeap.size());
  console.log("pop: ", maxHeap.pop());
  console.log("size: ", maxHeap.size());
}

{
  console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  const heapifiedTree = MaxHeap.heapify(tree);
  console.log("heapifiedTree: ", heapifiedTree.toArray());
  console.log("isValid: ", heapifiedTree.isValid()); // true
  console.log(tree);
}
