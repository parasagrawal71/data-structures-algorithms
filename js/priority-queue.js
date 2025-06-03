function PriorityQueue(compareFn = (a, b) => a - b) {
  let compare = (a, b) => compareFn(a, b) > 0;
  let list = [];

  this.heapify = (A, N, i) => {
    // N can be less than A.length

    const l = 2 * i + 1; // l = Left child's index
    const r = 2 * i + 2; // r = Right child's index
    let prior = i; // Index with highest priority among {l, r, i}
    if (l < N && compare(A[prior], A[l])) {
      // IMPORTANT: Since a > b, A[prior] should be first argument for min-heap
      prior = l;
    }

    if (r < N && compare(A[prior], A[r])) {
      // IMPORTANT: Since a > b, A[prior] should be first argument for min-heap
      prior = r;
    }

    if (prior !== i) {
      [A[i], A[prior]] = [A[prior], A[i]];
      this.heapify(A, N, prior);
    }

    return A;
  };

  // Insert Value
  this.insert = (num) => {
    list.push(num);
    if (list.length > 1) {
      // Heapify internal nodes
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
        this.heapify(list, list.length, i);
      }
    }
  };

  // Remove Value
  this.delete = (num) => {
    const size = list.length;

    // Get the index of the number to be removed
    let i = list.findIndex((item) => item === num);

    // Swap the number with last element
    [list[i], list[size - 1]] = [list[size - 1], list[i]];

    // Remove the last element
    list.splice(size - 1);

    // Heapify the list again
    for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
      this.heapify(list, list.length, i);
    }
  };

  // Return the highest priority item
  this.peek = () => list[0];

  // Remove and return the highest priority item
  this.pop = () => {
    const priorityItem = list[0];
    this.delete(priorityItem);
    return priorityItem;
  };

  // Size
  this.size = () => list.length;

  // IsEmpty
  this.isEmpty = () => list.length === 0;

  // Return head
  this.getList = () => list;
}

// // Input:
// const pq = new PriorityQueue();
// pq.insert(3);
// pq.insert(4);
// pq.insert(9);
// pq.insert(5);
// pq.insert(2);

// console.log(pq.getList()); // [2, 3, 9, 5, 4]

// pq.delete(9);
// console.log(pq.getList()); // [2, 3, 4, 5]

// pq.insert(7);
// console.log(pq.getList()); // [2, 3, 4, 5, 7]

/**
 * Testing
 */
const pq = new PriorityQueue((a, b) => a - b);
// (a, b) => a - b means
//returns        1    if    a    has    higher    priority,
//returns        0    if    both    have    the    same    priority
//returns        -1    if    b    has    higher    priority.
// smaller numbers are closer to index:0
// which means smaller number are to be removed sooner

pq.insert(5); // now 5 is the only element
pq.insert(2); // 2 added
console.log(`a). ${pq.peek()}`); // 2, since smaller number are sooner to be removed
pq.insert(1); // 1 added
console.log(`b). ${pq.peek()}`); // 1, since smaller number are sooner to be removed
console.log(`c). ${pq.pop()}`); // 1 is removed, 2 and 5 are left
console.log(`d). ${pq.peek()}`); // 2 is the smallest now, this returns 2
console.log(`e). ${pq.pop()}`); // 2 is removed, only 5 is left
