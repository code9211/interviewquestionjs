// Programming Exercise:
// Data Structure?
// Op: AddNode(Node)
// Op: DeleteNode(Node)
// Op: MakeConnection(Node1, Node2)


class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addNode(node) {
        if (!this.adjList.has(node)) {
            this.adjList.set(node, []);
        } else {
            console.log('No node');
        }
        console.log(this.adjList);
    }

    deleteNode(node) {

        if (this.adjList.has(node)) {

            this.adjList.forEach((adjnode, key) => {
                // this.adjList.set(key, adjnode)
                this.adjList.set(key, adjnode.filter(adjNode => adjNode !== node));
            });
            this.adjList.delete(node)
        } else { console.log('no node is exist') }
        
        console.log('after delete',this.adjList);

    }

    makeConnection(node1, node2) {

        if (this.adjList.has(node1) && this.adjList.has(node2)) {

            this.adjList.get(node1).push(node2);
            this.adjList.get(node2).push(node1);
        } else { console.log("not exist") }

        console.log('after make connection',this.adjList);
    }
}

const demo=new Graph();

demo.addNode('1');
demo.addNode('2');
demo.addNode('3');


// demo.deleteNode('B')


demo.makeConnection("1","2")
demo.makeConnection("2","1")


