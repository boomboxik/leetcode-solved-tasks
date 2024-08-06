class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKGroup(head, k) {
  const reverseGroup = (start, end) => {
    let prev = null;
    let current = start;
    while (current !== end) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  };

  const dummy = new ListNode(0);
  dummy.next = head;
  let prevGroupEnd = dummy;
  let curr = head;

  while (curr) {
    let groupStart = curr;
    let count = 0;
    while (curr && count < k) {
      curr = curr.next;
      count++;
    }
    
    if (count === k) {
      const nextGroupStart = curr;
      const newGroupStart = reverseGroup(groupStart, nextGroupStart);

      prevGroupEnd.next = newGroupStart;
      groupStart.next = nextGroupStart;

      prevGroupEnd = groupStart;
    } else {
      prevGroupEnd.next = groupStart;
    }
  }

  return dummy.next;
}