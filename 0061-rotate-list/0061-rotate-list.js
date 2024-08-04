class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function rotateRight(head, k) {
    if (!head || !head.next || k === 0) return head;

    let current = head;
    let length = 1;
    while (current.next) {
        current = current.next;
        length++;
    }
    current.next = head;

    let newTailPosition = length - (k % length) - 1;
    let newTail = head;
    for (let i = 0; i < newTailPosition; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;

    newTail.next = null;

    return newHead;
}