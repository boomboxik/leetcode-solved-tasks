function deleteDuplicates(head) {
    if (!head) return null; 
    
    let dummy = { val: 0, next: head }; 
    let prev = dummy;
    
    while (head) {

        if (head.next && head.val === head.next.val) {

            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            prev.next = head.next;
        } else {
            prev = prev.next; 
        }
        head = head.next; 
    }
    
    return dummy.next; 
}