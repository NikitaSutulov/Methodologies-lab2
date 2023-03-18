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

    }

    // delete method deletes an element in a certain position of the list and returns its value
    // if index is less than 0 or larger than the list range,
    // it will throw an error
    delete(index) {

    }

    // deleteAll method deletes all the elements in the list with a certain value
    // if there are no such elements, nothing changes in the list
    deleteAll(element) {

    }

    // get method returns an element of the list in a certain position
    // if index is less than 0 or larger than the list range,
    // it will throw an error
    get(index) {

    }

    // clone methods copies elements from the list and returns a copy of it
    clone() {

    }

    // reverse method reverses the list
    reverse() {

    }

    // findFirst method finds the first element of the list with a certain value and returns its index
    // if there are no such elements, it returns -1
    findFirst(element) {

    }

    // findLast method finds the last element of the list with a certain value and returns its index
    // if there are no such elements, it returns -1
    findLast(element) {

    }

    // clear method deletes the elements from the list
    clear() {

    }

    // extend method adds to the list all the elements of elements list
    extend(elements) {

    }
}

export { DoublyLinkedList };
