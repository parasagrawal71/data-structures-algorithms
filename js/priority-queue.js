const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

const pq = new MinPriorityQueue();
pq.enqueue(1);
pq.enqueue(10);
pq.enqueue(5);
pq.enqueue(8);
console.log(`pq: `, pq.toArray());

console.log(`\nfront: `, pq.front());
console.log(`back: `, pq.back());

console.log(`\ndequeue: `, pq.dequeue());
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
