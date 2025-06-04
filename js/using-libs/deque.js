const { Deque } = require("@datastructures-js/deque");

const dq = new Deque();
dq.pushBack(1);
dq.pushBack(2);
dq.pushBack(3);
console.log(dq.toArray()); // [ 1, 2, 3 ]

console.log(dq.front()); // 1
console.log(dq.back()); // 3

console.log(dq.popBack()); // 3
console.log(dq.toArray()); // [ 1, 2 ]
console.log(dq.popFront()); // 1
console.log(dq.toArray()); // [ 2 ]

console.log(dq.isEmpty()); // false

console.log(dq.size()); // 1
