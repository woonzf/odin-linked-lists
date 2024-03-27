import Node from './node.js';

export default class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if (this.listHead == null) this.listHead = new Node(value);
        else {
            let current = this.listHead;
            while (current.nextNode !== null) current = current.nextNode;
            current.nextNode = new Node(value);
        }
    }

    prepend(value) {
        if (this.listHead == null) this.listHead = new Node(value);
        else {
            let next = this.listHead;
            this.listHead = new Node(value);
            this.listHead.nextNode = next;
        }
    }

    size() {
        let size = 0;
        let current = this.listHead;

        while (current !== null) {
            size += 1;
            current = current.nextNode;
        }

        return size;
    }

    head() {
        if (this.listHead == null) return "Empty linked list has no head";
        return this.listHead;
    }

    tail() {
        if (this.listHead == null) return "Empty linked list has no tail";
        let current = this.listHead;
        while (current.nextNode !== null) current = current.nextNode;
        return current;
    }

    at(index) {
        if (index < 0) return "Index cannot be less than 0";
        if (this.listHead == null) return `No node found, linked list is empty`;
        
        let current = this.listHead;
        
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
            if (current == null) return `No node found at index ${index}, max index is ${i}`;
        }

        return current;
    }

    pop() {
        if (this.listHead == null) return;

        let prev = null;
        let current = this.listHead;

        while (current.nextNode !== null) {
            prev = current;
            current = current.nextNode;
        }

        prev.nextNode = null;
    }

    contains(value) {
        if (this.listHead == null) return false;
        
        let current = this.listHead;

        while (current !== null) {
            if (current.value == value) return true;
            current = current.nextNode;
        }

        return false;
    }

    find(value) {
        if (this.listHead == null) return null;
        
        let current = this.listHead;
        let i = 0;

        while (current !== null) {
            if (current.value == value) return i;
            current = current.nextNode;
            i++;
        }

        return null;
    }

    toString() {
        if (this.listHead == null) return "Linked list is empty";

        let current = this.listHead;
        let string = "";

        while (current !== null) {
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        return string += "null";
    }

    insertAt(value, index) {
        if (this.listHead == null) this.append(value);
        else {
            let prev = null;
            let current = this.listHead;

            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.nextNode;
                if (current == null) break;
            }

            const newNode = new Node(value);
            prev.nextNode = newNode;
            newNode.nextNode = current;
        }
    }

    removeAt(index) {
        if (this.listHead == null) return;
        if (index == 0) this.listHead = this.listHead.nextNode;
        else {
            let prev = null;
            let current = this.listHead;

            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.nextNode;
                if (current == null) return;
            }

            prev.nextNode = current.nextNode;
        }
    }
}