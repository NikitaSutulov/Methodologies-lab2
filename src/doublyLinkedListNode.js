'use strict';
class DoublyLinkedListNode {
    constructor(val, prev  = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }

    toString() {
        return `${this.val}`;
    }
}

export { DoublyLinkedListNode };
