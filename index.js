'use strict';
import { DoublyLinkedList } from "./src/doublyLinkedList.js";

const list = new DoublyLinkedList(); // {}
console.log(`The length of an empty list: ${list.length()}\n`);

list.append('4'); // {4}
console.log(`After we appended an element, the length of the list: ${list.length()}`);
list.append('8'); // {4, 8}
console.log(`With two elements appended, the length of the list: ${list.length()}`);

list.insert('5', 1); // {4, 5, 8}
console.log(`Inserted element in index 1: ${list.get(1)}, list length: ${list.length()}\n`);

console.log(`Deleted element: ${list.delete(1)}`); // {4, 8}
console.log(`Now the list length is ${list.length()}\n`);

list.append('7');
list.append('7');
list.append('7');
console.log(`Appended three similar elements, list length: ${list.length()}`); // {4, 8, 7, 7, 7}

list.deleteAll('7');
console.log(`List length after deleting all new similar elements: ${list.length()}`); // {4, 8}

list.deleteAll('7');
console.log(`Trying to do this again with the same parameter, nothing changes; list length: ${list.length()}\n`); // {4, 8}

list.append('9');
list.append('3');
list.append('6'); // {4, 8, 9, 3, 6}

console.log(`Getting an element with index 0: ${list.get(0)}`); // 4
console.log(`Getting an element with index 2: ${list.get(2)}`); // 9
console.log(`Getting an element with index 4: ${list.get(4)}\n`); // 6

const copiedList = list.clone();
console.log(`Getting an element from a copied list with index 0: ${copiedList.get(0)}`); // 4
console.log(`Getting an element from a copied list with index 2: ${copiedList.get(2)}`); // 9
console.log(`Getting an element from a copied list with index 4: ${copiedList.get(4)}\n`); // 6

list.reverse(); // 
console.log('The list has been reversed.');
console.log(`Getting an element with index 0: ${list.get(0)}`); // 6
console.log(`Getting an element with index 2: ${list.get(2)}`); // 9
console.log(`Getting an element with index 4: ${list.get(4)}\n`); // 4
