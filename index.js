import LinkedList from './linked-list.js';

const linkedList = new LinkedList();
linkedList.append(30)
linkedList.prepend(20)
linkedList.prepend(10)
linkedList.append(40)
linkedList.append(50)
linkedList.pop()

console.log(linkedList)
console.log(linkedList.size())
console.log(linkedList.head())
console.log(linkedList.tail())
console.log(linkedList.at(3))
console.log(linkedList.contains(20))
console.log(linkedList.find(10))
console.log(linkedList.toString())