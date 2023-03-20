# Methodologies-lab2

__Custom character list implementaion__

By Nikita Sutulov, KPI FICE, group IM-12

***

This repo contains two implementations of a list which can contain values of character type. The list is an object of a class with impemented methods:
- length - returns the count of elements in the list. If the list is empty, it returns zero;
- append - adds an element at the end of the list;
- insert - inserts an element in a certain position of the list. If index is less than 0 or larger than the list range, it will throw an error;
- delete - deletes an element in a certain position of the list and returns its value. If index is less than 0 or larger than the list range, it will throw an error;
- deleteAll - deletes all the elements in the list with a certain value. If there are no such elements, nothing changes in the list;
- get - returns an element of the list in a certain position. If index is less than 0 or larger than the list range, it will throw an error;
- clone - copies elements from the list and returns a copy of it;
- reverse - reverses the list;
- findFirst - finds the first element of the list with a certain value and returns its index. If there are no such elements, it returns -1;
- findLast - finds the last element of the list with a certain value and returns its index. If there are no such elements, it returns -1;
- clear - deletes the elements from the list;
- extend - adds to the list all the elements of elements list.

***

Variant number calculation:

Gradebook number % 4

1229 % 4 = 1

The first implementation is a doubly linked list (https://github.com/NikitaSutulov/Methodologies-lab2/commit/93d65085548aa4ef169980d5625bd7c72fa74f5c).

The second implementation is a list based on built-in collections (the last commit).

***

__How to build__

The projects is written on Node.js, so you'll need it to build the project.

I used Node.js 18.15.0 version, it works.

Also you'll need npm, it is usually installed together with Node.

To install the dependencies, enter this command:
```
npm install
```

To run the file with demonstration of the list working, enter this command:
```
node ./index.js
```

To run the tests, enter this command:
```
npm test
```

All the commands must be run in the project root folder.

***

The project is integrated with Github Actions CI. Here is the commit where the tests failed: https://github.com/NikitaSutulov/Methodologies-lab2/commit/93d65085548aa4ef169980d5625bd7c72fa74f5c

***

__Conclusion:__

This lab work was really useful for me, knowing the fact that I had never written tests before, so I learned how to do it. The tests helped me pretty much, because they showed me places in my code where the actual behavior doesn't match the expectances, and this problem detection helped me to solve some bugs.