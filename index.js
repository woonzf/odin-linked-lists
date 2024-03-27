import LinkedList from './linked-list.js';

const linkedList = new LinkedList();
linkedList.append(30)
linkedList.prepend(20)
linkedList.prepend(10)
linkedList.append(40)
linkedList.append(50)
linkedList.pop()
linkedList.insertAt(100, 3)
linkedList.removeAt(4)

console.log(linkedList.size()) // 4
console.log(linkedList.head()) // Node { 10 }
console.log(linkedList.tail()) // Node { 100 }
console.log(linkedList.at(1)) // Node { 20 }
console.log(linkedList.contains(100)) // true
console.log(linkedList.find(100)) // 3
console.log(linkedList.toString()) // ( 10 ) -> ( 20 ) -> ( 30 ) -> ( 100 ) -> null