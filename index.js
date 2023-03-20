'use strict';
const { List } = require("./src/list.js");

const list = new List(); // {}
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

list.reverse(); // {6, 3, 9, 8, 4}
console.log('The list has been reversed.');
console.log(`Getting an element with index 0: ${list.get(0)}`); // 6
console.log(`Getting an element with index 2: ${list.get(2)}`); // 9
console.log(`Getting an element with index 4: ${list.get(4)}\n`); // 4

list.append('3'); // {6, 3, 9, 8, 4, 3}
console.log(`Appended an element ${list.get(list.length() - 1)}`);
console.log(`Its first index in the list: ${list.findFirst('3')}`);
console.log(`Its last index in the list: ${list.findLast('3')}\n`);

list.clear();
console.log(`The list has been cleared, its length is: ${list.length()}\n`);

list.extend(copiedList); // {4, 8, 9, 3, 6}
console.log(`Getting an element with index 0 from extended list: ${list.get(0)}`); // 4
console.log(`Getting an element with index 2 from extended list: ${list.get(2)}`); // 9
console.log(`Getting an element with index 4 from extended list: ${list.get(4)}\n`); // 6

list.delete(4); // {4, 8, 9, 3}
console.log(`Deleted an element, list length is: ${list.length()}`);
console.log(`The list we used to extend has not been changed, its length: ${copiedList.length()}\n`);

// list.append(12); // if you decomment this line, there will be a type error
// list.get(100500);
// list.get(-2); // and if you decomment these two lines, there will be an out of range error
