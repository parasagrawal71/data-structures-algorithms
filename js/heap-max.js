function MaxHeap() {
  let list = [];

  this.max_heapify = (A, N, i) => {
    // N can be less than A.length

    const l = 2 * i + 1; // l = Left child's index
    const r = 2 * i + 2; // r = Right child's index
    let largest = i; // Index with max value among {l, r, i}
    if (l < N && A[l] > A[largest]) {
      largest = l;
    }

    if (r < N && A[r] > A[largest]) {
      largest = r;
    }

    if (largest !== i) {
      [A[i], A[largest]] = [A[largest], A[i]];
      this.max_heapify(A, N, largest);
    }

    return A;
  };

  // Insert Value
  this.insert = (num) => {
    list.push(num);
    if (list.length > 1) {
      // Heapify internal nodes
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
        this.max_heapify(list, list.length, i);
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
      this.max_heapify(list, list.length, i);
    }
  };

  // findMax: Return max value
  this.peek = () => list[0];

  // extractMax: Remove and return max value
  this.pop = () => {
    const max = list[0];
    this.delete(max);
    return max;
  };

  // Size
  this.size = () => list.length;

  // IsEmpty
  this.isEmpty = () => list.length === 0;

  // Return head
  this.getList = () => list;
}

// Input:
const heap = new MaxHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);
console.log(heap.getList()); // [9, 5, 4, 3, 2]

heap.delete(9);
console.log(heap.getList()); // [5, 3, 4, 2]

heap.insert(7);
console.log(heap.getList()); // [7, 5, 4, 2, 3]
