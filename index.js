'use strict';
import { DoublyLinkedList } from "./src/doublyLinkedList.js";

const list = new DoublyLinkedList();
console.log(`The length of an empty list: ${list.length()}`);

list.append('4');
console.log(`After we appended an element, the length of the list: ${list.length()}`);
list.append('8');
console.log(`With two elements appended, the length of the list: ${list.length()}`);