/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next && current.next.next) {
        let first = current.next;
        let second = current.next.next;

        // Переставляем узлы
        first.next = second.next;
        second.next = first;
        current.next = second;

        // Переходим к следующей паре
        current = current.next.next;
    }

    return dummy.next;
};