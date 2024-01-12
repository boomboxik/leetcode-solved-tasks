/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Функция для слияния двух связанных списков
    const mergeTwoLists = function(l1, l2) {
        let dummyHead = new ListNode(0);
        let current = dummyHead;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;

        return dummyHead.next;
    };

    // Функция для слияния массива связанных списков
    const mergeListsArray = function(lists, start, end) {
        if (start === end) {
            return lists[start];
        }
        const mid = Math.floor((start + end) / 2);
        const left = mergeListsArray(lists, start, mid);
        const right = mergeListsArray(lists, mid + 1, end);
        return mergeTwoLists(left, right);
    };

    if (lists.length === 0) return null;

    return mergeListsArray(lists, 0, lists.length - 1);
};
