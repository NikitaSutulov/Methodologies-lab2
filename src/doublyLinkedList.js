'use strict';
import { DoublyLinkedListNode } from './doublyLinkedListNode.js';

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // TODO: implement methods

    // length method returns the count of elements in the list
    // if the list is empty, it returns zero
    length() {
        if (this.head === null && this.tail === null) {
            return 0;
        }
        var counter = 1;
        var currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            counter++;
        }
        return counter;
    }

    // append method adds an element at the end of the list
    append(element) {
        const nodeToAppend = new DoublyLinkedListNode(element);
        nodeToAppend.prev = this.tail;
        if (this.tail !== null) {
            this.tail.next = nodeToAppend;   
        }
        this.tail = nodeToAppend;
        if (this.head === null) {
            this.head = nodeToAppend;
        }
    }

    // insert method inserts an element in a certain position of the list
    // if index is less than 0 or larger than the list range,
    // it will throw an error
    insert(element, index) {
        const nodeToInsert = new DoublyLinkedListNode(element);
        // TODO: validate index
        if (index === 0) {
            this.head.prev = nodeToInsert;
            nodeToInsert.next = this.head;
            this.head = nodeToInsert;
        } else if (index === this.length() - 1) {
            nodeToInsert.prev = this.tail.prev;
            this.tail.prev.next = nodeToInsert;
            this.tail.prev = nodeToInsert;
            nodeToInsert.next = this.tail;
        } else {
            var counter = 0;
            var nodeToMove = this.head;
            while (counter !== index) {
                nodeToMove = nodeToMove.next();
                counter++;
            }
            nodeToInsert.prev = nodeToMove.prev;
            nodeToMove.prev.next = nodeToInsert;
            nodeToInsert.next = nodeToMove;
            nodeToMove.prev = nodeToInsert;
        }
    }

    // delete method deletes an element in a certain position of the list and returns its value
    // if index is less than 0 or larger than the list range,
    // it will throw an error
    delete(index) {
        var nodeToDelete = null;
        // TODO: validate index
        if (index === 0) {
            nodeToDelete = this.head;
            if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (index === this.length() - 1) {
            nodeToDelete = this.tail;
            if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        } else {
            var counter = 0;
            nodeToDelete = this.head;
            while (counter !== index) {
                nodeToDelete = nodeToDelete.next;
                counter++;
            }
            nodeToDelete.prev.next = nodeToDelete.next;
            nodeToDelete.next.prev = nodeToDelete.prev;
        }
        return nodeToDelete.val;
    }

    // deleteAll method deletes all the elements in the list with a certain value
    // if there are no such elements, nothing changes in the list
    deleteAll(element) {
        if (this.head == this.tail) {
            return;
        }
        var counter = 0;
        var nodeToDelete = this.head;
        while (nodeToDelete !== null) {
            if (nodeToDelete.val === element) {
                this.delete(counter);
                counter--;
            }
            nodeToDelete = nodeToDelete.next;
            counter++;
        }
    }

    // get method returns an element of the list in a certain position
    // if index is less than 0 or larger than the list range,
    // it will throw an error
    get(index) {
        // TODO: validate index
        var counter = 0;
        var nodeToGet = this.head;
        while (counter !== index) {
            nodeToGet = nodeToGet.next;
            counter++;
        }
        return nodeToGet.val;
    }

    // clone methods copies elements from the list and returns a copy of it
    clone() {
        const newList = new DoublyLinkedList();
        var nodeToCopy = this.head;
        while (nodeToCopy !== null) {
            newList.append(nodeToCopy.val);
            nodeToCopy = nodeToCopy.next;
        }
        return newList;
    }

    // reverse method reverses the list
    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            prevNode = currNode.prev;

            currNode.next = prevNode;
            currNode.prev = nextNode;

            prevNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;

        this.head = prevNode;
    }

    // findFirst method finds the first element of the list with a certain value and returns its index
    // if there are no such elements, it returns -1
    findFirst(element) {
        var counter = 0;
        var nodeToFind = this.head;
        var foundIndex = -1;
        while (nodeToFind !== null) {
            if (nodeToFind.val === element) {
                foundIndex = counter;
                return foundIndex;
            }
            nodeToFind = nodeToFind.next;
            counter++;
        }
        return foundIndex;
    }

    // findLast method finds the last element of the list with a certain value and returns its index
    // if there are no such elements, it returns -1
    findLast(element) {
        var counter = this.length() - 1;
        var nodeToFind = this.tail;
        var foundIndex = -1;
        while (nodeToFind !== null) {
            if (nodeToFind.val === element) {
                foundIndex = counter;
                return foundIndex;
            }
            nodeToFind = nodeToFind.prev;
            counter++;
        }
        return foundIndex;
    }

    // clear method deletes the elements from the list
    clear() {
        this.head = null;
        this.tail = null;
    }

    // extend method adds to the list all the elements of elements list
    extend(elements) {

    }
}

export { DoublyLinkedList };
