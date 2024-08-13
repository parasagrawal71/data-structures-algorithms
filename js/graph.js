class Graph {
  constructor() {
    this.numOfNodes = 0;
    this.adj = {}; // adj is adjacency list
  }

  addVertex(node) {
    if (!this.adj[node]) {
      this.adj[node] = [];
      this.numOfNodes++;
    }
  }

  addEdge(node1, node2) {
    if (this.adj[node1]) {
      this.adj[node1].push(node2);
    }

    // if (this.adj[node1] && !this.adj[node1].includes(node2)) {
    //   this.adj[node1].push(node2);
    // }

    // if (this.adj[node2] && !this.adj[node2].includes(node1)) {
    //   this.adj[node2].push(node1);
    // }
  }

  showConnections() {
    for (const [vertex, connList] of Object.entries(this.adj)) {
      console.log(`${vertex} --> ${connList.join(", ")}`);
    }
  }
}
