class DisjointSet {
    constructor(n) {
        this.parent = [];
        this.rank = [];
        this.size = [];

        for (let i = 0; i < n + 1; i++) {
            // +1 since from v = 1 to N or 0 to N-1
            this.parent[i] = i;
            this.rank[i] = 0;
            this.size[i] = 1;
        }
    }

    findParent(u) {
        while (u != this.parent[u]) {
            this.parent[u] = this.parent[this.parent[u]];
            u = this.parent[u];
        }
        return u;
    }

    // unionByRank(u, v) {
    //     const p1 = this.findParent(u);
    //     const p2 = this.findParent(v);
    //     if (p1 == p2) return;
    //     if (this.rank[p1] < this.rank[p2]) {
    //         this.parent[p1] = p2;
    //     } else if (this.rank[p1] > this.rank[p2]) {
    //         this.parent[p2] = p1;
    //     } else {
    //         this.parent[p2] = p1;
    //         this.rank[p1]++; // Update rank here only
    //     }
    // }

    unionBySize(u, v) {
        const p1 = this.findParent(u);
        const p2 = this.findParent(v);
        if (p1 == p2) return;
        if (this.size[p1] < this.size[p2]) {
            this.parent[p1] = p2;
            this.size[p2] += this.size[p1];
        } else {
            // For both > and equal case
            this.parent[p2] = p1;
            this.size[p1] += this.size[p2];
        }
    }
}