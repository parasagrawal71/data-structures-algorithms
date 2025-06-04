function MinHeap() {
    let list = [];

    this.min_heapify = (A, N, i) => {
        // N can be less than A.length

        const l = 2 * i + 1; // l = Left child's index
        const r = 2 * i + 2; // r = Right child's index
        let smallest = i; // Index with max value among {l, r, i}
        if (l < N && A[l] < A[smallest]) {
            smallest = l;
        }

        if (r < N && A[r] < A[smallest]) {
            smallest = r;
        }

        if (smallest !== i) {
            [A[i], A[smallest]] = [A[smallest], A[i]];
            this.min_heapify(A, N, smallest);
        }

        return A;
    };

    // Insert Value
    this.insert = (num) => {
        list.push(num);
        if (list.length > 1) {
            // Heapify internal nodes
            const inSize = Math.floor(list.length / 2) - 1; // Internal nodes' size
            for (let i = inSize; i >= 0; i--) {
                this.min_heapify(list, list.length, i);
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
        const inSize = Math.floor(list.length / 2) - 1; // Internal nodes' size
        for (let i = inSize; i >= 0; i--) {
            this.min_heapify(list, list.length, i);
        }
    };

    // findMin: Return min value
    this.peek = () => list[0];

    // extractMin: Remove and return min value
    this.pop = () => {
        const min = list[0];
        this.delete(min);
        return min;
    };

    // Size
    this.size = () => list.length;

    // IsEmpty
    this.isEmpty = () => list.length === 0;

    // Return head
    this.toArray = () => list;
}

// Input:
const heap = new MinHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);

console.log(heap.toArray()); // [2, 3, 9, 5, 4]

heap.delete(9);
console.log(heap.toArray()); // [2, 3, 4, 5]

heap.insert(7);
console.log(heap.toArray()); // [2, 3, 4, 5, 7]
