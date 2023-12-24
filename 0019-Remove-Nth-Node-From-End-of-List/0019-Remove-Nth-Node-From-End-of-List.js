class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let first = dummy;
    let second = dummy;
  
    // Перемещаем первый указатель вперед на n+1 шагов
    for (let i = 0; i <= n; i++) first = first.next;
  
    // Перемещаем оба указателя до конца списка
    while (first) [first, second] = [first.next, second.next];
  
    // Удаляем n-й узел, делая перенаправление указателей
    second.next = second.next.next;
  
    return dummy.next;
  };