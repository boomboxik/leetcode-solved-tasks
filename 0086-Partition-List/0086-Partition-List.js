class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function partition(head, x) {
    let beforeHead = new ListNode(0);  
    let afterHead = new ListNode(0);   
    let before = beforeHead;
    let after = afterHead;

    while (head !== null) {
        if (head.val < x) {
            before.next = head;  
            before = before.next;
        } else {
            after.next = head;   
            after = after.next;
        }
        head = head.next;  
    }

    after.next = null;  
    before.next = afterHead.next;  

    return beforeHead.next; 
}