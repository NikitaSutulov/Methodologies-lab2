'use strict';
import { DoublyLinkedList } from "./src/doublyLinkedList.js";

const list = new DoublyLinkedList();
console.log(`The length of an empty list: ${list.length()}`);

list.append('4');
console.log(`After we appended an element, the length of the list: ${list.length()}`);
list.append('8');
console.log(`With two elements appended, the length of the list: ${list.length()}`);

list.insert('5', 1);
console.log(`Inserted element in index 1: ${list.head.next.val}, list length: ${list.length()}`);

console.log(`Deleted element: ${list.delete(2)}`);
console.log(`Now the list length is ${list.length()}`);
