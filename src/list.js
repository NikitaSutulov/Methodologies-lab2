'use strict';
const { validateIndex, validateCharType } = require('./validations.js');

class List {
    constructor() {
        this.array = [];
    }

    // length method returns the count of elements in the list
    // if the list is empty, it returns zero
    length() {
        return this.array.length;
    }

    // append method adds an element at the end of the list
    append(element) {
        validateCharType(element);
        this.array.push(element);
    }

    // insert method inserts an element in a certain position of the list
    // if index is less than 0 or larger than the list range,
    // it will throw an error
    insert(element, index) {
        validateCharType(element);
        validateIndex(index, this.length());
        this.array.splice(index, 0, element);
    }

    // delete method deletes an element in a certain position of the list and returns its value
    // if index is less than 0 or larger than the list range,
    // it will throw an error
    delete(index) {
        validateIndex(index, this.length());
        const deletedValue = this.array[index];
        this.array.splice(index, 1);
        return deletedValue;
    }

    // deleteAll method deletes all the elements in the list with a certain value
    // if there are no such elements, nothing changes in the list
    deleteAll(element) {
        validateCharType(element);
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === element) {
                this.array.splice(i, 1);
                i--;
            }
        }
    }

    // get method returns an element of the list in a certain position
    // if index is less than 0 or larger than the list range,
    // it will throw an error
    get(index) {
        validateIndex(index, this.length());
        return this.array[index];
    }

    // clone methods copies elements from the list and returns a copy of it
    clone() {
        const newList = new List();
        for (let i = 0; i < this.array.length; i++) {
            newList.append(this.array[i]);
        }
        return newList;
    }

    // reverse method reverses the list
    reverse() {
        this.array.reverse();
    }

    // findFirst method finds the first element of the list with a certain value and returns its index
    // if there are no such elements, it returns -1
    findFirst(element) {
        validateCharType(element);
        var foundIndex = -1;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === element) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }

    // findLast method finds the last element of the list with a certain value and returns its index
    // if there are no such elements, it returns -1
    findLast(element) {
        validateCharType(element);
        var foundIndex = -1;
        for (let i = this.array.length - 1; i >= 0; i--) {
            if (this.array[i] === element) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }

    // clear method deletes the elements from the list
    clear() {
        this.array = [];
    }

    // extend method adds to the list all the elements of elements list
    extend(elements) {
        for (let i = 0; i < elements.length(); i++) {
            this.array.push(elements.get(i));
        }
    }
}

module.exports = { List };
