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
        if (this.listHead == null) return size;

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
        if (index >= 0 && this.listHead == null) return `No node found at index ${index}, linked list is empty`;
        let current = this.listHead;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
            if (i < index && current == null) return `No node found at index ${index}, max index is ${i}`;
        }
        return current;
    }

    pop() {
        if (this.listHead == null) return;
        let current = this.listHead;
        let prev = null;
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
            if (current.nextNode == null) return false;
            current = current.nextNode;
        }
    }

    find(value) {
        if (this.listHead == null) return null;
        let current = this.listHead;
        let i = 0;
        while (current !== null) {
            if (current.value == value) return i;
            if (current.nextNode == null) return null;
            current = current.nextNode;
            i++;
        }
    }

    toString() {
        if (this.listHead == null) return "Linked list is empty";
        let string = `( ${this.listHead.value} )`;
        let current = this.listHead.nextNode;
        while (current !== null) {
            string += ` -> ( ${current.value} )`;
            if (current.nextNode == null) return string += ` -> null`;
            current = current.nextNode;
        }
    }
}