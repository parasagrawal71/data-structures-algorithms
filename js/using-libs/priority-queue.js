const {
  MinPriorityQueue,
  PriorityQueue,
} = require("@datastructures-js/priority-queue");

const pq = new MinPriorityQueue();
pq.push(1); // pq.enqueue(1);
pq.push(10);
pq.push(5);
pq.push(8);
console.log(`pq: `, pq.toArray());

console.log(`\nfront: `, pq.front());
console.log(`back: `, pq.back());

console.log(`\npop: `, pq.pop()); // pq.dequeue();
console.log(`pq: `, pq.toArray());

// console.log(
//   `\ncontains: `,
//   pq.contains((n) => n == 10)
// );

console.log(
  `\nremove: `,
  pq.remove((n) => n == 10)
);
console.log(`pq: `, pq.toArray());

console.log(`\nisEmpty: `, pq.isEmpty());

console.log(`\nsize: `, pq.size());

pq.clear();
console.log(`\npq: `, pq.toArray());

// ************************************************************

// weight, node, parent
const pq2 = new PriorityQueue(([w1, n1, p1], [w2, n2, p2]) => {
  if (w1 !== w2) return w1 - w2;
  if (n1 !== n2) return n1 - n2;
  return p1 - p2;
});
pq2.push([5, 10, 0]);
pq2.push([1, 2, 0]);
pq2.push([1, 3, 0]);
console.log(`pq: `, pq2.toArray());

console.log(`pop: `, pq2.pop());

// ************************************************************

const numbers = [3, -2, 5, 0, -1, -5, 4];
const pq_from_array = PriorityQueue.fromArray(numbers, (a, b) => a - b);
console.log(`numbers: `, numbers); // [-5, -1, -2, 3, 0, 5, 4]
pq_from_array.pop(); // -5
pq_from_array.pop(); // -2
pq_from_array.pop(); // -1
console.log(`numbers: `, numbers); // [ 0, 3, 4, 5 ]
