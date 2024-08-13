class Graph {
  constructor() {
    this.numOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numOfNodes++;
    }
  }

  addEdge(node1, node2) {
    if (this.adjacentList[node1]) {
      this.adjacentList[node1].push(node2);
    }

    // if (this.adjacentList[node1] && !this.adjacentList[node1].includes(node2)) {
    //   this.adjacentList[node1].push(node2);
    // }

    // if (this.adjacentList[node2] && !this.adjacentList[node2].includes(node1)) {
    //   this.adjacentList[node2].push(node1);
    // }
  }

  showConnections() {
    for (const [vertex, connList] of Object.entries(this.adjacentList)) {
      console.log(`${vertex} --> ${connList.join(", ")}`);
    }
  }
}
