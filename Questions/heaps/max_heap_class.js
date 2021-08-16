// MaxHeap that starts out empty
// visualizer https://www.cs.usfca.edu/~galles/visualization/Heap.html

class MaxHeap{
    constructor(){
        this.storage = []
        this.size = 0
    }

    // helper methods
    getParentIdx(idx){
        return Math.floor((idx - 2) / 2);
    }

    getLeftChildIdx(idx){
        return (idx * 2) + 1;
    }

    getRightChildIdx(idx){
        return (idx * 2) + 2;
    }

    hasParent(idx){
        return this.getParentIdx(idx) >= 0;
    }

    hasLeftChild(idx){
        // returns boolean if left idx exists
        return this.getLeftChildIdx(idx) < this.size;
    }

    hasRightChild(idx){
        // returns boolean if right idx exists
        return this.getRightChildIdx(idx) < this.size;
    }

    parent(idx){
        return this.storage[this.getParentIdx(idx)]
    }

    leftChild(idx){
        return this.storage[this.getLeftChildIdx(idx)]
    }

    rightChild(idx){
        return this.storage[this.getRightChildIdx(idx)]
    }

    swap(idx1,idx2){
        let temp = this.storage[idx1]
        this.storage[idx1] = this.storage[idx2]
        this.storage[idx2] = temp
    }

    insert(data){
        this.storage[this.size] = data
        this.size += 1
        this.traverseUp();
    }

    // checks if last inserted node is in the correct position; if parent swap > last node and repeat check 
    traverseUp(){
        // grabs idx of last node
        let idx = this.size - 1;
        // if last node's parent exists and the parent value is < last node (higher node should move up)
        while(this.hasParent(idx) && this.parent(idx) < this.storage[idx]){
            // swap the two node and repeat while moving up the tree 
            this.swap(this.getParentIdx, idx)
            idx = this.getParentIdx(idx)
        }
    }

    // removes root node, makes last node the new root and runs traverseDown 
    removeMax(){
        // check if heap is empty
        if(this.size === 0){
            throw new Error("Cannot remove from empty heap.")
        }

        //root node
        let data = this.storage[0]
        // replace root with last node
        this.storage[0] = this.storage[this.size - 1]
        this.size -= 1
        this.traverseDown()
        return data
    }

    // checks if parent node (starting from root node) needs to swap with smallest child node;
    traverseDown(){
        let idx = 0;
        while(this.hasLeftChild(idx)){
            let largestChildIdx = this.getLeftChildIdx(idx)
            // if right child is larger than left child; make right child, the largest child
            if(this.hasRightChild(idx) && this.rightChild(idx) > this.leftChild(idx)){
                largestChildIdx = this.getRightChildIdx(idx)
            }
            // if root is larger than child; do nothing
            if(this.storage[idx] > this.storage[largestChildIdx]){
                break
            }
            // else cur node and largest node need to swap
            else{
                this.swap(idx,largestChildIdx)
            }
            // repeat going down the tree
            idx = largestChildIdx
        }
    }
}